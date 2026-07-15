# Summit Kit

A **dual-framework** (React + Svelte) component library for building modern web applications
with an earthy and outdoorsy flair.

## Project Overview

Summit Kit is a TypeScript-based component library published as an npm package. As of v4 it
ships components for **both React and Svelte** from one package, over a shared,
framework-neutral core. The source is organized as:
- **`src/shared/`** — framework-neutral core: `cx`, `headless`/`themed`, `theme`, `fullscreen`,
  extracted `keypress`/`audio` logic, `highlight` (Shiki), and the styling/token system.
- **`src/react/`** — React components (flat category folders: Areas, Form, Text, Icon, Image,
  Types, Hooks, PageTurner). Client-only modules carry a `"use client"` directive.
- **`src/svelte/`** — Svelte 5 components (same flat category folders + `actions/`).

The React server/client boundary is encoded by per-file `"use client"` directives (not by
entry path); Svelte components are universal, so there is no such split on that side.

## Tech Stack

- **Language:** TypeScript 6.0+ (strict mode)
- **Frameworks:** React 19.1.0+ and Svelte 5 (both optional peer deps — install only what you use)
- **Build tool:** Vite 8.0+ (`@vitejs/plugin-react`, `@sveltejs/vite-plugin-svelte`, Lightning CSS)
  plus `@sveltejs/package` for Svelte `.d.ts` and `rollup-preserve-directives` for `"use client"`.
- **CSS processing:** Lightning CSS (Chrome 100+, Firefox 100+, Safari 14+, Edge 100+)
- **Syntax highlighting:** Shiki (shared by both frameworks' `Code` component). Shiki is an
  **optional peer dependency** — `src/shared/highlight.ts` uses its fine-grained core
  (`shiki/core` + JS engine) and statically imports a curated language set + the dracula theme,
  so only those grammars ship (not shiki's full ~800kB bundle). Unlisted languages fall back to
  plain text; add an import + `SUPPORTED` entry in `highlight.ts` to extend. Shiki subpaths are
  externalized in `vite.config.ts` so they resolve from the consumer's install.
- **Linter/Formatter:** Biome 2.4+ for `.ts/.tsx/.css`; Prettier + `prettier-plugin-svelte` for `.svelte`
- **Type checking:** `tsc --noEmit` (React + shared) and `svelte-check` (Svelte)
- **Docs/Demo:** Static Vite demo apps per framework (`demo/`), deployed to Vercel
- **Dependencies:** lucide-react, @lucide/svelte, shiki, screenfull

## Common Commands

```bash
npm run build              # Build everything: React (Vite) + shared CSS copy + Svelte (svelte-package)
npm run build:react        # React + shared JS only
npm run build:svelte       # Svelte package only (svelte-package)
npm run gen-tokens         # Regenerate colors.css + tokens.module.css from src/shared/styles/tokens.ts
npm test                   # React + Svelte test suites
npm run check              # tsc --noEmit + svelte-check
npm run format             # Biome (.ts/.tsx/.css) + Prettier (.svelte)
npm run demo:react         # Serve the React component gallery (Vite dev server)
npm run demo:svelte        # Serve the Svelte component gallery
npm run build:demo         # Build the static demo site to demo-static/
npm run clean              # Remove dist/ and demo-static/
```

Type-checking (`tsc --noEmit` + `svelte-check`), Biome, and Prettier (`.svelte`) run
automatically via the pre-commit hook. Run Biome manually:

```bash
npx biome check --write src/
```

## Code Style

- **Indentation:** Tabs (enforced by Biome / Prettier)
- **Quotes:** Double quotes
- **Module system:** ES Modules (`"type": "module"`)
- **JSX transform:** `react-jsx` (no React import needed)
- **Svelte:** Svelte 5 runes (`$props`, `$derived`, `$state`); components use `svelte:element`
  for polymorphic `as`, and `Snippet` for children.

## Architecture

### Package Exports

| Export path | Entry point | Description |
|---|---|---|
| `"."` / `"./react"` | `dist/react/index.js` | React components (server-safe + client, one entry) |
| `"./svelte"` | `dist/svelte/index.js` | Svelte components (single universal entry; `svelte` export condition) |
| `"./styles"` | `dist/summit-kit.css` | Optional global reset + typography + palette |
| `"./styles/colors"` · `"./styles/global"` | `dist/colors.css` · `dist/global.css` | The two global sheets individually |

There is **no** `./server` or `./client` export (removed in v4). React's server/client boundary
is the per-file `"use client"` directive, preserved via `rollup-preserve-directives` +
Rollup `preserveModules`. Framework peers (`react`, `react-dom`, `svelte`) are all marked
optional — consumers install only the framework they use.

### Component Structure (mirrored across frameworks)

Both `src/react/` and `src/svelte/` share the same flat category layout:
- **Areas:** Flex, Grid, GridHeader, GridRow, Reading, Section
- **Form:** Form, PrimaryButton, SecondaryButton, Input, Select
- **Text:** Heading (`level` prop; React also exports H1–H6), P, Span, Quote, Ol, Ul, Li, Link, Code
- **Media:** Icon (lucide), Image, Figure
- **Interactions:** PageTurner; React hooks `useAudio`/`useKeyPress`; Svelte `keypress` action +
  `createAudio` rune (both wrap the shared `audio`/`keypress` logic).

**Shared core** (`src/shared/`) — framework-neutral, consumed by both:
- `cx.ts` — class-name merge; `headless.ts` — `setHeadless`/`isHeadless`/`themed`
- `theme.ts` — `setTheme`/`getTheme`/`toggleTheme`; `fullscreen.ts` — `toggleFullScreen`
- `keypress.ts`, `audio.ts` — extracted logic; `highlight.ts` — Shiki wrapper
- `styles/` — `tokens.ts` (source of truth), generated `colors.css` + `tokens.module.css`,
  `global.css`, and the component `*.module.css` files (imported by both frameworks).

> `src/utils/cx.ts`, `headless.ts`, `toggleFullScreen.ts` remain as thin re-export shims to
> `src/shared/*` for backward compatibility within the React tree.

### Fonts

Summit Kit uses the **Molengo** and **Rakkas** Google Fonts. These are not bundled — consumers
optionally load them via a `<link>` tag for the full branded look:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Molengo&family=Rakkas&display=swap" />
```

### Dark Mode / Theming (no required CSS import)

Components are themed **out of the box** in light and dark — importing a stylesheet is
optional. This works via a **self-contained token layer**:
- `src/shared/styles/tokens.ts` is the single source of truth for every `--sk-*` token
  (primitives + semantic tokens with resolved `light`/`dark` values).
- `scripts/gen-tokens.ts` (`npm run gen-tokens`) generates two files from it — never hand-edit them:
  - `colors.css` — the **optional** global override (`:root`, `[data-theme]`, `prefers-color-scheme`).
  - `tokens.module.css` — a `.tokens` layer that component CSS `composes`, baking in the
    light/dark `--sk-*` values so a component is themed with no global stylesheet.
- **Switch themes** with `setTheme("dark" | "light" | "system")` (toggles `data-theme`).
- **Override the palette** by setting `--sk-*` vars on `:root`/an ancestor, or `import "summit-kit/styles"`.

### Headless Mode

Components are styled by default (CSS Modules + composed token layer). For headless usage:
1. Call `setHeadless(true)` from either entry to suppress CSS-module class names.
2. Pass custom classes via the component's `class` (Svelte) / `classes` (React) prop.

All CSS-module imports are wrapped with `themed()` from `src/shared/headless.ts`, which returns
empty strings for class names when headless mode is active.

### Contribution rule — keep the core shared

New components should keep **styling and logic in `src/shared/`** (CSS modules, token layer,
extracted behavior) and keep the per-framework `.tsx`/`.svelte` files as thin shells over it.
This is what makes a component cheap to offer in both frameworks. Svelte has **no** server/client
folder split (components are universal); new Svelte components go directly in the flat `src/svelte/`
tree, and new React client-only modules must start with the `"use client"` directive.

### Demos

The **demos (`demo/`)** are the component galleries and the docs/deploy target — Summit Kit
does not use Storybook. There is one small Vite app per framework (`demo/react/`,
`demo/svelte/`) that imports components straight from `src/`, renders each one alongside its
**usage snippet**, plus a landing page (`demo/index.html`) linking both.

- Dev servers: `npm run demo:react` / `npm run demo:svelte`.
- `npm run build:demo` (`scripts/build-demo.ts`) builds all three into `demo-static/`;
  `vercel.json` deploys that.
- Because each demo is a real Vite build against the source, it doubles as an end-to-end smoke
  test of both entries.

When adding a component, add it to the matching demo app (render + usage snippet).

### CSS Modules

Components use CSS Modules (`.module.css`) that live in `src/shared/styles/components/` so
**both frameworks import the same source**. Global styles and CSS custom properties are in
`src/shared/styles/`. Component CSS references `--sk-*` tokens and `composes` the `.tokens`
layer for self-contained theming. All components use `cx()` from `src/shared/cx.ts`.

At build time these `*.module.css` files are consumed two ways: React (Vite) compiles them to
class-map JS; the Svelte package ships them raw for the consumer's bundler. Both formats coexist
under `dist/shared/styles/components/`.

## Git Workflow

Pre-commit hooks (via `simple-git-hooks` + `lint-staged`) run on every commit:
1. Type-check both frameworks (`tsc --noEmit` + `svelte-check`)
2. Format staged files — Biome (`.ts/.tsx/.css`) and Prettier (`.svelte`)
3. Run related tests (`vitest related`)

Do not skip hooks with `--no-verify`.
