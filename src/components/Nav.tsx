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

/** Flips the theme the layout's head script picked from the time in Blumenau. */
function ThemeToggle() {
	const [light, setLight] = useState<boolean | null>(null);
	useEffect(() => setLight(document.documentElement.dataset.theme === 'light'), []);

	return (
		<button
			type="button"
			aria-label={light ? 'Switch to the dark theme' : 'Switch to the light theme'}
			onClick={() => {
				const next = !light;
				document.documentElement.dataset.theme = next ? 'light' : 'dark';
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
