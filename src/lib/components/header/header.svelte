<script>
	import Nav from './nav.svelte';
	import { darkMode } from '$lib/store/store';

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
	<div on:click={() => toggleDarkMode()} class="darkMode right">
		<p class:selected={$darkMode == true}>DRIVE</p>
		<p class="selected">/</p>
		<p class:selected={$darkMode == false}>BREATHE</p>
	</div>
</main>
</header>

<style>
	header {
		user-select: none;
		color: var(--primary);
		/* border-bottom: solid 1px var(--primary-50);
		background: var(--background);
		box-shadow: 0px -1px 8px var(--orimary-50); */
	}

	main {
		margin: auto;
		max-width: 100vw;
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 10px 10px;
		font-size: 15px;
		height: calc(3 * var(--margin));
		font-family: var(--font-body);
		font-weight: 500;
	}

	.darkMode {
		display: flex;
		width: 200px;
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
