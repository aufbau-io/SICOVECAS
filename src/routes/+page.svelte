<script>
</script>

<svelte:head>
	<title>SICOVECAS</title>
	<meta name="description" content="SCRT THROW DEMO - AUFBAU IO" />
</svelte:head>

<section>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		/* background: var(--background); */

		max-width: 100%;
		max-height: 100%;
		overflow: hidden;
	}

	h1 {
		width: 100%;
		color: transparent;
		font-family: var(--font-header);
		font-size: 33vw;
		line-height: 50%;
		margin: auto;
		padding-left: 1.5vw;
		padding-top: 15vh;
		-webkit-text-stroke: 1px #d0d0d0;
	}

@media (max-width: 768px) {
	h1 {
		opacity: 0;
		height:0;
	}

	section {
		max-height: 0;
	}
}

</style>
