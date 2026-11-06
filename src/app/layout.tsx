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

// Runs before first paint, so the page never flashes the wrong theme: daytime
// in Blumenau opens in the light theme, night in the dark one. The nav toggle
// flips it for the rest of the visit.
const pickTheme = `try{var h=+new Intl.DateTimeFormat('en-US',{timeZone:'America/Sao_Paulo',hour:'numeric',hourCycle:'h23'}).format(new Date());document.documentElement.dataset.theme=h>=6&&h<18?'light':'dark'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={plex.variable} data-theme="dark" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: pickTheme }} />
			</head>
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
