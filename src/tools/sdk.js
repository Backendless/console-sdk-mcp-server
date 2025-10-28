import { buildDescription, paramsToZodSchema } from './composer.js'
import { provideSDKClientSession } from '../console-sdk/index.js'

async function loadDefinitions() {
  try {
    const { default: definitions } = await import('backendless-console-sdk/definitions.json', { with: { type: 'json' } })

    return Array.isArray(definitions) ? definitions : []
  } catch (error) {
    console.warn('Failed to load SDK definitions:', error.message)
    return []
  }
}

function normalizeToolName(methodLabel) {
  return methodLabel.replace(/\s/g, '_')
}

function createTool(service, method) {
  const { serviceName } = service.serviceInfo
  const { methodLabel, methodName, category, description, params } = method

  const toolName = normalizeToolName(methodLabel)
  const toolDescription = buildDescription(description, methodName, serviceName)

  return {
    name           : toolName,
    description    : toolDescription,
    argumentsSchema: paramsToZodSchema(params),
    _meta          : { category }, // we also can add components, etc. just for FR.
    execution      : async (args, sessionId, meta) => {
      const sdkClient = provideSDKClientSession(sessionId, meta)
      const sdkMethod = sdkClient[serviceName]?.[methodName]

      if (typeof sdkMethod !== 'function') {
        throw new Error(`SDK method "${ methodName }" not found for service ${ serviceName }`)
      }

      const methodParams = params || []
      const argsArray = methodParams.map(param => args[param.name])
      const result = await sdkMethod(...argsArray)

      return JSON.stringify(result)
    },
  }
}

const definition = await loadDefinitions()

const preparedTools = definition.reduce((tools, service) => {
  if (!service?.serviceInfo?.serviceName || !Array.isArray(service.methods)) {
    return tools
  }

  const serviceName = service.serviceInfo.serviceName

  return service.methods.reduce((acc, method) => {
    if (!method?.methodName || !method?.methodLabel) {
      return acc
    }

    try {
      acc.push(createTool(service, method))
    } catch (error) {
      console.warn(`Failed to create tool for ${ serviceName }.${ method.methodName }:`, error.message)
    }

    return acc
  }, tools)
}, [])


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
