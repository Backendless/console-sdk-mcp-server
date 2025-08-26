import { testTools } from './test.js'

export function registerTools(mcpServer) {
  const tools = [
    ...testTools,
  ]

  tools.forEach((tool) => {
    if (typeof tool === 'function') {
      tool(mcpServer)
    } else {
      mcpServer.tool(
        tool.name,
        tool.description,
        tool.argumentsSchema,
        async (...args) => {
          const result = await tool.execution(...args)

          if (typeof result === 'string') {
            return {
              content: [
                {
                  type: 'text',
                  text: result,
                },
              ],
            }
          }

          return result
        },
      )
    }
  })
}
