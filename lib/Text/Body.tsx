import type { StandardProps } from "@/Types/general";

import classes from "./styles.module.css";

export const P = (props: StandardProps) => {
	return (
		<p
			className={`${classes.p}${
				props.classes && props.classes.length > 0
					? props.classes?.join(" ")
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
			className={`${classes.span}${
				props.classes && props.classes.length > 0
					? props.classes?.join(" ")
					: ""
			}`}
		>
			{props.children}
		</span>
	);
};
