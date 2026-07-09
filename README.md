# claude-toolbox

Personal repository for tracking, versioning, and customizing Claude Code skills and MCP servers.

## Structure

```
claude-toolbox/
├── skills/          # Custom Claude Code slash-command skills
└── mcp-servers/     # MCP server configurations and custom servers
```

## Skills

Skills live in `skills/` and extend Claude Code with custom slash commands. Each skill is a Markdown file that Claude reads as a prompt when the command is invoked.

To use a skill, reference it from your Claude Code settings or drop it into the appropriate config directory.

## MCP Servers

`mcp-servers/` contains configurations and source for any custom Model Context Protocol servers. MCP servers expose tools, resources, and prompts to Claude at runtime.

## Usage

Clone this repo and symlink or copy the contents into your Claude Code configuration:

- Skills → `~/.claude/skills/` or a project's `.claude/skills/`
- MCP configs → reference from `~/.claude/settings.json` under `mcpServers`

## References

- [Claude Code documentation](https://docs.anthropic.com/claude-code)
- [MCP specification](https://modelcontextprotocol.io)
