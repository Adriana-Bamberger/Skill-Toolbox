---
name: init-dx-tooling
description: Initializes and configures complete developer experience tooling including Prettier, ESLint, EditorConfig, Husky hooks (linting and security auditing), automated VS Code configurations with Peacock color schemes, pull request templates, and GitHub Actions CI pipelines. Use when requested to "setup dev tooling", "add formatting", "configure eslint/prettier", or "initialize repository quality tools".
---

# Initialize Developer Experience Tooling

Enforce consistent code styling, linting pipelines, secure git hooks, and specialized editor setups across the project workspace.

## Core Workflow

### Step 1: Environment Analysis & Dependency Injection

1. Verify if a `package.json` exists in the current working directory. If it does not, execute the package manager's init command (e.g., `npm init -y`) to scaffold a base workspace.
2. Detect the active package manager by checking for lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, or `bun.lockb`). Default to `npm` if no lockfile is present.
3. Read the script properties defined in `./templates/package-fragment.json` from this skill's directory.
4. Parse the root `package.json` and cleanly merge these new scripts into the existing `scripts` block. **Do not overwrite** any core framework scripts (e.g., `dev`, `build`, `start`, `preview`).
5. Run the detected package manager's installation command to add the latest versions of the following packages as **devDependencies**: `prettier`, `eslint`, `husky`, and `lint-staged`.

### Step 2: Core Code Quality Engine

1. Read the contents of `./templates/.prettierrc` from this skill's directory and write it directly to `.prettierrc` in the project root workspace.
2. Read the contents of `./templates/eslint.config.js` from this skill's directory and write it directly to `eslint.config.js` in the project root workspace.
3. Read the contents of `./templates/.editorconfig` from this skill's directory and write it directly to `.editorconfig` in the project root workspace.
4. For each config file written, copy its matching ignore file if present in the template directory (e.g., `.prettierignore`, `.eslintignore`).

### Step 3: Workspace & Editor Optimization (VS Code)

1. Ensure a `.vscode/` directory exists in the project root.
2. Check if `.vscode/settings.json` already exists.
   - **If it exists:** Parse the JSON file and deeply merge the Peacock color preferences and formatter rules from `./templates/.vscode/settings.json` into the existing file without destroying user configurations.
   - **If it does not exist:** Copy `./templates/.vscode/settings.json` directly into place.
3. Check if `.vscode/extensions.json` already exists. Merge the workspace recommendations from `./templates/.vscode/extensions.json` into the project's array, filtering out any duplicates.

### Step 4: Secure Git Hooks & Platform Automation

1. Initialize Husky within the repository by executing `npx husky`.
2. Configure `lint-staged` by reading `./templates/.lintstagedrc.json` and writing it to `.lintstagedrc.json` in the project root.
3. Configure the Husky `pre-commit` hook file located at `.husky/pre-commit` to execute:
   ```bash
   #!/bin/sh
   npx lint-staged
   ```
4. Configure the Husky `pre-push` hook file located at `.husky/pre-push.` Use the project's specific package manager command to execute a comprehensive package security vulnerability assessment before every upstream push:
   - npm: npm audit
   - pnpm: pnpm audit
   - yarn: yarn audit
   - bun: bun audit
5. Ensure a `.github/` directory exists in the project root. Copy `./templates/.github/PULL_REQUEST_TEMPLATE.md` to `.github/PULL_REQUEST_TEMPLATE.md.`
6. Copy the continuous integration pipeline file from `./templates/.github/workflows/lint.yml` directly into `.github/workflows/lint.yml.`

### Best Practices & Enforcement Standards

1. Verify Verbatim Copying: When writing static standard dotfiles (`.prettierrc`, `.editorconfig`), transfer the source payload exactly as read. Do not strip comments, reorganize parameters, or guess values.
2. Graceful Structural Degradation: If any targeted file configuration fails JSON structural validation or encounters lockfile read errors, pause operations immediately, log the character offset error, and query the user for correction pathing.
3. Emergency Disengagement Handling: Document inside the generated repository documentation that hooks may be bypassed during infrastructure-down production hotfixes using the `--no-verify` flag via standard CLI inputs:

```Bash
git commit --no-verify
git push --no-verify
```