import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import preserveDirectives from "rollup-preserve-directives";
import { defineConfig, type Plugin } from "vite";
import dts from "vite-plugin-dts";

const cssTargets = {
	chrome: 100 << 16,
	firefox: 100 << 16,
	safari: 14 << 16,
	edge: 100 << 16,
};

function standaloneCSS(): Plugin {
	return {
		name: "standalone-css",
		async closeBundle() {
			const { bundle } = await import("lightningcss");
			const files = ["colors.css", "global.css"];
			for (const file of files) {
				const input = resolve(__dirname, "src/shared/styles", file);
				const { code } = bundle({
					filename: input,
					minify: true,
					targets: cssTargets,
				});
				writeFileSync(resolve(__dirname, "dist", file), code);
			}
		},
	};
}

export default defineConfig(() => ({
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [
		react(),
		preserveDirectives(),
		dts({
			entryRoot: "src",
			// Only emit declarations for shippable source, not tests, stories, or the
			// Svelte tree (svelte-package owns those types).
			exclude: [
				"**/*.test.*",
				"**/*.stories.*",
				"src/test-setup.ts",
				"src/svelte/**",
			],
		}),
		standaloneCSS(),
	],
	css: {
		transformer: "lightningcss" as const,
		lightningcss: {
			targets: {
				chrome: 100 << 16,
				firefox: 100 << 16,
				safari: 14 << 16,
				edge: 100 << 16,
			},
		},
	},
	build: {
		cssMinify: "lightningcss" as const,
		minify: true,
		target: "es2022",
		outDir: "./dist/",
		emptyOutDir: true,
		// Maps are not shipped (see package.json "files"); disable to avoid dangling
		// sourceMappingURL references in the published output.
		sourcemap: false,
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
		lib: {
			entry: {
				"react/index": "src/react/index.ts",
			},
			name: "summit-kit",
			formats: ["es" as const],
		},
		rollupOptions: {
			// External packages that should not be bundled into your library.
			external: [
				"react",
				"react-dom",
				"react/jsx-runtime",
				"shiki",
				"lucide-react",
				"screenfull",
			],
			output: {
				// Preserve per-file module structure so each component keeps its own
				// "use client" banner and stays independently tree-shakeable. Shared code
				// (imported from ../shared and the ../utils shims) is emitted alongside under
				// dist/shared + dist/utils; the Svelte package reuses those same files.
				preserveModules: true,
				preserveModulesRoot: "src",
				entryFileNames: "[name].js",
			},
		},
	},
	test: {
		watch: false,
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/test-setup.ts"],
		include: ["{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		reporters: ["default"],
		coverage: {
			reportsDirectory: "./test-output/vitest/coverage",
			provider: "v8" as const,
		},
	},
}));
