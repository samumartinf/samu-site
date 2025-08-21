<script lang="ts">
	import { getAllPortfolioItems, type PortfolioItem } from '$lib/content.js';

	interface Props {
		showTitle?: boolean;
		maxItems?: number;
		backgroundClass?: string;
		}

	let { showTitle = true, maxItems = 10, backgroundClass = "bg-muted/20" }: Props = $props();

	const portfolioItems: PortfolioItem[] = getAllPortfolioItems();
	const displayItems = portfolioItems.slice(0, maxItems);
</script>

<!-- Portfolio Section -->
<section id="portfolio" class="py-20 px-4 {backgroundClass}">
	<div class="max-w-7xl mx-auto">
		{#if showTitle}
			<h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
				Portfolio
			</h2>
		{/if}
		
		<div class="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
			{#each displayItems as item}
				<article class="bg-card border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
					<div class="relative h-48 overflow-hidden">
						<a href={item.href} class="block w-full h-full">
							<img 
								src={item.image}
								alt={item.title}
								class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
							/>
						</a>
					</div>
					<div class="p-6">
						<h3 class="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
							{item.title}
						</h3>
						<p class="text-muted-foreground mb-4 line-clamp-3">
							{item.description}
						</p>
						<div class="flex flex-wrap gap-2 mb-4">
							{#each item.tags as tag}
								<span class="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">{tag}</span>
							{/each}
						</div>
						<div class="flex items-center justify-between">
							<a href={item.href} class="inline-flex items-center text-primary hover:text-accent transition-colors">
								Read More →
							</a>
							{#if item.externalUrl}
								<a 
									href={item.externalUrl} 
									target="_blank" 
									rel="noopener noreferrer"
									class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg hover:bg-primary/90 transition-colors"
								>
									🚀 Try Out
								</a>
							{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>