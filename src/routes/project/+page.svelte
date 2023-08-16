<script>
	export let data;
</script>

<section>
	<div class="main">
		{#each data.projects as project}
			<figure>
				<img src={project.keyImage.url} alt={project.keyImage.title} />
				<figcaption>
					<p><strong>{project.title}</strong> — {project.year}</p>
					<p>
						<em>{project.subTitle} / {project.location}</em>
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
	background: var(--background-50);

}

.main {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		gap: 10px;

		color: var(--primary);

		padding:  20px;

	}

	img {
		object-fit: cover;
		width: 400px;
		height: 400px;
	}

	@media only screen and (max-width: 768px) {
		/* .main {
			position: absolute;
			bottom: 20px;
			width: calc(100% - 40px);
		} */
	}
</style>
