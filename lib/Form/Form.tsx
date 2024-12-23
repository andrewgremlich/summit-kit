import * as RadixForm from "@radix-ui/react-form";

import type { StandardProps } from "@/Types";

type FormProps = StandardProps;

export const Form = (props: FormProps) => {
	return <RadixForm.Root>{props.children}</RadixForm.Root>;
};
