import express from 'express'
import cors from 'cors'

import { getExpressEndpoints } from './express-endpoints.js'
import { Config } from './config.js'

export async function startHTTP({ port }) {
  port = port || 3003

  const app = express()

  app.use(cors())
  app.use(express.json())

  const endpoints = await getExpressEndpoints({
    protocol  : 'http',
    hostname      : 'localhost',
    port,
    pathname  : '/mcp',
    consoleURL: Config.blConsoleURL,
  })

  endpoints.forEach(({ method, route, handlers }) => {
    app[method](route, ...handlers)
  })

  app.listen(port, () => {
    console.log(`🚀 Streamable MCP server running at http://localhost:${ port }/mcp`)
  })
}
