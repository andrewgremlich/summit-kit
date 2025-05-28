import type { StandardProps } from "../Types/general.ts";

import classes from "./styles.module.css";

/**
 * Renders an article element with the "reading" class.
 *
 * @param props - Standard React props including children to be rendered inside the article.
 * @returns A React element wrapping the children in an article with the appropriate class.
 */
export const Reading = (props: StandardProps) => {
	return <article className={classes.reading}>{props.children}</article>;
};

/**
 * Renders a semantic HTML `<section>` element with a predefined CSS class.
 *
 * @param props - Standard React props, including children to be rendered inside the section.
 * @returns The section element containing the provided children.
 */
export const Section = (props: StandardProps) => {
	return <section className={classes.section}>{props.children}</section>;
};

type FlexProps = {
	direction?: "row" | "column";
	justify?:
		| "center"
		| "space-between"
		| "space-around"
		| "flex-start"
		| "flex-end";
	align?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
	wrap?: "wrap" | "nowrap";
};

/**
 * A flexible container component that renders a `<div>` with configurable flexbox properties.
 *
 * @param props - The properties for the Flex component.
 * @param props.direction - The flex direction (`row`, `column`, etc.). Defaults to `"row"`.
 * @param props.justify - The `justify-content` CSS property. Defaults to `"flex-start"`.
 * @param props.align - The `align-items` CSS property. Defaults to `"flex-start"`.
 * @param props.wrap - The `flex-wrap` CSS property. Defaults to `"nowrap"`.
 * @param props.classes - Additional CSS class names to apply to the container.
 * @param props.style - Additional inline styles to apply to the container.
 * @param props.children - The content to be rendered inside the flex container.
 * @returns A `<div>` element styled as a flex container.
 */
export const Flex = (props: StandardProps & FlexProps) => {
	const {
		direction = "row",
		justify = "flex-start",
		align = "flex-start",
		wrap = "nowrap",
		classes: _classes,
		...rest
	} = props;

	return (
		<div
			className={`${classes.flex}${
				_classes && _classes.length > 0 ? ` ${_classes.join(" ")}` : ""
			}`}
			style={{
				justifyContent: justify,
				alignItems: align,
				flexDirection: direction,
				flexWrap: wrap,
				...(props.style ? props.style : {}),
			}}
			{...rest}
		>
			{props.children}
		</div>
	);
};
