import { TextProps } from "@/Types/general";

import classes from "./styles.module.css";

export const H1 = (props: TextProps) => {
	console.log(classes);

	return (
		<h1
			className={`${classes.h1}${
				props.additionalClasses && props.additionalClasses.length > 0
					? props.additionalClasses?.join(" ")
					: ""
			}`}
		>
			{props.children}
		</h1>
	);
};

export const H2 = (props: TextProps) => {
	return (
		<h2
			className={`${classes.h2}${
				props.additionalClasses && props.additionalClasses.length > 0
					? props.additionalClasses?.join(" ")
					: ""
			}`}
		>
			{props.children}
		</h2>
	);
};

export const H3 = (props: TextProps) => {
	return (
		<h3
			className={`${classes.h3}${
				props.additionalClasses && props.additionalClasses.length > 0
					? props.additionalClasses?.join(" ")
					: ""
			}`}
		>
			{props.children}
		</h3>
	);
};

export const H4 = (props: TextProps) => {
	return (
		<h4
			className={`${classes.h4}${
				props.additionalClasses && props.additionalClasses.length > 0
					? props.additionalClasses?.join(" ")
					: ""
			}`}
		>
			{props.children}
		</h4>
	);
};

export const H5 = (props: TextProps) => {
	return (
		<h5
			className={`${classes.h5}${
				props.additionalClasses && props.additionalClasses.length > 0
					? props.additionalClasses?.join(" ")
					: ""
			}`}
		>
			{props.children}
		</h5>
	);
};

export const H6 = (props: TextProps) => {
	return (
		<h6
			className={`${classes.h6}${
				props.additionalClasses && props.additionalClasses.length > 0
					? props.additionalClasses?.join(" ")
					: ""
			}`}
		>
			{props.children}
		</h6>
	);
};
