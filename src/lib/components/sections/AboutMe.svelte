<script lang="ts">
	import Code from '@lucide/svelte/icons/code';
	import Cpu from '@lucide/svelte/icons/cpu';
	import TrendingUp from '@lucide/svelte/icons/trending-up';

	const achievements = [
		{
			icon: Code,
			title: 'Best M.Eng. Thesis',
			description: 'Imperial College London cohort winner for Sparse Bayesian Learning research'
		},
		{
			icon: Cpu,
			title: 'Smart Baby Buggy',
			description: 'AI-powered navigation system for visually impaired parents'
		},
		{
			icon: TrendingUp,
			title: 'Algorithmic Trading Society',
			description: "Co-founded Imperial's largest academic society with 600+ students"
		}
	];
</script>

<!-- About Section -->
<section id="about" class="px-4 py-20">
	<div class="mx-auto max-w-6xl">
		<h2
			class="mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
		>
			About Me
		</h2>

		<div class="mb-20 grid items-center gap-12 md:grid-cols-2">
			<div class="order-2 space-y-6 md:order-1">
				<p class="text-lg leading-relaxed text-muted-foreground">
					Hi! I'm someone who gets unreasonably excited about making <span
						class="font-semibold text-primary">quality software</span
					>,
					<span class="font-semibold text-primary">mathematics</span>, and
					<span class="font-semibold text-primary">biology</span>. My curiosity tends to drag me
					down rabbit holes that somehow always end up being useful later 🤷‍♂️
				</p>

				<p class="text-lg leading-relaxed text-muted-foreground">
					I studied <span class="font-semibold text-primary"
						>Biomedical Engineering at Imperial</span
					>
					both bacherlor and master's degree. These days I work in
					<span class="font-semibold text-primary">finance</span> (yes, I ended up in the bermuda triangle
					of talent) building portfolio management systems, trading systems, and other financial
					tools.
				</p>

				<p class="text-lg leading-relaxed text-muted-foreground">
					My daily toolkit involves wrestling with <span class="font-semibold text-primary">C#</span
					>, telling people to try
					<span class="font-semibold text-primary">Rust</span>, automating with
					<span class="font-semibold text-primary">Python</span>, and building sites like this one
					in <span class="font-semibold text-primary">SvelteKit</span>. I'm perpetually curious
					about new tech, always have a book on the go, and probably know way too much about
					completely random topics.
				</p>
			</div>

			<div class="relative order-1 md:order-2">
				<!-- Profile Images -->
				<div class="mb-8 flex justify-center">
					<div class="flex flex-col items-center gap-6 sm:flex-row">
						<div class="relative">
							<img
								src="/images/profile.png"
								alt="Samuel Martin Frias"
								class="h-48 w-48 rounded-2xl object-cover shadow-xl sm:h-56 sm:w-56"
							/>
							<div class="mt-2 text-center text-sm text-muted-foreground">
								The human (allegedly)
							</div>
						</div>
						<div class="relative">
							<img
								src="/images/kira.png"
								alt="Kira, the real star"
								class="h-48 w-48 rounded-2xl object-cover shadow-xl sm:h-56 sm:w-56"
							/>
							<div class="mt-2 text-center text-sm font-medium text-primary">
								The actually cute one ✨
							</div>
						</div>
					</div>
				</div>

				<div class="rounded-2xl border bg-card p-8 shadow-xl">
					<h3 class="mb-4 text-2xl font-bold text-primary">The Essentials</h3>
					<ul class="space-y-3 text-muted-foreground">
						<li class="flex items-center">
							<div class="mr-3 h-2 w-2 rounded-full bg-primary"></div>
							☕ London, UK
						</li>
						<li class="flex items-center">
							<div class="mr-3 h-2 w-2 rounded-full bg-primary"></div>
							🎓 MEng Biomedical Engineering (Imperial)
						</li>
						<li class="flex items-center">
							<div class="mr-3 h-2 w-2 rounded-full bg-primary"></div>
							💼 Finance & Technology
						</li>
						<li class="flex items-center">
							<div class="mr-3 h-2 w-2 rounded-full bg-primary"></div>
							📚 Currently reading 3 books simultaneously
						</li>
						<li class="flex items-center">
							<div class="mr-3 h-2 w-2 rounded-full bg-primary"></div>
							🐦 @samumartinf everywhere
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
