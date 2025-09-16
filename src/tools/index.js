export async function registerTools(mcpServer) {
  const tools = [
    ...(await import('./sdk.js')).default,
  ]

  console.log(`Server started with ${tools.length} tools`)

  tools.forEach((tool) => {
    if (typeof tool === 'function') {
      tool(mcpServer)
    } else {
      mcpServer.tool(
        tool.name,
        tool.description,
        tool.argumentsSchema,
        tool._meta,
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
