<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		// Add copy buttons to all pre elements
		document.querySelectorAll('.prose pre').forEach((pre) => {
			const wrapper = document.createElement('div');
			wrapper.className = 'code-block-wrapper';
			pre.parentNode?.insertBefore(wrapper, pre);
			wrapper.appendChild(pre);

			const button = document.createElement('button');
			button.className = 'copy-button';
			button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
			button.setAttribute('aria-label', 'Copy code');

			button.addEventListener('click', async () => {
				const code = pre.querySelector('code')?.textContent || pre.textContent || '';
				await navigator.clipboard.writeText(code);
				button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
				button.classList.add('copied');
				setTimeout(() => {
					button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
					button.classList.remove('copied');
				}, 2000);
			});

			wrapper.appendChild(button);
		});
	});
</script>

<main class="min-h-screen pt-24 pb-20">
	<div class="max-w-4xl mx-auto px-4">
		<div class="mb-8">
			<a href="/writing" class="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
				<ArrowLeft class="h-4 w-4 mr-2" />
				Back to Writing
			</a>
		</div>

		<article class="prose prose-lg prose-gray dark:prose-invert max-w-none">
			{@render children?.()}
		</article>
	</div>
</main>

<style>
	:global(.code-block-wrapper) {
		position: relative;
	}

	:global(.copy-button) {
		position: absolute;
		right: 0.5rem;
		top: 0.5rem;
		padding: 0.5rem;
		border-radius: 0.375rem;
		background-color: var(--color-muted);
		color: var(--color-muted-foreground);
		opacity: 0;
		transition: all 0.2s;
		border: 1px solid var(--color-border);
		cursor: pointer;
	}

	:global(.code-block-wrapper:hover .copy-button) {
		opacity: 1;
	}

	:global(.copy-button:hover) {
		background-color: var(--color-accent);
		color: var(--color-accent-foreground);
	}

	:global(.copy-button.copied) {
		color: oklch(0.65 0.2 145);
	}

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

	:global(.prose pre code) {
		background-color: transparent;
		padding: 0;
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

	:global(.prose strong) {
		color: var(--color-foreground);
		font-weight: 600;
	}
</style>
