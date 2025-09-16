<script lang="ts">
	// French bistro menu for dinner party
</script>

<svelte:head>
	<title>Chez Samuel - Menu du Soir</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Crimson+Text:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
</svelte:head>

<div class="page-container">
	<div class="menu-card">
		<div class="header">
			<div class="ornament">◊ ◆ ◊</div>
			<h1>Chez Samuel</h1>
			<div class="subtitle">Menu du Soir</div>
			<div class="ornament">◊ ◆ ◊</div>
		</div>
		
		<div class="date-info">
			<div class="date">Samedi 21 Septembre</div>
			<div class="time">18h00</div>
		</div>
		
		<div class="menu-section">
			<h2 class="section-title">Menu du Soir</h2>
			
			<div class="course">
				<h3>Entrée</h3>
				<div class="dish">
					<span class="dish-name">Figues Rôties au Burrata & Prosciutto</span>
					<div class="dots"></div>
				</div>
			</div>
			
			<div class="course">
				<h3>Plat Principal</h3>
				<div class="dish">
					<span class="dish-name">Tartare de Bœuf à la Moelle Rôtie</span>
					<div class="dots"></div>
				</div>
			</div>
			
			<div class="course">
				<h3>Spécialité</h3>
				<div class="dish">
					<span class="dish-name">Confit de Cuisse de Canard</span>
					<div class="dots"></div>
				</div>
			</div>
			
			<div class="course">
				<h3>Dessert</h3>
				<div class="dish">
					<span class="dish-name">Moelleux au Chocolat</span>
					<div class="dots"></div>
				</div>
			</div>
		</div>
		
		<div class="footer">
			<div class="ornament-small">❦</div>
			<div class="message">Préparé avec amour (et beaucoup trop d'ambition)</div>
			<div class="signature">— Le Chef</div>
			<div class="ornament-small">❦</div>
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
	
	.page-container {
		min-height: 100vh;
		background: linear-gradient(135deg, #f8f6f0 0%, #e8e2d4 50%, #f0ead6 100%);
		padding: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Crimson Text', serif;
	}
	
	.menu-card {
		background: #fefcf8;
		background-image: 
			radial-gradient(circle at 20% 20%, rgba(139, 69, 19, 0.02) 0%, transparent 50%),
			radial-gradient(circle at 80% 80%, rgba(160, 82, 45, 0.02) 0%, transparent 50%);
		max-width: 500px;
		width: 100%;
		padding: 3rem 2.5rem;
		border: 3px solid #8b4513;
		border-radius: 0;
		box-shadow: 
			0 0 0 1px #d4a574,
			0 10px 40px rgba(139, 69, 19, 0.2);
		text-align: center;
		position: relative;
	}
	
	.menu-card::before {
		content: '';
		position: absolute;
		top: 15px;
		left: 15px;
		right: 15px;
		bottom: 15px;
		border: 1px solid #d4a574;
		pointer-events: none;
	}
	
	.header {
		margin-bottom: 2.5rem;
		border-bottom: 2px solid #8b4513;
		padding-bottom: 1.5rem;
	}
	
	.ornament {
		color: #8b4513;
		font-size: 1.2rem;
		margin: 0.5rem 0;
		letter-spacing: 0.3rem;
	}
	
	.ornament-small {
		color: #8b4513;
		font-size: 1.5rem;
		margin: 0.5rem 0;
	}
	
	h1 {
		font-family: 'Playfair Display', serif;
		color: #8b4513;
		font-size: 2.8rem;
		font-weight: 700;
		margin: 0.5rem 0;
		letter-spacing: 0.1rem;
		text-shadow: 0 1px 2px rgba(139, 69, 19, 0.1);
	}
	
	.subtitle {
		font-family: 'Playfair Display', serif;
		color: #a0522d;
		font-size: 1.1rem;
		font-style: italic;
		letter-spacing: 0.15rem;
		text-transform: uppercase;
	}
	
	.date-info {
		margin-bottom: 2rem;
		padding: 1rem 0;
		background: linear-gradient(90deg, transparent 0%, rgba(139, 69, 19, 0.1) 50%, transparent 100%);
	}
	
	.date {
		font-family: 'Playfair Display', serif;
		color: #8b4513;
		font-size: 1.4rem;
		font-weight: 400;
		margin-bottom: 0.3rem;
	}
	
	.time {
		color: #a0522d;
		font-size: 1.2rem;
		font-style: italic;
	}
	
	.menu-section {
		margin: 2rem 0;
	}
	
	.section-title {
		font-family: 'Playfair Display', serif;
		color: #8b4513;
		font-size: 1.8rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
	}
	
	.course {
		margin: 1.8rem 0;
		text-align: left;
	}
	
	.course h3 {
		font-family: 'Playfair Display', serif;
		color: #a0522d;
		font-size: 1.1rem;
		font-weight: 400;
		font-style: italic;
		margin: 0 0 0.5rem 0;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
	}
	
	.dish {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}
	
	.dish-name {
		color: #654321;
		font-size: 1.1rem;
		font-weight: 400;
		line-height: 1.3;
		padding-right: 0.5rem;
		flex-shrink: 0;
	}
	
	.dots {
		flex-grow: 1;
		height: 1px;
		background-image: repeating-linear-gradient(
			to right,
			#d4a574 0px,
			#d4a574 3px,
			transparent 3px,
			transparent 8px
		);
		margin: 0 0.5rem;
		margin-bottom: 0.3rem;
	}
	
	.footer {
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 2px solid #8b4513;
		color: #a0522d;
	}
	
	.message {
		font-style: italic;
		font-size: 1rem;
		margin: 0.8rem 0;
		color: #8b4513;
	}
	
	.signature {
		font-family: 'Playfair Display', serif;
		font-style: italic;
		font-size: 1.1rem;
		color: #a0522d;
		margin-top: 0.5rem;
	}
	
	@media (max-width: 768px) {
		.page-container {
			padding: 1rem;
		}
		
		.menu-card {
			padding: 2rem 1.5rem;
		}
		
		h1 {
			font-size: 2.2rem;
		}
		
		.dish {
			flex-direction: column;
			align-items: flex-start;
		}
		
		.dots {
			display: none;
		}
	}
</style>