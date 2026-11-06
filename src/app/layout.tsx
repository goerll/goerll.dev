import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import { Background } from '@/components/Background';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={plex.variable} data-theme="dark">
			<body>
				<Background />
				<div className="relative mx-auto flex min-h-screen w-full max-w-page flex-col px-6 pb-24 pt-8 sm:pt-11 lg:px-0">
					<nav className="flex justify-center text-sm leading-[22px] text-muted">
						<Nav />
					</nav>
					<main className="flex flex-1 flex-col">{children}</main>
				</div>
			</body>
		</html>
	);
}
