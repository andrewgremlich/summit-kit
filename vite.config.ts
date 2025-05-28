import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => ({
	plugins: [
		tsconfigPaths(),
		react(),
		dts({
			entryRoot: "src",
		}),
	],
	// See: https://vitejs.dev/guide/build.html#library-mode
	// css: {
	// 	transformer: "lightningcss" as const,
	// 	lightningcss: {
	// 		targets: {
	// 			chrome: 100,
	// 			firefox: 100,
	// 			safari: 14,
	// 			edge: 100,
	// 		},
	// 	},
	// },
	build: {
		// cssTarget: ["chrome100", "firefox100", "safari14", "edge100"],
		// cssMinify: true,
		minify: true,
		target: "es2022",
		outDir: "./dist/",
		emptyOutDir: true,
		sourcemap: true,
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
		lib: {
			entry: {
				"react-server": "src/react/index.ts",
				"react-client": "src/react/client.ts",
			},
			name: "summit-kit",
			// Change this to the formats you want to support.
			// Don't forget to update your package.json as weqll.
			formats: ["es" as const],
		},
		rollupOptions: {
			// External packages that should not be bundled into your library.
			external: ["react", "react-dom", "react/jsx-runtime"],
		},
	},
	test: {
		watch: false,
		globals: true,
		environment: "jsdom",
		include: ["{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		reporters: ["default"],
		coverage: {
			reportsDirectory: "./test-output/vitest/coverage",
			provider: "v8" as const,
		},
	},
}));
