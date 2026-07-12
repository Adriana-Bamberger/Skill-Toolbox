# Scratch pad - don't commit this file with this still here.

This skill should include:

## Husky Set Up

before git push it should run npm audit (confirm this the the right command for checking the packages)

## A pull request template

## Prettier Set Up

## ESLint Set Up

## Peacock Set Up (.vscode/settings.json)
```
{
  "workbench.colorCustomizations": {
    "activityBar.activeBackground": "#ff8097",
    "activityBar.background": "#ff8097",
    "activityBar.foreground": "#15202b",
    "activityBar.inactiveForeground": "#15202b99",
    "activityBarBadge.background": "#b1ff9f",
    "activityBarBadge.foreground": "#15202b",
    "commandCenter.border": "#15202b99",
    "sash.hoverBorder": "#ff8097",
    "statusBar.background": "#ff4d6d",
    "statusBar.foreground": "#15202b",
    "statusBarItem.hoverBackground": "#ff1a43",
    "statusBarItem.remoteBackground": "#ff4d6d",
    "statusBarItem.remoteForeground": "#15202b",
    "titleBar.activeBackground": "#ff4d6d",
    "titleBar.activeForeground": "#15202b",
    "titleBar.inactiveBackground": "#ff4d6d99",
    "titleBar.inactiveForeground": "#15202b99"
  },

  "peacock.remoteColor": "#ff4d6d"
}
```

# Init Developer Experience Tooling

<!-- TODO:Fix this -->
Establish consistent code formatting, linting, and other set ups across your project.

## Workflow

3. **Add configs**: Add the config files from this skill's directory
4. **Add scripts**: Include npm/package scripts for format/lint
5. **Configure editor**: Provide VS Code, IntelliJ, Vim settings
6. **Setup pre-commit**: Add git hooks for automatic formatting
7. **CI integration**: Suggest GitHub Actions or CI config

## Configuration Templates

### Prettier (.prettierrc.json)

1. Read the exact contents of `./templates/.prettierrc` from this skill's directory.

2. Create a new file named `.prettierrc` in the root of the user's project workspace.

3. Paste the contents exactly as read. Do not alter, omit, or hallucinate formatting keys.

### ESLint (.eslintrc.json)

1. Read the exact contents of `./templates/.eslintrc.json` from this skill's directory.

2. Create a new file named `.eslintrc.json` in the root of the user's project workspace.

3. Paste the contents exactly as read. Do not alter, omit, or hallucinate formatting keys.

### EditorConfig (.editorconfig)

1. Read the exact contents of `./templates/.editorconfig` from this skill's directory.

2. Create a new file named `.editorconfig` in the root of the user's project workspace.

3. Paste the contents exactly as read. Do not alter, omit, or hallucinate formatting keys.

## Package Scripts & Dependencies (package.json)

1. Check if a `package.json` already exists in the root directory. If it does not, initialize a default one using the appropriate package manager.

2. Read the custom script definitions from `./templates/package-fragment.json` inside this skill's directory.

3. Safely merge these scripts into the `scripts` object of the project's root `package.json`. Do not overwrite or delete any existing framework scripts (like `dev`, `build`, or `preview`).

4. Identify the project's package manager by checking for lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, or `bun.lockb`).

5. Run the appropriate terminal command to install the latest versions of `prettier`, `eslint`, `husky`, and `lint-staged` as **devDependencies** (e.g., `npm install --save-dev prettier eslint husky lint-staged`). Do not use hardcoded version strings from a template.

## Git Hooks Setup
<!-- Fix this -->

### Husky + lint-staged (Node.js)

1. Install dependencies:

```bash
npm install --save-dev husky lint-staged
npx husky init
```

2. Configure lint-staged (.lintstagedrc.json):

```json
{
  "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
  "*.{json,md,yml}": ["prettier --write"]
}
```

3. Add pre-commit hook (.husky/pre-commit):

```bash
#!/bin/sh
npx lint-staged
```

## Editor Configuration

### VS Code (settings.json)

1. Read the exact contents of `./templates/settings.json` from this skill's directory.

2. Create a new folder called .vscode

3. In that new .vscode folder create a new file named `settings.json`

3. Paste the contents exactly as read. Do not alter, omit, or hallucinate formatting keys.

### VS Code Extensions (.vscode/extensions.json)

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "editorconfig.editorconfig",
    "ms-python.black-formatter"
  ]
}
```

### IntelliJ/WebStorm

- Enable: Settings → Languages & Frameworks → JavaScript → Prettier → On save
- Enable: Settings → Tools → Actions on Save → Reformat code

## CI Integration

### GitHub Actions (.github/workflows/lint.yml)

```yaml
name: Lint

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run format:check
      - run: npm run lint
      - run: npm run typecheck
```

### Pre-merge checks

```yaml
# .github/workflows/pr-checks.yml
- name: Check formatting
  run: |
    npm run format:check || {
      echo "Code is not formatted. Run 'npm run format' locally."
      exit 1
    }
```

## Installation Checklist

For every setup, provide:

- [ ] Config files (.prettierrc, .eslintrc, .editorconfig, etc.)
- [ ] Ignore files (.prettierignore, .eslintignore)
- [ ] Package scripts (format, lint, format:check, lint:fix)
- [ ] Git hooks (husky/pre-commit)
- [ ] Editor settings (.vscode/settings.json)
- [ ] CI workflow (.github/workflows/lint.yml)
- [ ] Documentation (README section on running lint/format)

## Best Practices

1. **Run formatter last**: Prettier should override other formatting rules
2. **Extend configs**: Use popular presets (Airbnb, Standard, etc.)
3. **Ignore generated files**: Add build outputs to ignore files
4. **Make hooks skippable**: Allow `git commit --no-verify` for emergencies
5. **Document process**: Add "Code Style" section to CONTRIBUTING.md
6. **Test on clean install**: Ensure configs work without local editor setup
7. **Keep rules minimal**: Start strict, relax if needed


## Bypass Instructions (Emergencies)

```bash
# Skip pre-commit hooks
git commit --no-verify

# Skip CI checks (not recommended)
git push --no-verify
```

Document when bypass is acceptable (hotfixes, emergencies only).
