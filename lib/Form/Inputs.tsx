import * as RadixForm from "@radix-ui/react-form";

import type { ClassesProps } from "@/Types/general";

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

export const TextInput = (props: InputProps) => {
	const {
		valueMissing = "No value inputed",
		typeMismatch = "Invalid type.",
		disabled = false,
		required = false,
	} = props;

	return (
		<RadixForm.FormField
			name={props.id}
			className={`${classes["form-field"]}${props.classes && props.classes?.length > 0 ? ` ${props.classes.join(" ")}` : ""}`}
		>
			<div className={classes["label-container"]}>
				<RadixForm.Label className={`${classes.label}`} htmlFor={props.id}>
					{props.label}
				</RadixForm.Label>
				<RadixForm.Message match="valueMissing">
					{valueMissing}
				</RadixForm.Message>
				<RadixForm.Message match="typeMismatch">
					{typeMismatch}
				</RadixForm.Message>
			</div>
			<RadixForm.Control asChild>
				<input
					id={props.id}
					name={props.id}
					className={`${classes["text-input"]}`}
					type={props.type}
					required={required}
					disabled={disabled}
				/>
			</RadixForm.Control>
		</RadixForm.FormField>
	);
};
