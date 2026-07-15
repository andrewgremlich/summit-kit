<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements";

	type ImageProps = HTMLImgAttributes & {
		src: string;
		alt?: string;
		width: number | string;
	};

	let { src, alt = "", width, ...rest }: ImageProps = $props();
</script>

<img {src} {alt} {width} {...rest} />
