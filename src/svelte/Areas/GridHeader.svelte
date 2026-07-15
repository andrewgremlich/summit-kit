<script lang="ts">
	import { themed } from "../../shared/headless.js";
	import rawStyles from "../../shared/styles/components/areas.module.css";
	import Grid, { type GridProps } from "./Grid.svelte";

	const styles = themed(rawStyles);

	type GridHeaderProps = Omit<GridProps, "children"> & {
		headers: string[];
	};

	let { headers, ...gridProps }: GridHeaderProps = $props();
</script>

<Grid {...gridProps}>
	{#each headers as header (header)}
		<div class={styles.headerCell}><strong>{header}</strong></div>
	{/each}
</Grid>
