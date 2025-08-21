<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let containerId: string = 'sketch-holder';
	export let scriptPath: string;
	export let loadClickable: boolean = false;

	onMount(async () => {
		if (!browser) return;

		try {
			// Load p5.js from CDN
			await loadScript('https://cdn.jsdelivr.net/npm/p5@1.7.0/lib/p5.min.js');
			
			// Optionally load p5.clickable if needed
			if (loadClickable) {
				await loadScript('/js/p5.clickable.js');
			}
			
			// Load and execute the specified script
			if (scriptPath) {
				await loadScript(scriptPath);
			}
			
		} catch (error) {
			console.error('Error loading p5 sketch:', error);
		}
	});

	function loadScript(src: string): Promise<void> {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = src;
			script.onload = () => resolve();
			script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
			document.head.appendChild(script);
		});
	}

	onDestroy(() => {
		// Clean up p5 instance if it exists
		if (typeof window !== 'undefined' && (window as any).p5Instance) {
			(window as any).p5Instance.remove();
		}
	});
</script>

<div id={containerId} class="w-full flex justify-center my-8">
	<!-- p5.js canvas will be inserted here -->
</div>

<style>
	div :global(canvas) {
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}
</style>