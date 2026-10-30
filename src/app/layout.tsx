import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import './globals.css';

const plex = IBM_Plex_Mono({
	subsets: ['latin', 'latin-ext'],
	weight: ['400', '500'],
	variable: '--font-plex'
});

export const metadata: Metadata = {
	title: 'Estevão Goerll',
	description:
		'Estevão Goerll designs and builds software that feels obvious. Frontend & apps at Nexus.',
	icons: { icon: '/icon.png' }
};

export const viewport: Viewport = {
	themeColor: '#151614'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={plex.variable}>
			<body>
				<div className="mx-auto flex min-h-screen w-full max-w-page flex-col px-6 pb-24 pt-8 sm:pt-11 lg:px-0">
					<nav className="flex items-baseline justify-between text-sm leading-[22px] text-muted">
						<Link href="/" className="text-ink">
							estevão goerll
						</Link>
						<Nav />
					</nav>
					<main className="flex flex-1 flex-col">{children}</main>
				</div>
			</body>
		</html>
	);
}
