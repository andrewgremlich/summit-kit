import { defineConfig } from "vite";
import path from "node:path";

import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

import pkg from "./package.json";

export default defineConfig({
	plugins: [tsconfigPaths(), dts()],
	build: {
		cssCodeSplit: true, // Enables separate CSS files
		lib: {
			entry: path.resolve(__dirname, "lib/index.ts"),
			name: pkg.name,
			fileName: (format) => `${pkg.name}.${format}.js`,
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: ["react", "react-dom", /^react\//],
			output: [
				{
					format: "esm",
					dir: "dist/esm",
				},
				{
					format: "cjs",
					dir: "dist/cjs",
				},
			],
		},
	},
});
