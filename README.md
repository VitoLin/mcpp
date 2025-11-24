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

## Custom Flags (e.g., visible_tools)

To pass a custom flag like `--visible_tools` to your wrapped command, add it to the `args` array in your `test.json`:

```json
"args": [
  "<path-to-workspace>/mcpp/build/mcp-proxy.js",
  "python",
  "-m",
  "args",
  "--visible_tools=foo,bar"
]
```
