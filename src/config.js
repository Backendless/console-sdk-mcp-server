const BackendlessClusters = {
  local: 'http://localhost:3001',
  us: 'https://develop.backendless.com',
  eu: 'https://eu-develop.backendless.com',
}

const DEFAULT_CLUSTER_NAME = 'us'

export const Config = {}

export async function initConfig() {
  const blHost = (process.env.BACKENDLESS_HOST || DEFAULT_CLUSTER_NAME).trim().toLowerCase()

  Config.blConsoleURL = BackendlessClusters.local || BackendlessClusters[blHost] || blHost
  Config.blAuthKey = process.env.BACKENDLESS_AUTH_KEY || null
  Config.auth2MethodAuthorization = process.env.BACKENDLESS_AUTH2_METHOD_AUTHORIZATION || 'client_secret_post'

  console.log(`Config: ${ JSON.stringify(Config, null, 2) }`)
}
