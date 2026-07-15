<script lang="ts">
	import type { Snippet } from "svelte";
	import { cx } from "../../shared/cx.js";
	import { themed } from "../../shared/headless.js";
	import rawClasses from "../../shared/styles/components/text.module.css";

	const classes = themed(rawClasses);

	type HeadingProps = {
		/** Heading level 1-6. */
		level?: 1 | 2 | 3 | 4 | 5 | 6;
		classes?: string[];
		children?: Snippet;
	};

	let { level = 1, classes: extraClasses, children }: HeadingProps = $props();

	const tag = $derived(`h${level}` as const);
	const levelClass = $derived(classes[`h${level}`]);
</script>

<svelte:element this={tag} class={cx(levelClass, extraClasses)}>
	{@render children?.()}
</svelte:element>
