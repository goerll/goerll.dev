'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
		<span className="flex gap-5 sm:gap-8">
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
		</span>
	);
}
