<script lang="ts">
	import Content from './content.md';
	import DeviceShowcasePaced from '$lib/components/DeviceShowcasePaced.svelte';
	import { page } from '$app/stores';

	const metadata = {
		title: "Paced: A Todo and Habit Tracker That Actually Works",
		description: "A full-stack habit tracker and task manager that combines behavioral science with modern web tech to help build better habits.",
		image: "/images/paced/paced-hero.png",
		tags: ["Svelte 5", "TypeScript", "PostgreSQL", "PWA", "Behavioral Science"]
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