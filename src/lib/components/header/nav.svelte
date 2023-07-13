<script>
	import { page } from '$app/stores';
	import { screenType } from '$lib/store/store';

	export let navItems = [];
	export async function load() {
		return {
			props: {
				navItems
			}
		};
	}
</script>

<nav>

	{#each navItems as navItem}
		<a href={navItem.href} class="" class:active={navItem.href === $page.url.pathname}
			>{navItem.name}</a
		>
	{/each}

	<!-- <a href="https://aufbau.io" target="_blank">EIN AUFBAU DING</a> -->
</nav>

<style>
	nav {
		align-self: baseline;
		display: flex;
		flex-flow: column wrap;
		color: var(--primary);
		background: var(--background);
	}
	nav a,
	nav p {
		line-height: 110%;
		text-transform: none;
		letter-spacing: 0.1em;
		padding: 10px;
		cursor: pointer;
	}

	nav a:hover {
		opacity: 0.6;
	}

	.active {
		opacity: 1;
		color: #f0f0f0;
	}

	.active:hover {
		opacity: 1;
		text-decoration: none;
	}
</style>
