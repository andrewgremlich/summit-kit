# Summit Kit

A React component library for building modern web applications with an earthy and outdoorsy theme.

## Project Overview

Summit Kit is a TypeScript-based component library published as an npm package. It provides React components split into two categories:
- **Server components** (`src/react/server/`) — SSR-compatible components (layout, text, forms, media)
- **Client components** (`src/react/client/`) — Browser-only components and hooks

## Tech Stack

- **Language:** TypeScript (strict mode)
- **Framework:** React 19.1.0+
- **Build tool:** Vite 7 with `@vitejs/plugin-react-swc`
- **Linter/Formatter:** Biome 2
- **Docs/Demo:** Storybook 10 (autodocs + interactive component demos)
- **Deployment:** Vercel (serves the Storybook static build)

## Common Commands

```bash
# Build the library
npm run build

# Remove dist/ and storybook-static/
npm run clean

# Run Storybook dev server on port 6006
npm run storybook

# Build Storybook static site (used by Vercel)
npm run build-storybook
```

There is no standalone `lint` or `test` script. Linting (Biome) and type-checking (`tsc --noEmit`) run automatically via the pre-commit hook.

## Code Style

- **Indentation:** Tabs (enforced by Biome)
- **Quotes:** Double quotes
- **Module system:** ES Modules (`"type": "module"`)
- **JSX transform:** `react-jsx` (no need to import React in every file)

Run Biome manually if needed:

```bash
npx biome check --write src/
```

## Architecture Notes

### Package Exports

| Export path       | Entry point                        | Description              |
|-------------------|------------------------------------|--------------------------|
| `"."` (default)   | `dist/react-server.js`             | Server/SSR components    |
| `"./client"`      | `dist/react-client.js`             | Client-only components   |
| `"./styles"`      | `dist/summit-kit.css`              | Global styles            |

### Component Structure

- `src/react/server/` — Areas (Flex, Section), Form, Text, Icon, Image, Types
- `src/react/client/` — Hooks (`useAudio`, `useKeyPress`, `toggleFullScreen`), PageTurner
- `src/styles/` — `global.css`, `colors.css`

### Storybook

Stories are co-located with components as `*.stories.tsx` files. Storybook config lives in `.storybook/` (main.ts, preview.ts). Global styles are imported in `preview.ts`. All stories use CSF3 format with `autodocs` tags for automatic API documentation.

### CSS Modules

Components use CSS Modules (`.module.css` files co-located with the component). Global styles and CSS custom properties (colors) live in `src/styles/`.

## Git Workflow

Pre-commit hooks (via `simple-git-hooks` + `lint-staged`) run automatically on every commit:
1. Type-check (`tsc --noEmit`)
2. Format staged files with Biome
3. Build the project

Do not skip hooks with `--no-verify`.
