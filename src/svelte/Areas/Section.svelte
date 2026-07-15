<script lang="ts">
	import type { Snippet } from "svelte";
	import { themed } from "../../shared/headless.js";
	import rawStyles from "../../shared/styles/components/areas.module.css";

	const styles = themed(rawStyles);

	let { children }: { children?: Snippet } = $props();
</script>

<section class={styles.section}>
	{@render children?.()}
</section>
