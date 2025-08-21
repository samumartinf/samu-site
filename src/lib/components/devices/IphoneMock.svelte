<script lang="ts">
	import IphoneTaskLight from '$lib/assets/screenshots/iphone-task-light.png';
	import IphoneTaskDark from '$lib/assets/screenshots/iphone-task-dark.png';
    import IphoneHabitLight from '$lib/assets/screenshots/iphone-habit-light.png';
	import IphoneHabitDark from '$lib/assets/screenshots/iphone-habit-dark.png';
	import { onMount } from 'svelte';

    // Props
	const props = $props<{
		view: 'task' | 'habit';
		theme?: 'light' | 'dark';
		message?: string;
	}>();

	// Detect dark mode from document class if theme prop is not provided
	let isDarkMode = $state(false);
	
	// Function to check dark mode
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
		if (props.view === 'habit') {
			return isDarkMode ? IphoneHabitDark : IphoneHabitLight;
		} else {
			return isDarkMode ? IphoneTaskDark : IphoneTaskLight;
		}
	});
</script>

<!-- iPhone mockup -->
<div class="flex justify-center lg:justify-end">
	<div class="relative">
		<div class="h-[600px] w-72 rounded-[3rem] bg-black p-2 shadow-2xl">
			<div class="h-full w-full overflow-hidden rounded-[2.5rem] bg-background flex items-center justify-center">
				<img
					src={image()}
					alt="Paced on iPhone - {props.view === 'task' ? 'Task Management' : 'Habit Tracking'}"
					class="h-full w-full object-contain"
				/>
			</div>
		</div>
		<div
			class="absolute -bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 transform text-lg text-gray-500 dark:text-gray-400"
		>
            {props.message || (props.view === 'task' ? 'Task view' : 'Habit view')}
		</div>
	</div>
</div>
