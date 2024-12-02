import type { StandardProps } from "@/Types/general";

import classes from "./styles.module.css";

export const H1 = (props: StandardProps) => {
	return (
		<h1
			className={`${classes.h1}${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
		>
			{props.children}
		</h1>
	);
};

export const H2 = (props: StandardProps) => {
	return (
		<h2
			className={`${classes.h2}${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
		>
			{props.children}
		</h2>
	);
};

export const H3 = (props: StandardProps) => {
	return (
		<h3
			className={`${classes.h3}${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
		>
			{props.children}
		</h3>
	);
};

export const H4 = (props: StandardProps) => {
	return (
		<h4
			className={`${classes.h4}${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
		>
			{props.children}
		</h4>
	);
};

export const H5 = (props: StandardProps) => {
	return (
		<h5
			className={`${classes.h5}${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
		>
			{props.children}
		</h5>
	);
};

export const H6 = (props: StandardProps) => {
	return (
		<h6
			className={`${classes.h6}${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
		>
			{props.children}
		</h6>
	);
};
