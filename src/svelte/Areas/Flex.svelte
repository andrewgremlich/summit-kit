<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cx } from "../../shared/cx.js";
	import { themed } from "../../shared/headless.js";
	import rawStyles from "../../shared/styles/components/areas.module.css";

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

	type FlexProps = HTMLAttributes<HTMLElement> & {
		as?: string;
		direction?: Direction;
		justify?: Justify;
		items?: Items;
		/** @deprecated Use `items` instead. */
		align?: Items;
		content?: Content;
		wrap?: Wrap;
		gap?: string | number;
		inline?: boolean;
		class?: string;
		children?: Snippet;
	};

	let {
		as = "div",
		direction = "row",
		justify,
		items,
		align,
		content,
		wrap,
		gap,
		inline = false,
		class: className,
		children,
		...rest
	}: FlexProps = $props();

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

	const resolvedItems = $derived(items ?? align);

	const classes = $derived(
		cx(
			inline ? styles.inlineFlex : styles.flex,
			directionClassMap[direction],
			justify ? justifyClassMap[justify] : undefined,
			resolvedItems ? itemsClassMap[resolvedItems] : undefined,
			content ? contentClassMap[content] : undefined,
			wrap ? wrapClassMap[wrap] : undefined,
			className,
		),
	);

	// Merge a consumer-supplied `style` (via ...rest) with the gap declaration so
	// neither clobbers the other on the rendered element.
	const { style: restStyle, ...restProps } = $derived(
		rest as HTMLAttributes<HTMLElement>,
	);

	const mergedStyle = $derived(
		[
			restStyle,
			gap !== undefined && gap !== null
				? `gap: ${typeof gap === "number" ? `${gap}px` : gap}`
				: undefined,
		]
			.filter(Boolean)
			.join("; ") || undefined,
	);
</script>

<svelte:element
	this={as}
	class={classes}
	style={mergedStyle}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
