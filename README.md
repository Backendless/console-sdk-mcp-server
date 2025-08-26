# Backendless Console SDK MCP Server

A Model Context Protocol (MCP) server implementation for Backendless Console SDK, providing AI-powered tools for managing and interacting with Backendless data.

## Features

- **MCP Protocol Support**: Implements the Model Context Protocol for seamless AI integration
- **Multiple Transport Modes**: Supports both STDIO and HTTP transports

## Installation

```bash
npm install
```

For global installation to use as command-line tools:
```bash
npm install -g .
```

## Usage

### STDIO Mode (Default)

Run the server in STDIO mode for direct process communication:

```bash
npm start
# or
npm run start:stdio
# or (if installed globally)
backendless-dev-api-mcp
```

### HTTP Mode

Run the server in HTTP mode for web-based communication:

```bash
npm run start:http
# or with custom port
PORT=8080 npm run start:http
# or (if installed globally)
backendless-dev-api-mcp-http
```

Default port is 3000. The server will be available at `http://localhost:3000/mcp`

## License

MIT

## Support

For issues and support, visit: https://support.backendless.com/
