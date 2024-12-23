import type { StandardProps } from "@/Types/general";

import classes from "./styles.module.css";

export const P = (props: StandardProps) => {
	return (
		<p
			className={`${classes.p}${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
		>
			{props.children}
		</p>
	);
};

export const Span = (props: StandardProps) => {
	return (
		<span
			className={`${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
		>
			{props.children}
		</span>
	);
};

export const Li = (props: StandardProps) => {
	return (
		<li
			className={`${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
		>
			{props.children}
		</li>
	);
};
