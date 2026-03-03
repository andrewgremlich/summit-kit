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

export type { FlexProps } from "./Flex.tsx";
export { Flex } from "./Flex.tsx";
export type { GridProps } from "./Grid.tsx";
export { Grid, GridHeader, GridRow } from "./Grid.tsx";
