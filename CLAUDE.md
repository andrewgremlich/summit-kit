# Summit Kit

A React component library for building modern web applications with an earthy and outdoorsy flair.

## Project Overview

Summit Kit is a TypeScript-based component library published as an npm package (version 3.2.2). It provides React components split into two categories:
- **Server components** (`src/react/server/`) — SSR-compatible components for layout, text, forms, and media
- **Client components** (`src/react/client/`) — Browser-only components and hooks

## Tech Stack

- **Language:** TypeScript 5.9+ (strict mode)
- **Framework:** React 19.1.0+
- **Build tool:** Vite 7.3+ with `@vitejs/plugin-react-swc`
- **Linter/Formatter:** Biome 2.4+
- **Docs/Demo:** Storybook 10.2+ (autodocs + interactive demos)
- **Dependencies:** lucide-react, prism-react-renderer, screenfull, uuid

## Common Commands

```bash
npm run build              # Build the library
npm run clean              # Remove dist/ and storybook-static/
npm run storybook          # Run Storybook dev server on port 6006
npm run build-storybook    # Build Storybook static site
```

Linting (Biome) and type-checking (`tsc --noEmit`) run automatically via pre-commit hook. Run Biome manually:

```bash
npx biome check --write src/
```

## Code Style

- **Indentation:** Tabs (enforced by Biome)
- **Quotes:** Double quotes
- **Module system:** ES Modules (`"type": "module"`)
- **JSX transform:** `react-jsx` (no React import needed)

## Architecture

### Package Exports

| Export path       | Entry point                        | Description              |
|-------------------|------------------------------------|--------------------------|
| `"."` / `"./server"` | `dist/react-server.js`          | Server/SSR components    |
| `"./client"`      | `dist/react-client.js`             | Client-only components   |
| `"./styles"`      | `dist/summit-kit.css`              | Global styles            |

### Component Structure

**Server Components** (`src/react/server/`):
- **Areas:** Reading, Section, Flex, Grid (GridHeader, GridRow)
- **Form:** Buttons, Form, Inputs, Select
- **Text:** Body, Code, Headings, Link
- **Media:** Icon, Image
- **Types:** StandardProps, general types

**Client Components** (`src/react/client/`):
- **Hooks:** useAudio, useKeyPress, toggleFullScreen, setTheme/getTheme/toggleTheme
- **Components:** PageTurner

**Utilities** (`src/utils/`):
- `cx.ts` — Class name merging utility (handles strings, arrays, falsy values)
- `headless.ts` — Headless mode support (`setHeadless`, `isHeadless`, `themed`)

**Styles** (`src/styles/`): global.css, colors.css

### Dark Mode / Theming

Theme support uses semantic CSS custom properties (e.g., `--text-color`, `--bg-gradient-start`, `--btn-primary-bg`) defined in `colors.css`. These variables change based on:
- `:root` — light theme defaults
- `@media (prefers-color-scheme: dark) { :root:not([data-theme]) }` — OS dark mode preference
- `[data-theme="dark"]` / `[data-theme="light"]` — explicit overrides via `data-theme` attribute

Consumers toggle themes programmatically via `setTheme("dark" | "light" | "system")` from `summit-kit/client`.

### Headless Mode

Components are opinionated by default (styled via CSS Modules). For headless usage:
1. Skip importing `summit-kit/styles`
2. Call `setHeadless(true)` from `summit-kit` or `summit-kit/client` to suppress CSS module class names
3. Pass custom classes via the `classes` prop

All CSS module imports are wrapped with `themed()` from `src/utils/headless.ts`, which returns empty strings for class names when headless mode is active.

### Storybook

Stories are co-located as `*.stories.tsx` files. Config in `.storybook/` (main.ts, preview.ts). All stories use CSF3 format with `autodocs` tags.

### CSS Modules

Components use CSS Modules (`.module.css`) co-located with components. Global styles and CSS custom properties in `src/styles/`. All components use the `cx()` utility from `src/utils/cx.ts` for consistent class merging.

## Git Workflow

Pre-commit hooks (via `simple-git-hooks` + `lint-staged`) run on every commit:
1. Type-check (`tsc --noEmit`)
2. Format staged files with Biome
3. Build the project

Do not skip hooks with `--no-verify`.
