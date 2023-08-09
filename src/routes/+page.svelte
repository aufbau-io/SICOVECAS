<script>
	import { screenType } from '$lib/store/store';

	export let data;
</script>

<section>

<div class="main">
		<div class="images">
			<img src={data.homePhoto.url} alt={data.name}>
			{#if $screenType != 1}
			<img src={data.homePhoto.url} alt={data.name}  style="transform: rotate(180deg);" >
			{/if}
		</div>
		<p>{data.homeSubTitle}</p>
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
		width: 800px;
		max-width: calc(100% - 40px);

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
