import type { StandardProps } from "../Types/general.ts";

import classes from "./styles.module.css";

type LinkProps = {
	href: string;
	target?: string;
	rel?: string;
};

/**
 * Renders a styled anchor (`<a>`) element with customizable classes, href, target, and rel attributes.
 *
 * @param props - The properties for the Link component.
 * @param props.href - The URL to which the link points.
 * @param props.children - The content to be displayed inside the link.
 * @param props.classes - Optional additional CSS class names to apply to the link.
 * @param props.target - Specifies where to open the linked document. Defaults to "_parent".
 * @param props.rel - Specifies the relationship of the target object to the link object. Defaults to "noopener noreferrer".
 *
 * @returns A React anchor element with the specified properties and children.
 */
export const Link = (props: StandardProps & LinkProps) => {
	const { rel = "noopener noreferrer", target = "_parent" } = props;

	return (
		<a
			className={`${classes.a}${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
			href={props.href}
			target={target}
			rel={rel}
		>
			{props.children}
		</a>
	);
};
