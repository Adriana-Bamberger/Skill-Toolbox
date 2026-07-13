---
name: setup-storybook-chromatic
description: Configures Storybook v10+ for a React Vite project using npm. Integrates the native Vitest browser testing engine, Chromatic visual regression tracking with TurboSnap optimization, automated accessibility (a11y) tools, dark/light backgrounds, and maps an interactive play function test on App.tsx. Use when requested to "setup storybook", "add chromatic", or "configure UI testing system".
---

# Storybook & Chromatic UI Quality Engine Setup

Configure isolated component design workspaces combining Git-tracked visual regression testing via Chromatic, accessibility monitoring, and automated event simulation.

## Core Workflow

### Step 1: Automated Initializer Execution

1. Verify that `package.json` exists in the current directory. If `src/App.tsx` is missing, halt execution and remind the user to run `/init-react-app` first.
2. Execute the non-interactive automated Storybook configuration string using npm:

```bash
  npx storybook@latest init --type react --builder vite --yes
```

3. Install the structural testing, accessibility, and Chromatic testing packages:

```Bash
  npm install -D @storybook/addon-vitest @storybook/addon-a11y @chromatic-com/storybook
```

### Step 2: Quality Engine Config Injection

1. Ensure the `.storybook/` directory exists in the workspace root.
2. Read the unified configuration definitions from `./templates/.storybook/main.ts` inside this skill's directory and write them directly to `.storybook/main.ts.`
3. Read the theme wrapping parameters from `./templates/.storybook/preview.ts` inside this skill's directory and write them directly to `.storybook/preview.ts`.

### Step 3: Scaffold Automated Component Interaction & Build Scripts

1. Create a companion story file matching your root view component. Read the contents of `./templates/src/App.stories.tsx` from this skill's directory and write it directly to `src/App.stories.tsx`.
2. Parse the project's root `package.json`. Inside the `scripts` block, cleanly merge the following automation workflows (utilizing `--only-changed` to protect snapshot limits):

JSON

```JSON
  "test-storybook": "vitest --project=storybook",
  "chromatic": "chromatic --project-token=$CHROMATIC_PROJECT_TOKEN --only-changed"
```

3. Copy the production CI testing pipeline from `./templates/.github/workflows/test-storybook.yml` directly into the project's `.github/workflows/test-storybook.yml`.

### Step 4: Developer Onboarding Documentation Delivery
1. Check if a `README.md` file exists in the workspace root directory. If it does not, scaffold a baseline file.
2. Read the markdown onboarding documentation template block from `./templates/README-append.md` within this skill's directory.
3. Cleanly append this documentation layout to the bottom of the project's root `README.md` to provide immediate environment handover guidance.

## Best Practices & Enforcement Parameters

1. **Verify Verbatim Assets:** Ensure the target global CSS link pointing to Tailwind (`../src/index.css`) remains active inside the preview file so utility styles compile perfectly.
2. **Secure Environment Variables:** Instruct the developer inside documentation summaries to mount the `$CHROMATIC_PROJECT_TOKEN` via repository secret stores rather than exposing string literals directly inside public codebases.

