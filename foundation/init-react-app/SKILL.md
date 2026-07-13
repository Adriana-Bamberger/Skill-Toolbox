---
name: init-react-app
description: Scaffolds a complete frontend environment featuring React, TypeScript, Vite, Tailwind CSS, and React Router using npm. Use when requested to "new react project" or "scaffold frontend workspace".
---

# Initialize React Frontend Workspace

Scaffold a high-performance React SPA container integrated with Tailwind CSS styling and unified client-side routing.

## Core Workflow

### Step 1: Baseline Architecture Scaffolding

1. Execute the non-interactive baseline template initialization command via the terminal to bootstrap the Vite React TypeScript core into the current directory:

```bash
   npm create vite@latest . -- --template react-ts
```

### Step 2: Core Routing & Styling Injection

1. Execute the npm installation strings to install ecosystem requirements:

```Bash
  npm install react-router
  npm install -D tailwindcss @tailwindcss/vite
```

2. Read the optimized build configuration from `./templates/vite.config.ts` from this skill's directory and write it directly to `vite.config.ts` in the project root workspace.
3. Read the Tailwind styling directive from `./templates/src/index.css` from this skill's directory and write it directly to `src/index.css` in the project workspace.

### Step 3: Scaffolding Directory Blueprints

1. Read the comprehensive structural asset files grouped within the skill’s local template environment.
2. Write the main app orchestration layer directly from `./templates/src/main.tsx` to `src/main.tsx`.
3. Create the route mapping table directly from `./templates/src/routes.tsx` to `src/routes.tsx`.
4. Overwrite `src/App.tsx` using the streamlined fallback baseline template file located at `./templates/src/App.tsx`.

## Best Practices & Enforcement Parameters

1. **Verify Root Workspaces:** If execution errors map to non-empty directories, cleanly override fallback template files (`src/App.tsx`, `src/index.css`) while safely logging unexpected developer parameters.
2. **Type Safety Enforcement:** Do not allow compilation fallbacks or loose `any` statements to bypass the standard initialization of the `routes.tsx` setup.
