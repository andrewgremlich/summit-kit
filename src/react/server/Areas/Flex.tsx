import type { HTMLAttributes, JSX } from "react";
import { forwardRef } from "react";

import { cx } from "../../../utils/cx.ts";
import { themed } from "../../../utils/headless.ts";

import rawStyles from "./styles.module.css";

const styles = themed(rawStyles);

type Direction = "row" | "row-reverse" | "col" | "col-reverse" | "column";
type Justify =
	| "start"
	| "end"
	| "center"
	| "between"
	| "around"
	| "evenly"
	| "flex-start"
	| "flex-end"
	| "space-between"
	| "space-around"
	| "space-evenly";
type Items =
	| "start"
	| "end"
	| "center"
	| "baseline"
	| "stretch"
	| "flex-start"
	| "flex-end";
type Content =
	| "start"
	| "end"
	| "center"
	| "between"
	| "around"
	| "evenly"
	| "flex-start"
	| "flex-end"
	| "space-between"
	| "space-around"
	| "space-evenly";
type Wrap = "wrap" | "nowrap" | "wrap-reverse";

export type FlexProps = HTMLAttributes<HTMLElement> & {
	as?: keyof JSX.IntrinsicElements;
	direction?: Direction;
	justify?: Justify;
	items?: Items;
	/** @deprecated Use `items` instead. */
	align?: Items;
	content?: Content;
	wrap?: Wrap;
	gap?: string | number;
	inline?: boolean;
	className?: string;
};

export const Flex = forwardRef<HTMLElement, FlexProps>(
	(
		{
			as = "div",
			direction = "row",
			justify,
			items,
			align,
			content,
			wrap,
			gap,
			inline = false,
			className,
			...rest
		},
		_ref,
	) => {
		const Comp: keyof JSX.IntrinsicElements = as;

		const directionClassMap: Record<Direction, string> = {
			row: styles.flexRow,
			"row-reverse": styles.flexRowReverse,
			col: styles.flexCol,
			column: styles.flexCol,
			"col-reverse": styles.flexColReverse,
		};

		const justifyClassMap: Record<Justify, string> = {
			start: styles.justifyStart,
			"flex-start": styles.justifyStart,
			end: styles.justifyEnd,
			"flex-end": styles.justifyEnd,
			center: styles.justifyCenter,
			between: styles.justifyBetween,
			"space-between": styles.justifyBetween,
			around: styles.justifyAround,
			"space-around": styles.justifyAround,
			evenly: styles.justifyEvenly,
			"space-evenly": styles.justifyEvenly,
		};

		const itemsClassMap: Record<Items, string> = {
			start: styles.itemsStart,
			"flex-start": styles.itemsStart,
			end: styles.itemsEnd,
			"flex-end": styles.itemsEnd,
			center: styles.itemsCenter,
			baseline: styles.itemsBaseline,
			stretch: styles.itemsStretch,
		};

		const contentClassMap: Record<Content, string> = {
			start: styles.contentStart,
			"flex-start": styles.contentStart,
			end: styles.contentEnd,
			"flex-end": styles.contentEnd,
			center: styles.contentCenter,
			between: styles.contentBetween,
			"space-between": styles.contentBetween,
			around: styles.contentAround,
			"space-around": styles.contentAround,
			evenly: styles.contentEvenly,
			"space-evenly": styles.contentEvenly,
		};

		const wrapClassMap: Record<Wrap, string> = {
			wrap: styles.flexWrap,
			"wrap-reverse": styles.flexWrapReverse,
			nowrap: styles.flexNowrap,
		};

		const resolvedItems = items ?? align;

		const classes = cx(
			inline ? styles.inlineFlex : styles.flex,
			directionClassMap[direction],
			justify && justifyClassMap[justify],
			resolvedItems && itemsClassMap[resolvedItems],
			content && contentClassMap[content],
			wrap && wrapClassMap[wrap],
			className,
		);

		const { style, ...restProps } = rest as HTMLAttributes<HTMLElement>;
		const mergedStyle =
			gap !== undefined && gap !== null
				? {
						...style,
						gap: typeof gap === "number" ? `${gap}px` : gap,
					}
				: style;

		return (
			<Comp
				className={classes}
				style={mergedStyle}
				{...(restProps as unknown as Record<string, unknown>)}
			/>
		);
	},
);

Flex.displayName = "Flex";
