<script>
</script>

<footer>
	<a href="https://aufbau.io" target="_blank" rel="noreferrer">EIN AUFBAU DING</a>
	<a href="https://www.websitecarbon.com/website/aufbau-io/" target="_blank" rel="noreferrer">0.03G CO2 / VISIT</a>
	<!-- <p class="">COPYRIGHT 2022</p> -->
</footer>

<style>
	footer {
		width: 100%;

		z-index: 10;
		gap: 10px;

		padding: 10px 10px;
		height: calc(2 * var(--margin));

		background: var(--background-alt);
		border-top: solid 1px var(--accent-50);
		text-transform: none;
		color: var(--accent);

		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
	}

	footer a,
	footer p {
		background: var(--background);
		padding: 4px 10px;
		font-size: 13px;
		font-weight: 300;

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
