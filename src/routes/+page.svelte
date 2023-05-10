<script>
	import { onMount } from 'svelte';
	import { darkMode } from '$lib/store/store';

	// onMount(async () => {
	// 	if (!$darkMode) {
	// 		darkMode.set(!$darkMode);
	// 	document.querySelector(':root').classList.toggle('dark-mode');
	// 	}
	// });
</script>

<svelte:head>
	<title>SICOVECAS // SUN OF THE SUN</title>
	<meta name="description" content="SICOVECAS DEMO - AUFBAU IO" />
</svelte:head>


<section>
	<img src="obi.jpg" alt="main" class="obi" />
	<img src="logo.svg" alt="main" class="logo" />
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
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		width: 480px;
		max-width: 70%;
		border: double var(--background) 5px;
	}

	.logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 20%;

		border: none;
	}

	h1 {
	
		color: var(--black);
		font-family: var(--font-body);
		font-size: 12vw;
		line-height: 50%;
		margin: auto 0;
		/* -webkit-text-stroke: 3px var(--primary); */

	}

@media (max-width: 768px) {
.logo {
	min-width: 50vw;
}
}

</style>
