'use client';

import { useState } from 'react';

// The headline is written like model output: the last word is a sampled
// token, and the top-k panel shows the other candidates. Hover or click one
// to resample.
const candidates = [
	{ token: 'obvious', p: 0.44 },
	{ token: 'fast', p: 0.23 },
	{ token: 'simple', p: 0.17 },
	{ token: 'effortless', p: 0.11 },
	{ token: 'like magic', p: 0.05 }
];

export function SampledHeadline() {
	const [selected, setSelected] = useState(0);
	const [previewing, setPreviewing] = useState<number | null>(null);
	const shown = candidates[previewing ?? selected].token;

	const topK = (extra: string) => (
		<span
			role="group"
			aria-label="Other likely tokens"
			className={`flex-col rounded border border-line bg-panel py-2 text-[13px] leading-7 text-soft ${extra}`}
		>
			{candidates.map((c, i) => (
				<button
					key={c.token}
					type="button"
					aria-pressed={selected === i}
					onClick={() => setSelected(i)}
					onMouseEnter={() => setPreviewing(i)}
					onMouseLeave={() => setPreviewing(null)}
					onFocus={() => setPreviewing(i)}
					onBlur={() => setPreviewing(null)}
					className={`flex justify-between whitespace-nowrap px-3 text-left transition-colors hover:bg-row hover:text-ink ${
						selected === i ? 'bg-row text-ink' : ''
					} ${i === candidates.length - 1 && selected !== i ? 'text-dim' : ''}`}
				>
					<span>{c.token}</span>
					<span className="tabular-nums">{c.p.toFixed(2)}</span>
				</button>
			))}
		</span>
	);

	return (
		<>
			<h1 className="lede">
				I design and build software that feels{' '}
				<span className="relative inline-block">
					<span className="token">{shown}</span>
					{topK('absolute left-0 top-[calc(100%+12px)] z-10 hidden w-[220px] md:flex')}
				</span>
				<span className="cursor" aria-hidden="true" />
			</h1>
			{topK('flex w-full md:hidden')}
		</>
	);
}
