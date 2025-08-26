import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'

import { initMCPServer } from './server/index.js'

export async function startSTDIO() {
  const macServer = initMCPServer()

  const stdioTransport = new StdioServerTransport()

  await macServer.connect(stdioTransport)
}
