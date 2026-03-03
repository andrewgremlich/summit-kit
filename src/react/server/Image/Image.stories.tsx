import type { Meta, StoryObj } from "@storybook/react";

import { Figure, Image } from "./index.tsx";

const meta: Meta<typeof Image> = {
	title: "Server/Image",
	component: Image,
	tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Image> = {
	args: {
		src: "https://placehold.co/600x400",
		alt: "Placeholder image",
		width: "100%",
	},
};

export const FixedWidth: StoryObj<typeof Image> = {
	args: {
		src: "https://placehold.co/300x200",
		alt: "Fixed width placeholder",
		width: 300,
	},
};

export const FigureDefault: StoryObj<typeof Figure> = {
	name: "Figure",
	render: () => (
		<Figure
			src="https://placehold.co/600x400"
			alt="A scenic mountain landscape"
			width={600}
		/>
	),
};
