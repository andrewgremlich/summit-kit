import type { StandardProps } from "../Types";

import classes from "./styles.module.css";

type ButtonProps = {
	disabled?: boolean;
};

/**
 * Renders a primary styled button for form submissions.
 *
 * @param props - The properties for the button component, combining `ButtonProps` and `StandardProps`.
 * @param props.disabled - If `true`, the button will be disabled. Defaults to `false`.
 * @param props.classes - Optional array of additional CSS class names to apply to the button.
 * @param props.children - The content to be displayed inside the button.
 * @returns A React element representing a styled submit button.
 */
export const PrimaryButton = (props: ButtonProps & StandardProps) => {
	const { disabled = false } = props;

	return (
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
	);
};

/**
 * Renders a secondary styled button component.
 *
 * @param props - The properties for the button, combining `ButtonProps` and `StandardProps`.
 * @param props.disabled - If `true`, the button will be disabled. Defaults to `false`.
 * @param props.classes - Optional additional CSS class names to apply to the button.
 * @param props.children - The content to be displayed inside the button.
 * @returns A React element representing a secondary button.
 */
export const SecondaryButton = (props: ButtonProps & StandardProps) => {
	const { disabled = false } = props;

	return (
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
	);
};
