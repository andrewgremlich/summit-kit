import { resolve } from "node:path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

// Demo app for the Svelte entry. Imports components straight from ../../src/svelte.
export default defineConfig({
	root: __dirname,
	plugins: [svelte()],
	base: "./",
	build: {
		outDir: resolve(__dirname, "../../demo-static/svelte"),
		emptyOutDir: true,
	},
});
