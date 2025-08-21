<script lang="ts">
	import MacTaskKanbanLight from '$lib/assets/screenshots/mac-task-kanban-light.png';
	import MacTaskKanbanDark from '$lib/assets/screenshots/mac-task-kanban-dark.png';
	import { onMount } from 'svelte';

	// Props
	const props = $props<{
		view: 'task';
		theme?: 'light' | 'dark';
		message?: string;
	}>();

	// Detect dark mode from document class if theme prop is not provided
	let isDarkMode = $state(false);

	function checkDarkMode() {
		if (props.theme) {
			return props.theme === 'dark';
		} else {
			return document.documentElement.classList.contains('dark');
		}
	}

	// Initialize dark mode
	onMount(() => {
		isDarkMode = checkDarkMode();
	});

	// Watch for theme changes
	$effect(() => {
		isDarkMode = checkDarkMode();
	});

	// Watch for document class changes (for automatic dark mode detection)
	$effect(() => {
		if (!props.theme) {
			// Set up a mutation observer to watch for class changes
			const observer = new MutationObserver(() => {
				isDarkMode = checkDarkMode();
			});
			
			observer.observe(document.documentElement, {
				attributes: true,
				attributeFilter: ['class']
			});
			
			return () => observer.disconnect();
		}
	});

	// Compute the image based on view and dark mode
	let image = $derived(() => {
		return isDarkMode ? MacTaskKanbanDark : MacTaskKanbanLight;
	});
</script>

<!-- MacBook mockup -->
<div class="flex justify-center">
	<div class="relative">
		<!-- MacBook Screen -->
		<div class="relative md:scale-100 scale-75">
			<!-- Screen bezel -->
			<div class="w-[600px] h-[375px] bg-black rounded-xl shadow-2xl p-1">
				<!-- Screen content with notch -->
				<div class="relative w-full h-full bg-black rounded-lg overflow-hidden">
					<!-- Notch - smaller and more realistic -->
					<div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-lg z-10"></div>
					
					<!-- Screen image with proper centering -->
					<div class="w-full h-full rounded-lg overflow-hidden bg-background flex items-center justify-center">
						<img 
							src={image()}
							alt="Paced on MacBook - {props.view === 'task' ? 'Task Management' : 'Habit Tracking'}"
							class="w-full h-full object-contain rounded-md"
						/>
					</div>
				</div>
			</div>
			
			<!-- MacBook base/keyboard - more natural looking -->
			<div class="relative">
				<!-- Main base -->
				<div class="w-[600px] h-4 bg-black -mt-1 mx-auto shadow-md relative">
					<!-- Subtle keyboard texture --> 
					<div class="absolute inset-x-2 top-0 h-2 bg-black rounded-b-lg opacity-50"></div>
				</div>
				<!-- Bottom edge for depth -->
				<div class="w-[600px] h-2 bg-gradient-to-b from-gray-400 to-gray-500 dark:bg-black rounded-b-2xl -mt-1 mx-auto shadow-lg opacity-60"></div>
			</div>
		</div>
		
		<!-- Label -->
		{#if props.message}
			<div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-lg text-gray-500 dark:text-gray-400">
				{props.message}
			</div>
		{/if}
	</div>
</div>