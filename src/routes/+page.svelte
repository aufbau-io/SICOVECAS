<script>
	import { onMount } from 'svelte';
	import { darkMode } from '$lib/store/store';

	onMount(async () => {
		if (!$darkMode) {
			darkMode.set(!$darkMode);
		document.querySelector(':root').classList.toggle('dark-mode');
		}
	});
</script>

<svelte:head>
	<title>SICOVECAS</title>
	<meta name="description" content="SICOVECAS DEMO - AUFBAU IO" />
</svelte:head>

<section>

	<!-- <h1>SICOVECAS</h1> -->

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

	h1 {
	
		color: var(--primary);
		font-family: var(--font-body);
		font-size: 12vw;
		line-height: 50%;
		margin: auto 0;
		/* -webkit-text-stroke: 3px var(--primary); */

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
