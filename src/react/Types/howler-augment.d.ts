import "howler";

declare module "howler" {
	interface Howl {
		_src?: string | string[];
	}
}
