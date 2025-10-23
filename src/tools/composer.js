
import { z } from 'zod'

const typeToSchemaMap = {
  'string': () => z.string(),
  'boolean': () => z.boolean(),
  'number': () => z.number(),
  'integer': () => z.number().int(),
  'array': () => z.array(z.any()),
  'object': (param) => {
    if (param.properties && Array.isArray(param.properties)) {
      const shape = {}

      param.properties.forEach(prop => {
        shape[prop.name] = convertParamToSchema(prop)
      })

      return z.object(shape)
    }

    return z.object({}).passthrough()
  },
  'default': () => z.any(),
}

function convertParamToSchema(param) {
  let paramType
  if (typeof param.type === 'object' && param.type.name) {
    paramType = param.type.name.toLowerCase()
  } else if (typeof param.type === 'string') {
    paramType = param.type.toLowerCase()
  } else {
    paramType = 'string'
  }

  const schemaFactory = typeToSchemaMap[paramType] || typeToSchemaMap.default

  let schema = schemaFactory(param)

  if (param.optional === true || param.required === false) {
    schema = schema.optional()
  }

  return schema
}

export function buildDescription(description, toolName, serviceName, sampleResult) {
  return description || `Execute ${toolName} from ${serviceName}`
}

export function paramsToZodSchema(params) {
  if (!params || !Array.isArray(params) || params.length === 0) {
    return {}
  }

  const inputShape = {}

  params.forEach(param => {
    if (!param.name) {
      console.warn('Parameter missing name:', param)
      return
    }

    let inputSchema = convertParamToSchema(param)

    if (param.description) {
      inputSchema = inputSchema.describe(param.description)
    }

    inputShape[param.name] = inputSchema
  })

  return inputShape
}
