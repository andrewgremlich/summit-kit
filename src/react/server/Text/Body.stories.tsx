import type { Meta, StoryObj } from "@storybook/react";

import { Li, Ol, P, Quote, Span, Ul } from "./Body.tsx";

const meta: Meta<typeof P> = {
	title: "Server/Text/Body",
	component: P,
	tags: ["autodocs"],
};

export default meta;

export const Paragraph: StoryObj<typeof P> = {
	name: "P",
	render: () => (
		<P>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate earum,
			odio maxime ad sapiente porro neque. Dolor expedita quam sint sed est
			minima tenetur earum inventore!
		</P>
	),
};

export const BlockQuote: StoryObj<typeof Quote> = {
	name: "Quote",
	render: () => (
		<Quote>The mountains are calling and I must go. — John Muir</Quote>
	),
};

export const SpanText: StoryObj<typeof Span> = {
	name: "Span",
	render: () => <Span>This is inline span text.</Span>,
};

export const UnorderedList: StoryObj<typeof Ul> = {
	name: "Ul",
	render: () => (
		<Ul>
			<Li>First item</Li>
			<Li>Second item</Li>
			<Li>Third item</Li>
		</Ul>
	),
};

export const OrderedList: StoryObj<typeof Ol> = {
	name: "Ol",
	render: () => (
		<Ol>
			<Li>Step one</Li>
			<Li>Step two</Li>
			<Li>Step three</Li>
		</Ol>
	),
};
