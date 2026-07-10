# Skill-Toolbox

Personal repository for tracking, versioning, and customizing Claude Code skills.

## Structure

```
Skill-Toolbox/
└── skills/          # Custom Claude Code slash-command skills
```

## Skills

Skills live in `skills/` and extend Claude Code with custom slash commands. Each skill is a Markdown file that Claude reads as a prompt when the command is invoked.

To use a skill, reference it from your Claude Code settings or drop it into the appropriate config directory:

- Skills → `~/.claude/skills/` or a project's `.claude/skills/`

## References

- [Claude Code documentation](https://docs.anthropic.com/claude-code)
