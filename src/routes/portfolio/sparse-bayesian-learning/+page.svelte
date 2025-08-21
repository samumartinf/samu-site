<script lang="ts">
	import Content from './content.md';
	import { page } from '$app/stores';

	const metadata = {
		title: "ODE Composer: estimating ODE systems from data",
		description: "Best M.Eng. Thesis winner: Framework for ODE system identification using Sparse Bayesian Learning and Gaussian Processes for derivative estimation.",
		image: "/images/sbl/WideScreen_GP.jpg",
		tags: ["Python", "Bayesian Learning", "Research"]
	};
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:image" content={metadata.image} />
</svelte:head>

<Content />