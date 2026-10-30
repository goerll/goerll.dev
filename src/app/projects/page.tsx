import type { Metadata } from 'next';
import { Tinted, type Part } from '@/components/Tinted';

export const metadata: Metadata = { title: 'Projects · Estevão Goerll' };

const smaller: { name: string; summary: Part[]; link: string; href: string }[] = [
	{
		name: 'MazeTrix',
		summary: [
			'Maze generation and pathfinding, side by side, so ',
			{ t: 'graph search feels concrete', a: 0.25 },
			'.'
		],
		link: 'repo',
		href: 'https://github.com/goerll/MazeTrix'
	},
	{
		name: 'Hello Algo',
		summary: [
			'Open source contribution: ',
			{ t: 'fixed the rotation cases', a: 0.18 },
			' in the English AVL tree chapter.'
		],
		link: 'pr',
		href: 'https://github.com/krahets/hello-algo/pull/1448'
	}
];

function Meta({ stack, label, href }: { stack: string; label: string; href: string }) {
	return (
		<p className="label">
			{stack} <span className="text-sep">/</span>{' '}
			<a href={href} target="_blank" rel="noopener noreferrer" className="text-moss hover:underline">
				{label} ↗
			</a>
		</p>
	);
}

export default function Projects() {
	return (
		<>
			<header className="mb-16 mt-28 flex flex-col gap-5 sm:mb-[88px] sm:mt-[150px]">
				<p className="prompt">&gt; what has he built?</p>
				<h1 className="lede max-w-[1000px]">
					Things I wanted to exist, mostly. Some of them other people use now.
				</h1>
			</header>

			<article className="mb-20 flex flex-col gap-7 md:mb-28">
				<a href="https://cardboard.goerll.dev" target="_blank" rel="noopener noreferrer" className="block">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src="/assets/cardboard_mock.png"
						alt="Cardboard editor with this site open on the canvas, a Claude Code agent selecting the headline and an MCP chat explaining its edit"
						width={2080}
						height={1248}
						className="h-auto w-full rounded-md border border-line"
					/>
				</a>
				<div className="flex flex-col gap-3 md:flex-row md:gap-10">
					<p className="flex items-center gap-3 self-start text-[17px] leading-7 text-ink md:w-[200px] md:shrink-0">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src="/assets/cardboard_logo.svg" alt="" className="h-7 w-7 rounded-[7px]" />
						Cardboard
					</p>
					<div className="flex flex-1 flex-col gap-3">
						<p className="max-w-[760px] text-[15px] leading-7 text-soft">
							<Tinted
								parts={[
									'An open source design editor where ',
									{ t: 'you and your AI agent work on the same canvas', a: 0.5 },
									'. Every layer is ',
									{ t: 'real HTML and CSS', a: 0.25 },
									', and agents join through an ',
									{ t: 'MCP server', a: 0.18 },
									' from Claude Code, Codex or Cursor.'
								]}
							/>
						</p>
						<Meta stack="rust · typescript · mcp" label="cardboard.goerll.dev" href="https://cardboard.goerll.dev" />
					</div>
				</div>
			</article>

			<article className="mb-20 flex flex-col items-start gap-7 md:mb-28 md:flex-row md:gap-10">
				<a
					href="https://drawtomata.com"
					target="_blank"
					rel="noopener noreferrer"
					className="block w-full md:w-[560px] md:shrink-0"
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src="/assets/drawtomata_preview.png"
						alt="Drawtomata canvas showing a finite automaton being simulated"
						className="aspect-[560/325] w-full rounded-md border border-line object-cover"
					/>
				</a>
				<div className="flex flex-1 flex-col gap-3 pt-0.5">
					<p className="flex items-center gap-3 text-[17px] leading-7 text-ink">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src="/assets/drawtomata_logo.png" alt="" className="h-7 w-7 rounded-[7px]" />
						Drawtomata
					</p>
					<p className="text-[15px] leading-7 text-soft">
						<Tinted
							parts={[
								{ t: 'Draw automata by hand', a: 0.42 },
								' and watch them run on strings, step by step. Built for ',
								{ t: 'students and teachers', a: 0.2 },
								' of computation theory.'
							]}
						/>
					</p>
					<Meta stack="react · three.js" label="drawtomata.com" href="https://drawtomata.com" />
				</div>
			</article>

			<section className="flex flex-col">
				<p className="label mb-4">smaller things</p>
				{smaller.map((row, i) => (
					<div
						key={row.name}
						className={`flex flex-col gap-1 border-t border-rule py-[18px] text-[15px] leading-[26px] sm:flex-row sm:items-baseline sm:gap-10 ${
							i === smaller.length - 1 ? 'border-b' : ''
						}`}
					>
						<span className="text-ink sm:w-[200px] sm:shrink-0">{row.name}</span>
						<span className="flex-1 text-soft">
							<Tinted parts={row.summary} />
						</span>
						<a
							href={row.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[13px] text-muted transition-colors hover:text-moss sm:w-[120px] sm:shrink-0 sm:text-right"
						>
							{row.link} ↗
						</a>
					</div>
				))}
			</section>
		</>
	);
}
