const generateOAuthConfig = consoleURL => {
  return {
    'issuer'                               : consoleURL,
    'authorization_endpoint'               : `${ consoleURL }/developer/oauth2/mcp-authorize`,
    'token_endpoint'                       : `${ consoleURL }/developer/oauth2/token`,
    'registration_endpoint'                : `${ consoleURL }/developer/oauth2/client/register`,
    'revocation_endpoint'                  : `${ consoleURL }/developer/oauth2/token/revoke`,
    'response_types_supported'             : [
      'code',
    ],
    'response_modes_supported'             : [
      'query',
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
      'S256',
    ],
    // 'scopes_supported'                     : [],
  }
}

export const handleOAuthServerMetadata = consoleURL => {
  const config = generateOAuthConfig(consoleURL)

  return (req, res) => {
    try {
      res.setHeader('Content-Type', 'application/json')
      res.json(config)
    } catch (error) {
      console.error('Error generating OAuth config:', error)

      res.status(500).json({ error: 'OAuth configuration not available' })
    }
  }
}

export const handleOAuthProtectedResource = (resource_server, mcp_endpoint) => (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json')

    // todo change it with proxy to blConsoleURL
    res.json({
      resource_server,
      mcp_endpoint,
      scopes_supported        : [],
      bearer_methods_supported: ['header'],
      resource_documentation  : 'MCP Server OAuth Protected Resource',
    })
  } catch (error) {
    console.error('Error generating OAuth protected resource config:', error)

    res.status(500).json({ error: 'OAuth protected resource configuration not available' })
  }
}