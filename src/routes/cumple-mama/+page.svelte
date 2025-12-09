<script lang="ts">
	let currentStep = 0;
	let showConfetti = false;

	const steps = [
		{
			title: '¡Feliz Cumpleaños, Mamá!',
			message: 'Tengo algunas sorpresas para ti...',
			emoji: '🎉'
		},
		{
			title: 'Primera Sorpresa',
			message: 'Unas flores jamás hicieron daño',
			emoji: '💐',
		},
		{
			title: 'Segunda Sorpresa',
			message: 'Vas a tener que abrir el pequeño regarlo...',
			emoji: '🎁',
		},
		{
			title: 'La sorpresa final!',
			message: 'sabes que normalmente hacemos algo cultural...',
			emoji: '❔',
		},
        {
			title: 'Te aptece un musical?',
			message: 'Esta noche tenemos entradas para el musical...',
			emoji: '🧙🏼',
			subtitle: 'WICKED',
			final: true
		}
	];

	function nextStep() {
		if (currentStep < steps.length - 1) {
			currentStep++;
			if (currentStep === steps.length - 1) {
				showConfetti = true;
			}
		}
	}

	function prevStep() {
		if (currentStep > 0) {
			currentStep--;
		}
	}
</script>

<svelte:head>
	<title>¡Feliz Cumpleaños, Mamá!</title>
</svelte:head>

<div class="container">
	{#if showConfetti}
		<div class="confetti">
			{#each Array(50) as _, i}
				<div class="confetti-piece" style="left: {Math.random() * 100}%; animation-delay: {Math.random() * 3}s; background-color: hsl({Math.random() * 360}, 70%, 60%)"></div>
			{/each}
		</div>
	{/if}

	<div class="card">
		<div class="step-indicator">
			{#each steps as _, index}
				<div class="dot" class:active={index === currentStep} class:completed={index < currentStep}></div>
			{/each}
		</div>

		<div class="content">
			<div class="emoji-large">
				{steps[currentStep].emoji}
			</div>

			<h1>{steps[currentStep].title}</h1>
			<p class="message">{steps[currentStep].message}</p>

			{#if steps[currentStep].subtitle}
				<p class="subtitle">{steps[currentStep].subtitle}</p>
			{/if}

			{#if steps[currentStep].image}
				<div class="gift-placeholder">
					<div class="gift-icon">{steps[currentStep].emoji}</div>
				</div>
			{/if}

			{#if steps[currentStep].final}
				<div class="final-message">
					<p class="love">Te quiero mucho</p>
				</div>
			{/if}
		</div>

		<div class="navigation">
			{#if currentStep > 0}
				<button onclick={prevStep} class="btn btn-secondary">Atrás</button>
			{/if}
			{#if currentStep < steps.length - 1}
				<button onclick={nextStep} class="btn btn-primary">Siguiente</button>
			{/if}
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Georgia', serif;
		overflow: hidden;
	}

	.container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #8874f7 0%, hsl(293, 91%, 78%) 100%);
		padding: 20px;
		position: relative;
	}

	.confetti {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1000;
	}

	.confetti-piece {
		position: absolute;
		width: 10px;
		height: 10px;
		top: -10px;
		opacity: 0;
		animation: confetti-fall 3s linear infinite;
	}

	@keyframes confetti-fall {
		to {
			transform: translateY(100vh) rotate(360deg);
			opacity: 1;
		}
	}

	.card {
		background: white;
		border-radius: 20px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		max-width: 600px;
		width: 100%;
		padding: 40px;
		animation: fadeIn 0.5s ease-in;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.step-indicator {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin-bottom: 30px;
	}

	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #ddd;
		transition: all 0.3s ease;
	}

	.dot.active {
		background: #667eea;
		transform: scale(1.3);
	}

	.dot.completed {
		background: #48bb78;
	}

	.content {
		text-align: center;
		min-height: 350px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.emoji-large {
		font-size: 80px;
		margin-bottom: 20px;
		animation: bounce 1s ease infinite;
	}

	@keyframes bounce {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	h1 {
		color: #2d3748;
		font-size: 2.5rem;
		margin: 0 0 20px 0;
		font-weight: 700;
	}

	.message {
		color: #4a5568;
		font-size: 1.25rem;
		line-height: 1.6;
		margin: 0;
	}

	.subtitle {
		color: #667eea;
		font-size: 1.5rem;
		font-weight: 600;
		margin-top: 10px;
		animation: pulse 2s ease infinite;
	}

	@keyframes pulse {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.7;
		}
	}

	.gift-placeholder {
		margin: 30px 0;
		width: 200px;
		height: 200px;
		background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.gift-icon {
		font-size: 100px;
	}

	.final-message {
		margin-top: 20px;
	}

	.final-message p {
		font-size: 1.25rem;
		color: #4a5568;
		margin: 10px 0;
	}

	.love {
		font-size: 1.5rem !important;
		color: #e91e63;
		font-weight: 600;
	}

	.navigation {
		display: flex;
		justify-content: center;
		gap: 15px;
		margin-top: 30px;
	}

	.btn {
		padding: 12px 30px;
		border: none;
		border-radius: 10px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: inherit;
	}

	.btn-primary {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
	}

	.btn-secondary {
		background: #e2e8f0;
		color: #4a5568;
	}

	.btn-secondary:hover {
		background: #cbd5e0;
	}

	@media (max-width: 640px) {
		.card {
			padding: 30px 20px;
		}

		h1 {
			font-size: 2rem;
		}

		.message {
			font-size: 1.1rem;
		}

		.emoji-large {
			font-size: 60px;
		}
	}
</style>
