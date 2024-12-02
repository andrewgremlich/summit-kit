import type { ClassesProps } from "@/Types/general";

import classes from "./styles.module.css";

type InputProps = ClassesProps & {
	type: "text" | "password" | "email";
	label: string;
	id: string;
};

export const TextInput = (props: InputProps) => {
	return (
		<label
			className={`${classes.label}${props.classes && props.classes?.length > 0 ? ` ${props.classes.join(" ")}` : ""}`}
			htmlFor={props.id}
		>
			{props.label}
			<input
				id={props.id}
				name={props.id}
				className={`${classes["text-input"]}`}
				type={props.type}
			/>
		</label>
	);
};
