'use client';

import { useEffect, useState } from 'react';

const words = ['obvious', 'fast', 'simple', 'effortless', 'like magic'];
const longest = Math.max(...words.map((w) => w.length));

// The last word deletes itself and types the next one, like the line is being
// regenerated. The headline never wraps: the word's slot is as wide as the
// longest word, and .lede-line sizes the font so the whole line fits the
// screen. Phones drop "I design and build" so the line stays readable.
export function RetypeHeadline() {
	const [text, setText] = useState(words[0]);
	const [index, setIndex] = useState(0);
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const target = words[index];
		let delay: number;
		let next: () => void;
		if (deleting) {
			delay = 45;
			next = text
				? () => setText(text.slice(0, -1))
				: () => {
						setDeleting(false);
						setIndex((index + 1) % words.length);
					};
		} else if (text !== target) {
			delay = 75;
			next = () => setText(target.slice(0, text.length + 1));
		} else {
			delay = 2600;
			next = () => setDeleting(true);
		}
		const id = setTimeout(next, delay);
		return () => clearTimeout(id);
	}, [text, index, deleting]);

	return (
		<h1 className="lede lede-line" aria-label={`I design and build software that feels ${words[0]}`}>
			<span aria-hidden="true">
				<span className="hidden sm:inline">I design and build software</span>
				<span className="sm:hidden">Software</span> that feels{' '}
				<span className="inline-block" style={{ minWidth: `calc(${longest}ch + 6px + 15px)` }}>
					{text && <span className="token">{text}</span>}
					<span className="cursor" />
				</span>
			</span>
		</h1>
	);
}
