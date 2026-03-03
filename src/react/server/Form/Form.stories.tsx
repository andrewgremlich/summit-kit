import type { Meta, StoryObj } from "@storybook/react";

import { PrimaryButton, SecondaryButton } from "./Buttons.tsx";
import { Form } from "./Form.tsx";
import { Input } from "./Inputs.tsx";

const meta: Meta<typeof Form> = {
	title: "Server/Form",
	component: Form,
	tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Form> = {
	name: "Complete Form",
	render: () => (
		<Form onSubmit={() => console.log("Form submitted")}>
			<Input type="text" label="Name" id="name" />
			<Input type="email" label="Email" id="email" required />
			<Input type="password" label="Password" id="password" />
			<PrimaryButton>Submit</PrimaryButton>
			<SecondaryButton onClick={() => console.log("Cancelled")}>
				Cancel
			</SecondaryButton>
		</Form>
	),
};

export const TextInput: StoryObj = {
	name: "Input - Text",
	render: () => <Input type="text" label="Full Name" id="full-name" />,
};

export const EmailInput: StoryObj = {
	name: "Input - Email (Required)",
	render: () => (
		<Input type="email" label="Email Address" id="email" required />
	),
};

export const DisabledInput: StoryObj = {
	name: "Input - Disabled",
	render: () => (
		<Input type="text" label="Disabled Field" id="disabled" disabled />
	),
};

export const DateInput: StoryObj = {
	name: "Input - Date",
	render: () => <Input type="date" label="Start Date" id="start-date" />,
};

export const Primary: StoryObj = {
	name: "PrimaryButton",
	render: () => <PrimaryButton>Submit</PrimaryButton>,
};

export const PrimaryDisabled: StoryObj = {
	name: "PrimaryButton - Disabled",
	render: () => <PrimaryButton disabled>Submit</PrimaryButton>,
};

export const Secondary: StoryObj = {
	name: "SecondaryButton",
	render: () => (
		<SecondaryButton onClick={() => console.log("Clicked")}>
			Cancel
		</SecondaryButton>
	),
};
