let _headless = false;

export function setHeadless(value: boolean): void {
	_headless = value;
}

export function isHeadless(): boolean {
	return _headless;
}

export function themed<T extends Record<string, string>>(styles: T): T {
	return new Proxy(styles, {
		get(target, prop, receiver) {
			if (_headless && typeof prop === "string") return "";
			return Reflect.get(target, prop, receiver);
		},
	}) as T;
}
