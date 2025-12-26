const generateOAuthConfig = consoleURL => {
  return {
    issuer                               : consoleURL,
    authorization_endpoint               : `${ consoleURL }/developer/oauth2/authorize`,
    token_endpoint                       : `${ consoleURL }/developer/oauth2/token`,
    registration_endpoint                : `${ consoleURL }/developer/oauth2/client/mcp-register`,
    revocation_endpoint                  : `${ consoleURL }/developer/oauth2/token/revoke`,
    scopes_supported                     : [],
    response_types_supported             : [
      'code',
    ],
    response_modes_supported             : [
      'query',
    ],
    grant_types_supported                : [
      'authorization_code',
      'refresh_token',
    ],
    token_endpoint_auth_methods_supported: [
      'client_secret_basic',
      'none',
    ],
    code_challenge_methods_supported     : [
      'plain',
      'S256',
    ],
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

export const handleOAuthProtectedResource = (consoleURL, resource_server, mcp_endpoint) => (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json')

    // todo change it with proxy to blConsoleURL
    res.json({
      resource                : consoleURL,
      resource_name           : 'Backendless MCP (Beta)',
      resource_documentation  : 'https://backendless.com/docs',
      authorization_servers   : [
        consoleURL,
      ],
      bearer_methods_supported: [
        'header',
      ],
      scopes_supported        : [],
      resource_server         : consoleURL,
      mcp_endpoint            : consoleURL,
    })
  } catch (error) {
    console.error('Error generating OAuth protected resource config:', error)

    res.status(500).json({ error: 'OAuth protected resource configuration not available' })
  }
}