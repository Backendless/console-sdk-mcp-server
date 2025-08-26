import { z } from 'zod'

// Example tool that uses session information
export default [
  {
    name           : 'getSessionInfo',
    description    : 'Get current session information',
    argumentsSchema: {
      _noop: z.boolean().optional().describe('Unused parameter'),
    },
    execution      : async (args, sessionId, meta) => {
      // The meta parameter would contain request metadata
      // In HTTP mode, this could include session-related information
      // The exact structure depends on how the MCP SDK passes this data

      const sessionInfo = {
        requestId: meta?.requestId,
        sessionId,
        meta,
        // Additional session data would be available here
        // depending on how it's passed from the transport layer
      }

      return JSON.stringify(sessionInfo, null, 2)
    },
  },
]