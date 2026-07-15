import type { Meta, StoryObj } from "@storybook/react";

import { P } from "./Body.tsx";
import { Link } from "./Link.tsx";

const meta: Meta<typeof Link> = {
	title: "Server/Text/Link",
	component: Link,
};

export default meta;

export const Default: StoryObj<typeof Link> = {
	args: {
		href: "https://example.com",
		children: "Visit Example",
	},
};

export const InParagraph: StoryObj = {
	name: "Link in Paragraph",
	render: () => (
		<P>
			Check out <Link href="https://example.com">this link</Link> inside a
			paragraph of text.
		</P>
	),
};
