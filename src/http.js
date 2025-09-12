import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js'
import crypto from 'crypto'
import express from 'express'
import cors from 'cors'

import { initMCPServer } from './server.js'
import { handleOAuthServerMetadata } from './auth/index.js'

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

  app.get('/.well-known/oauth-protected-resource', (req, res) => {
    res.json({
      resource_server: 'localhost:3003', // todo change it with proxy to blConsoleURL
      scopes_supported: [],
      bearer_methods_supported: ["header"],
      resource_documentation: "MCP Server OAuth Protected Resource",
      mcp_endpoint: `http://localhost:${port}/mcp` // todo change it with proxy to blConsoleURL
    })
  })

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

      // ... set up server resources, tools, and prompts ...

      // Connect to the MCP server
      await macServer.connect(transport)
    } else {
      // Invalid request
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

    // Handle the request
    await transport.handleRequest(req, res, req.body)
  })

// Reusable handler for GET and DELETE requests
  const handleSessionRequest = async (req, res) => {
    const sessionId = req.headers['mcp-session-id']

    if (!sessionId || !transports[sessionId]) {
      res.status(400).send('Invalid or missing session ID')
      return
    }

    const transport = transports[sessionId]
    await transport.handleRequest(req, res)
  }

// Handle DELETE requests for session termination
  app.delete('/mcp', requireAuth(), handleSessionRequest)

  function requireAuth() {
    return (req, res, next) => {
      const authKeyHeader = req.headers['authkey']
      const authorizationHeader = req.headers['authorization']

      if (!authKeyHeader && !authorizationHeader) {
        res.set('WWW-Authenticate', `Bearer resource_metadata="http://localhost:3003/.well-known/oauth-protected-resource"`)

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
