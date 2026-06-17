<script lang="ts">
	import Content from './content.md';
	import DeviceShowcasePaced from '$lib/components/DeviceShowcasePaced.svelte';
	import { page } from '$app/stores';

	const metadata = {
		title: "Paced: One Codebase, Every Platform",
		description: "Habit tracker and task manager that runs natively on iOS, Android, Linux, macOS, Windows, and web — all from a single SvelteKit + Tauri codebase.",
		image: "/images/paced/paced-hero.png",
		tags: ["Svelte 5", "Tauri v2", "PocketBase", "PWA", "Habit Tracking"]
	};
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:image" content={metadata.image} />
</svelte:head>

<DeviceShowcasePaced />
<Content  />