// Single flat public entry for the Svelte build — summit-kit/svelte.
// Svelte components are universal (SSR + hydrate), so there is no server/client split.
//
// This entry deliberately does NOT import global styles. Components are themed out of the
// box via their composed token layer, so no stylesheet import is required. Consumers who
// want the global reset + palette override can `import "summit-kit/styles"` separately.

export { isHeadless, setHeadless } from "../shared/headless.js";
export { getTheme, setTheme, toggleTheme } from "../shared/theme.js";

export { default as Flex } from "./Areas/Flex.svelte";
