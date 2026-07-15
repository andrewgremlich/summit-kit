<script lang="ts">
	import type { Snippet } from "svelte";
	import { cx } from "../../shared/cx.js";

	let {
		classes: extraClasses,
		children,
	}: { classes?: string[]; children?: Snippet } = $props();
</script>

<li class={cx(extraClasses) || undefined}>{@render children?.()}</li>
