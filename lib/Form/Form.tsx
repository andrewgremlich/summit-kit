import type { FormEventHandler } from "react";

import type { StandardProps } from "@/Types";

type FormProps = {
	onSubmit?: FormEventHandler;
	method?: string;
	action?: string;
} & StandardProps;

export const Form = (props: FormProps) => {
	return (
		<form
			className={`${props.classes && props.classes.length > 0 ? props.classes?.join(" ") : ""}`}
			{...(props.onSubmit && {
				onSubmit: (evt) => {
					if (!props.onSubmit) return;
					evt.preventDefault();
					props.onSubmit(evt);
				},
			})}
			{...(props.method && { method: props.method })}
			{...(props.action && { action: props.action })}
		>
			{props.children}
		</form>
	);
};
