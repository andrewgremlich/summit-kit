import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "../Areas/index.tsx";
import { Icon } from "./index.tsx";

const meta: Meta<typeof Icon> = {
	title: "Server/Icon",
	component: Icon,

	argTypes: {
		name: {
			control: "text",
			description: "Lucide icon name (e.g. Activity, Heart, Star)",
		},
		size: { control: { type: "number", min: 12, max: 96 } },
		color: { control: "color" },
	},
};

export default meta;

export const Default: StoryObj<typeof Icon> = {
	args: {
		name: "Activity",
		size: 24,
		color: "currentColor",
	},
};

export const Large: StoryObj<typeof Icon> = {
	args: {
		name: "Heart",
		size: 48,
		color: "red",
	},
};

export const IconGallery: StoryObj = {
	name: "Gallery",
	render: () => (
		<Flex direction="row" justify="start" items="center" wrap="wrap">
			<Icon name="Activity" size={32} color="white" />
			<Icon name="Airplay" size={32} color="white" />
			<Icon name="Check" size={32} color="white" />
			<Icon name="Heart" size={32} color="white" />
			<Icon name="Star" size={32} color="white" />
			<Icon name="Sun" size={32} color="white" />
			<Icon name="Moon" size={32} color="white" />
			<Icon name="House" size={32} color="white" />
			<Icon name="User" size={32} color="white" />
			<Icon name="Settings" size={32} color="white" />
		</Flex>
	),
};
