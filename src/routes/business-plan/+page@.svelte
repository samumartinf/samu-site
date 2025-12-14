<script lang="ts">
	import { onMount } from 'svelte';
	import Reveal from 'reveal.js';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/white.css';
	import {
		ArrowUpDown,
		Sprout,
		Puzzle,
		FileCheck,
		Building2,
		TrendingUp,
		Scale,
		Wind,
		Globe
	} from '@lucide/svelte';

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

		<!-- Slide 2: Market Bifurcation -->
		<section data-background-color="#f5f5f0">
			<h1 class="slide-title">The ETRM Market Has Split Into Two Distinct Arenas</h1>

			<div class="bifurcation-container">
				<!-- Path 1: Enterprise Arena -->
				<div class="path enterprise-path">
					<div class="path-header">
						<Building2 size={32} />
						<h2>Path 1: The Enterprise Arena</h2>
						<p class="subtitle">(Our Current World)</p>
					</div>

					<div class="path-details">
						<div class="detail-section">
							<h3>Profile</h3>
							<p>Large, complex deals<br /><strong>(€500K - €5M+)</strong></p>
						</div>

						<div class="detail-section">
							<h3>Customers</h3>
							<p>Oil majors, large utilities,<br />global banks</p>
						</div>

						<div class="detail-section">
							<h3>Needs</h3>
							<p>Multi-commodity, bespoke integrations,<br />high-touch support</p>
						</div>

						<div class="detail-section">
							<h3>Growth</h3>
							<p>Mature, stable growth<br />at <strong class="growth-rate">4-6% CAGR</strong></p>
						</div>
					</div>
				</div>

				<!-- Path 2: Energy Transition Mid-Market -->
				<div class="path midmarket-path">
					<div class="path-header">
						<TrendingUp size={32} />
						<h2>Path 2: The Energy Transition Mid-Market</h2>
						<p class="subtitle">(Our Blind Spot)</p>
					</div>

					<div class="path-details">
						<div class="detail-section">
							<h3>Profile</h3>
							<p>Agile, standardised deals<br /><strong>(€100K - €300K)</strong></p>
						</div>

						<div class="detail-section">
							<h3>Customers</h3>
							<p>5,000-15,000 renewable developers,<br />corporate PPA buyers,<br />mid-size utilities</p>
						</div>

						<div class="detail-section">
							<h3>Needs</h3>
							<p>Rapid cloud deployment,<br />PPA management,<br />carbon tracking</p>
						</div>

						<div class="detail-section">
							<h3>Growth</h3>
							<p>
								<strong class="growth-highlight">Renewable Energy ETRM:</strong>
								<span class="growth-rate">8-12% CAGR</span><br />
								<strong class="growth-highlight">Corporate PPA:</strong>
								<span class="growth-rate">13-32% CAGR</span><br />
								<strong class="growth-highlight">Carbon Trading:</strong>
								<span class="growth-rate">35% CAGR</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="conclusion-box">
				<p>
					The fastest-growing segments of the market operate on a model our business <strong
						>cannot profitably support</strong
					>.
				</p>
			</div>
		</section>

		<!-- Slide 3: Three Converging Forces -->
		<section data-background-color="#f5f5f0">
			<h1 class="slide-title">Three Converging Forces Are Reshaping the Energy Landscape</h1>

			<div class="forces-container">
				<!-- Force 1: Regulatory Mandates -->
				<div class="force-card force-regulatory">
					<div class="force-icon">
						<Scale size={48} strokeWidth={1.5} />
					</div>
					<h2 class="force-title">1. Regulatory Mandates Create Urgent Replacement Cycles</h2>

					<div class="force-content">
						<div class="force-point">
							<h4>Europe's CSRD:</h4>
							<p>
								Affecting 50,000+ companies from 2025, it now drives <strong>70%</strong> of ETRM upgrade
								decisions. Non-compliance carries fines up to <strong>€20M</strong> or
								<strong>4%</strong> of revenue.
							</p>
						</div>

						<div class="force-point">
							<h4>Carbon Pricing:</h4>
							<p>
								The expansion of schemes like the EU ETS fosters sophisticated, auditable tracking
								capabilities. <strong>70-80%</strong> of current RFPs now include carbon management requirements,
								up from 25% in 2022.
							</p>
						</div>
					</div>
				</div>

				<!-- Force 2: Energy Transition -->
				<div class="force-card force-energy">
					<div class="force-icon">
						<Wind size={48} strokeWidth={1.5} />
					</div>
					<h2 class="force-title">2. The Energy Transition Redefines ETRM Functionality</h2>

					<div class="force-content">
						<div class="force-point">
							<h4>New Asset Classes:</h4>
							<p>
								The core task is shifting from managing oil and gas to managing intermittent renewables,
								battery storage, and Virtual Power Plants (VPPs).
							</p>
						</div>

						<div class="force-point">
							<h4>New Contracts:</h4>
							<p>
								The explosion in Corporate Power Purchase Agreements (PPAs) requires complex, long-term
								(10-20 year) hourly settlement and certificate management that spreadsheets cannot
								handle. Europe alone saw a <strong>474%</strong> increase in PPA volume in 2024.
							</p>
						</div>
					</div>
				</div>

				<!-- Force 3: Corporate Sustainability -->
				<div class="force-card force-sustainability">
					<div class="force-icon">
						<Globe size={48} strokeWidth={1.5} />
					</div>
					<h2 class="force-title">3. Corporate Sustainability: The Primary Demand Driver</h2>

					<div class="force-content">
						<div class="force-point">
							<h4>A New Customer Segment:</h4>
							<p>
								Over 10,000 companies with Science-Based Targets (a <strong>102%</strong> increase in
								2023) are now active energy market participants, managing their own renewable PPAs and
								carbon footprints.
							</p>
						</div>

						<div class="force-point">
							<h4>Investor Pressure:</h4>
							<p>
								<strong>97%</strong> of investors demand audited ESG data, making robust energy and
								emissions tracking a board-level imperative.
							</p>
						</div>
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

	/* Slide 2: Market Bifurcation Styles */
	.slide-title {
		font-size: 0.95em !important;
		color: #2c3e50 !important;
		margin: 0 0 0.4em 0 !important;
		font-weight: 600 !important;
		text-align: center !important;
	}

	.bifurcation-container {
		display: flex;
		flex-direction: column;
		gap: 0.6em;
		margin-bottom: 0.6em;
	}

	.path {
		border-radius: 4px;
		padding: 0.6em;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
	}

	.enterprise-path {
		background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
		color: white;
	}

	.midmarket-path {
		background: linear-gradient(135deg, #b8860b 0%, #d4a029 100%);
		color: white;
	}

	.path-header {
		display: flex;
		align-items: center;
		gap: 0.4em;
		margin-bottom: 0.4em;
		flex-wrap: wrap;
	}

	.path-header h2 {
		font-size: 0.65em !important;
		margin: 0 !important;
		font-weight: 600 !important;
		color: white !important;
	}

	.path-header .subtitle {
		font-size: 0.5em;
		opacity: 0.9;
		font-style: italic;
		margin: 0;
		margin-left: auto;
	}

	.path-details {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.5em;
	}

	.detail-section {
		background: rgba(255, 255, 255, 0.15);
		padding: 0.4em;
		border-radius: 3px;
		backdrop-filter: blur(10px);
	}

	.detail-section h3 {
		font-size: 0.5em !important;
		margin: 0 0 0.25em 0 !important;
		font-weight: 600 !important;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: white !important;
	}

	.detail-section p {
		font-size: 0.44em;
		line-height: 1.3;
		margin: 0;
	}

	.growth-rate {
		color: #ffd700;
		font-weight: 600;
	}

	.growth-highlight {
		font-size: 0.9em;
		display: block;
		margin-top: 0.15em;
	}

	.conclusion-box {
		background: #2c3e50;
		color: white;
		padding: 0.5em 0.8em;
		border-radius: 4px;
		border-left: 4px solid #c65d47;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
	}

	.conclusion-box p {
		margin: 0;
		font-size: 0.58em;
		line-height: 1.3;
		text-align: center;
	}

	.conclusion-box strong {
		color: #ffd700;
	}

	/* Slide 3: Three Converging Forces Styles */
	.forces-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.8em;
	}

	.force-card {
		border-radius: 6px;
		padding: 0.8em;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
		border-top: 4px solid rgba(255, 255, 255, 0.3);
	}

	.force-regulatory {
		background: linear-gradient(135deg, #1e3a5f 0%, #2c4f7c 100%);
	}

	.force-energy {
		background: linear-gradient(135deg, #a67c00 0%, #c9984a 100%);
	}

	.force-sustainability {
		background: linear-gradient(135deg, #5a6c7d 0%, #708090 100%);
	}

	.force-icon {
		margin-bottom: 0.5em;
		opacity: 0.95;
	}

	.force-title {
		font-size: 0.62em !important;
		margin: 0 0 0.6em 0 !important;
		font-weight: 600 !important;
		color: white !important;
		line-height: 1.2 !important;
		min-height: 2.4em;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.force-content {
		display: flex;
		flex-direction: column;
		gap: 0.6em;
		width: 100%;
		text-align: left;
	}

	.force-point {
		background: rgba(255, 255, 255, 0.12);
		padding: 0.5em;
		border-radius: 4px;
		backdrop-filter: blur(10px);
	}

	.force-point h4 {
		font-size: 0.52em !important;
		margin: 0 0 0.3em 0 !important;
		font-weight: 600 !important;
		color: white !important;
	}

	.force-point p {
		font-size: 0.42em;
		line-height: 1.35;
		margin: 0;
	}

	.force-point strong {
		color: #ffd700;
		font-weight: 600;
	}
</style>
