import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { registerTools } from './tools/index.js'

export async function initMCPServer() {
  const mcpServer = new McpServer({
    name        : 'Backendless Console SDK MCP Server',
    version     : '1.0.0',
    capabilities: {
      resources: {},
      tools    : {},
    },
  })

  await registerTools(mcpServer)

  return mcpServer
}
