import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { registerTools } from './tools/index.js'

export function initMCPServer() {
  const mcpServer = new McpServer({
    name        : 'Backendless Console SDK MCP Server',
    version     : '1.0.0',
    capabilities: {
      resources: {},
      tools    : {},
    },
  })

  registerTools(mcpServer)

  return mcpServer
}
