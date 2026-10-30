'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { jellyfish } from './scenes/jellyfish';
import type { Env } from './scenes/types';

// The living background: jellyfish drifting up behind the page (see
// scenes/jellyfish.ts). On reading pages they keep to the side margins and
// fade behind the text column, so the prose stays easy to read.

/** Matches the layout's content column: max-w-page (1040px) with px-6. */
function column(w: number) {
	const width = Math.min(w - 48, 1040);
	const left = (w - width) / 2;
	return { left, right: left + width };
}

export function Background() {
	const ref = useRef<HTMLCanvasElement>(null);
	const envRef = useRef<Env | null>(null);
	const pathname = usePathname();
	const reading = pathname !== '/';

	useEffect(() => {
		const env = envRef.current;
		if (env) env.focus = reading ? column(env.w) : null;
	}, [reading]);

	useEffect(() => {
		const canvas = ref.current;
		const context = canvas?.getContext('2d');
		if (!canvas || !context) return;
		const ctx: CanvasRenderingContext2D = context;
		const el: HTMLCanvasElement = canvas;

		const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
		const env: Env = {
			ctx,
			w: 0,
			h: 0,
			pointer: { x: -1e4, y: -1e4, seen: false, movedAt: 0 },
			font: getComputedStyle(document.body).fontFamily,
			focus: null
		};
		envRef.current = env;
		const scene = jellyfish(env);

		function resize() {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			env.w = window.innerWidth;
			env.h = window.innerHeight;
			env.focus = window.location.pathname !== '/' ? column(env.w) : null;
			el.width = env.w * dpr;
			el.height = env.h * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			scene.resize();
			// resizing clears the canvas; without an animation loop, repaint here
			if (reduceMotion) scene.draw(performance.now());
		}

		const onMove = (e: PointerEvent) => {
			env.pointer.x = e.clientX;
			env.pointer.y = e.clientY;
			env.pointer.seen = true;
			env.pointer.movedAt = performance.now();
		};
		const onLeave = () => {
			env.pointer.x = env.pointer.y = -1e4;
			env.pointer.seen = false;
		};
		const onDown = (e: PointerEvent) => scene.click?.(e.clientX, e.clientY);

		resize();
		window.addEventListener('resize', resize);
		window.addEventListener('pointermove', onMove);
		window.addEventListener('pointerdown', onDown);
		document.documentElement.addEventListener('pointerleave', onLeave);

		let raf = 0;
		let last = performance.now();
		const frame = (now: number) => {
			const dt = Math.min(now - last, 50) / 16.67;
			last = now;
			scene.step(dt, now);
			scene.draw(now);
			raf = requestAnimationFrame(frame);
		};
		if (!reduceMotion) raf = requestAnimationFrame(frame);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', resize);
			window.removeEventListener('pointermove', onMove);
			window.removeEventListener('pointerdown', onDown);
			document.documentElement.removeEventListener('pointerleave', onLeave);
			envRef.current = null;
		};
	}, []);

	return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 h-full w-full" />;
}
