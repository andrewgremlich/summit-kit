import type { Meta, StoryObj } from "@storybook/react";

import { H1, H2, H3, H4, H5, H6 } from "./Headings.tsx";

const meta: Meta<typeof H1> = {
	title: "Server/Text/Headings",
	component: H1,
};

export default meta;

export const Heading1: StoryObj<typeof H1> = {
	name: "H1",
	render: () => <H1>Heading Level 1</H1>,
};

export const Heading2: StoryObj<typeof H2> = {
	name: "H2",
	render: () => <H2>Heading Level 2</H2>,
};

export const Heading3: StoryObj<typeof H3> = {
	name: "H3",
	render: () => <H3>Heading Level 3</H3>,
};

export const Heading4: StoryObj<typeof H4> = {
	name: "H4",
	render: () => <H4>Heading Level 4</H4>,
};

export const Heading5: StoryObj<typeof H5> = {
	name: "H5",
	render: () => <H5>Heading Level 5</H5>,
};

export const Heading6: StoryObj<typeof H6> = {
	name: "H6",
	render: () => <H6>Heading Level 6</H6>,
};

export const AllHeadings: StoryObj = {
	name: "All Headings",
	render: () => (
		<>
			<H1>Heading 1</H1>
			<H2>Heading 2</H2>
			<H3>Heading 3</H3>
			<H4>Heading 4</H4>
			<H5>Heading 5</H5>
			<H6>Heading 6</H6>
		</>
	),
};
