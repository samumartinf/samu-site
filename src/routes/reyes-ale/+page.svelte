<script lang="ts">
	let revealed = false;

	function handleReveal() {
		revealed = true;
	}
</script>

<svelte:head>
	<title>Una sorpresa para ti 💝</title>
</svelte:head>

<div class="container">
	{#if revealed}
		<div class="confetti">
			{#each Array(50) as _, i}
				<div class="confetti-piece" style="left: {Math.random() * 100}%; animation-delay: {Math.random() * 3}s; background-color: hsl({Math.random() * 360}, 70%, 60%)"></div>
			{/each}
		</div>
	{/if}

	<div class="card">
		{#if !revealed}
			<div class="content">
				<div class="emoji-large">🎁</div>

				<h1>Amorinchins ha pedido experiencias</h1>

				<p class="message">
					y esta es una que no me creo todavía no hayas hecho...
                    <br><br>
                    (No leas el segundo punto en voz alta)
				</p>

				<div class="list">
					<p class="list-title">Combina dos cosas que te encantan:</p>
					<div class="list-items">
						<div class="list-item">
							<span class="number">1.</span>
							<span>Perritos 🐕</span>
						</div>
						<div class="list-item">
							<span class="number">2.</span>
							<span>Abrirte de piernas 🧘🏻‍♀️</span>
						</div>
					</div>
				</div>

				<button onclick={handleReveal} class="btn btn-reveal">
					Toca para revelar...
				</button>
			</div>
		{:else}
			<div class="content reveal-content">
				<div class="image-container">
					<img src="/images/reyes-ale/image.png" alt="Puppy Yoga" class="reveal-image" />
				</div>

				<h1 class="reveal-title">¿Quieres hacer puppy yoga con tu porkie?</h1>

				<div class="final-message">
					<p class="love">Te quiero mucho 💕</p>
				</div>
			</div>
		{/if}
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
		background: linear-gradient(135deg, #ffa8a8 0%, #ffb3e6 100%);
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

	.content {
		text-align: center;
		min-height: 450px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.reveal-content {
		min-height: 350px;
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
		font-size: 2rem;
		margin: 0 0 20px 0;
		font-weight: 700;
		line-height: 1.3;
	}

	.reveal-title {
		font-size: 2.5rem;
		color: #e91e63;
		animation: pulse 2s ease infinite;
	}

	@keyframes pulse {
		0%, 100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.8;
			transform: scale(1.05);
		}
	}

	.message {
		color: #4a5568;
		font-size: 1.15rem;
		line-height: 1.6;
		margin: 0 0 30px 0;
	}

	.list {
		margin: 30px 0;
		width: 100%;
		max-width: 400px;
	}

	.list-title {
		color: #2d3748;
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 15px;
	}

	.list-items {
		background: #f7fafc;
		border-radius: 15px;
		padding: 20px;
	}

	.list-item {
		display: flex;
		align-items: center;
		gap: 15px;
		padding: 10px 0;
		color: #4a5568;
		font-size: 1.1rem;
	}

	.number {
		font-weight: 700;
		color: #e91e63;
		font-size: 1.3rem;
	}

	.btn {
		padding: 15px 40px;
		border: none;
		border-radius: 50px;
		font-size: 1.1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: inherit;
		margin-top: 20px;
	}

	.btn-reveal {
		background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
		color: white;
		animation: wiggle 2s ease infinite;
	}

	@keyframes wiggle {
		0%, 100% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(-3deg);
		}
		75% {
			transform: rotate(3deg);
		}
	}

	.btn-reveal:hover {
		transform: translateY(-3px) scale(1.05);
		box-shadow: 0 10px 25px rgba(255, 107, 157, 0.4);
	}

	.btn-reveal:active {
		transform: translateY(-1px) scale(1.02);
	}

	.image-container {
		width: 100%;
		max-width: 400px;
		margin-bottom: 20px;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		animation: fadeIn 0.8s ease-in;
	}

	.reveal-image {
		width: 100%;
		height: auto;
		display: block;
	}

	.final-message {
		margin-top: 30px;
	}

	.love {
		font-size: 1.5rem;
		color: #e91e63;
		font-weight: 600;
		margin: 0;
	}

	@media (max-width: 640px) {
		.card {
			padding: 30px 20px;
		}

		h1 {
			font-size: 1.6rem;
		}

		.reveal-title {
			font-size: 1.8rem;
		}

		.message {
			font-size: 1rem;
		}

		.emoji-large {
			font-size: 60px;
		}

		.list-item {
			font-size: 1rem;
		}

		.btn-reveal {
			font-size: 1rem;
			padding: 12px 30px;
		}

		.image-container {
			max-width: 100%;
		}
	}

	@media (max-width: 400px) {
		h1 {
			font-size: 1.4rem;
		}

		.reveal-title {
			font-size: 1.5rem;
		}

		.message {
			font-size: 0.95rem;
		}
	}
</style>
