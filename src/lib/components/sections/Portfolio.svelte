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
						<img 
							src={item.image}
							alt={item.title}
							class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
						/>
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
						<a href={item.href} class="inline-flex items-center text-primary hover:text-accent transition-colors">
							Read More →
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>