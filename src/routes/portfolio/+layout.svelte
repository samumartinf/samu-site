<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	
	let { children } = $props();
</script>

<main class="min-h-screen pt-24 pb-20">
	<div class="max-w-4xl mx-auto px-4">
		<div class="mb-8">
			<a href="/" class="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
				<ArrowLeft class="h-4 w-4 mr-2" />
				Back to Home
			</a>
		</div>

		<article class="prose prose-lg prose-gray dark:prose-invert max-w-none">
			{@render children?.()}
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
	}
	
	:global(.prose pre) {
		background-color: var(--color-muted);
		border: 1px solid var(--color-border);
		border-radius: 0.5rem;
		padding: 1rem;
		overflow-x: auto;
		margin: 1.5rem 0;
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
</style>