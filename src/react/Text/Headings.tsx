import type { StandardProps } from "../Types/general.tsx";

import classes from "./styles.module.css";

/**
 * Renders a level 1 heading (`<h1>`) with customizable classes and children.
 *
 * @param props - The standard properties for the heading component.
 * @param props.classes - An optional array of additional CSS class names to apply to the heading.
 * @param props.children - The content to be displayed inside the heading.
 * @returns A React element representing an `<h1>` heading.
 */
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

/**
 * Renders an H2 heading element with customizable classes and children.
 *
 * @param props - The standard properties for the heading component.
 * @param props.classes - An optional array of additional CSS class names to apply to the heading.
 * @param props.children - The content to be displayed inside the heading.
 * @returns A React element representing an H2 heading.
 */
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

/**
 * Renders an `<h3>` HTML element with customizable classes and children.
 *
 * @param props - The standard properties for the heading component.
 * @param props.classes - An optional array of additional CSS class names to apply to the `<h3>` element.
 * @param props.children - The content to be rendered inside the `<h3>` element.
 * @returns A React element representing an `<h3>` heading.
 */
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

/**
 * Renders an `<h4>` HTML heading element with customizable classes and children.
 *
 * @param props - The standard properties for the heading component.
 * @param props.classes - An optional array of additional CSS class names to apply to the heading.
 * @param props.children - The content to be displayed inside the heading.
 * @returns A React element representing an `<h4>` heading.
 */
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

/**
 * Renders an H5 heading element with customizable classes and children.
 *
 * @param props - The standard properties for the heading component.
 * @param props.classes - Optional array of additional CSS class names to apply to the heading.
 * @param props.children - The content to be rendered inside the heading.
 * @returns A React element representing an H5 heading.
 */
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

/**
 * Renders a `<h6>` heading element with customizable classes and children.
 *
 * @param props - The standard properties for the heading component.
 * @param props.classes - Optional array of additional CSS class names to apply to the heading.
 * @param props.children - The content to be rendered inside the heading.
 * @returns A React element representing an `<h6>` heading.
 */
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
