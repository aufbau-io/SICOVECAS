<script>

	import logo from '$lib/images/logo.svg';
</script>

<section>
			<!-- <div class="icons">
			<img src={logo} alt="logo" class="icon" />
		</div> -->
	<div class="main">

		<!-- <h1>SICOVECAS</h1> -->
		<p style="padding:20px;background:var(--black);z-index:10;">
			Sicovecas' art plays with elements of water, jug, and wild plant.
			These motifs represent his experience of growing up in Jogja - a city known
			for being colourful, full of overlap, but still in harmony.
			His characteristic abstract patterns reflect the movement and
			the energy of his hometown.
			</p>
	</div>
	
</section>

<style>
	section {
		padding: 0 0;
		height: 100%;
		width: 100%;

		display: flex;
		flex-flow: column nowrap;
		justify-content: center;

		align-items: center;
		text-align: center;

		/* background: var(--primary-50); */
		overflow: auto;
	}

	.main {
		max-width: 800px;

		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		gap: 10px;

		background: var(--background);
		color: var(--primary);
		border: var(--border);
		padding:  20px;
	}

	/* .icons {
		display: flex;
		flex-flow: row;
		padding-bottom: 10px;
	}

	.icon {
		height: 60px;
		width: 100%;
	} */


	@media only screen and (max-width: 768px) {
		.main {
			position: absolute;
			bottom: 5%;
			width: 90vw;
			gap: 16px;
			padding:  24px 20px;
		}
	}
</style>
