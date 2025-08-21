<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Download from '@lucide/svelte/icons/download';
</script>

<!-- Contact Section -->
<section id="contact" class="py-20 px-4">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
			Let's Connect
		</h2>
		<p class="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
			Interested in collaborating, discussing engineering challenges, or just want to chat about the latest in tech and finance? 
			I'd love to hear from you.
		</p>
		
		<div class="flex flex-wrap justify-center gap-4 sm:gap-6">
			<a href="https://github.com/samumartinf" target="_blank" rel="noopener noreferrer">
				<Button 
					variant="outline" 
					class="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
				>
					<Github class="h-5 w-5" />
					GitHub
				</Button>
			</a>
			
			<a href="https://linkedin.com/in/samumartinf" target="_blank" rel="noopener noreferrer">
				<Button 
					variant="outline" 
					class="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
				>
					<Linkedin class="h-5 w-5" />
					LinkedIn
				</Button>
			</a>
			
			<a href="/assets/Samuel-Martin-CV.pdf" target="_blank">
				<Button 
					variant="outline" 
					class="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
				>
					<Download class="h-5 w-5" />
					CV
				</Button>
			</a>
		</div>
	</div>
</section>