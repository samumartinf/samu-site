<script lang="ts">
	import { writingPosts } from '$lib/content';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Calendar from '@lucide/svelte/icons/calendar';

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<main class="min-h-screen pt-24 pb-20">
	<div class="max-w-4xl mx-auto px-4">
		<div class="mb-8">
			<a href="/" class="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
				<ArrowLeft class="h-4 w-4 mr-2" />
				Back to Home
			</a>
		</div>

		<header class="mb-12">
			<h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
				Writing
			</h1>
			<p class="text-lg text-muted-foreground">
				Thoughts on code, technology, and everything in between.
			</p>
		</header>

		<!-- Timeline -->
		<div class="relative">
			<!-- Timeline line -->
			<div class="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border"></div>

			<!-- Posts -->
			<div class="space-y-8">
				{#each writingPosts as post}
					<article class="relative pl-8 md:pl-12">
						<!-- Timeline dot -->
						<div class="absolute left-0 md:left-4 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary"></div>

						<a href={post.href} class="group block">
							<div class="p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
								<!-- Date -->
								<div class="flex items-center gap-2 text-sm text-muted-foreground mb-3">
									<Calendar class="h-4 w-4" />
									<time datetime={post.date}>{formatDate(post.date)}</time>
								</div>

								<!-- Title -->
								<h2 class="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
									{post.title}
								</h2>

								<!-- Description -->
								<p class="text-muted-foreground mb-4 line-clamp-2">
									{post.description}
								</p>

								<!-- Tags -->
								<div class="flex flex-wrap gap-2">
									{#each post.tags as tag}
										<span class="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
											{tag}
										</span>
									{/each}
								</div>
							</div>
						</a>
					</article>
				{/each}
			</div>
		</div>

		{#if writingPosts.length === 0}
			<div class="text-center py-12">
				<p class="text-muted-foreground">No posts yet. Check back soon!</p>
			</div>
		{/if}
	</div>
</main>
