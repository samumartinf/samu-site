<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import AboutMe from '$lib/components/sections/AboutMe.svelte';
	import Portfolio from '$lib/components/sections/Portfolio.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
</script>

<svelte:head>
	<title>Samuel Martin Frias - Engineer & Innovator</title>
	<meta name="description" content="Portfolio of Samuel Martin Frias, a 27-year-old engineer based in London specializing in mathematical modeling, biomedical engineering, and fintech." />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
	<Hero />
	<AboutMe />
	<Portfolio />
	<Contact />
	<Footer />
</main>
