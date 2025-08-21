<script lang="ts">
	import IpadTaskLight from '$lib/assets/screenshots/ipad-task-light.png';
	import IpadTaskDark from '$lib/assets/screenshots/ipad-task-dark.png';
	import IpadHabitLight from '$lib/assets/screenshots/ipad-habit-light.png';
	import IpadHabitDark from '$lib/assets/screenshots/ipad-habit-dark.png';
	import IpadTaskLandscapeLight from '$lib/assets/screenshots/ipad-task-landscape-kanban-light.png';
	import IpadTaskLandscapeDark from '$lib/assets/screenshots/ipad-task-landscape-kanban-dark.png';
	import IpadTaskKanbanLight from '$lib/assets/screenshots/ipad-task-kanban-light.png';
	import IpadTaskKanbanDark from '$lib/assets/screenshots/ipad-task-kanban-dark.png';

	// Props
	const {
		message = '',
		view = 'task',
		orientation = 'portrait',
		kanban = false,
		theme
	} = $props<{
		message: string;
		view: 'task' | 'habit';
		orientation: 'portrait' | 'landscape';
		kanban: boolean;
		theme?: 'light' | 'dark';
	}>();

	// Detect dark mode from document class if theme prop is not provided
	let isDarkMode = $state(false);
	
	// Function to check dark mode
	function checkDarkMode() {
		if (theme) {
			return theme === 'dark';
		} else {
			return document.documentElement.classList.contains('dark');
		}
	}

	// Initialize dark mode
	$effect(() => {
		isDarkMode = checkDarkMode();
	});

	// Watch for theme changes
	$effect(() => {
		isDarkMode = checkDarkMode();
	});

	// Watch for document class changes (for automatic dark mode detection)
	$effect(() => {
		if (!theme) {
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

	// Compute the image based on view, orientation, and dark mode
	let image = $derived(() => {
		if (orientation === 'landscape') {
			return isDarkMode ? IpadTaskLandscapeDark : IpadTaskLandscapeLight;
		} else {
			if (view === 'habit') {
				return isDarkMode ? IpadHabitDark : IpadHabitLight;
			} else {
				// For task view in portrait, use kanban layout
				return isDarkMode ? IpadTaskKanbanDark : IpadTaskKanbanLight;
			}
		}
	});
</script>

<!-- iPad mockup -->
<div class="flex justify-center lg:justify-start">
	{#if orientation === 'portrait'}
		<!-- Portrait iPad -->
		<div class="relative">
			<div class="h-[670px] w-[480px] rounded-[2rem] bg-black p-3 shadow-2xl">
				<div class="h-full w-full overflow-hidden rounded-[1.5rem] bg-gray-900 flex items-center justify-center">
					<img
						src={image()}
						alt="Paced on iPad - {view === 'task' ? 'Task Management' : 'Habit Tracking'}"
						class="h-full w-full object-contain"
					/>
				</div>
			</div>
			<div
				class="absolute -bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 transform text-lg text-gray-500 dark:text-gray-400"
			>
				{message}
			</div>
		</div>
	{:else}
		<!-- Landscape iPad -->
		<div class="relative">
			<div class="h-[480px] w-[670px] rounded-[1.5rem] bg-black p-3 shadow-2xl">
				<div class="h-full w-full overflow-hidden rounded-[1.5rem] bg-gray-900 flex items-center justify-center">
					<img
						src={image()}
						alt="Paced on iPad - {view === 'task' ? 'Task Management' : 'Habit Tracking'}"
						class="h-full w-full object-contain"
					/>
				</div>
			</div>
			<div
				class="absolute -bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 transform text-lg text-gray-500 dark:text-gray-400"
			>
				{message}
			</div>
		</div>
	{/if}
</div>
