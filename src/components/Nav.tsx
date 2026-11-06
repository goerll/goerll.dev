'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
	{ href: '/', label: 'about' },
	{ href: '/work', label: 'work' },
	{ href: '/projects', label: 'projects' }
];

function isActive(href: string, currentPath: string): boolean {
	if (href === '/') return currentPath === '/';
	return currentPath.startsWith(href);
}

export function Nav() {
	const pathname = usePathname();

	return (
		<span className="flex items-center gap-6 sm:gap-8">
			{navItems.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					aria-current={isActive(item.href, pathname) ? 'page' : undefined}
					className="transition-colors hover:text-ink aria-[current=page]:text-ink"
				>
					{item.label}
				</Link>
			))}
			<ThemeToggle />
		</span>
	);
}

const TOKENS = ['bg', 'ink', 'soft', 'muted', 'dim', 'sep', 'accent', 'panel', 'line', 'rule', 'row', 'light'];
const read = (root: HTMLElement) => {
	const css = getComputedStyle(root);
	return TOKENS.map((t) => css.getPropertyValue(`--${t}`).trim().split(/\s+/).map(Number));
};
const ease = (t: number) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));
let switching = 0;

/**
 * Moves the page between the themes the way light moves through water: the
 * scene's light shafts flare up and spread (--surge, read by the jellyfish
 * scene) while every color variable fades from one theme to the other.
 * Going dark the light just ebbs away. Reduced motion flips it at once.
 */
function switchTheme(light: boolean) {
	const root = document.documentElement;
	cancelAnimationFrame(switching);
	const from = read(root); // mid-switch, this picks up where it was
	for (const t of [...TOKENS, 'surge']) root.style.removeProperty(`--${t}`);
	root.dataset.theme = light ? 'light' : 'dark';
	if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	const to = read(root);
	const duration = light ? 1800 : 1400;
	const start = performance.now();
	const frame = (now: number) => {
		const p = Math.min(1, (now - start) / duration);
		// going light the shafts flare first and the water follows
		const k = light ? ease((p - 0.15) / 0.75) : ease(p / 0.8);
		const surge = light ? (p < 0.4 ? ease(p / 0.4) : 1 - ease((p - 0.4) / 0.6)) : 0.35 * (1 - p) ** 2;
		TOKENS.forEach((t, i) =>
			root.style.setProperty(`--${t}`, from[i].map((v, j) => +(v + (to[i][j] - v) * k).toFixed(t === 'light' ? 3 : 0)).join(' '))
		);
		root.style.setProperty('--surge', surge.toFixed(3));
		if (p < 1) switching = requestAnimationFrame(frame);
		else for (const t of [...TOKENS, 'surge']) root.style.removeProperty(`--${t}`);
	};
	switching = requestAnimationFrame(frame);
}

/** Switches between the dark default and the light theme. */
function ThemeToggle() {
	const [light, setLight] = useState<boolean | null>(null);
	useEffect(() => setLight(document.documentElement.dataset.theme === 'light'), []);

	return (
		<button
			type="button"
			aria-label={light ? 'Switch to the dark theme' : 'Switch to the light theme'}
			onClick={() => {
				const next = !light;
				switchTheme(next);
				setLight(next);
			}}
			className="flex h-[22px] w-4 items-center justify-center transition-colors hover:text-ink"
		>
			{light === null ? null : light ? (
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
					<circle cx="12" cy="12" r="4" />
					<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
				</svg>
			) : (
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
					<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
				</svg>
			)}
		</button>
	);
}
