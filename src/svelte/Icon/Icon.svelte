<script lang="ts">
	import { icons } from "@lucide/svelte";
	import { cx } from "../../shared/cx.js";
	import P from "../Text/P.svelte";

	type IconProps = {
		/** A Lucide icon name in PascalCase, e.g. "Activity", "Heart". */
		name: string;
		size?: number;
		color?: string;
		classes?: string[];
		"aria-label"?: string;
		"aria-hidden"?: boolean | "true" | "false";
	};

	let {
		name,
		size = 24,
		color = "currentColor",
		classes: extraClasses,
		"aria-label": ariaLabel,
		"aria-hidden": ariaHidden,
	}: IconProps = $props();

	const IconComponent = $derived(
		(icons as Record<string, typeof import("@lucide/svelte").Icon>)[name],
	);
</script>

{#if IconComponent}
	<IconComponent
		class={cx(extraClasses) || undefined}
		{size}
		{color}
		aria-label={ariaLabel}
		aria-hidden={ariaHidden ?? !ariaLabel}
	/>
{:else}
	<P>Icon not found</P>
{/if}
