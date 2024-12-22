import * as RadixForm from "@radix-ui/react-form";

import type { StandardProps } from "@/Types";

import { PrimaryButton } from "./Buttons";

type FormProps = { submitText?: string } & StandardProps;

export const Form = (props: FormProps) => {
	const { submitText = "Submit" } = props;

	return (
		<RadixForm.Root>
			{props.children}
			<PrimaryButton>{submitText}</PrimaryButton>
		</RadixForm.Root>
	);
};
