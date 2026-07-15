export const cx = (
	...args: (string | string[] | undefined | null | false)[]
): string => args.flat().filter(Boolean).join(" ");
