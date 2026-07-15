<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		label,
		code,
		children,
	}: { label: string; code: string; children?: Snippet } = $props();
</script>

<div class="demo-example">
	<span class="demo-label">{label}</span>
	<div class="demo-render">{@render children?.()}</div>
	<pre class="demo-code"><code>{code}</code></pre>
</div>
