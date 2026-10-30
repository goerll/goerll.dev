export const INK = '230,226,216';
export const MOSS = '207,227,176';

export interface Pointer {
	x: number;
	y: number;
	seen: boolean;
	/** performance.now() of the last move */
	movedAt: number;
}

/** What every scene draws with. w and h update in place on resize. */
export interface Env {
	ctx: CanvasRenderingContext2D;
	w: number;
	h: number;
	pointer: Pointer;
	font: string;
	/** on reading pages, the text column to keep clear; null on home */
	focus: { left: number; right: number } | null;
}

export interface Scene {
	resize(): void;
	step(dt: number, t: number): void;
	draw(t: number): void;
	click?(x: number, y: number): void;
}

export const rand = (a: number, b: number) => a + Math.random() * (b - a);
