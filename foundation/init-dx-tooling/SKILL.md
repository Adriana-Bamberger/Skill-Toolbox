---
name: init-dx-tooling
description: Initializes and configures complete developer experience tooling including Prettier, ESLint, EditorConfig, Husky hooks, automated VS Code configurations, pull request templates, and GitHub Actions CI pipelines using npm. Use when requested to "setup dev tooling", "add formatting", or "configure eslint/prettier".
---

# Initialize Developer Experience Tooling (npm)

Enforce consistent code styling, linting pipelines, secure git hooks, and specialized editor setups across the npm project workspace.

## Core Workflow

### Step 1: Baseline Verification & Dependency Injection

1. Verify if a `package.json` exists in the current working directory. If it does not, execute `npm init -y` via the terminal to scaffold a base workspace.
2. Read the script properties defined in `./templates/package-fragment.json` from this skill's directory.
3. Parse the root `package.json` and merge these new scripts into the existing `scripts` block, retaining pre-existing framework execution pipelines (`dev`, `build`).
4. Run the npm installation command to add requirements to **devDependencies**:
   ```bash
   npm install -D prettier eslint husky lint-staged
   ```

### Step 2: Core Code Quality Engine

1. Read the contents of `./templates/.prettierrc` from this skill's directory and write it directly to `.prettierrc` in the project root workspace.
2. Read the contents of `./templates/eslint.config.js` from this skill's directory and write it directly to `eslint.config.js` in the project root workspace.
3. Read the contents of `./templates/.editorconfig` from this skill's directory and write it directly to `.editorconfig` in the project root workspace.

### Step 3: Workspace & Editor Optimization (VS Code)

1. Ensure a `.vscode/` directory exists in the project root.
2. Parse `.vscode/settings.json` if it exists and merge the Peacock color configurations and formatter rules from `./templates/.vscode/settings.json` into place. If missing, copy the template file directly.
3. Merge the workspace extension recommendations from `./templates/.vscode/extensions.json` into `.vscode/extensions.json`, filtering out any duplicate array strings.

### Step 4: Secure Git Hooks & Platform Automation

1. Initialize Husky within the repository by executing `npx husky` via the terminal.
2. Configure `lint-staged` by reading `./templates/.lintstagedrc.json` and writing it to `.lintstagedrc.json` in the project root.
3. Copy the pre-commit environment hook payload directly from `./templates/.husky/pre-commit` to `.husky/pre-commit`.
4. Copy the security validation hook payload directly from `./templates/.husky/pre-push` to `.husky/pre-push`.
5. Ensure a `.github/workflows/` path exists. Copy `./templates/.github/PULL_REQUEST_TEMPLATE.md` to `.github/PULL_REQUEST_TEMPLATE.md` and `./templates/.github/workflows/lint.yml` to `.github/workflows/lint.yml`.

### Best Practices & Enforcement Standards

1. **Verify Structural Integrity:** If target workspace dotfiles encounter JSON validation faults or parsing errors during script injections, halt operations and request developer guidance immediately.
