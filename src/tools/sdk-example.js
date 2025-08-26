import { provideSDKClientSession } from '../console-sdk/index.js'

// Example tool that uses session information
export default [
  {
    name           : 'getSDKInfo',
    description    : 'Get sdk session information',
    argumentsSchema: {},
    execution      : async (args, sessionId) => {
      const sdkClient = provideSDKClientSession(sessionId)

      const result = await sdkClient.system.loadStatus()

      return JSON.stringify(result)
    },
  },
]