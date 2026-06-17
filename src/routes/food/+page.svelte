<script lang="ts">
	import { recipes } from '$lib/content.js';
	import type { Recipe } from '$lib/content.js';
</script>

<svelte:head>
	<title>Recipes — Samuel Martin</title>
	<meta name="description" content="A collection of recipes I've cooked and loved." />
</svelte:head>

<main class="min-h-screen pt-24 pb-20 px-4">
	<div class="max-w-5xl mx-auto">
		<div class="mb-12">
			<a href="/" class="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
				← Back to Home
			</a>
			<h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
				Recipes
			</h1>
			<p class="text-xl text-muted-foreground">
				Things I've cooked, tested, and enjoyed enough to write down.
				Mostly French-leaning, always ambitious.
			</p>
		</div>

		{#if recipes.length === 0}
			<div class="text-center py-20">
				<p class="text-muted-foreground text-lg">No recipes yet. The kitchen is warming up.</p>
			</div>
		{:else}
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each recipes as recipe}
					<a href={recipe.href} class="block h-full">
						<article class="group overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
							<div class="p-6 flex flex-col h-full">
								<div class="flex items-center gap-2 mb-3">
									<span class="text-xs font-medium uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
										{recipe.category}
									</span>
									<span class="text-xs text-muted-foreground">{recipe.date}</span>
								</div>
								<h3 class="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors mb-2">
									{recipe.title}
								</h3>
								<p class="text-sm text-muted-foreground line-clamp-3 flex-1">
									{recipe.description}
								</p>
								{#if recipe.tags.length > 0}
									<div class="flex flex-wrap gap-1.5 mt-4 pt-4 border-t">
										{#each recipe.tags as tag}
											<span class="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">
												{tag}
											</span>
										{/each}
									</div>
								{/if}
							</div>
						</article>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</main>
