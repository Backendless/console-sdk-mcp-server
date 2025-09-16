import { Config } from '../config.js'

function generateOAuthConfig() {
  const blConsoleURL = Config.blConsoleURL

  return {
    'issuer'                               : blConsoleURL,
    'authorization_endpoint'               : `${ blConsoleURL }/developer/oauth2/authorize`,
    'token_endpoint'                       : `${ blConsoleURL }/developer/oauth2/token`,
    'registration_endpoint'                : `${ blConsoleURL }/developer/oauth2/client/register`,
    'revocation_endpoint'                  : `${ blConsoleURL }/developer/oauth2/token/revoke`,
    'response_types_supported'             : [
      'code'
    ],
    'response_modes_supported'             : [
      'query'
    ],
    'grant_types_supported'                : [
      'authorization_code',
    ],
    'token_endpoint_auth_methods_supported': [
      'client_secret_basic',
      // 'none' // todo add after FR-1932
    ],
    'code_challenge_methods_supported'     : [
      'plain',
      'S256'
    ],
    // 'scopes_supported'                     : [],
  }
}

export function handleOAuthServerMetadata(req, res) {
  try {
    const config = generateOAuthConfig()

    res.setHeader('Content-Type', 'application/json')
    res.json(config)
  } catch (error) {
    console.error('Error generating OAuth config:', error)

    res.status(500).json({ error: 'OAuth configuration not available' })
  }
}

export function handleOAuthProtectedResource(req, res) {
  try {
    res.setHeader('Content-Type', 'application/json')

    // todo change it with proxy to blConsoleURL
    res.json({
      resource_server: `localhost:3003`,
      scopes_supported: [],
      bearer_methods_supported: ['header'],
      resource_documentation: 'MCP Server OAuth Protected Resource',
      mcp_endpoint: `http://localhost:3003/mcp`
    })
  } catch (error) {
    console.error('Error generating OAuth protected resource config:', error)

    res.status(500).json({ error: 'OAuth protected resource configuration not available' })
  }
}

export { generateOAuthConfig }
