import { cx } from "../../../utils/cx.ts";
import { themed } from "../../../utils/headless.ts";
import type { StandardProps } from "../Types/general.tsx";

import rawClasses from "./styles.module.css";

const classes = themed(rawClasses);

/**
 * Functional component that renders a styled <blockquote> element.
 *
 * @param props - StandardProps object containing:
 *   - `classes` (optional): An array of additional CSS class names to apply.
 *   - `children`: The content to be rendered inside the blockquote.
 * @returns A <blockquote> element with combined default and custom classes, and the provided children.
 */
export const Quote = (props: StandardProps) => {
	return (
		<blockquote className={cx(classes.blockquote, props.classes)}>
			{props.children}
		</blockquote>
	);
};

/**
 * Functional component that renders a styled `<p>` (paragraph) element.
 *
 * @param props - StandardProps object containing:
 *   - `classes` (optional): An array of additional CSS class names to apply.
 *   - `children`: The content to be rendered inside the paragraph.
 * @returns A `<p>` element with combined default and custom classes, and the provided children.
 */
export const P = (props: StandardProps) => {
	return <p className={cx(classes.p, props.classes)}>{props.children}</p>;
};

/**
 * Functional component that renders a styled <span> element.
 *
 * @param props - StandardProps object containing:
 *   - `classes` (optional): An array of additional CSS class names to apply.
 *   - `children`: The content to be rendered inside the span.
 * @returns A <span> element with combined default and custom classes, and the provided children.
 */
export const Span = (props: StandardProps) => {
	return <span className={cx(props.classes)}>{props.children}</span>;
};

/**
 * Functional component that renders a styled <ol> (ordered list) element.
 *
 * @param props - StandardProps object containing:
 *   - `classes` (optional): An array of additional CSS class names to apply.
 *   - `children`: The content to be rendered inside the ordered list.
 * @returns An <ol> element with combined default and custom classes, and the provided children.
 */
export const Ol = (props: StandardProps) => {
	return <ol className={cx(classes.ol, props.classes)}>{props.children}</ol>;
};

/**
 * Functional component that renders a styled <ul> (unordered list) element.
 *
 * @param props - StandardProps object containing:
 *   - `classes` (optional): An array of additional CSS class names to apply.
 *   - `children`: The content to be rendered inside the unordered list.
 * @returns A <ul> element with combined default and custom classes, and the provided children.
 */
export const Ul = (props: StandardProps) => {
	return <ul className={cx(classes.ul, props.classes)}>{props.children}</ul>;
};

/**
 * Renders a styled `<li>` (list item) element with optional custom classes and children.
 *
 * @param props - The standard properties for the component.
 * @param props.classes - An optional array of additional CSS class names to apply to the `<li>` element.
 * @param props.children - The content to be rendered inside the `<li>` element.
 * @returns A React list item element with the specified classes and children.
 */
export const Li = (props: StandardProps) => {
	return <li className={cx(props.classes)}>{props.children}</li>;
};
