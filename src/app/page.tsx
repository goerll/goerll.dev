import { Fragment } from 'react';
import { SampledHeadline } from '@/components/SampledHeadline';

const links = [
	{ label: 'github', href: 'https://github.com/goerll' },
	{ label: 'linkedin', href: 'https://www.linkedin.com/in/estevaogoerll/' },
	{ label: 'email', href: 'mailto:estevaogoerlln@gmail.com' }
];

const facts = [
	{ label: 'now', text: 'leading frontend & apps @ Nexus' },
	{ label: 'before', text: 'software engineer @ Mouts TI' },
	{ label: 'studied', text: 'computer science @ IFC, a thesis on how code models think' },
	{ label: 'on the side', text: 'opening models up to see how they think' }
];

// The top of the page is open water for the jellyfish; the text sits low, in
// one block they swim around (data-avoid, see Background).
export default function Home() {
	return (
		<div className="flex flex-1 flex-col justify-end pt-[26vh] lg:pl-[150px]">
			<section data-avoid className="flex max-w-[640px] flex-col">
				<p className="text-[15px] leading-7 text-soft">Hello, I&apos;m Estevão.</p>
				<div className="mt-2">
					<SampledHeadline />
				</div>
				<p className="mt-5 text-[15px] leading-7 text-soft">
					I care about the small stuff: what the screen shows you, how long you wait, what you can
					undo.
				</p>

				<dl className="mt-10 grid gap-x-6 text-sm leading-6 sm:grid-cols-[auto_1fr] sm:gap-y-1.5">
					{facts.map((f) => (
						<Fragment key={f.label}>
							<dt className="text-dim">{f.label}</dt>
							<dd className="mb-3 text-soft sm:mb-0">{f.text}</dd>
						</Fragment>
					))}
				</dl>

				<div className="mt-10 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 text-sm">
					<p className="text-soft">
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
					<p className="text-dim">Blumenau, Brazil</p>
				</div>
			</section>
		</div>
	);
}
