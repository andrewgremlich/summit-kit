import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "../Areas/index.tsx";
import { Icon } from "./index.tsx";

const meta: Meta<typeof Icon> = {
	title: "Server/Icon",
	component: Icon,

	argTypes: {
		name: {
			control: "text",
			description: "Feather icon name from react-icons/fi",
		},
		size: { control: { type: "number", min: 12, max: 96 } },
		color: { control: "color" },
	},
};

export default meta;

export const Default: StoryObj<typeof Icon> = {
	args: {
		name: "FiActivity",
		size: 24,
		color: "currentColor",
	},
};

export const Large: StoryObj<typeof Icon> = {
	args: {
		name: "FiHeart",
		size: 48,
		color: "red",
	},
};

export const IconGallery: StoryObj = {
	name: "Gallery",
	render: () => (
		<Flex direction="row" justify="flex-start" align="center" wrap="wrap">
			<Icon name="FiActivity" size={32} color="white" />
			<Icon name="FiAirplay" size={32} color="white" />
			<Icon name="FiCheck" size={32} color="white" />
			<Icon name="FiHeart" size={32} color="white" />
			<Icon name="FiStar" size={32} color="white" />
			<Icon name="FiSun" size={32} color="white" />
			<Icon name="FiMoon" size={32} color="white" />
			<Icon name="FiHome" size={32} color="white" />
			<Icon name="FiUser" size={32} color="white" />
			<Icon name="FiSettings" size={32} color="white" />
		</Flex>
	),
};
