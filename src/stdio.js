import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'

import { initMCPServer } from './server.js'

export async function startSTDIO() {
  const macServer = await initMCPServer()

  const stdioTransport = new StdioServerTransport()

  await macServer.connect(stdioTransport)
}
