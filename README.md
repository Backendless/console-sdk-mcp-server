# Backendless Console SDK MCP Server

[![NPM Version](https://img.shields.io/npm/v/backendless-console-sdk-mcp-server?color=red)](https://www.npmjs.com/package/backendless-console-sdk-mcp-server) [![MIT licensed](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server that provides AI assistants with programmatic access to Backendless administration and developer APIs.

Backendless MCP enables AI assistants to directly manage your Backendless applications through natural language:

```txt
Create a new table called "Products" with columns: name (string), price (number), and inStock (boolean)
```

```txt
List all users who registered in the last 7 days
```


Your AI assistant can now:

- 1️⃣ Manage databases, users, files, etc.
- 2️⃣ Query data and perform operations
- 3️⃣ All without leaving your development environment

## 🚀 What is this for?

This MCP server enables AI assistants (like Claude, ChatGPT, Cursor, etc.) to interact with your Backendless applications through the Backendless Console SDK. It exposes a comprehensive set of tools for managing databases, users, API services, cloud code, and other Backendless resources directly from your AI-powered development environment.

**Key benefits:**
- **Direct Backendless integration**: Access all Backendless admin APIs through natural language
- **Dynamic tool loading**: Tools are automatically generated from the [Backendless Console SDK](https://github.com/Backendless/Console-SDK)
- **Secure authentication**: Supports OAuth2 authentication
- **Flexible usage**: Use hosted endpoints

## ✨ Features

- **Comprehensive API coverage**: Automatically exposes all available Backendless Console SDK methods as MCP tools
- **Session management**: Maintains authenticated sessions with Backendless servers
- **OAuth2 authentication method**:
- **Multi-cluster support**: Connect to US, EU, local, or Backendless PRO clusters
- **Hosted**: Use Backendless-provided MCP endpoints (zero setup)

## 📋 Prerequisites

- **Backendless account** with API access

## 📦 Installation

> **Note**: Installation is **not required** if you're using the Backendless hosted MCP endpoints.

## 🛠️ Usage

### Backendless Hosted MCP (Easiest - Recommended)

Each Backendless cluster provides a hosted MCP server endpoint. This is the easiest way to get started - **no installation or server setup required!**

**Available endpoints:**
- **US Cluster**: `https://develop.backendless.com/mcp`
- **EU Cluster**: `https://eu-develop.backendless.com/mcp`

<details>
<summary><b>Install in Cursor</b></summary>

Go to: `Settings` → `Cursor Settings` → `MCP` → `Add new global MCP server`

#### Cursor Hosted Connection

```json
{
  "mcp": {
    "servers": {
      "backendless": {
        "type": "http",
        "url": "https://develop.backendless.com/mcp"
      }
    }
  }
}
```

#### Cursor Local Connection

</details>

<details>
<summary><b>Install in Claude Code</b></summary>

#### Claude Code Hosted Connection

Run this command:

```sh
claude mcp add --transport http backendless https://develop.backendless.com/mcp
```

</details>

<details>
<summary><b>Install in VS Code</b></summary>

Add to your VS Code MCP settings. See [VS Code MCP docs](https://code.visualstudio.com/docs/copilot/chat/mcp-servers) for more info.

#### VS Code Hosted Connection

```json
{
  "mcp": {
    "servers": {
      "backendless": {
        "type": "http",
        "url": "https://develop.backendless.com/mcp"
      }
    }
  }
}
```

</details>

<details>
<summary><b>Install in Windsurf</b></summary>

Add to your Windsurf MCP configuration. See [Windsurf MCP docs](https://docs.windsurf.com/windsurf/cascade/mcp) for more info.

#### Windsurf Hosted Connection

```json
{
  "mcpServers": {
    "backendless": {
      "serverUrl": "https://develop.backendless.com/mcp"
    }
  }
}
```

</details>

<details>
<summary><b>Install in Cline</b></summary>

You can easily install Backendless through the Cline MCP Server configuration:

1. Open **Cline**
2. Click the hamburger menu icon (☰) to enter the **MCP Servers** section
3. Choose **Remote Servers** tab
4. Click the **Edit Configuration** button
5. Add backendless to `mcpServers`:

#### Cline Hosted Connection

```json
{
  "mcpServers": {
    "backendless": {
      "url": "https://develop.backendless.com/mcp",
      "type": "streamableHttp"
    }
  }
}
```

</details>

<details>
<summary><b>Install in Roo Code</b></summary>

Add this to your Roo Code MCP configuration file. See [Roo Code MCP docs](https://docs.roocode.com/features/mcp/using-mcp-in-roo) for more info.

#### Roo Code Hosted Connection

```json
{
  "mcpServers": {
    "backendless": {
      "type": "streamable-http",
      "url": "https://develop.backendless.com/mcp"
    }
  }
}
```

</details>

<details>
<summary><b>Install in Claude Desktop</b></summary>

#### Hosted Connection

Open Claude Desktop and navigate to Settings > Connectors > Add Custom Connector. Enter the name as `Backendless` and the remote MCP server URL as `https://develop.backendless.com/mcp`.

</details>

<details>
<summary><b>Install in Opencode</b></summary>

Add this to your Opencode configuration file. See [Opencode MCP docs](https://opencode.ai/docs/mcp-servers) for more info.

#### Opencode Hosted Connection

```json
{
  "mcp": {
    "backendless": {
      "type": "remote",
      "url": "https://develop.backendless.com/mcp",
      "enabled": true
    }
  }
}
```

</details>

<details>
<summary><b>Install in Qodo Gen</b></summary>

See [Qodo Gen docs](https://docs.qodo.ai/qodo-documentation/qodo-gen/qodo-gen-chat/agentic-mode/agentic-tools-mcps) for more details.

1. Open Qodo Gen chat panel in VSCode or IntelliJ
2. Click Connect more tools
3. Click + Add new MCP
4. Add the following configuration:

#### Qodo Gen Hosted Connection

```json
{
  "mcpServers": {
    "backendless": {
      "url": "https://develop.backendless.com/mcp"
    }
  }
}
```

</details>

<details>
<summary><b>Install in Trae</b></summary>

Use the Add manually feature and fill in the JSON configuration information for that MCP server.
For more details, visit the [Trae documentation](https://docs.trae.ai/ide/model-context-protocol?_lang=en).

#### Trae Hosted Connection

```json
{
  "mcpServers": {
    "backendless": {
      "url": "https://develop.backendless.com/mcp"
    }
  }
}
```

</details>

<details>
<summary><b>Testing with MCP Inspector</b></summary>

Start your server and test with the MCP Inspector:

```bash
# Start the server
BACKENDLESS_HOST=us PORT=3003 npm run start:http

# In another terminal, run the inspector
npx @modelcontextprotocol/inspector
```

Configure the inspector:
- **Transport Type**: Streamable HTTP
- **URL**: `http://localhost:3003/mcp`

</details>

## 🔨 Available Tools

Tools are dynamically loaded from the Backendless Console SDK definitions. The available tools include operations for:

- **Data Management**: Create, read, update, delete tables and records
- **User Management**: User registration, authentication, role management
- **API Services**: Manage and invoke custom API services
- **Cloud Code**: Deploy and manage server-side business logic
- **Files**: File upload, download, and management
- **Messaging**: Push notifications and email management
- **Geolocation**: Location-based services
- **And more**: All Backendless Console SDK capabilities

### Special Tools

- `getSDKInfo`: Get current SDK session information and status

## 🔐 Authentication

### For Hosted & Self-Hosted HTTP Mode

The server supports OAuth2 authentication method:

**OAuth2 Bearer Token**: Use standard OAuth2 Bearer authentication
   ```
   Authorization: Bearer YOUR_TOKEN
   ```

When authentication fails, the server responds with a 401 status and `WWW-Authenticate` header pointing to the OAuth2 discovery endpoints.

## 🏗️ Architecture

```
┌─────────────────┐
│  AI Assistant   │
│ (Claude, etc.)  │
└────────┬────────┘
         │ MCP Protocol
         │ (HTTP)
         ▼
┌─────────────────┐
│   MCP Server    │
│  (This Package) │
└────────┬────────┘
         │ Backendless Console SDK
         ▼
┌─────────────────┐
│   Backendless   │
│     Cluster     │
└─────────────────┘
```

## 🚨 Troubleshooting

<details>
<summary><b>Connection Issues</b></summary>

**Symptom**: Cannot connect to Backendless cluster

**Solutions**:
- Check your network connection and firewall settings
- For hosted endpoints, ensure you can access `https://develop.backendless.com` or `https://eu-develop.backendless.com` in your browser

</details>

<details>
<summary><b>Tool Not Found Errors</b></summary>

**Symptom**: "Tool not found" errors when trying to use specific operations

**Solutions**:
- Use `getSDKInfo` to check available methods
- Ensure you're using the latest version of the MCP server
- Check the Backendless Console SDK version being used

</details>

<details>
<summary><b>Port Already in Use</b></summary>

**Symptom**: "EADDRINUSE" error when starting HTTP server

**Solutions**:
- Change the `PORT` environment variable to an available port
- Check if another process is using port 3003: `lsof -i :3003` (Unix/Mac) or `netstat -ano | findstr :3003` (Windows)
- Kill the process using the port or choose a different port

</details>

## 🔗 Links

- [Backendless Documentation](https://backendless.com/docs/)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [Backendless Console SDK NPM](https://www.npmjs.com/package/backendless-console-sdk)
- [Backendless Console SDK GitHub](https://github.com/Backendless/Console-SDK)

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💬 Support

For issues related to:
- **This MCP server or Backendless platform**: [Backendless Support](https://support.backendless.com/)
- **MCP protocol**: [MCP Documentation](https://modelcontextprotocol.io)
