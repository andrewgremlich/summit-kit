<script lang="ts">
	import type { Snippet } from "svelte";
	import { cx } from "../../shared/cx.js";
	import { themed } from "../../shared/headless.js";
	import rawClasses from "../../shared/styles/components/text.module.css";

	const classes = themed(rawClasses);

	type LinkProps = {
		href: string;
		target?: string;
		rel?: string;
		classes?: string[];
		children?: Snippet;
	};

	let {
		href,
		target = "_parent",
		rel = "noopener noreferrer",
		classes: extraClasses,
		children,
	}: LinkProps = $props();
</script>

<a class={cx(classes.a, extraClasses)} {href} {target} {rel}>
	{@render children?.()}
	{#if target === "_blank"}
		<span class="sr-only"> (opens in new tab)</span>
	{/if}
</a>
