---
name: init-flowbite
description: Installs and configures the latest Flowbite React component ecosystem and Flowbite Icons into an existing React Vite workspace running Tailwind v4 and Storybook. Use when requested to "install flowbite", "add component library", or "setup flowbite icons".
---

# Setup Flowbite React & Icons Workspace

Integrate the Flowbite component architecture and icon design tokens cleanly with Tailwind v4 styling and Storybook isolated preview templates.

## Core Workflow

### Step 1: Automated Package Injection

1. Verify that `package.json` exists in the current working directory. If missing, halt execution and prompt the user to initialize the frontend base first.
2. Execute the non-interactive npm installation command to inject the core libraries:

```bash
  npm install flowbite-react flowbite-react-icons
```

### Step 2: Tailwind v4 Plugin Mapping

1. Locate the project's root `src/index.css` file.
2. Read the unified Tailwind v4 plugin compilation template from `./templates/src/index-append.css` within this skill's directory.
3. Append these compilation directives to the bottom of the project's active `src/index.css` file to safely register Flowbite's design tokens and theme engine.

### Step 3: Storybook Environment Alignment

1. Verify if the `.storybook/preview.ts` configuration file exists in the active project directory.
2. If the file is present, read the automated import wrapper template layout from `./templates/.storybook/preview-append.ts` inside this skill's directory.
3. Append this setup configuration block cleanly to the top of `.storybook/preview.ts` to ensure Flowbite components compile perfectly inside the Storybook workspace sandbox.

## Best Practices & Enforcement Standards

1. **Verify Structural Integrity:** If target workspace dotfiles encounter JSON validation faults or parsing errors during script injections, halt operations and request developer guidance immediately.
