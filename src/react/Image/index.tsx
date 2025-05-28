type ImageProps = {
	src: string;
	alt: string;
	width: number | string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

/**
 * Renders an image element with the provided source, alternative text, width, and additional props.
 *
 * @param props - The properties for the image component.
 * @param props.src - The source URL of the image.
 * @param props.alt - The alternative text for the image. Defaults to "This is not the image you're looking for...".
 * @param props.width - The width of the image (optional).
 * @param props.rest - Additional props to be spread onto the image element.
 * @returns A React `<img>` element with the specified attributes.
 */
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

/**
 * Renders an image wrapped in a <figure> element with a <figcaption> displaying the image's alt text.
 *
 * @param props - The properties for the image, including `src`, `alt`, `width`, and any additional props.
 * @returns A React element containing the image and its caption.
 */
export const Figure = (props: ImageProps) => {
	const { src, alt, width, ...rest } = props;

	return (
		<figure>
			<Image src={src} alt={alt} width={width} {...rest} />
			<figcaption>{alt}</figcaption>
		</figure>
	);
};
