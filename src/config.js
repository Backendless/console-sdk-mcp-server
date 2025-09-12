const BackendlessClusters = {
  local: 'http://localhost:3001',
  us: 'https://develop.backendless.com',
  eu: 'https://eu-develop.backendless.com',
}

const DEFAULT_CLUSTER_NAME = 'local'

export const Config = {}

export async function initConfig() {
  const blHost = (process.env.BACKENDLESS_HOST || DEFAULT_CLUSTER_NAME).trim().toLowerCase()

  Config.blConsoleURL = BackendlessClusters[blHost] || blHost
  Config.blAuthKey = process.env.BACKENDLESS_AUTH_KEY || null

  console.log(`Config: ${ JSON.stringify(Config, null, 2) }`)
}
