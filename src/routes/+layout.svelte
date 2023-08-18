<script>
	import './app.css';

	import { onMount } from 'svelte';
	import { screenType, isIframe } from '$lib/store/store';

	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	let Geometry;

	onMount(async () => {

		const module = await import('$lib/geometry.svelte');
		Geometry = module.default;

		function getDeviceType() {
			const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

			if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
				// This is a device which supports touch
				if (width <= 767) {
					// Mobile
					return 1;
				} else {
					// Tablet
					return 2;
				}
			} else {
				// This is likely a laptop or desktop
				return 3;
			}
		}

		screenType.set(getDeviceType());
		isIframe.set(window.location !== window.parent.location);
		
	});
</script>

<svelte:head>
	<title>SICOVECAS // Son Of The Sun</title>
	<meta name="description" content="Sicovecas' art, play with elements of water, jugs and wild plants,
	representing his experience of growing up in Jogja- a city known
	for being colourful and full of overlap but still in harmony.
	His characteristic abstract patterns reflect the movement and
	the energy of his hometown." />

	<link
	rel="preload"
	href="/fonts/NB-Architekt-Pro-Light.woff"
	as="font"
	type="font/woff"
	crossorigin="anonymous"
/>

<link
	rel="preload"
	href="/fonts/NB-Architekt-Pro-Bold.woff"
	as="font"
	type="font/woff"
	crossorigin="anonymous"
/>

<link rel="preload" href="icons/facebook.svg" as="image">
<link rel="preload" href="icons/phone.svg" as="image">
<link rel="preload" href="icons/insta.svg" as="image">
<link rel="preload" href="icons/mail.svg" as="image">

<link rel="preload" href="img/logo.svg" as="image">
</svelte:head>

<svelte:component this={Geometry} />

<main>
	{#if $screenType}
	<header>
		<Header />
	</header>

	<body>
			<slot />

	</body>

	{#if $screenType == 3}
	<footer>
		<Footer />
	</footer>
	{/if}
	
	{/if}
</main>


<style>
	main {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100dvh;
		z-index: 1;
	}
	
	header {
		position: absolute;
		top: 0;
		width: 100%;
	}

	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	body {
		display: flex;
		flex-direction: column;
		/* padding: calc(1 * var(--margin)); */
		width: 100%;
		height: 100%;
	}
</style>
