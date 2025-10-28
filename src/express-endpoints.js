import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js'
import crypto from 'crypto'
import { URL } from 'url'

import { initMCPServer } from './server.js'
import { handleOAuthServerMetadata, handleOAuthProtectedResource } from './auth/index.js'

const transports = {}

export async function getExpressEndpoints({ protocol, hostname, port, pathname, consoleURL }) {
  const macServer = await initMCPServer()

  const url = new URL('http://localhost')
  url.protocol = protocol
  url.hostname = hostname
  url.port = port
  url.pathname = pathname

  const resource_server = url.host
  const mcp_endpoint = url.toString()

  async function postMethod(req, res) {
    const sessionId = req.headers['mcp-session-id']

    let transport

    if (sessionId && transports[sessionId]) {
      transport = transports[sessionId]
    } else if (!sessionId && isInitializeRequest(req.body)) {
      console.log('isInitializeRequest', req.body)

      transport = new StreamableHTTPServerTransport({
        sessionIdGenerator  : () => crypto.randomUUID(),
        onsessioninitialized: (sessionId) => {
          // Store the transport by session ID
          transports[sessionId] = transport
        },
        // DNS rebinding protection is disabled by default for backwards compatibility. If you are running this server
        // locally, make sure to set:
        // enableDnsRebindingProtection: true,
        // allowedHosts: ['127.0.0.1'],
      })

      // Clean up transport when closed
      transport.onclose = () => {
        if (transport.sessionId) {
          delete transports[transport.sessionId]
        }
      }


      await macServer.connect(transport)
    } else {
      res.status(400).json({
        jsonrpc: '2.0',
        error  : {
          code   : -32000,
          message: 'Bad Request: No valid session ID provided',
        },
        id     : null,
      })
      return
    }

    await transport.handleRequest(req, res, req.body)
  }

  async function handleSessionRequest(req, res) {
    const sessionId = req.headers['mcp-session-id']

    if (!sessionId || !transports[sessionId]) {
      res.status(400).send('Invalid or missing session ID')
      return
    }

    const transport = transports[sessionId]
    await transport.handleRequest(req, res)
  }

  function requireAuth() {
    return (req, res, next) => {
      const authKeyHeader = req.headers['authkey']
      const bearerToken = req.headers['authorization']?.split(' ')[1]

      if (!authKeyHeader && !bearerToken) {
        res.set('WWW-Authenticate', `Bearer realm="OAuth", resource_metadata="${ url.protocol }//${ url.host }/.well-known/oauth-protected-resource", error="invalid_token", error_description="Missing or invalid access token"`)
        // todo change it with proxy to blConsoleURL

        if (req.method === 'POST') {
          res.status(401).json({
            'error': 'invalid_token',
            'error_description': 'Missing or invalid access token'
          })
        } else {
          res.status(401).send('Authentication required')
        }
        return
      }

      next()
    }
  }

  function notFoundEndpoint(req, res) {
    res.status(404).send('Not Found')
  }

  const wellKnownOauthProtectedResource = [
    '/.well-known/oauth-protected-resource',
    '/.well-known/oauth-protected-resource/mcp',
    '/mcp/.well-known/oauth-protected-resource',
  ].map(route => ({
    method  : 'get',
    route,
    handlers: [handleOAuthProtectedResource(consoleURL, resource_server, mcp_endpoint)],
  }))

  const wellKnownOauthAuthorizationServer = [
    '/.well-known/oauth-authorization-server',
    '/.well-known/oauth-authorization-server/mcp',
    '/mcp/.well-known/oauth-authorization-server',
  ].map(route => ({
    method  : 'get',
    route,
    handlers: [handleOAuthServerMetadata(consoleURL)],
  }))

  return [
    ...wellKnownOauthProtectedResource,
    ...wellKnownOauthAuthorizationServer,
    {
      method  : 'get',
      route   : url.pathname,
      handlers: [notFoundEndpoint],
    },
    {
      method  : 'post',
      route   : url.pathname,
      handlers: [requireAuth(), postMethod],
    },
    {
      method  : 'delete',
      route   : url.pathname,
      handlers: [requireAuth(), handleSessionRequest],
    },
  ]
}
