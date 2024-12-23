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
