<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	
	// Receive all frontmatter as props
	export let title: string = '';
	export let description: string = '';
	export let image: string = '';
	export let tags: string[] = [];
</script>

<svelte:head>
	<title>{title} - Samuel Martin Frias</title>
	{#if description}
		<meta name="description" content={description} />
	{/if}
</svelte:head>

<main class="min-h-screen pt-24 pb-20">
	<div class="max-w-4xl mx-auto px-4">
		<div class="mb-8">
			<a href="/" class="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
				<ArrowLeft class="h-4 w-4 mr-2" />
				Back to Home
			</a>
		</div>

		{#if image}
			<div class="mb-8">
				<img 
					src={image} 
					alt={title}
					class="w-full h-64 object-cover rounded-lg shadow-lg"
				/>
			</div>
		{/if}

		{#if tags && tags.length > 0}
			<div class="flex flex-wrap gap-2 mb-8">
				{#each tags as tag}
					<span class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{tag}</span>
				{/each}
			</div>
		{/if}

		<article class="prose prose-lg prose-gray dark:prose-invert max-w-none">
			<slot />
		</article>
	</div>
</main>

<style>
	:global(.prose h1) {
		font-size: 2.25rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		background: linear-gradient(to right, var(--color-primary), var(--color-accent));
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
	}
	
	:global(.prose h2) {
		font-size: 1.875rem;
		font-weight: 700;
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		color: var(--color-foreground);
	}
	
	:global(.prose h3) {
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: var(--color-foreground);
	}
	
	:global(.prose p) {
		color: var(--color-muted-foreground);
		line-height: 1.625;
		margin-bottom: 1.5rem;
	}
	
	:global(.prose code) {
		background-color: var(--color-muted);
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-foreground);
	}
	
	:global(.prose pre) {
		background-color: var(--color-muted);
		border: 1px solid var(--color-border);
		border-radius: 0.5rem;
		padding: 1rem;
		overflow-x: auto;
		margin: 1.5rem 0;
	}
	
	:global(.prose pre code) {
		background-color: transparent;
		padding: 0;
		border-radius: 0;
		font-size: inherit;
	}
	
	:global(.prose img) {
		border-radius: 0.5rem;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		margin: 2rem 0;
		max-width: 100%;
		height: auto;
	}
	
	:global(.prose a) {
		color: var(--color-primary);
		text-decoration: underline;
		transition: color 0.2s;
	}
	
	:global(.prose a:hover) {
		color: var(--color-accent);
	}
	
	:global(.prose ul, .prose ol) {
		color: var(--color-muted-foreground);
		margin: 1rem 0;
		padding-left: 1.5rem;
	}
	
	:global(.prose li) {
		margin: 0.5rem 0;
	}
	
	:global(.prose blockquote) {
		border-left: 4px solid var(--color-primary);
		background-color: color-mix(in srgb, var(--color-muted) 50%, transparent);
		padding: 0.5rem 0;
		padding-left: 1.5rem;
		margin: 1.5rem 0;
		font-style: italic;
	}
	
	:global(.prose iframe) {
		width: 100%;
		height: 400px;
		border-radius: 0.5rem;
		margin: 2rem 0;
		border: none;
	}

	:global(.prose table) {
		width: 100%;
		margin: 1.5rem 0;
		border-collapse: collapse;
		border: 1px solid var(--color-border);
		border-radius: 0.5rem;
		overflow: hidden;
	}

	:global(.prose th, .prose td) {
		padding: 0.75rem;
		text-align: left;
		border-bottom: 1px solid var(--color-border);
	}

	:global(.prose th) {
		background-color: var(--color-muted);
		font-weight: 600;
		color: var(--color-foreground);
	}
</style>