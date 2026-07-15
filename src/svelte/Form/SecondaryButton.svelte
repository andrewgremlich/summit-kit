<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { cx } from "../../shared/cx.js";
	import { themed } from "../../shared/headless.js";
	import rawClasses from "../../shared/styles/components/form.module.css";

	const classes = themed(rawClasses);

	type SecondaryButtonProps = HTMLButtonAttributes & {
		classes?: string[];
		onclick?: (event: MouseEvent) => void;
		children?: Snippet;
	};

	let {
		disabled = false,
		onclick,
		classes: extraClasses,
		children,
		...rest
	}: SecondaryButtonProps = $props();
</script>

<button
	type="button"
	{onclick}
	{disabled}
	class={cx(classes.secondary, extraClasses)}
	{...rest}
>
	{@render children?.()}
</button>
