import type { ClassesProps } from "../Types";

import classes from "./styles.module.css";

type InputProps = ClassesProps & {
	type: "text" | "password" | "email";
	label: string;
	id: string;
	valueMissing?: string;
	typeMismatch?: string;
	required?: boolean;
	disabled?: boolean;
};

/**
 * Renders a styled text input field with an associated label.
 *
 * @remarks
 * This component supports additional CSS classes, disabled and required states, and custom input types.
 *
 * @param {InputProps} props - The properties for the text input component.
 * @param props.id - The unique identifier for the input element.
 * @param props.label - The label text displayed above the input.
 * @param props.type - The type of the input (e.g., "text", "email", "password").
 * @param props.disabled - Whether the input is disabled.
 * @param props.required - Whether the input is required.
 * @param props.classes - Additional CSS classes to apply to the input container.
 *
 * @returns {JSX.Element} A JSX element representing a labeled text input field.
 */
export const TextInput = (props: InputProps) => {
	const { disabled = false, required = false } = props;

	return (
		<div
			className={`${classes["form-field"]}${props.classes && props.classes?.length > 0 ? ` ${props.classes.join(" ")}` : ""}`}
		>
			<div className={classes["label-container"]}>
				<label className={`${classes.label}`} htmlFor={props.id}>
					{props.label}
				</label>
			</div>
			<input
				id={props.id}
				name={props.id}
				className={`${classes["text-input"]}`}
				type={props.type}
				required={required}
				disabled={disabled}
			/>
		</div>
	);
};
