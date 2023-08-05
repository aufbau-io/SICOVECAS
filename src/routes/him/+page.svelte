<script>
	import www from '$lib/images/icons/www.svg';
</script>

<section>
<div class="main">
  <!-- <div class="icons">
		<img src={www} alt="graph" class="icon" />
	</div> -->
		<h1>HIM<br>-</h1>
		<div style="display: flex;">
			<img src="obi.jpg" style="width: 50%;">
			<img src="main.jpg" style="width: 50%;">
		</div>
		<p>Sicovecas is a Yogyakartan mural and graffiti artist who found his identity as ‘As I See’ (SIC) in 2006. His pieces play with elements of water, jugs, and wild plants, representing his experience of growing up in Jogja — a city known for being colourful and full of overlap, but somehow still in harmony. His characteristic abstract patterns reflect the movement and the energy of his hometown.
			<br><br>
			Although often a subtle feature in his work, water is central as it represents the flow of dissatisfaction and desire to keep digging for the most current, authentic version of himself.</p>
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
		padding:  40px 48px;
	}

	.main p {
		padding:20px;
		background:var(--black);
		z-index:10;
	}

  .icons {
		display: flex;
		flex-flow: row;
		padding-bottom: 10px;
	}

	.icon {
		height: 60px;
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		.main {
			position: absolute;
			bottom: 5%;
			width: 90vw;
			gap: 24px;
			padding:  40px 24px;
		}
	}
</style>
