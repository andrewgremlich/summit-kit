<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cx } from "../../shared/cx.js";
	import { themed } from "../../shared/headless.js";
	import rawStyles from "../../shared/styles/components/areas.module.css";

	const styles = themed(rawStyles);

	type ColCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	type AlignItems = "start" | "center" | "end" | "stretch" | "baseline";
	type JustifyItems = "start" | "center" | "end" | "stretch";

	export type GridProps = HTMLAttributes<HTMLElement> & {
		as?: string;
		class?: string;
		cols?: ColCount;
		rows?: ColCount;
		flow?: "row" | "col" | "row-dense" | "col-dense";
		gap?: string | number;
		rowGap?: string | number;
		columnGap?: string | number;
		inline?: boolean;
		fullWidth?: boolean;
		templateCols?: string;
		templateRows?: string;
		alignItems?: AlignItems;
		justifyItems?: JustifyItems;
		children?: Snippet;
	};

	let {
		as = "div",
		class: className,
		cols,
		rows,
		flow,
		gap,
		rowGap,
		columnGap,
		inline = false,
		fullWidth = true,
		templateCols,
		templateRows,
		alignItems,
		justifyItems,
		children,
		...rest
	}: GridProps = $props();

	const colsClassMap: Record<ColCount, string> = {
		1: styles.cols1,
		2: styles.cols2,
		3: styles.cols3,
		4: styles.cols4,
		5: styles.cols5,
		6: styles.cols6,
		7: styles.cols7,
		8: styles.cols8,
		9: styles.cols9,
		10: styles.cols10,
		11: styles.cols11,
		12: styles.cols12,
	};

	const rowsClassMap: Record<ColCount, string> = {
		1: styles.rows1,
		2: styles.rows2,
		3: styles.rows3,
		4: styles.rows4,
		5: styles.rows5,
		6: styles.rows6,
		7: styles.rows7,
		8: styles.rows8,
		9: styles.rows9,
		10: styles.rows10,
		11: styles.rows11,
		12: styles.rows12,
	};

	const flowClassMap: Record<NonNullable<GridProps["flow"]>, string> = {
		row: styles.flowRow,
		col: styles.flowCol,
		"row-dense": styles.flowRowDense,
		"col-dense": styles.flowColDense,
	};

	const classes = $derived(
		cx(
			inline ? styles.inlineGrid : styles.grid,
			cols ? colsClassMap[cols] : null,
			rows ? rowsClassMap[rows] : null,
			flow ? flowClassMap[flow] : null,
			fullWidth ? styles.fullWidth : null,
			className,
		),
	);

	const { style: restStyle, ...restProps } = $derived(
		rest as HTMLAttributes<HTMLElement>,
	);

	const toLen = (v: string | number) => (typeof v === "number" ? `${v}px` : v);

	const mergedStyle = $derived(
		[
			restStyle,
			gap != null ? `gap: ${toLen(gap)}` : undefined,
			rowGap != null ? `row-gap: ${toLen(rowGap)}` : undefined,
			columnGap != null ? `column-gap: ${toLen(columnGap)}` : undefined,
			templateCols ? `grid-template-columns: ${templateCols}` : undefined,
			templateRows ? `grid-template-rows: ${templateRows}` : undefined,
			alignItems ? `align-items: ${alignItems}` : undefined,
			justifyItems ? `justify-items: ${justifyItems}` : undefined,
		]
			.filter(Boolean)
			.join("; ") || undefined,
	);
</script>

<svelte:element this={as} class={classes} style={mergedStyle} {...restProps}>
	{@render children?.()}
</svelte:element>
