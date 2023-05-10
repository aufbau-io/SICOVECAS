<script>
	import './app.css';

	import { onMount, beforeUpdate } from 'svelte';
	import { screenType, is_iframe } from '$lib/store/store';

	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	let Geometry;
	onMount(async () => {
	
		const module = await import('./sun.svelte');
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

	{#if true || $screenType == 3}
	<header>
		<Header />
	</header>
	{/if}

	<!-- svelte-ignore a11y-media-has-caption -->
	<!-- <video bind:this={videoElement} width="100%" autoplay muted loop class="video1">
		<source src="bg.mp4" type="video/mp4">
	</video> -->

		<!-- svelte-ignore a11y-media-has-caption -->
		<!-- <video bind:this={videoElement} width="100%" autoplay muted loop class="video2">
			<source src="bg.mp4" type="video/mp4">
		</video> -->
		

	<main>
		<slot />
	</main>

	{#if true || $screenType == 3}
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

	.video1 {
		height: 50%;
		width: 100%;
		opacity: .75;

		top: 50%;
		left: 0%;
	}

	.video2 {
		height: 100%;
		width: 100%;
		opacity: .75;

		top: 0%;
		left: 0;
	}
	
/* 
	header {
		position: absolute;
		top: 0;
		width: 100%;
	}

	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
	} */

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
