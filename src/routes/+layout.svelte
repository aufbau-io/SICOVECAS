<script>
	import './app.css';

	import { onMount } from 'svelte';
	import { screenType, is_iframe } from '$lib/store/store';

	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	let Geometry;
	onMount(async () => {
	
		const module = await import('$lib/components/three/sun.svelte');
		Geometry = module.default;

		// ---------------------------------------------------------------------------
		// HEIGHT
		// ---------------------------------------------------------------------------

		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
		
		// ---------------------------------------------------------------------------
		// SCREEN
		// ---------------------------------------------------------------------------
		const ua = navigator.userAgent;
		if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
		) {
			// phone
			screenType.set(1);
		} else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			// tablet
			screenType.set(2);
		} else {
			//laptop
			screenType.set(3);
		}

		if (window.location !== window.parent.location) {
			// The page is in an iframe
			is_iframe.set(true);
		}
	});
</script>

<svelte:component this={Geometry} />


<div class="app">
	{#if $screenType}

	<header>
		<Header />
	</header>

	<main>
		<slot />
	</main>

	{#if $screenType == 3}
	<footer>
		<Footer />
	</footer>
	{/if}

	{/if}
</div>


<style>
	.app {
		display: flex;
		flex-direction: column;
		height: 100%;
		height: calc(var(--vh, 1vh) * 100);

	}

	header {
		position: absolute;
		width: 100%;
	}

	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
	}


	video {
		position: absolute;
		object-fit: cover;

		z-index: 1;
	}

	main {
		z-index: 10;
	}
	header, footer {
		z-index: 11;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: calc(4 * var(--margin)) calc(4 * var(--margin)); */
		width: 100%;
		height: 100%;
		/* max-width: 64rem; */
		margin: 0 auto;
		box-sizing: border-box;

	}

	@media only screen and (max-width: 768px) {
		.app {
			min-height: 100%;
			overflow: hidden;
		}
		/* main {
			padding: calc(4 * var(--margin)) calc(3 * var(--margin));
		} */
	}
</style>
