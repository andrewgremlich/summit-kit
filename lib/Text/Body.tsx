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

export const Ol = (props: StandardProps) => {
	return (
		<ol
			className={`${classes.ol}${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
		>
			{props.children}
		</ol>
	);
};

export const Ul = (props: StandardProps) => {
	return (
		<ul
			className={`${classes.ul}${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
		>
			{props.children}
		</ul>
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
