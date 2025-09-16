import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js'
import crypto from 'crypto'
import express from 'express'
import cors from 'cors'

import { initMCPServer } from './server.js'
import { handleOAuthServerMetadata, handleOAuthProtectedResource } from './auth/index.js'

const transports = {}

export async function startHTTP({ port }) {
  port = port || 3003

  const macServer = await initMCPServer()

  const app = express()

  app.use(cors({
    origin: '*', // Configure appropriately for production, for example:
    // origin: ['https://your-remote-domain.com', 'https://your-other-remote-domain.com'],
    exposedHeaders: ['Mcp-Session-Id'],
    allowedHeaders: ['Content-Type', 'mcp-session-id', 'authorization', 'authKey', 'mcp-protocol-version'],
  }))

  app.use(express.json())

  app.get('/.well-known/oauth-protected-resource', handleOAuthProtectedResource)
  app.get('/.well-known/oauth-authorization-server', handleOAuthServerMetadata)

  app.post('/mcp', requireAuth(), async (req, res) => {

    const sessionId = req.headers['mcp-session-id']
    let transport

    if (sessionId && transports[sessionId]) {
      transport = transports[sessionId]
    } else if (!sessionId && isInitializeRequest(req.body)) {
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
  })

  const handleSessionRequest = async (req, res) => {
    const sessionId = req.headers['mcp-session-id']

    if (!sessionId || !transports[sessionId]) {
      res.status(400).send('Invalid or missing session ID')
      return
    }

    const transport = transports[sessionId]
    await transport.handleRequest(req, res)
  }

  app.delete('/mcp', requireAuth(), handleSessionRequest)

  function requireAuth() {
    return (req, res, next) => {
      const authKeyHeader = req.headers['authkey']
      const bearerToken = req.headers['authorization']?.split(' ')[1]

      if (!authKeyHeader && !bearerToken) {
        res.set('WWW-Authenticate', `Bearer resource_metadata="http://localhost:${ port }/.well-known/oauth-protected-resource"`)
        // todo change it with proxy to blConsoleURL

        if (req.method === 'POST') {
          res.status(401).json({
            jsonrpc: '2.0',
            error  : {
              code   : -32001,
              message: 'Authentication required. Use "authkey" header for Backendless authKey or Authorization: Bearer token for OAuth'
            },
            id     : null,
          })
        } else {
          res.status(401).send('Authentication required')
        }
        return
      }

      next()
    }
  }

  app.listen(port, () => {
    console.log(`🚀 Streamable MCP server running at http://localhost:${ port }/mcp`)
  })
}
