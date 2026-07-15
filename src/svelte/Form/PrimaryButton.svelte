<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { cx } from "../../shared/cx.js";
	import { themed } from "../../shared/headless.js";
	import rawClasses from "../../shared/styles/components/form.module.css";

	const classes = themed(rawClasses);

	type PrimaryButtonProps = HTMLButtonAttributes & {
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
	}: PrimaryButtonProps = $props();
</script>

<button
	type={onclick ? "button" : "submit"}
	{onclick}
	{disabled}
	class={cx(classes.submit, extraClasses)}
	{...rest}
>
	{@render children?.()}
</button>
