import { testdef } from 'tools/testdef.js'
import { paramsToZodSchema } from './composer.js'
import { provideSDKClientSession } from '../console-sdk/index.js'
// import definition from 'backendless-console-sdk/definitions.json' with { type: 'json' }
import { testDef } from './testdef.js'

const preparedTools = []

testDef.forEach(service => {
  const { serviceName } = service.serviceInfo

  service.methods.forEach(method => {
    const toolLabel = method.methodLabel
    const toolName = method.methodName
    const category = method.category

    if (!toolName || !serviceName) {
      return
    }

    preparedTools.push({
      name           : toolLabel,
      description    : method.description,
      argumentsSchema: paramsToZodSchema(method.params),
      _meta          : { category },
      // need to find a solution to save category in tool, already this field ignored by mcp protocol
      execution      : async (args, sessionId, meta) => {
        const sdkClient = provideSDKClientSession(sessionId, meta)

        const sdkMethod = sdkClient[serviceName]?.[toolName]?.bind(sdkClient[serviceName])

        if (typeof sdkMethod !== 'function') {
          throw new Error(`Method ${ toolName } not found for service ${ serviceName } `)
        }

        const methodParams = method.params || []

        console.log('methodParams', methodParams)
        console.log('args', args)
        const argsArray = methodParams.map(param => args[param.name])

        console.log('argsArray', argsArray)

        const result = await sdkMethod(...argsArray)

        return JSON.stringify(result)
      }
    })
  })
})

export default [
  ...preparedTools,
  {
    name           : 'getSDKInfo',
    description    : 'Get sdk session information',
    argumentsSchema: {},
    execution      : async (args, sessionId, meta) => {
      const sdkClient = provideSDKClientSession(sessionId, meta)

      const result = await sdkClient.system.loadStatus()

      return JSON.stringify(result)
    },
  },
]
