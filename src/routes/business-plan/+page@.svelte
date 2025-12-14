<script lang="ts">
	import { onMount } from 'svelte';
	import Reveal from 'reveal.js';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/white.css';
	import { ArrowUpDown, Sprout, Puzzle, FileCheck } from '@lucide/svelte';

	let deck: Reveal.Api;

	onMount(() => {
		deck = new Reveal({
			embedded: false,
			controls: true,
			progress: true,
			center: true,
			hash: true,
			transition: 'slide',
			width: 1400,
			height: 900,
			margin: 0.04,
			minScale: 0.2,
			maxScale: 2.0
		});

		deck.initialize();

		return () => {
			if (deck) {
				deck.destroy();
			}
		};
	});
</script>

<div class="reveal">
	<div class="slides">
		<!-- Main Proposal Slide -->
		<section data-background-color="#f5f5f0">
			<h1 class="proposal-title">A Proposal to Capture the Energy Transition Mid-Market</h1>

			<div class="grid-container">
				<!-- Quadrant 1: The Situation -->
				<div class="quadrant">
					<div class="icon-box">
						<ArrowUpDown />
					</div>
					<h2 class="quadrant-title">1. The Situation: A Market We Cannot Serve.</h2>
					<div class="content">
						<p>
							The ETRM market is bifurcating. A new, fast-growing <span class="highlight"
								>€750M+ mid-market</span
							>, driven by the energy transition (renewables, corporate PPAs), has emerged.
						</p>
						<p>
							Our current <strong>enterprise model</strong> (<span class="highlight"
								>€500K+ deals, 6-18 month implementations</span
							>) is economically unviable for this <span class="highlight">€100-200K</span> segment. We
							are systematically ceding this market to agile competitors.
						</p>
					</div>
				</div>

				<!-- Quadrant 2: The Threat -->
				<div class="quadrant">
					<div class="icon-box">
						<Sprout />
					</div>
					<h2 class="quadrant-title">2. The Threat: A Beachhead for Our Competitors.</h2>
					<div class="content">
						<p>
							Challengers like <strong>Molecule</strong> (<span class="highlight">€180K ARR</span>) and
							<strong>Previse</strong> are rapidly scaling in this mid-market, validating the opportunity
							and building up war chest.
						</p>
						<p>
							This is not just a missed opportunity; it's a <span class="highlight-threat"
								>strategic threat</span
							>. They are using this segment to grow, innovate, and will eventually challenge our core
							enterprise business.
						</p>
					</div>
				</div>

				<!-- Quadrant 3: The Solution -->
				<div class="quadrant">
					<div class="icon-box">
						<Puzzle />
					</div>
					<h2 class="quadrant-title">3. The Solution: Orchestrade Lite, via Partnership.</h2>
					<div class="content">
						<p>
							We propose a strategic partnership with <strong>HighTempo</strong>—a team with deep
							Orchestrade DNA—to launch <strong>"Orchestrade Lite"</strong>. This is a <span
								class="highlight">low-risk, capital-light</span
							>
							model using their <strong>Kubernetes-based</strong> deployment to profitably serve the mid-market,
							generating a <span class="highlight">30-35% revenue royalty</span> for Orchestrade from deals
							we would otherwise lose.
						</p>
					</div>
				</div>

				<!-- Quadrant 4: The Decision -->
				<div class="quadrant">
					<div class="icon-box">
						<FileCheck />
					</div>
					<h2 class="quadrant-title">4. The Decision Required.</h2>
					<div class="content">
						<p>
							Approve the partnership with HighTempo to launch Orchestrade Lite. This will secure a
							projected <span class="highlight">€1.95-3M in annual royalty revenue</span> by Month 18,
							<span class="highlight-threat">block competitors</span>, and create a powerful <span
								class="highlight-threat">upsell pipeline</span
							> to our core enterprise offering.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>

<style lang="postcss">
	:global(body) {
		margin: 0;
		padding: 0;
	}

	.reveal {
		width: 100vw;
		height: 100vh;
	}

	.proposal-title {
		font-size: 1.05em !important;
		color: #2c3e50 !important;
		margin: 0 0 0.4em 0 !important;
		font-weight: 600 !important;
		text-align: center !important;
		border-bottom: 2px solid #2c3e50;
		padding-bottom: 0.25em;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 0.8em;
		padding: 0;
		max-width: 100%;
		margin: 0 auto;
	}

	.quadrant {
		border: 1.5px solid #d0d0c8;
		padding: 0.7em;
		background-color: #fafaf8;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
	}

	.icon-box {
		width: 36px;
		height: 36px;
		margin-bottom: 0.4em;
		color: #2c3e50;
		flex-shrink: 0;
	}

	.icon-box :global(svg) {
		width: 100%;
		height: 100%;
	}

	.quadrant-title {
		font-size: 0.68em !important;
		color: #2c3e50 !important;
		margin: 0 0 0.4em 0 !important;
		font-weight: 600 !important;
		line-height: 1.15 !important;
	}

	.content {
		font-size: 0.5em;
		line-height: 1.35;
		color: #444;
		text-align: left;
	}

	.content p {
		margin: 0 0 0.4em 0;
	}

	.content p:last-child {
		margin-bottom: 0;
	}

	.highlight {
		color: #b8860b;
		font-weight: 600;
	}

	.highlight-threat {
		color: #c65d47;
		font-weight: 600;
	}

	.content strong {
		font-weight: 600;
		color: #2c3e50;
	}

	/* Ensure content fits */
	:global(.reveal .slides section) {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 0.5em 1em;
	}

	/* Override reveal.js defaults */
	:global(.reveal h1),
	:global(.reveal h2) {
		text-transform: none !important;
	}
</style>
