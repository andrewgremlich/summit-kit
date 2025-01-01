type ImageProps = {
	src: string;
	alt: string;
	width: number;
	height: number;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const Image = (props: ImageProps) => {
	const {
		src,
		alt = "This is not the image you're looking for...",
		width,
		height,
		...rest
	} = props;

	// biome-ignore lint/a11y/useAltText: This rule seems to be broken here.
	return <img src={src} alt={alt} width={width} height={height} {...rest} />;
};

export const Figure = (props: ImageProps) => {
	const { src, alt, width, height, ...rest } = props;

	return (
		<figure>
			<Image src={src} alt={alt} width={width} height={height} {...rest} />
			<figcaption>{alt}</figcaption>
		</figure>
	);
};
