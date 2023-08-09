<script>
	import logo from '$lib/images/logo.svg';
</script>

<footer>
	<a href="https://aufbau.io" target="_blank" rel="noreferrer">EIN AUFBAU DING</a>
	<!-- <a href="https://www.websitecarbon.com/website/aufbau-io/" target="_blank" rel="noreferrer">0.03G CO2 / VISIT</a> -->
	<img src={logo} alt="logo" class="logo" />
	<!-- <p class="">COPYRIGHT 2022</p> -->
</footer>

<style>
	footer {
		width: 100%;

		z-index: 10;
		gap: 10px;

		padding: 30px 20px;
		height: calc(2 * var(--margin));

		border-top: solid 1px var(--accent-50);
		text-transform: none;


		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		height: 32px;
	}

	footer a,
	footer p {
		background: var(--background);
		color: var(--primary);
		border: var(--border);

		padding: 6px 10px;
		font-size: 12px;

		letter-spacing: 0.15em;
		font-family: var(--font-body);
	}

	@media only screen and (max-width: 768px) {
		footer {
			padding: 20px 24px;
		}
		footer a,
		footer p {
			font-size: 12px;
		}
	}
</style>
