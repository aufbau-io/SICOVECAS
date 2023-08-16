<script>
	export let data;
</script>

<section>
	<div class="main">
		{#each data.projects as project}
			<figure>
				<img src={project.keyImage.url} alt={project.keyImage.title} />
				<figcaption>
					<p><strong>{project.title}</strong> — {project.title}</p>
					<p>
						<em>Joined in {project.title} </em>
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
	background: var(--background-50);
	overflow: auto;
}

.main {
		/* max-width: 800px; */

		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		gap: 10px;

		color: var(--primary);
		/* border: var(--border); */
		padding:  20px;
	}

	img {
		object-fit: cover;
		width: 300px;
		height: 300px;
	}

	@media only screen and (max-width: 768px) {
		/* .main {
			position: absolute;
			bottom: 20px;
			width: calc(100% - 40px);
		} */
	}
</style>
