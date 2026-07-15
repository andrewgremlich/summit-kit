// Single flat public entry for the Svelte build — summit-kit/svelte.
// Svelte components are universal (SSR + hydrate), so there is no server/client split.
//
// This entry deliberately does NOT import global styles. Components are themed out of the
// box via their composed token layer, so no stylesheet import is required. Consumers who
// want the global reset + palette override can `import "summit-kit/styles"` separately.

export { toggleFullScreen } from "../shared/fullscreen.js";
// Shared, framework-neutral runtime helpers
export { isHeadless, setHeadless } from "../shared/headless.js";
export { getTheme, setTheme, toggleTheme } from "../shared/theme.js";

// Areas
export { default as Flex } from "./Areas/Flex.svelte";
export { default as Grid } from "./Areas/Grid.svelte";
export { default as GridHeader } from "./Areas/GridHeader.svelte";
export { default as GridRow } from "./Areas/GridRow.svelte";
export { default as Reading } from "./Areas/Reading.svelte";
export { default as Section } from "./Areas/Section.svelte";
export { createAudio } from "./actions/audio.svelte.js";
export { keypress } from "./actions/keypress.js";
// Form
export { default as Form } from "./Form/Form.svelte";
export { default as Input } from "./Form/Input.svelte";
export { default as PrimaryButton } from "./Form/PrimaryButton.svelte";
export { default as SecondaryButton } from "./Form/SecondaryButton.svelte";
export { default as Select } from "./Form/Select.svelte";
// Media
export { default as Icon } from "./Icon/Icon.svelte";
export { default as Figure } from "./Image/Figure.svelte";
export { default as Image } from "./Image/Image.svelte";
// Interactions
export { default as PageTurner } from "./PageTurner/PageTurner.svelte";
export { default as Code } from "./Text/Code.svelte";
// Text
export { default as Heading } from "./Text/Heading.svelte";
export { default as Li } from "./Text/Li.svelte";
export { default as Link } from "./Text/Link.svelte";
export { default as Ol } from "./Text/Ol.svelte";
export { default as P } from "./Text/P.svelte";
export { default as Quote } from "./Text/Quote.svelte";
export { default as Span } from "./Text/Span.svelte";
export { default as Ul } from "./Text/Ul.svelte";
