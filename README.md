# Summit Kit

A component library for building modern web applications with an earthy and outdoorsy
flair — available for both **React** and **Svelte** from one package.

[Live Demo & Documentation](https://summit-kit.gremlich.dev)

## Installation

```bash
npm install summit-kit
```

Then install the peer dependency for the framework you use (only one is required):

```bash
# React
npm install react react-dom

# Svelte
npm install svelte
```

## Quick Start

Optionally load the Molengo & Rakkas Google Fonts in your HTML `<head>` for the full look:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Molengo&family=Rakkas&display=swap" />
```

Components are **themed out of the box** (light + dark) — no stylesheet import is required.

### React

```tsx
import { Section, Heading, P, PrimaryButton, PageTurner } from "summit-kit/react";

function App() {
  return (
    <Section>
      <Heading level={1}>Welcome</Heading>
      <P>Build something great with Summit Kit.</P>
      <PrimaryButton>Get Started</PrimaryButton>
    </Section>
  );
}
```

`summit-kit` is an alias for `summit-kit/react`. Client-only components (`PageTurner`,
the hooks) carry a `"use client"` directive, so they work in React Server Components /
Next.js without a separate import path — server components in the same entry stay
server-renderable.

### Svelte

```svelte
<script>
  import { Section, Heading, P, PrimaryButton } from "summit-kit/svelte";
</script>

<Section>
  <Heading level={1}>Welcome</Heading>
  <P>Build something great with Summit Kit.</P>
  <PrimaryButton>Get Started</PrimaryButton>
</Section>
```

## Theming

Every component is themed by default via a self-contained token layer with baked-in
light + dark values, so nothing breaks if you never import a stylesheet.

- **Switch themes** with `setTheme("dark" | "light" | "system")` (exported from both entries).
  It toggles a `data-theme` attribute; components and the optional global styles both respond.
- **Override the palette** by setting the `--sk-*` CSS custom properties on `:root` (or any
  ancestor), or by importing the global stylesheet:

  ```ts
  import "summit-kit/styles"; // optional: global reset + branded typography + palette
  ```

- **Go headless** with `setHeadless(true)` to strip the built-in class names and style
  components entirely yourself (pass your own classes via the component's `class`/`classes` prop).

## Exports

| Import path | Description |
|---|---|
| `summit-kit` / `summit-kit/react` | React components (server-safe + client, one entry) |
| `summit-kit/svelte` | Svelte components (single universal entry) |
| `summit-kit/styles` | Optional global reset, typography, and palette |
| `summit-kit/styles/colors` · `summit-kit/styles/global` | The two global sheets individually |

## Components

**Layout:** Section, Reading, Flex, Grid, GridHeader, GridRow

**Text:** Heading (`level={1..6}`), P, Span, Quote, Ol, Ul, Li, Link, Code (Shiki-highlighted)

**Form:** Form, Input, Select, PrimaryButton, SecondaryButton

**Media:** Image, Figure, Icon

**Interactions:** PageTurner, plus keyboard/audio helpers
— React: `useKeyPress`, `useAudio`; Svelte: the `keypress` action and `createAudio` rune.

## Development

```bash
npm run build        # Build the library (React + shared + Svelte)
npm test             # Run React + Svelte test suites
npm run check        # Type-check both frameworks (tsc + svelte-check)
npm run format       # Format with Biome (.ts/.tsx/.css) + Prettier (.svelte)
```

> Storybook (`npm run storybook` / `storybook:svelte`) is configured but currently does not
> build under Vite 8 / Rolldown + Storybook 10; see the project notes.

## License

[MIT](LICENSE)
