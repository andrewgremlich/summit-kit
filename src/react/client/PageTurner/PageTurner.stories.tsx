import type { Meta, StoryObj } from "@storybook/react";
import { P } from "../../server/Text/Body.tsx";
import { H2 } from "../../server/Text/Headings.tsx";
import { PageTurner } from "./index.tsx";

const meta: Meta<typeof PageTurner> = {
	title: "Client/PageTurner",
	component: PageTurner,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

export const WithAllDirections: StoryObj<typeof PageTurner> = {
	name: "All Directions",
	render: () => (
		<PageTurner
			onNext={() => console.log("Next")}
			onPrev={() => console.log("Prev")}
			onUp={() => console.log("Up")}
			onDown={() => console.log("Down")}
		>
			<H2>Page Content</H2>
			<P>
				Use the arrow buttons or keyboard shortcuts (Ctrl+Shift+Arrow) to
				navigate.
			</P>
		</PageTurner>
	),
};

export const HorizontalOnly: StoryObj<typeof PageTurner> = {
	name: "Horizontal Navigation",
	render: () => (
		<PageTurner
			onNext={() => console.log("Next")}
			onPrev={() => console.log("Prev")}
		>
			<H2>Slide Content</H2>
			<P>Navigate left and right through slides.</P>
		</PageTurner>
	),
};
