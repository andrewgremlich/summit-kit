<script lang="ts">
	import type { Snippet } from "svelte";
	import { cx } from "../../shared/cx.js";
	import { themed } from "../../shared/headless.js";
	import rawClasses from "../../shared/styles/components/text.module.css";

	const classes = themed(rawClasses);

	let {
		classes: extraClasses,
		children,
	}: { classes?: string[]; children?: Snippet } = $props();
</script>

<ol class={cx(classes.ol, extraClasses)}>{@render children?.()}</ol>
