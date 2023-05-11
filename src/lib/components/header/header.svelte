<script>
	import Nav from './nav.svelte';
	import { darkMode, screenType } from '$lib/store/store';

	// import { page } from '$app/stores';
	// import { goto } from '$app/navigation';

	// stub data out
	const navItems = [
		{
			name: 'SICOVECAS',
			href: '/'
		},
		{
			name: 'ART',
			href: '/art'
		},
		{
			name: 'WALL',
			href: '/art'
		},
	
		{
			name: 'SHOP',
			href: '/art'
		},
		{
			name: 'CONTACT',
			href: '/art'
		},

	];

	let toggleDarkMode = () => {
		darkMode.set(!$darkMode);
		document.querySelector(':root').classList.toggle('dark-mode');

// 		if ($page.url.pathname == '/') {
// goto(`/art`, { replaceState: true }) 
// 		}
	};
</script>

<header>
	<main>

		<Nav {navItems} />

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- <div on:click={() => toggleDarkMode()} class="darkMode right">
		<p class:selected={$darkMode == false}>DAY</p>
		<p class="selected">/</p>
		<p class:selected={$darkMode == true}>NIGHT</p>
	</div> -->

	{#if $screenType == 3}
	<p class="sun">SICOVECAS : SON OF THE SUN</p>
	{/if}
</main>
</header>

<style>
	header {
		user-select: none;
		color: var(--primary);
		/* border-bottom: double var(--background) 2px;
		background: var(--orange);
		box-shadow: 0px -1px 8px var(--orimary-50); */
	}

	main {
		margin: auto;
		max-width: 100vw;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		padding: 10px 10px;
		font-size: 13px;
		height: calc(2 * var(--margin));
		font-family: var(--font-body);
		font-weight: 300;
		
	}

	.sun {
		background: var(--background);
		padding: 4px 10px;
		padding-top: 7px;
	}

	.darkMode {
		background: var(--background);
		display: flex;
		padding: 4px 10px;
	}

	.left {
		justify-content: start;
	}

	.right {
		justify-content: end;
	}

	.app_link {
		opacity: 0.3;
	}

	.darkMode p {
		line-height: 110%;
		letter-spacing: 0.1em;
		padding: 10px;
		cursor: pointer;
		opacity: 0.4;
	}

	.darkMode p.selected {
		opacity: 1;
	}

	@media only screen and (max-width: 768px) {

	}
</style>
