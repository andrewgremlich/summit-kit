import type { StorybookConfig } from "@storybook/svelte-vite";

const config: StorybookConfig = {
	stories: ["../src/svelte/**/*.stories.@(ts|svelte)"],
	framework: "@storybook/svelte-vite",
	addons: ["@storybook/addon-a11y"],
};

export default config;
