export async function registerTools(mcpServer) {
  const tools = [
    ...(await import('./test.js')).default,
    ...(await import('./session-example.js')).default,
    ...(await import('./sdk-example.js')).default,
  ]

  tools.forEach((tool) => {
    if (typeof tool === 'function') {
      tool(mcpServer)
    } else {
      mcpServer.tool(
        tool.name,
        tool.description,
        tool.argumentsSchema,
        async (args, meta) => {
          const sessionId = meta.sessionId

          const result = await tool.execution(args, sessionId, meta)

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
