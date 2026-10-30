import type { Metadata } from 'next';
import { Tinted, type Part } from '@/components/Tinted';

export const metadata: Metadata = { title: 'Work · Estevão Goerll' };

interface Entry {
	when: string;
	now?: boolean;
	title: string;
	org: string;
	summary: Part[];
	meta: string;
}

const experience: Entry[] = [
	{
		when: 'since 2026',
		now: true,
		title: 'Sub-area lead, frontend & apps',
		org: 'Nexus',
		summary: [
			{ t: 'Leading the team', a: 0.22 },
			' behind the desktop, web and mobile apps of an AI platform for small businesses. Building a ',
			{ t: 'meta harness', a: 0.5 },
			' for running Claude Code and Codex sessions locally or on remote machines, and designing how people ',
			{ t: 'follow and steer', a: 0.42 },
			' those agents from a single place.'
		],
		meta: 'tauri · rust · react · typescript'
	},
	{
		when: '2024 · 2026',
		title: 'Software engineer',
		org: 'Mouts TI',
		summary: [
			'Built the ',
			{ t: 'interfaces factory supervisors use', a: 0.3 },
			' to read live machine data, and a ',
			{ t: 'chat agent', a: 0.42 },
			' that answers questions about production in plain language. Also trained and shipped a ',
			{ t: 'computer vision model', a: 0.2 },
			' that inspects fabric on the factory floor.'
		],
		meta: 'react · typescript · python · node'
	}
];

const education: Entry[] = [
	{
		when: '2023 · 2026',
		title: 'B.Sc. computer science',
		org: 'IFC',
		summary: [
			'Thesis on ',
			{ t: 'mechanistic interpretability', a: 0.42 },
			' for code models: how transformers represent and reason about the source code they read.'
		],
		meta: 'average 9.01 / 10'
	}
];

function Timeline({ label, entries }: { label: string; entries: Entry[] }) {
	return (
		<section className="flex flex-col">
			<p className="label mb-8">{label}</p>
			{entries.map((e) => (
				// The rail is a left border: on mobile it runs down every entry, on
				// desktop only beside the current role, joining the "now" dot to the next one.
				<article
					key={e.title}
					className="flex flex-col gap-3 border-l border-line pb-14 pl-6 md:flex-row md:gap-10 md:border-l-0 md:pb-16 md:pl-0"
				>
					<div
						className={`relative -ml-6 pl-6 text-sm leading-7 text-muted md:ml-0 md:w-[200px] md:shrink-0 ${
							e.now ? 'md:-mb-16 md:border-l md:border-line md:pb-16' : ''
						}`}
					>
						{e.now ? (
							<>
								<span className="absolute -left-[5px] top-[9px] h-[9px] w-[9px] rounded-full bg-moss shadow-[0_0_0_4px_rgba(207,227,176,0.15)]" />
								<span className="text-moss">now</span>
								<span className="text-dim"> · {e.when}</span>
							</>
						) : (
							<>
								<span className="absolute -left-1 top-[10px] h-[7px] w-[7px] rounded-full border border-dim bg-bg" />
								{e.when}
							</>
						)}
					</div>
					<div className="flex flex-1 flex-col gap-3.5">
						<h2 className="text-[17px] leading-7 text-ink sm:text-[19px] sm:leading-[30px]">
							{e.title}
							<span className="ml-2.5 text-muted">@ {e.org}</span>
						</h2>
						<p className="max-w-[760px] text-[15px] leading-7 text-soft">
							<Tinted parts={e.summary} />
						</p>
						<p className="label">{e.meta}</p>
					</div>
				</article>
			))}
		</section>
	);
}

export default function Work() {
	return (
		<>
			<header className="mb-20 mt-28 flex flex-col gap-5 sm:mb-24 sm:mt-[150px]">
				<p className="prompt">&gt; what is he working on?</p>
				<h1 className="lede max-w-[900px]">
					Mostly tools for working alongside AI agents, and the interfaces that make them easy
					to <span className="token">trust</span>
					<span className="cursor" aria-hidden="true" />
				</h1>
			</header>

			<Timeline label="experience" entries={experience} />
			<div className="mt-8">
				<Timeline label="education" entries={education} />
			</div>
		</>
	);
}
