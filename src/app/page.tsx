import { Fragment } from 'react';
import { RetypeHeadline } from '@/components/RetypeHeadline';

const links = [
	{ label: 'github', href: 'https://github.com/goerll' },
	{ label: 'linkedin', href: 'https://www.linkedin.com/in/estevaogoerll/' },
	{ label: 'email', href: 'mailto:estevaogoerlln@gmail.com' }
];

const facts = [
	{ label: 'now', text: 'leading frontend & apps @ Nexus' },
	{ label: 'before', text: 'software engineer @ Mouts TI' },
	{ label: 'studied', text: 'computer science @ IFC, a thesis on how code models think' }
];

// The text sits in one block in the middle of the page, and the jellyfish swim
// around it (data-avoid, see Background).
export default function Home() {
	return (
		<div className="flex flex-1 flex-col justify-center py-16 lg:pl-[150px]">
			<section data-avoid className="flex max-w-[680px] flex-col">
				<p className="text-[15px] leading-7 text-soft">Hello, I&apos;m Estevão.</p>
				<div className="mt-2">
					<RetypeHeadline />
				</div>
				<p className="mt-5 text-[15px] leading-7 text-soft">
					I like designing and building things that are nice to use, from the first sketch down to
					the details people only notice when they&apos;re missing.
				</p>

				<dl className="mt-10 grid gap-x-6 text-sm leading-6 sm:grid-cols-[auto_1fr] sm:gap-y-1.5">
					{facts.map((f) => (
						<Fragment key={f.label}>
							<dt className="text-dim">{f.label}</dt>
							<dd className="mb-3 text-soft sm:mb-0">{f.text}</dd>
						</Fragment>
					))}
				</dl>

				<p className="mt-10 text-sm text-soft">
					{links.map((link, i) => (
						<Fragment key={link.label}>
							{i > 0 && <span className="text-sep"> / </span>}
							<a
								href={link.href}
								target={link.href.startsWith('http') ? '_blank' : undefined}
								rel="noopener noreferrer"
								className="underline decoration-sep underline-offset-[5px] transition-colors hover:text-accent hover:decoration-current"
							>
								{link.label}
							</a>
						</Fragment>
					))}
				</p>
			</section>
		</div>
	);
}
