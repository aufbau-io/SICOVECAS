<script>
	export let data;
</script>

<section>
	<div class="main">
		{#each data.shop as item}
			<figure>
				<img src={item.imageCollection.items[0].url} alt={item.imageCollection.items[0].title} />
				<figcaption>
					<p><strong>{item.title} - {item.year}</strong></p>
					<p>
						<em>{item.dimensions} - {item.medium}</em>
					</p>
				</figcaption>
			</figure>
		{/each}
	</div>
</section>

<style>
section {
  height: 100%;
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  align-items: center;
  text-align: center;

	overflow: auto;
	/* background: var(--accent-50); */

}

.main {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;

		color: var(--primary);

		/* padding: 20px; */
		max-width: 800px;

	}

	figure {
		border-left: solid 1px var(--black);
		border-right: solid 1px var(--black);
		background: var(--background);
		width: 400px;
		height: 500px;
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 400px;
		background: var(--black);

		padding: 1px 0px;
	}

	p {
		background: var(--background);
		color: var(--primary);
	}

	@media only screen and (max-width: 768px) {
		figure {
			width: 100%;
		}

		img {
			width: 100%;
		}
	}
</style>
