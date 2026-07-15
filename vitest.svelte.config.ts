import { svelte } from "@sveltejs/vite-plugin-svelte";
import { svelteTesting } from "@testing-library/svelte/vite";
import { defineConfig } from "vitest/config";

/**
 * Vitest config for Svelte component tests (@testing-library/svelte). Kept separate from the
 * React build config so the Svelte compiler plugin only loads here. Run via `npm run test:svelte`.
 */
export default defineConfig({
	plugins: [svelte(), svelteTesting()],
	test: {
		watch: false,
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/test-setup.ts"],
		include: ["src/svelte/**/*.{test,spec}.{js,ts}"],
		reporters: ["default"],
	},
});
