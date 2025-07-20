export function detectIsMobile(): boolean {
	const ua =
		navigator.userAgent ||
		((window as { opera?: unknown }).opera as string | undefined) ||
		"";
	const mobileRegex =
		/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
	const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
	return mobileRegex.test(ua) || isTouch;
}
