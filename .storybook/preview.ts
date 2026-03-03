import type { Preview } from "@storybook/react";

import "../src/styles/colors.css";
import "../src/styles/global.css";

const preview: Preview = {
	tags: ["autodocs"],
	parameters: {
		backgrounds: {
			values: [
				{ name: "dark", value: "#1a2e1a" },
				{ name: "light", value: "#f0f4e8" },
			],
		},
	},
};

export default preview;
