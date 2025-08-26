const BackendlessClusters = {
  us: 'https://develop.backendless.com',
  eu: 'https://eu-develop.backendless.com',
}

const DEFAULT_CLUSTER_NAME = 'us'

export const Config = {}

export async function initConfig() {
  const blHost = (process.env.BACKENDLESS_HOST || DEFAULT_CLUSTER_NAME).trim().toLowerCase()

  Config.blConsoleURL = BackendlessClusters[blHost] || blHost

  console.log(`Config: ${ JSON.stringify(Config, null, 2) }`)
}
