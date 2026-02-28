# Implementation TODO

Items identified from codebase evaluation. Prioritised by impact.

## High Priority

- [ ] **Extract `cx()` class-merge utility** (`src/utils/cx.ts`)
  Replace the duplicated class concatenation pattern in all text + icon components (H1–H6, P, Quote, Span, Ol, Ul, Li, Link, Icon).

- [ ] **Fix UUID keys in `Code` component** (`src/react/server/Text/Code.tsx`)
  Replace `uuid.v4()` per-render keys with stable index-based keys (`line-${i}`, `token-${i}-${j}`). Remove `uuid` dependency.

- [ ] **Remove hardcoded input width** (`src/react/server/Form/styles.module.css`)
  Change `width: 300px` to `width: 100%` (or a CSS custom property) so `Input` is usable in any container.

## Medium Priority

- [ ] **Add dependency array to `useKeyPress`** (`src/react/client/Hooks/useKeyPress.tsx`)
  The `useEffect` has no dependency array — add `[shortcuts]` or a stabilised ref to prevent re-registering listeners on every render.

- [ ] **Sync `useAudio` volume/stereo state** (`src/react/client/Hooks/useAudio.tsx`)
  `setVolume` and `setStereo` update `optionsRef.current` but the returned `volume` value is stale. Keep state and ref in sync.

## Low Priority

- [ ] **Migrate `Flex` inline styles to CSS custom properties** (`src/react/server/Areas/index.tsx`)
  Set `--flex-direction`, `--flex-justify`, etc. as CSS vars instead of direct `style` props to allow CSS-level overrides.

- [ ] **Move `toggleFullScreen` out of Hooks** (`src/react/client/Hooks/`)
  It is a plain utility function, not a hook. Move to `src/utils/toggleFullScreen.ts` and update exports.

- [ ] **Move `Code` inline styles to CSS module** (`src/react/server/Text/Code.tsx`)
  The `<pre>` element has hardcoded `padding` and `borderRadius` inline — move these to `styles.module.css`.
