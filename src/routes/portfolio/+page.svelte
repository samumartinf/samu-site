<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Portfolio from '$lib/components/sections/Portfolio.svelte';
</script>

<svelte:head>
	<title>Portfolio - Samuel Martin Frias</title>
</svelte:head>

<main class="min-h-screen pt-24 pb-20 px-4">
	<div class="max-w-7xl mx-auto">
		<div class="mb-8">
			<a href="/" class="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
				<ArrowLeft class="h-4 w-4 mr-2" />
				Back to Home
			</a>
			
			<h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
				Portfolio
			</h1>
			<p class="text-xl text-muted-foreground">
				A collection of projects showcasing my journey in engineering and innovation
			</p>
		</div>

		<Portfolio showTitle={false} backgroundClass="bg-transparent" />
	</div>
</main>