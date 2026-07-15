import type { Meta, StoryObj } from "@storybook/svelte";
import Flex from "./Flex.svelte";

const meta: Meta<Flex> = {
	title: "Svelte/Areas/Flex",
	component: Flex,
	tags: ["autodocs"],
	argTypes: {
		direction: {
			control: "select",
			options: ["row", "row-reverse", "col", "col-reverse"],
		},
		justify: {
			control: "select",
			options: ["start", "end", "center", "between", "around", "evenly"],
		},
		items: {
			control: "select",
			options: ["start", "end", "center", "baseline", "stretch"],
		},
		gap: { control: "text" },
		inline: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj<Flex>;

export const Row: Story = {
	args: { direction: "row", gap: 16, justify: "center", items: "center" },
};

export const Column: Story = {
	args: { direction: "col", gap: 8 },
};
