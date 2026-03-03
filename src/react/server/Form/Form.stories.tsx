import type { Meta, StoryObj } from "@storybook/react";

import { PrimaryButton, SecondaryButton } from "./Buttons.tsx";
import { Form } from "./Form.tsx";
import { Input } from "./Inputs.tsx";
import { Select } from "./Select.tsx";

const meta: Meta<typeof Form> = {
	title: "Server/Form",
	component: Form,
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

export const SelectDefault: StoryObj = {
	name: "Select",
	render: () => (
		<Select
			label="Favorite Season"
			options={[
				{ value: "", label: "Choose a season" },
				{ value: "spring", label: "Spring" },
				{ value: "summer", label: "Summer" },
				{ value: "autumn", label: "Autumn" },
				{ value: "winter", label: "Winter" },
			]}
		/>
	),
};

export const SelectWithDisabledOption: StoryObj = {
	name: "Select - Disabled Option",
	render: () => (
		<Select
			label="Trail Difficulty"
			options={[
				{ value: "easy", label: "Easy" },
				{ value: "moderate", label: "Moderate" },
				{ value: "hard", label: "Hard" },
				{ value: "expert", label: "Expert", disabled: true },
			]}
		/>
	),
};

export const SelectInForm: StoryObj = {
	name: "Select - In Form",
	render: () => (
		<Form onSubmit={() => console.log("Form submitted")}>
			<Input type="text" label="Name" id="select-form-name" />
			<Select
				label="Role"
				options={[
					{ value: "", label: "Select a role" },
					{ value: "hiker", label: "Hiker" },
					{ value: "climber", label: "Climber" },
					{ value: "guide", label: "Guide" },
				]}
			/>
			<PrimaryButton>Submit</PrimaryButton>
		</Form>
	),
};
