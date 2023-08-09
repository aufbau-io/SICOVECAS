<script>
	import www from '$lib/images/icons/www.svg';
</script>

<section>
<div class="main">
  <!-- <div class="icons">
		<img src={www} alt="graph" class="icon" />
	</div> -->
	<p>WALL</p>
	</div>
</section>

<style>
section {
  padding: 0 0;
  height: 100%;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  align-items: center;
  text-align: center;

  overflow: auto;
}

.main {
		max-width: 800px;

		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		gap: 10px;

		background: var(--background);
		color: var(--primary);
		border: var(--border);
		padding:  20px;
	}

	@media only screen and (max-width: 768px) {
		.main {
			position: absolute;
			bottom: 20px;
			width: calc(100% - 40px);
			gap: 10px;
		}
	}
</style>
