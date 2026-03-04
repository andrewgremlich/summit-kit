import type { ButtonHTMLAttributes } from "react";
import type { ClassesProps } from "../Types/general.ts";

import classes from "./styles.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ClassesProps;

/**
 * Renders a primary styled button for form submissions.
 *
 * @param props - The properties for the button component.
 * @param props.disabled - If `true`, the button will be disabled. Defaults to `false`.
 * @param props.classes - Optional array of additional CSS class names to apply to the button.
 * @param props.children - The content to be displayed inside the button.
 * @returns A React element representing a styled submit button.
 */
export const PrimaryButton = ({
	disabled = false,
	onClick,
	classes: extraClasses,
	children,
	...rest
}: ButtonProps) => {
	return (
		<button
			type={onClick ? "button" : "submit"}
			onClick={onClick}
			disabled={disabled}
			className={`${classes.submit}${
				extraClasses && extraClasses.length > 0
					? ` ${extraClasses.join(" ")}`
					: ""
			}`}
			{...rest}
		>
			{children}
		</button>
	);
};

/**
 * Renders a secondary styled button component.
 *
 * @param props - The properties for the button component, including:
 *   - `disabled` (optional): Whether the button is disabled.
 *   - `onClick` (optional): Click event handler.
 *   - `classes` (optional): Additional CSS classes to apply.
 *   - `children`: The content to display inside the button.
 *
 * @returns A React button element with secondary styling.
 */
export const SecondaryButton = ({
	disabled = false,
	onClick,
	classes: extraClasses,
	children,
	...rest
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			type="button"
			disabled={disabled}
			className={`${classes.secondary}${
				extraClasses && extraClasses.length > 0
					? ` ${extraClasses.join(" ")}`
					: ""
			}`}
			{...rest}
		>
			{children}
		</button>
	);
};
