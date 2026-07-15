/**
 * Copies the raw framework-neutral CSS into dist/shared/styles so the packaged Svelte
 * components' `*.module.css` imports resolve. React consumes the compiled `*.module.js`
 * emitted by the Vite build; Svelte consumes these raw `.module.css` files (its consumer's
 * bundler compiles them). Both live side by side under dist/shared/styles.
 *
 * Run after the React Vite build (which emits dist/shared/*.js) so nothing is clobbered.
 */
import { cpSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(HERE, "..");

cpSync(
	resolve(root, "src/shared/styles"),
	resolve(root, "dist/shared/styles"),
	{ recursive: true },
);

console.log("Copied raw shared CSS into dist/shared/styles");
