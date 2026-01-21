<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import DarkModeSelector from '$lib/components/ui/DarkModeSelector.svelte';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import { page } from '$app/stores';
	
	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);
	
	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/#about' },
		{ label: 'Portfolio', href: '/#portfolio' },
		{ label: 'Writing', href: '/writing' },
		{ label: 'Contact', href: '/#contact' }
	];
	
	function handleScroll() {
		scrolled = window.scrollY > 50;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
	
	$effect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<!-- Floating Navigation -->
<nav class="fixed top-4 left-4 right-4 z-50 transition-all duration-300 {scrolled ? 'bg-background/80 backdrop-blur-lg border rounded-2xl shadow-lg' : 'bg-transparent'}">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo/Brand -->
			<div class="flex-shrink-0">
				<a href="/" class="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
					SMF
				</a>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navItems as item}
					<a 
						href={item.href} 
						class="text-foreground hover:text-primary transition-colors duration-200 font-medium"
						class:text-primary={$page.url.pathname === item.href || ($page.url.pathname === '/' && item.href === '/')}
					>
						{item.label}
					</a>
				{/each}
				
				<DarkModeSelector />
			</div>
			
			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center gap-2">
				<DarkModeSelector />
				<Button
					variant="outline"
					size="icon"
					onclick={() => mobileMenuOpen = !mobileMenuOpen}
					class="hover:scale-110 transition-transform"
				>
					{#if mobileMenuOpen}
						<X class="h-5 w-5" />
					{:else}
						<Menu class="h-5 w-5" />
					{/if}
				</Button>
			</div>
		</div>
	</div>
</nav>

<!-- Mobile Sidebar -->
{#if mobileMenuOpen}
	<!-- Backdrop -->
	<button
		class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden transition-opacity cursor-default"
		onclick={closeMobileMenu}
		aria-label="Close mobile menu"
	></button>
	
	<!-- Sidebar -->
	<div class="fixed top-0 right-0 z-50 h-full w-64 bg-background border-l shadow-xl transform transition-transform md:hidden">
		<div class="flex flex-col h-full">
			<!-- Header -->
			<div class="flex items-center justify-between p-6 border-b">
				<span class="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
					Samuel Martin
				</span>
				<Button
					variant="outline"
					size="icon"
					onclick={closeMobileMenu}
					class="hover:scale-110 transition-transform"
				>
					<X class="h-5 w-5" />
				</Button>
			</div>
			
			<!-- Navigation Items -->
			<div class="flex-1 p-6 space-y-4">
				{#each navItems as item}
					<a 
						href={item.href}
						onclick={closeMobileMenu}
						class="block w-full text-left p-3 rounded-lg transition-colors duration-200 hover:bg-muted text-foreground hover:text-primary font-medium"
						class:bg-muted={$page.url.pathname === item.href || ($page.url.pathname === '/' && item.href === '/')}
						class:text-primary={$page.url.pathname === item.href || ($page.url.pathname === '/' && item.href === '/')}
					>
						{item.label}
					</a>
				{/each}
			</div>
			
			<!-- Footer -->
			<div class="p-6 border-t">
				<p class="text-sm text-muted-foreground text-center">
					Samuel Martin Frias<br />
					Senior Software Engineer
				</p>
			</div>
		</div>
	</div>
{/if}