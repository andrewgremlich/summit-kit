/**
 * Single source of truth for Summit Kit design tokens.
 *
 * The `scripts/gen-tokens.ts` generator consumes this file to emit:
 *  - `colors.css`          — the global override stylesheet (`:root`, `[data-theme]`,
 *                            `prefers-color-scheme`). Importing `summit-kit/styles` sets
 *                            these; consumers can also set any `--sk-*` var themselves.
 *  - `tokens.module.css`   — the self-contained token layer that components `composes`, so
 *                            each component is themed (light + dark) with NO global import.
 *
 * All tokens are namespaced `--sk-*` to avoid collisions in consumer apps.
 *
 * - `primitive` tokens have a single value regardless of theme (the raw palette).
 * - `semantic`  tokens carry `light` + `dark` values and flip with the active theme.
 *
 * Edit values here, then run `npm run gen-tokens` to regenerate the CSS. Do not hand-edit
 * the generated `.css` files.
 */

/** Raw palette — one value each, theme-independent. Keys become `--sk-<key>`. */
export const primitives: Record<string, string> = {
	white: "#fefefe",
	"grey-50": "#e5e5e5",
	"grey-100": "#cccccc",
	"grey-200": "#b3b3b3",
	"grey-300": "#999999",
	"grey-400": "#808080",
	"grey-500": "#666666",
	"grey-600": "#4d4d4d",
	"grey-700": "#333333",
	"grey-800": "#1a1a1a",
	black: "#000000",

	"red-50": "#f0e5e5",
	"red-100": "#e0cccc",
	"red-200": "#d1b3b3",
	"red-300": "#c29999",
	"red-400": "#b38080",
	"red-500": "#a36666",
	"red-600": "#944d4d",
	"red-700": "#853333",
	"red-800": "#751a1a",
	"red-900": "#660000",

	"blue-50": "#e5e9f0",
	"blue-100": "#ccd4e0",
	"blue-200": "#b3bdcf",
	"blue-300": "#9ba7bf",
	"blue-400": "#8290ae",
	"blue-500": "#6a7a9e",
	"blue-600": "#51638d",
	"blue-700": "#394d7d",
	"blue-800": "#21366c",
	"blue-900": "#0a205c",

	"green-50": "#ecfdf5",
	"green-100": "#e4eae8",
	"green-200": "#a4f4cf",
	"green-300": "#b1c1ba",
	"green-400": "#98ada4",
	"green-500": "#7f9a8f",
	"green-600": "#67867a",
	"green-700": "#007a55",
	"green-800": "#386152",
	"green-850": "#1f4f3f",
	"green-900": "#004f3b",

	"purple-50": "#e9e5f0",
	"purple-100": "#d4cce0",
	"purple-200": "#beb3d1",
	"purple-300": "#a89bc2",
	"purple-400": "#8f82b3",
	"purple-500": "#776aa3",
	"purple-600": "#5e5194",
	"purple-700": "#463985",
	"purple-800": "#2d2136",
	"purple-900": "#150a1a",

	"primary-color-dark": "#173a2a",
	"secondary-color-dark": "#3b1c17",
	"tertiary-color-dark": "#507a67",

	"primary-color-light": "#a8bab2",
	"secondary-color-light": "#e5b0a8",
	"tertiary-color-light": "#e5b0a8",

	"border-radius": "0.5rem",
};

/**
 * Semantic tokens — resolved literal values for each theme. `light` is also the baked-in
 * fallback used when no global stylesheet / override is present. Keys become `--sk-<key>`.
 */
export const semantics: Record<string, { light: string; dark: string }> = {
	"bg-gradient-start": { light: "#a4f4cf", dark: "#004f3b" }, // green-200 / green-900
	"bg-gradient-end": { light: "#ecfdf5", dark: "#007a55" }, // green-50 / green-700

	"text-color": { light: "#1a1a1a", dark: "#e5e5e5" }, // grey-800 / grey-50

	"link-color": { light: "#0a205c", dark: "#ccd4e0" }, // blue-900 / blue-100
	"link-decoration-color": { light: "#67867a", dark: "#98ada4" }, // green-600 / green-400
	"link-hover-color": { light: "#944d4d", dark: "#d1b3b3" }, // red-600 / red-200
	"link-hover-decoration-color": { light: "#386152", dark: "#7f9a8f" }, // green-800 / green-500

	"input-border-color": { light: "#751a1a", dark: "#944d4d" }, // red-800 / red-600
	"input-border-focus-color": { light: "#853333", dark: "#853333" }, // red-700 / red-700

	"btn-primary-bg": { light: "#d1b3b3", dark: "#751a1a" }, // red-200 / red-800
	"btn-primary-color": { light: "#000000", dark: "#fefefe" }, // black / white
	"btn-primary-hover-bg": { light: "#c29999", dark: "#853333" }, // red-300 / red-700
	"btn-primary-disabled-bg": { light: "#e0cccc", dark: "#944d4d" }, // red-100 / red-600

	"btn-secondary-bg": { light: "#e4eae8", dark: "#004f3b" }, // green-100 / green-900
	"btn-secondary-color": { light: "#1a1a1a", dark: "#e5e5e5" }, // grey-800 / grey-50
	"btn-secondary-hover-bg": { light: "#a4f4cf", dark: "#1f4f3f" }, // green-200 / green-850
	"btn-secondary-disabled-bg": { light: "#ecfdf5", dark: "#67867a" }, // green-50 / green-600
};
