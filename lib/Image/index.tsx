type ImageProps = {
	src: string;
	alt: string;
	width: number | string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const Image = (props: ImageProps) => {
	const {
		src,
		alt = "This is not the image you're looking for...",
		width,
		...rest
	} = props;

	// biome-ignore lint/a11y/useAltText: This rule seems to be broken here.
	return <img src={src} alt={alt} width={width} {...rest} />;
};

export const Figure = (props: ImageProps) => {
	const { src, alt, width, ...rest } = props;

	return (
		<figure>
			<Image src={src} alt={alt} width={width} {...rest} />
			<figcaption>{alt}</figcaption>
		</figure>
	);
};
