<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements";
	import Image from "./Image.svelte";

	type FigureProps = HTMLImgAttributes & {
		src: string;
		alt?: string;
		width: number | string;
		caption?: string;
	};

	let { src, alt = "", width, caption, ...rest }: FigureProps = $props();
</script>

<figure>
	<Image {src} alt={caption ? "" : alt} {width} {...rest} />
	<figcaption>{caption ?? alt}</figcaption>
</figure>
