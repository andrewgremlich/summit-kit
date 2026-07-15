<script lang="ts">
	import type { Snippet } from "svelte";
	import Grid, { type GridProps } from "./Grid.svelte";

	type GridRowProps = Omit<GridProps, "children"> & { children?: Snippet };

	let { children, ...gridProps }: GridRowProps = $props();
</script>

<Grid {...gridProps}>
	{@render children?.()}
</Grid>
