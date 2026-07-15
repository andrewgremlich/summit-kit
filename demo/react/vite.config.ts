import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Demo app for the React entry. Imports components straight from ../../src/react so the
// gallery always reflects the current source (no build step against dist needed).
export default defineConfig({
	root: __dirname,
	plugins: [react()],
	base: "./",
	build: {
		outDir: resolve(__dirname, "../../demo-static/react"),
		emptyOutDir: true,
	},
});
