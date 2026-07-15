import { cpSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";

/**
 * Copies the framework-neutral CSS (component `*.module.css`, the composed `tokens.module.css`,
 * and the global `colors.css`/`global.css`) into dist/shared/styles so the packaged Svelte
 * components' CSS-module imports resolve at `dist/shared/styles/...`. The consumer's bundler
 * compiles these `.module.css` files (Vite handles CSS Modules out of the box).
 */
function copySharedStyles(): Plugin {
	return {
		name: "copy-shared-styles",
		closeBundle() {
			cpSync(
				resolve(__dirname, "src/shared/styles"),
				resolve(__dirname, "dist/shared/styles"),
				{ recursive: true },
			);
		},
	};
}

/**
 * Builds the framework-neutral shared core into dist/shared/ as preserved-module ESM.
 *
 * Both the React entries and the Svelte package (dist/svelte) import the shared core from
 * dist/shared/*.js, so it must exist as real, individually-resolvable files (not bundled
 * into a single chunk). Kept as its own Vite build because `preserveModules` is a global
 * output option and would otherwise conflict with the bundled React lib entries.
 */
export default defineConfig({
	plugins: [copySharedStyles()],
	build: {
		target: "es2022",
		outDir: "./dist/shared",
		emptyOutDir: true,
		sourcemap: true,
		minify: false,
		lib: {
			entry: {
				cx: "src/shared/cx.ts",
				headless: "src/shared/headless.ts",
				theme: "src/shared/theme.ts",
				fullscreen: "src/shared/fullscreen.ts",
				keypress: "src/shared/keypress.ts",
				audio: "src/shared/audio.ts",
				highlight: "src/shared/highlight.ts",
			},
			formats: ["es"],
		},
		rollupOptions: {
			external: ["screenfull", "shiki"],
			output: {
				preserveModules: true,
				preserveModulesRoot: "src/shared",
				entryFileNames: "[name].js",
			},
		},
	},
});
