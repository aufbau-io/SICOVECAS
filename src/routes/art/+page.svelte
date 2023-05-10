<script>
</script>

<svelte:head>
	<title>SICOVECAS</title>
	<meta name="description" content="SICOVECAS DEMO - AUFBAU IO" />
</svelte:head>

<section>
	<p>some name - 2022</p>
	<img src="main.jpg" alt="main" />
	<p>some name - 2022</p>
	<img src="main.jpg" alt="main" />
	<p>some name - 2022</p>
	<img src="main.jpg" alt="main" />
	<p>some name - 2022</p>
	<img src="main.jpg" alt="main" />
	<p>some name - 2022</p>
	<img src="main.jpg" alt="main" />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;

		flex: 1;
		gap: 10px;
		/* background: var(--background); */

	
		left: 10%;
		top: 0%;
		overflow: auto;

		width: 100%;
		padding: 0 30%;

		margin: 20px 0%;

	}

	p {
		background: var(--black);
		padding: 4px 10px;
	}

	h1 {
		width: 100%;
		font-family: var(--font-header);
		font-size: 33vw;
		line-height: 50%;
		margin: auto;
		padding-left: 1.5vw;
		padding-top: 15vh;
		-webkit-text-stroke: 1px #d0d0d0;
	}

@media (max-width: 768px) {
	section {
		padding: 0 24px;
		align-items: flex-end;
	}
}

</style>
