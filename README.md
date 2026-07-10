# Skill-Toolbox

Personal repository for tracking, versioning, and customizing Claude Code skills.

## Structure

Skills are organized into domain-specific categories. Each skill resides in its own kebab-case folder containing a mandatory `SKILL.md` file and any accompanying configurations.

```text
Skill-Toolbox/
├── backend/
├── foundation/
├── frontend/
│   └── setup-dx-tooling/
│       ├── SKILL.md
│       └── templates/          # Static configuration baselines
│           ├── .prettierrc
│           └── eslint.config.js
├── other/
├── security/
├── testing/
│   └── dependency-doctor/
│       └── SKILL.md
└── sync-skills.sh              # Automation and symlink engine
```
## Skills Architecture
Skills extend Claude Code with custom slash commands. Instead of single monolithic skills, tools are split modularly into Core Stacks and Utility Add-ons to minimize active token footprints and eliminate AI configuration hallucinations.

### Best Practice: Utilizing Template Files
You can stash static production-ready configuration files (like .prettierrc, .husky/pre-commit, or pull request templates) inside a folder right next to your SKILL.md.

Because Claude Code treats the skill directory as an intact working environment, you can reference these files using relative file paths in your prompt instructions.

Example SKILL.md directive:

1. Read the exact contents of `./templates/.prettierrc` from this skill's directory.

2. Create a new file named `.prettierrc` in the root of the user's project workspace.

3. Paste the contents exactly as read. Do not alter, omit, or hallucinate formatting keys.

This turns Claude into a 100% accurate file-copying agent and drastically cuts token overhead.

## Automation & Syncing
Claude Code expects global custom skills to live in a flat directory at `~/.claude/skills/` and will not natively crawl nested subdirectories.

To maintain clean repository organization while enabling execution commands, use the included `sync-skills.sh` script.

## What the Script Does
The script loops through your mapped category folders, validates that each inner directory contains a valid `SKILL.md`, and creates a symbolic link (symlink) directly into Claude's global directory.

Because it uses symlinks:

- No Manual Copying: You only need to run the script when adding a brand new skill folder.

- Instant Live Updates: Any changes made to existing configs or markdown prompts inside this repository instantly update Claude's active system—no re-sync required.

- Clean Slash Commands: Folder names map directly to your CLI. `frontend/setup-dx-tooling` becomes `/setup-dx-tooling`.

## Setup & Usage

1. Make the script executable (first-time setup only):

```Bash
chmod +x sync-skills.sh
```

2. Run the script whenever you add a new skill folder:

```Bash
./sync-skills.sh
```

## References
- [Claude Code documentation](https://docs.anthropic.com/claude-code)

- [Official Skills Architecture Guide](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)