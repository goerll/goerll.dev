<script lang="ts">
	import StaticImage from '$lib/components/StaticImage.svelte';
</script>

<div class="relative min-h-screen">
	<div class="relative z-10 mx-auto flex min-h-screen w-full max-w-[66rem] items-start px-6 pb-24 pt-36 sm:px-12 xl:px-12">
		<div class="flex w-full flex-col gap-6 md:gap-10">
			<div class="flex flex-col gap-8 w-full">
				<h1 class="text-3xl font-bold tracking-tight">work</h1>

				<div class="flex flex-col gap-6">
					<div class="flex flex-row gap-4 items-start rounded-md border border-border/65 bg-card/52 p-4 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(8,14,13,0.3),0_18px_48px_rgba(0,0,0,0.14)]">
						<div class="relative h-14 w-14 flex-shrink-0">
							<StaticImage
								alt="Nexus logo"
								src="/assets/nexus_logo.png"
								class="rounded-md object-cover transition-transform duration-300 hover:scale-110"
							/>
						</div>
						<div class="flex flex-col w-full min-w-0">
							<div class="flex flex-row gap-4 justify-between items-baseline w-full">
								<div class="font-semibold text-base sm:text-lg">Sub-area Lead, Frontend &amp; Apps</div>
								<div class="hidden sm:flex text-muted-foreground text-sm flex-shrink-0">Sep 2026 - Present</div>
							</div>
							<div class="text-muted-foreground text-sm">
								Nexus &middot; Software Engineer, AI from Jul 2026 - Sep 2026
							</div>
							<div class="sm:hidden text-muted-foreground text-xs">Sep 2026 - Present</div>
							<ul class="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
								<li>
									Leading the team behind the desktop, web and mobile apps of Nexus's AI platform
									for small and mid-sized businesses, after the company pivoted from crypto to AI.
								</li>
								<li>
									Building the desktop app (Tauri, Rust, React), an agent workbench for running
									Claude Code and Codex sessions locally or on remote machines.
								</li>
								<li>
									Built Review-Judge, an LLM-as-judge system that checks AI and human code reviews
									for hallucinated claims, and led the crypto exchange's launch to production
									testnet.
								</li>
							</ul>
						</div>
					</div>

					<div class="flex flex-row gap-4 items-start rounded-md border border-border/65 bg-card/52 p-4 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(8,14,13,0.3),0_18px_48px_rgba(0,0,0,0.14)]">
						<div class="relative h-14 w-14 flex-shrink-0">
							<StaticImage
								alt="Mouts TI logo"
								src="/assets/mouts_logo.jpg"
								class="rounded-md object-cover transition-transform duration-300 hover:scale-110"
							/>
						</div>
						<div class="flex flex-col w-full min-w-0">
							<div class="flex flex-row gap-4 justify-between items-baseline w-full">
								<div class="font-semibold text-base sm:text-lg truncate">Software Engineer</div>
								<div class="hidden sm:flex text-muted-foreground text-sm flex-shrink-0">Aug 2024 - Jul 2026</div>
							</div>
							<div class="text-muted-foreground text-sm">Mouts TI</div>
							<div class="sm:hidden text-muted-foreground text-xs">Aug 2024 - Jul 2026</div>
							<ul class="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
								<li>
									Built industrial software that turns raw machine data from PLCs into real-time
									insight for factory supervisors, with Python, TypeScript and React.
								</li>
								<li>
									Developed an AI agent on top of the PC Factory MES that answers questions about
									live production data in natural language.
								</li>
								<li>
									Trained and deployed a computer vision model that detects fabric defects on a
									textile factory's looms.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-8 w-full">
				<h1 class="text-3xl font-bold tracking-tight">education</h1>

				<div class="flex flex-col gap-6">
					<div class="flex flex-row gap-4 items-start rounded-md border border-border/65 bg-card/52 p-4 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(8,14,13,0.3),0_18px_48px_rgba(0,0,0,0.14)]">
						<div class="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-md bg-white p-1.5">
							<StaticImage
								alt="IFC logo"
								src="/assets/ifc_logo.png"
								class="transition-transform duration-300 hover:scale-110 object-contain h-full w-full"
							/>
						</div>
						<div class="flex flex-col w-full min-w-0">
							<div class="flex flex-row gap-4 justify-between items-baseline w-full">
								<div class="font-semibold text-base sm:text-lg truncate">
									Bachelor&apos;s in Computer Science
								</div>
								<div class="hidden sm:flex text-muted-foreground text-sm flex-shrink-0">
									Jan 2023 - Dec 2026
								</div>
							</div>
							<div class="text-muted-foreground text-sm">
								Catarinense Federal Institute (IFC)
							</div>
							<div class="sm:hidden text-muted-foreground text-xs">
								Jan 2023 - Dec 2026
							</div>
							<p class="mt-3 text-sm leading-6 text-muted-foreground">
								Final-year Computer Science student focused on machine learning and software
								engineering. My undergraduate thesis explores mechanistic interpretability for
								coding large language models, studying how transformer-based systems internally
								represent and reason about source code.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
