import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { type Plugin, defineConfig } from "vite";
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
			// @ts-expect-error -- lightningcss is available via vite
			const { bundle } = await import("lightningcss");
			const files = ["colors.css", "global.css"];
			for (const file of files) {
				const input = resolve(__dirname, "src/styles", file);
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
	plugins: [
		react(),
		dts({
			entryRoot: "src",
		}),
		standaloneCSS(),
	],
	resolve: {
		tsconfigPaths: true,
	},
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
		sourcemap: true,
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
		lib: {
			entry: {
				"react-server": "src/react/server/index.ts",
				"react-client": "src/react/client/index.ts",
			},
			name: "summit-kit",
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
		setupFiles: ["./src/test-setup.ts"],
		include: ["{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		reporters: ["default"],
		coverage: {
			reportsDirectory: "./test-output/vitest/coverage",
			provider: "v8" as const,
		},
	},
}));
