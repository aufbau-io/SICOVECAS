<script>
	export let data;
</script>

<section>
	<div class="main">
		{#each data.walls as wall}
			<figure>
				<img src={wall.image.url} alt={wall.image.title} />
				<figcaption>
					<p><strong>{wall.title}</strong></p>
					<p>
						<em>{wall.body}</em>
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
	/* background: var(--background-50); */

}

.main {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;

		color: var(--primary);
		background: var(--background);

	}

	figure {
		border-left: solid 1px var(--black);
	}

	img {
		object-fit: cover;
		width: 100vw;
		height: 400px;
		background: var(--black);

		padding: 1px 0px;
	}
	p {
		background: var(--background);
		color: var(--primary);
	}

	@media only screen and (max-width: 768px) {
		/* .main {
			position: absolute;
			bottom: 20px;
			width: calc(100% - 40px);
		} */
	}
</style>
