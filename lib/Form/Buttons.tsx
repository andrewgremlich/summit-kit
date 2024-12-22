import * as RadixForm from "@radix-ui/react-form";

import type { StandardProps } from "@/Types";

import classes from "./styles.module.css";

type ButtonProps = {
	disabled?: boolean;
};

export const PrimaryButton = (props: ButtonProps & StandardProps) => {
	const { disabled = false } = props;

	return (
		<RadixForm.Submit asChild>
			<button
				type="submit"
				disabled={disabled}
				className={`${classes.submit}${
					props.classes && props.classes.length > 0
						? props.classes?.join(" ")
						: ""
				}`}
			>
				{props.children}
			</button>
		</RadixForm.Submit>
	);
};

export const SecondaryButton = (props: ButtonProps & StandardProps) => {
	const { disabled = false } = props;

	return (
		<RadixForm.Submit asChild>
			<button
				type="button"
				disabled={disabled}
				className={`${classes.secondary} ${classes.secondary}${
					props.classes && props.classes.length > 0
						? props.classes?.join(" ")
						: ""
				}`}
			>
				{props.children}
			</button>
		</RadixForm.Submit>
	);
};
