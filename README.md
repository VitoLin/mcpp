# Usage

```
npx @modelcontextprotocol/inspector --config ./test.json
```

`test.json` for wrapped PythonMCP server:

```
{
  "mcpServers": {
    "wrapped": {
      "command": "node",
      "args": [
        "<path-to-workspace>/mcpp/build/mcp-proxy.js",
        "python", # command
        "-m",
        "args", # args for mcp server
      ],
      "env": {
        "PYTHONPATH": "<python-path>"
      }
    }
  }
}

```
