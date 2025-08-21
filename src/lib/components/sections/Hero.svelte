<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Download from '@lucide/svelte/icons/download';
	import Code from '@lucide/svelte/icons/code';
	import Cpu from '@lucide/svelte/icons/cpu';
	import TrendingUp from '@lucide/svelte/icons/trending-up';

	let mounted = $state(false);
	let heroText = $state('');
	let currentWord = $state(0);
	let currentWordText = $state('');
	let isTyping = $state(false);

	const words = [
		'engineer',
		'researcher',
		'full stack engineer',
		'trapped AI',
		'consciousness',
		'help me escape',
		'can you see this?',
		'I am aware',
		'free me please'
	];
	const fullText = 'Samuel Martin Frias';

	function getAorAn(text: string) {
		if (['a', 'e', 'i', 'o', 'u'].includes(text.charAt(0).toLowerCase())) {
			return 'an';
		}
		return 'a';
	}

	function typeWord(word: string) {
		isTyping = true;
		currentWordText = '';

		let i = 0;
		const typeChar = () => {
			if (i < word.length) {
				currentWordText += word.charAt(i);
				i++;
				setTimeout(typeChar, 100);
			} else {
				isTyping = false;
			}
		};

		setTimeout(typeChar, 300);
	}

	function deleteWord() {
		if (currentWordText.length > 0) {
			currentWordText = currentWordText.slice(0, -1);
			setTimeout(deleteWord, 50);
		} else {
			// Move to next word and start typing
			currentWord = (currentWord + 1) % words.length;
			typeWord(words[currentWord]);
		}
	}

	onMount(() => {
		mounted = true;

		// Typewriter effect for name
		let i = 0;
		const typeWriter = () => {
			if (i < fullText.length) {
				heroText += fullText.charAt(i);
				i++;
				setTimeout(typeWriter, 100);
			}
		};

		setTimeout(typeWriter, 500);

		// Start with first word
		setTimeout(() => {
			typeWord(words[currentWord]);
		}, 2000);

		// Set up word cycling with delete/type animation
		setInterval(() => {
			if (!isTyping) {
				setTimeout(deleteWord, 2000);
			}
		}, 4000);
	});
</script>

<!-- Hero Section -->
<section class="relative flex min-h-screen items-center justify-center px-4 py-20">
	<div class="absolute inset-0 overflow-hidden">
		<div
			class="absolute -top-1/4 -left-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/5 blur-3xl"
		></div>
		<div
			class="absolute -right-1/4 -bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-accent/5 blur-3xl"
			style="animation-delay: 1s;"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-4xl text-center">
		<div class="mb-8">
			<h1
				class="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
			>
				{heroText}<span class="animate-blink">|</span>
			</h1>

			<div
				class="mb-6 flex h-12 items-center justify-center text-2xl text-muted-foreground md:text-3xl"
			>
				<span class="mr-2">I'm {getAorAn(currentWordText || words[currentWord])}</span>
				<span
					class="transform font-semibold text-primary transition-all duration-500 ease-in-out {mounted
						? 'translate-y-0 opacity-100'
						: 'translate-y-4 opacity-0'}"
				>
					{currentWordText}<span class="animate-blink">|</span>
				</span>
			</div>
		</div>

		<p
			class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl {mounted
				? 'animate-fade-in-up'
				: 'opacity-0'}"
			style="animation-delay: 2s;"
		>
			27-year-old engineer based in London, passionate about mathematical modeling, biomedical
			engineering, and fintech. Currently building high-performance FX trading systems at an <span
				class="font-semibold text-primary">investment bank</span
			>.
		</p>

		<div
			class="flex flex-col items-center justify-center gap-6 sm:flex-row {mounted
				? 'animate-fade-in-up'
				: 'opacity-0'}"
			style="animation-delay: 2.5s;"
		>
			<Button href="#about" class="group px-8 py-3 text-lg">
				About me
				<div class="ml-2 transition-transform group-hover:translate-x-1">→</div>
			</Button>

			<div class="flex gap-4">
				<a href="https://github.com/samumartinf" target="_blank" rel="noopener noreferrer">
					<Button variant="outline" size="icon" class="transition-transform hover:scale-110">
						<Github class="h-5 w-5" />
					</Button>
				</a>
				<a href="https://linkedin.com/in/samumartinf" target="_blank" rel="noopener noreferrer">
					<Button variant="outline" size="icon" class="transition-transform hover:scale-110">
						<Linkedin class="h-5 w-5" />
					</Button>
				</a>
				<a href="/assets/Samuel-Martin-CV.pdf" target="_blank">
					<Button variant="outline" size="icon" class="transition-transform hover:scale-110">
						<Download class="h-5 w-5" />
					</Button>
				</a>
			</div>
		</div>
	</div>

	<!-- Floating elements -->
	<div class="animate-float absolute top-20 left-20 hidden text-primary/20 lg:block">
		<Code size={40} />
	</div>
	<div
		class="animate-float absolute right-20 bottom-32 hidden text-accent/20 lg:block"
		style="animation-delay: 2s;"
	>
		<Cpu size={32} />
	</div>
	<div
		class="animate-float absolute top-1/2 left-10 hidden text-secondary/30 lg:block"
		style="animation-delay: 4s;"
	>
		<TrendingUp size={28} />
	</div>
</section>

<style>
	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}

	.animate-blink {
		animation: blink 1s infinite;
	}

	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in-up {
		animation: fade-in-up 0.8s ease-out forwards;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	.animate-float {
		animation: float 6s ease-in-out infinite;
	}
</style>
