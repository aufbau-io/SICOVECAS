<script>
	import { screenType } from '$lib/store/store';
</script>

<section>

<div class="main">
  <!-- <div class="icons">
		<img src={www} alt="graph" class="icon" />
	</div> -->
		<!-- <h1>SICOVECAS<br>-</h1> -->
		<div class="images">
			<img src="obi.jpg" alt="obi">
			{#if $screenType != 1}
			<!-- <img src="main.jpg" alt="chair + painting"> -->
			<img style="transform: rotate(180deg);" src="obi.jpg" alt="obi">
			{/if}
		</div>
		<p>son of the sun</p>
	</div>
	<!-- <p>Son of the sun</p> -->
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
		gap: 15px;
		z-index: -1;

		background: var(--background);
		color: var(--primary);
		border: var(--border);
		padding:  20px 20px 15px 20px;
	}

	.images {
		display: flex;
	}

	.images img {
			width: 50%;
		}

  .icons {
		display: flex;
		flex-flow: row;
		padding-bottom: 10px;
	}

	.icon {
		height: 60px;
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		.main {
			position: absolute;
			bottom: 20px;
			width: calc(100% - 40px);
			gap: 15px;
			padding:  20px 20px 15px 20px;
		}

		.images img {
			width: 100%;
		}
	}
</style>
