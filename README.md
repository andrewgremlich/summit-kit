# Summit Kit

A React component library for building modern web applications with an earthy and outdoorsy flair.

[Live Demo & Documentation](https://summit-kit.gremlich.dev)

## Installation

```bash
npm install summit-kit
```

### Peer Dependencies

Summit Kit requires React 19.1.0+:

```bash
npm install react react-dom
```

## Quick Start

Add the required Google Fonts to your HTML `<head>`:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Molengo&family=Rakkas&display=swap" />
```

Import the global styles in your app entry point:

```tsx
import "summit-kit/styles";
```

Use server components for SSR-compatible layouts, text, and forms:

```tsx
import { Section, H1, P, PrimaryButton } from "summit-kit";

function App() {
  return (
    <Section>
      <H1>Welcome</H1>
      <P>Build something great with Summit Kit.</P>
      <PrimaryButton>Get Started</PrimaryButton>
    </Section>
  );
}
```

Use client components for browser-only interactivity:

```tsx
import { PageTurner } from "summit-kit/client";
```

## Exports

Summit Kit provides three entry points:

| Import path | Description |
|---|---|
| `summit-kit` or `summit-kit/server` | Server/SSR-compatible components |
| `summit-kit/client` | Client-only components and hooks |
| `summit-kit/styles` | Global stylesheet and CSS custom properties |

### Server Components

**Layout:** Section, Reading, Flex, Grid, GridHeader, GridRow

**Text:** H1 -- H6, P, Span, Quote, Ol, Ul, Li, Link, Code

**Form:** Form, Input, Select, PrimaryButton, SecondaryButton

**Media:** Image, Icon, Figure

### Client Components & Hooks

**Components:** PageTurner

**Hooks:** useAudio, useKeyPress, toggleFullScreen

## Development

```bash
npm run storybook          # Run Storybook dev server on port 6006
npm run build              # Build the library
npm run build-storybook    # Build Storybook static site
```

## License

[MIT](LICENSE)
