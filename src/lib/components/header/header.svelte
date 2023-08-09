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
			name: 'PROJECT',
			href: '/project'
		},
		{
			name: 'WALL',
			href: '/wall'
		},
		{
			name: 'SHOP',
			href: '/shop'
		},
		{
			name: 'HIM',
			href: '/him'
		},
	];
</script>

<header>
	<main>

		<Nav {navItems} />

	<div class="icons">
		<a href="https://api.whatsapp.com/send?phone=628562979022&text=Hi%2C%20I%20got%20your%20WhatsApp%20information%20from%20your%20website." target="_blank" rel="noreferrer">
			<img src="icons/phone.svg" alt="whatsapp" class="icon" />
		</a>
		<a href="https://www.instagram.com/sicovecas/" target="_blank" rel="noreferrer">
			<img src="icons/insta.svg" alt="instagram" class="icon" />
		</a>

		<a href="mailto: sicovecas@gmail.com">
			<img src="icons/mail.svg" alt="mail" class="icon" />
		</a>
		<a href="https://www.facebook.com/sicoveca" target="_blank" rel="noreferrer">
			<img src="icons/facebook.svg" alt="facebook" class="icon" />
		</a>



	</div>

</main>
</header>

<style>
	header {
		user-select: none;
		color: var(--primary);
	}

	main {
		margin: auto;
		max-width: 100vw;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		padding: 20px;
		font-size: 12px;
		height: calc(2 * var(--margin));
	}

	p, a {
		font-weight: 600;
	}

	.icons {
		display: flex;
		gap: 15px;
		padding: 6px 15px;
		justify-content: space-evenly;
		background: var(--background);
		border: var(--border);
	}

	.icon {
		height: 20px;
		width: 20px;

		cursor: pointer;
		opacity: 1;
	}

	.icon:hover{
		opacity:.5;
		}

</style>
