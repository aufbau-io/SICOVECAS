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
	<img src="logo_white.png" alt="main" class="logo" />
	<img src="obi.jpg" alt="main" class="obi" />z
</section>

<style>
	section {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;

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

	.obi {
		min-width: 540px;
		max-width: 540px;
		border: double var(--orange) 3px;
	}

	.logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50%;
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
