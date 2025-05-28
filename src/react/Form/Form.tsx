import type { FormEventHandler } from "react";

import type { StandardProps } from "../Types";

type FormProps = {
	onSubmit?: FormEventHandler;
	method?: string;
	action?: string;
} & StandardProps;

/**
 * Renders a customizable HTML `<form>` element with optional class names, submit handler, method, and action.
 *
 * @param props - The properties for configuring the form.
 * @param props.classes - An optional array of CSS class names to apply to the form.
 * @param props.onSubmit - An optional submit event handler. If provided, prevents default form submission and calls this handler.
 * @param props.method - An optional HTTP method for the form submission (e.g., "post", "get").
 * @param props.action - An optional URL to which the form data will be submitted.
 * @param props.children - The form's child elements.
 *
 * @returns The rendered form element.
 */
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
