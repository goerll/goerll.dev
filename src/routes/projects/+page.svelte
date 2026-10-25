<script lang="ts">
	import { ExternalLink, Star } from 'lucide-svelte';
	import StaticImage from '$lib/components/StaticImage.svelte';
</script>

<div class="relative min-h-screen">
	<div class="relative z-10 mx-auto flex min-h-screen w-full max-w-[66rem] items-start px-6 pb-24 pt-36 sm:px-12 xl:px-12">
		<div class="flex w-full flex-col gap-6 md:gap-10">
			<div class="flex flex-col gap-8 w-full">
				<h1 class="text-3xl font-bold tracking-tight">projects</h1>

				<div class="flex flex-col gap-5">
					<div class="text-base font-medium text-muted-foreground">
						side projects
					</div>

					<div class="flex flex-col gap-4 rounded-md border border-border/65 bg-card/52 p-4 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(8,14,13,0.3),0_18px_48px_rgba(0,0,0,0.14)]">
						<div class="flex flex-row gap-4 items-start">
							<div class="relative h-14 w-14 flex-shrink-0">
								<a
									href="https://cardboard.goerll.dev"
									target="_blank"
									rel="noopener noreferrer"
									class="block h-full w-full overflow-hidden rounded-md transition-transform duration-300 hover:scale-105"
								>
									<StaticImage
										alt="Cardboard logo"
										src="/assets/cardboard_logo.svg"
										class="object-contain"
									/>
								</a>
							</div>

							<div class="flex flex-col w-full min-w-0 gap-1.5">
								<div class="flex flex-row items-center gap-3 w-full justify-between">
									<div class="flex flex-row items-center gap-2 flex-wrap min-w-0">
										<a
											class="font-semibold text-base sm:text-lg transition-colors hover:text-primary"
											href="https://cardboard.goerll.dev"
											target="_blank"
											rel="noopener noreferrer"
										>
											Cardboard
										</a>
										<span class="rounded-full border border-border/70 bg-secondary/55 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
											Rust
										</span>
										<span class="rounded-full border border-border/70 bg-secondary/55 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
											TypeScript
										</span>
										<span class="rounded-full border border-border/70 bg-secondary/55 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
											MCP
										</span>
									</div>
									<a
										href="https://cardboard.goerll.dev"
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition hover:bg-secondary/80 flex-shrink-0"
									>
										<ExternalLink class="w-3 h-3" />
										<span>live</span>
									</a>
								</div>
								<div class="text-muted-foreground text-sm leading-relaxed">
									Open source design editor where you and your AI agent work on the same canvas, with
									real HTML and CSS layers and an MCP server for Claude Code, Codex or Cursor.
								</div>
							</div>
						</div>

						<div class="overflow-hidden rounded-md border border-border/60 bg-black/35">
							<StaticImage
								alt="Cardboard screenshot"
								src="/assets/cardboard_preview.png"
								class="w-full object-cover"
							/>
						</div>
					</div>

					<div class="flex flex-col gap-4 rounded-md border border-border/65 bg-card/52 p-4 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(8,14,13,0.3),0_18px_48px_rgba(0,0,0,0.14)]">
						<div class="flex flex-row gap-4 items-start">
							<div class="relative h-14 w-14 flex-shrink-0">
								<a
									href="https://drawtomata.com"
									target="_blank"
									rel="noopener noreferrer"
									class="block h-full w-full overflow-hidden rounded-md transition-transform duration-300 hover:scale-105"
								>
									<div class="relative w-full h-full overflow-hidden bg-gradient-to-br from-pink-500/80 via-purple-600/80 to-blue-500/80">
										<StaticImage
											alt="Drawtomata logo"
											src="/assets/drawtomata_logo.png"
											class="object-contain p-1.5 bg-white/90"
										/>
									</div>
								</a>
							</div>

							<div class="flex flex-col w-full min-w-0 gap-1.5">
								<div class="flex flex-row items-center gap-3 w-full justify-between">
									<div class="flex flex-row items-center gap-2 flex-wrap min-w-0">
										<a
											class="font-semibold text-base sm:text-lg transition-colors hover:text-primary"
											href="https://drawtomata.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											Drawtomata
										</a>
										<span class="rounded-full border border-border/70 bg-secondary/55 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
											React
										</span>
										<span class="rounded-full border border-border/70 bg-secondary/55 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
											TypeScript
										</span>
										<span class="rounded-full border border-border/70 bg-secondary/55 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
											Three.js
										</span>
										<span class="rounded-full border border-border/70 bg-secondary/55 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
											Vite
										</span>
										<span class="rounded-full border border-border/70 bg-secondary/55 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
											Tailwind CSS
										</span>
									</div>
									<a
										href="https://drawtomata.com"
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition hover:bg-secondary/80 flex-shrink-0"
									>
										<ExternalLink class="w-3 h-3" />
										<span>live</span>
									</a>
								</div>
								<div class="text-muted-foreground text-sm leading-relaxed">
									Internet&apos;s most feature full formal automata simulator for study of computation theory.
								</div>
							</div>
						</div>

						<div class="overflow-hidden rounded-md border border-border/60 bg-black/35">
							<StaticImage
								alt="Drawtomata screenshot"
								src="/assets/drawtomata_preview.png"
								class="aspect-video w-full object-cover"
							/>
						</div>
					</div>

					<div class="flex flex-col gap-4 rounded-md border border-border/65 bg-card/52 p-4 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(8,14,13,0.3),0_18px_48px_rgba(0,0,0,0.14)]">
						<div class="flex flex-row gap-4 items-start">
							<div class="relative h-14 w-14 flex-shrink-0">
								<a
									href="https://github.com/goerll/MazeTrix"
									target="_blank"
									rel="noopener noreferrer"
									class="flex h-full w-full items-center justify-center overflow-hidden rounded-md border border-white/10 bg-[#0f1313] transition-transform duration-300 hover:scale-105"
								>
									<StaticImage
										alt="MazeTrix maze icon"
										src="/assets/mazetrix_maze.svg"
										class="h-9 w-9 object-contain"
									/>
								</a>
							</div>

							<div class="flex flex-col w-full min-w-0 gap-1.5">
								<div class="flex flex-row items-center gap-3 w-full justify-between">
									<div class="flex flex-row items-center gap-2 flex-wrap min-w-0">
										<a
											class="font-semibold text-base sm:text-lg transition-colors hover:text-primary"
											href="https://github.com/goerll/MazeTrix"
											target="_blank"
											rel="noopener noreferrer"
										>
											MazeTrix
										</a>
										<span class="rounded-full border border-border/70 bg-secondary/55 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
											C++
										</span>
										<span class="rounded-full border border-border/70 bg-secondary/55 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
											raylib
										</span>
										<span class="rounded-full border border-border/70 bg-secondary/55 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
											CMake
										</span>
									</div>
									<a
										href="https://github.com/goerll/MazeTrix"
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition hover:bg-secondary/80 flex-shrink-0"
									>
										<ExternalLink class="w-3 h-3" />
										<span>repo</span>
									</a>
								</div>
								<div class="text-muted-foreground text-sm leading-relaxed">
									Real-time maze generation and pathfinding visualizer, designed to
									make graph traversal algorithms feel concrete through side-by-side interactive
									comparison.
								</div>
							</div>
						</div>

						<div class="overflow-hidden rounded-md border border-border/60 bg-black/35">
							<video
								class="aspect-video w-full"
								src="https://github.com/goerll/MazeTrix/assets/90577512/0c1f6a26-a45d-4d77-a9eb-2fb9dc103ff4"
								autoplay
								muted
								loop
								playsinline
								controls
							></video>
						</div>
					</div>
				</div>

				<div class="flex flex-col gap-5">
					<div class="text-base font-medium text-muted-foreground">
						open source contributions
					</div>

					<div class="flex flex-row gap-4 items-start rounded-md border border-border/65 bg-card/52 p-4 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(8,14,13,0.3),0_18px_48px_rgba(0,0,0,0.14)]">
						<div class="relative h-14 w-14 flex-shrink-0">
							<a
								href="https://github.com/krahets/hello-algo"
								target="_blank"
								rel="noopener noreferrer"
								class="block h-full w-full overflow-hidden rounded-md bg-white p-1.5 transition-transform duration-300 hover:scale-105"
							>
								<StaticImage
									alt="Hello Algo logo"
									src="/assets/hello_algo.png"
									class="object-contain"
								/>
							</a>
						</div>

						<div class="flex flex-col w-full min-w-0 gap-1.5">
							<div class="flex flex-row items-center gap-3 w-full justify-between">
								<div class="flex flex-row items-center gap-2 flex-wrap min-w-0">
									<a
										class="font-semibold text-base sm:text-lg transition-colors hover:text-primary truncate"
										href="https://github.com/krahets/hello-algo"
										target="_blank"
										rel="noopener noreferrer"
									>
										Hello Algo
									</a>
								</div>
								<div class="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground flex-shrink-0">
									<Star class="w-3 h-3" />
									<span>119k</span>
								</div>
							</div>
							<div class="text-muted-foreground text-sm leading-relaxed">
								Enhanced explanation of AVL binary trees.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
