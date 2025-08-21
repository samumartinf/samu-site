<script lang="ts">
	import Code from '@lucide/svelte/icons/code';
	import Cpu from '@lucide/svelte/icons/cpu';
	import TrendingUp from '@lucide/svelte/icons/trending-up';

	const achievements = [
		{
			icon: Code,
			title: "Best M.Eng. Thesis",
			description: "Imperial College London cohort winner for Sparse Bayesian Learning research"
		},
		{
			icon: Cpu,
			title: "Smart Baby Buggy",
			description: "AI-powered navigation system for visually impaired parents"
		},
		{
			icon: TrendingUp,
			title: "Algorithmic Trading Society",
			description: "Co-founded Imperial's largest academic society with 600+ students"
		}
	];
</script>

<!-- About Section -->
<section id="about" class="py-20 px-4">
	<div class="max-w-6xl mx-auto">
		<h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
			About Me
		</h2>
		
		<div class="grid md:grid-cols-2 gap-12 items-center mb-20">
			<div class="space-y-6 order-2 md:order-1">
				<p class="text-lg text-muted-foreground leading-relaxed">
					Hi! I'm someone who gets unreasonably excited about making <span class="text-primary font-semibold">computers go brrr</span>, 
					<span class="text-primary font-semibold">mathematics</span>, and <span class="text-primary font-semibold">biology</span>. 
					My curiosity tends to drag me down rabbit holes that somehow always end up being useful later 🤷‍♂️
				</p>
				
				<p class="text-lg text-muted-foreground leading-relaxed">
					I studied <span class="text-primary font-semibold">Biomedical Engineering at Imperial</span> both bacherlor and master's degree. 
					These days I work in <span class="text-primary font-semibold">finance</span> (yes, I ended up in the bermuda triangle of talent regardless)
					 building portfolio management systems, trading systems, and other financial tools.
				</p>
				
				<p class="text-lg text-muted-foreground leading-relaxed">
					My daily toolkit involves wrestling with <span class="text-primary font-semibold">C#</span>, telling people to try 
					<span class="text-primary font-semibold">Rust</span>, automating with <span class="text-primary font-semibold">Python</span>, 
					and building sites like this one in <span class="text-primary font-semibold">SvelteKit</span>. 
					I'm perpetually curious about new tech, always have a book on the go, and probably know way too much about completely random topics.
				</p>
			</div>
			
			<div class="relative order-1 md:order-2">
				<!-- Profile Images -->
				<div class="mb-8 flex justify-center">
					<div class="flex flex-col sm:flex-row gap-6 items-center">
						<div class="relative">
							<img 
								src="/images/profile.png" 
								alt="Samuel Martin Frias" 
								class="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover shadow-xl"
							/>
							<div class="text-center mt-2 text-sm text-muted-foreground">
								The human (allegedly)
							</div>
						</div>
						<div class="relative">
							<img 
								src="/images/kira.png" 
								alt="Kira, the real star" 
								class="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover shadow-xl"
							/>
							<div class="text-center mt-2 text-sm text-primary font-medium">
								The actually cute one ✨
							</div>
						</div>
					</div>
				</div>
				
				<div class="bg-card border rounded-2xl p-8 shadow-xl">
					<h3 class="text-2xl font-bold mb-4 text-primary">The Essentials</h3>
					<ul class="space-y-3 text-muted-foreground">
						<li class="flex items-center">
							<div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
							☕ Caffeinated in London, UK
						</li>
						<li class="flex items-center">
							<div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
							🎓 MEng Biomedical Engineering (Imperial)
						</li>
						<li class="flex items-center">
							<div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
							💼 Making finance go brr
						</li>
						<li class="flex items-center">
							<div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
							📚 Currently reading 3 books simultaneously
						</li>
						<li class="flex items-center">
							<div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
							🐦 @samumartinf everywhere
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>