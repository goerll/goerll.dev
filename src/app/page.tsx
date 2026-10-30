import { Fragment } from 'react';
import { SampledHeadline } from '@/components/SampledHeadline';

const links = [
	{ label: 'github', href: 'https://github.com/goerll' },
	{ label: 'linkedin', href: 'https://www.linkedin.com/in/estevaogoerll/' },
	{ label: 'email', href: 'mailto:estevaogoerlln@gmail.com' }
];

export default function Home() {
	return (
		<>
			<section className="mt-28 flex flex-col gap-7 sm:mt-[188px]">
				<p className="prompt">&gt; what does estevão do?</p>
				<SampledHeadline />
			</section>

			<section className="mt-12 flex flex-col gap-7 text-[15px] leading-7 sm:text-base md:mt-[214px]">
				<p className="max-w-[960px] text-soft">
					I care about the small stuff: what the screen shows you, how long you wait, what you
					can undo.
					<br className="hidden lg:inline" />{' '}
					Lately that&apos;s a lot of agents and AI tools, which I also use every day to build. On
					the side, I open models up to see how they think.
				</p>
				<p className="text-sm leading-[22px] text-muted">
					Hello, I&apos;m Estevão · leading frontend &amp; apps @ Nexus · Blumenau, Brazil
				</p>
				<p className="text-sm text-soft">
					{links.map((link, i) => (
						<Fragment key={link.label}>
							{i > 0 && <span className="text-sep"> / </span>}
							<a
								href={link.href}
								target={link.href.startsWith('http') ? '_blank' : undefined}
								rel="noopener noreferrer"
								className="transition-colors hover:text-moss"
							>
								{link.label}
							</a>
						</Fragment>
					))}
				</p>
			</section>

			<p className="label mt-auto self-end pt-16">temperature 0.7</p>
		</>
	);
}
