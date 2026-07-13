# Skill-Toolbox

Personal repository for tracking, versioning, and customizing Claude Code skills.

## Structure
Skills are organized into clear, domain-specific categories. Each specialized command resides in its own kebab-case folder containing an execution `SKILL.md` prompt file and a dedicated `templates/` folder holding static configuration baselines.

```Plaintext
Skill-Toolbox/
├── [area]/
│   └── [skill name]/
│       ├── SKILL.md
│       └── templates/
│           ├── [example.tsx]
│           ├── [example.ts]
│           └── [example.json]
└── sync-skills.sh
```
## Skill Architecture & Token-Optimization Engineering
Skills extend the Claude Code CLI environment with custom slash commands. To ensure high execution reliability and keep active token consumption exceptionally lean, these configurations strictly enforce a few primary design principles:

### 1. The Token-Efficiency Principle (Action-Oriented Command Strings)
Older skill iterations utilized anxious, defensive guardrails inside instructions (e.g., "Paste the contents exactly as read," "Do not alter or omit formatting keys," or "Do not hallucinate").

Modern LLM attention layers treat negative prompting as redundant noise. Removing these anxious warnings saves hundreds of system context tokens across multiple tool definitions, speeds up command generation times, and keeps execution prompts clean. Write direct, positive commands instead.

- ❌ Inefficient Syntax: `1. Read the template. 2. Write it to the root directory. 3. Copy verbatim, do not miss brackets, and do not alter parameters.`

- 🚀 Optimized Syntax: `1. Read the contents of ./templates/.prettierrc from this skill's directory and write it directly to .prettierrc in the project root workspace.`

### 2. Static Isolation via the `/templates` Folder
Never place raw code strings, massive JSON blocks, or deep configuration scripts inside the actual `SKILL.md` instruction file.

Because Claude Code treats the skill directory as an intact working environment, moving all physical boilerplate templates into a separate `./templates/` folder ensures Claude only evaluates code tokens when it actively streams the files to disk. This completely eliminates syntax distortion and escaping issues common with raw shell creation scripts.

### 3. Downstream Onboarding Delivery (Automatic README Appending)
When initializing tools that require out-of-band developer tasks (such as setting up a cloud account or generating access tokens for Storybook/Chromatic), the skill should automatically append step-by-step onboarding documentation to the project's root `README.md.`

This creates a seamless hand-off boundary: the developer gets an immediate, permanent guide stamped directly inside their repository workspace for immediate reference, avoiding terminal context spam.

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