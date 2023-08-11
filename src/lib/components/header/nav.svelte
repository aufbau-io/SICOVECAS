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

	<!-- <a class="">SICOVECAS</a> -->

	{#each navItems as navItem}
		<a href={navItem.href} class="" class:active={navItem.href === $page.url.pathname}
			>{navItem.name}</a
		>
	{/each}


</nav>

<style>
	nav {
		align-self: baseline;
		display: flex;
		flex-flow: row wrap;
		background: var(--background);
		color: var(--primary);
		border: var(--border);
		z-index: 1;
		padding: 5px 0;
	}
	nav a,
	nav p {
		padding: 10px 10px;
		font-size: inherit;
		cursor: pointer;
		color: inherit;
	}

	nav a:hover {
		opacity: 0.6;
	}

	nav a.active {
		font-weight: 600;
	}

	.active,
	.active:hover {
		opacity: 1;
	}

	@media only screen and (max-width: 768px) {
		nav {
			flex-flow: column wrap;
		}
	}
</style>
