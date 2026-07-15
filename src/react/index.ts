// Single public entry for the React build — summit-kit/react.
//
// Server-safe and client-only components live in one entry; client-only modules carry a
// "use client" directive (preserved per-file via preserveModules + rollup-preserve-directives),
// so React Server Components / Next.js resolve the boundary automatically.
//
// This entry deliberately does NOT import global styles. Components are themed out of the box
// via their composed token layer, so no stylesheet import is required. Consumers who want the
// global reset + palette override can `import "summit-kit/styles"` separately.

// Shared, framework-neutral runtime helpers
export { isHeadless, setHeadless } from "../shared/headless.js";
// Client-only components + hooks (each source module carries "use client")
export {
	getTheme,
	setTheme,
	toggleFullScreen,
	toggleTheme,
	useAudio,
	useKeyPress,
} from "./client/Hooks/index.tsx";
export { PageTurner } from "./client/PageTurner/index.tsx";
// Server-safe components
export * from "./server/Areas/index.tsx";
export * from "./server/Form/index.tsx";
export * from "./server/Icon/index.tsx";
export * from "./server/Image/index.tsx";
export * from "./server/Text/index.tsx";
export * from "./server/Types/general.ts";
