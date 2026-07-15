// Single public entry for the React build — summit-kit/react.
//
// Client-only modules (Hooks, PageTurner) carry a "use client" directive, preserved per-file
// via preserveModules + rollup-preserve-directives, so React Server Components / Next.js
// resolve the server/client boundary automatically — no separate entry point needed.
//
// This entry deliberately does NOT import global styles. Components are themed out of the box
// via their composed token layer, so no stylesheet import is required. Consumers who want the
// global reset + palette override can `import "summit-kit/styles"` separately.

// Shared, framework-neutral runtime helpers
export { isHeadless, setHeadless } from "../shared/headless.js";

// Areas
export * from "./Areas/index.tsx";
// Form
export * from "./Form/index.tsx";
// Interactions (client-only, "use client")
export {
	getTheme,
	setTheme,
	toggleFullScreen,
	toggleTheme,
	useAudio,
	useKeyPress,
} from "./Hooks/index.tsx";
// Media
export * from "./Icon/index.tsx";
export * from "./Image/index.tsx";
export { PageTurner } from "./PageTurner/index.tsx";
// Text
export * from "./Text/index.tsx";
// Types
export * from "./Types/general.ts";
