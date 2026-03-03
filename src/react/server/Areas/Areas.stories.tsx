import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../Icon/index.tsx";
import { P } from "../Text/Body.tsx";
import { H2 } from "../Text/Headings.tsx";
import { Flex, Reading, Section } from "./index.tsx";

const ReadingMeta: Meta<typeof Reading> = {
	title: "Server/Areas/Reading",
	component: Reading,
	tags: ["autodocs"],
};

export default ReadingMeta;

type ReadingStory = StoryObj<typeof Reading>;

export const Default: ReadingStory = {
	render: () => (
		<Reading>
			<Section>
				<H2>Reading Container</H2>
				<P>
					The Reading component wraps content in a responsive article container
					that constrains the width for comfortable reading.
				</P>
			</Section>
		</Reading>
	),
};

const SectionMeta: Meta<typeof Section> = {
	title: "Server/Areas/Section",
	component: Section,
	tags: ["autodocs"],
};

export const SectionDefault: StoryObj<typeof Section> = {
	name: "Default",
	render: () => (
		<Section>
			<H2>A Section</H2>
			<P>Sections provide vertical spacing between content blocks.</P>
		</Section>
	),
};

export const FlexRow: StoryObj<typeof Flex> = {
	name: "Flex - Row",
	render: () => (
		<Flex direction="row" justify="space-between" align="center">
			<Icon name="FiActivity" size={24} color="white" />
			<Icon name="FiAirplay" size={24} color="white" />
			<Icon name="FiCheck" size={24} color="white" />
		</Flex>
	),
};

export const FlexColumn: StoryObj<typeof Flex> = {
	name: "Flex - Column",
	render: () => (
		<Flex direction="column" justify="flex-start" align="center">
			<Icon name="FiActivity" size={24} color="white" />
			<Icon name="FiAirplay" size={24} color="white" />
			<Icon name="FiCheck" size={24} color="white" />
		</Flex>
	),
};
