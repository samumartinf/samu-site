<script lang="ts">
	import { getAllPortfolioItems, type PortfolioItem } from '$lib/content.js';

	interface Props {
		showTitle?: boolean;
		maxItems?: number;
		backgroundClass?: string;
	}

	let { showTitle = true, maxItems = 10, backgroundClass = 'bg-muted/20' }: Props = $props();

	const portfolioItems: PortfolioItem[] = getAllPortfolioItems();
	const displayItems = portfolioItems.slice(0, maxItems);
</script>

<!-- Portfolio Section -->
<section id="portfolio" class="px-4 py-20 {backgroundClass}">
	<div class="mx-auto max-w-7xl">
		{#if showTitle}
			<h2
				class="mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
			>
				Portfolio
			</h2>
		{/if}

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
			{#each displayItems as item}
				<a href={item.href} class="block h-full w-full">
					<article
						class="group overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
					>
						<div class="relative h-48 overflow-hidden">
							<img
								src={item.image}
								alt={item.title}
								class="h-full w-full cursor-pointer object-cover transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
						<div class="p-6">
							<h3
								class="mb-3 text-xl font-bold text-card-foreground transition-colors group-hover:text-primary"
							>
								{item.title}
							</h3>
							<p class="mb-4 line-clamp-3 text-muted-foreground">
								{item.description}
							</p>
							<div class="mb-4 flex flex-wrap gap-2">
								{#each item.tags as tag}
									<span class="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
										>{tag}</span
									>
								{/each}
							</div>
							<div class="flex items-center justify-between">
								{#if item.externalUrl}
									<a
										href={item.externalUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
									>
										🚀 Try Out
									</a>
								{/if}
							</div>
						</div>
					</article>
				</a>
			{/each}
		</div>
	</div>
</section>
