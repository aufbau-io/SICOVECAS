<script>
	let img_src = "/main.jpg" 

	export let data;
</script>

<svelte:head>
	<title>SICOVECAS // ART</title>
	<meta name="description" content="SICOVECAS DEMO - AUFBAU IO" />
</svelte:head>

<section class="team">
	{#each data.employees as employee}
		<figure>
			<img src={employee.photo.url} alt={employee.photo.description} />
			<figcaption>
				<p><strong>{employee.name}</strong> — {employee.jobTitle}</p>
				<p>
					<em>Joined in {employee.startDate} </em>
				</p>
			</figcaption>
		</figure>
	{/each}
</section>


<!-- <section>
	<p>some name - 2022</p>
	<img src={img_src} alt="main" />
	<p>some name - 2022</p>
	<img src={img_src} alt="main" />
	<p>some name - 2022</p>
	<img src={img_src} alt="main" />
	<p>some name - 2022</p>
	<img src={img_src} alt="main" />
	<p>some name - 2022</p>
	<img src={img_src} alt="main" />
</section> -->

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;

		flex: 1;
		gap: 10px;
		/* background: var(--background); */

		overflow: auto;

		width: 100%;

		margin: 10px 0;
		padding: 10px 0;

	}

	section img {
		width: 640px;
	}

	p {
		background: var(--black);
		padding: 4px 10px;
	}

	h1 {
		width: 100%;
		font-family: var(--font-header);
		font-size: 33vw;
		line-height: 50%;
		margin: auto;
		padding-left: 1.5vw;
		padding-top: 15vh;
		-webkit-text-stroke: 1px #d0d0d0;
	}

@media (max-width: 768px) {
	section {
		padding: 10px 20px 20px 20px;
		align-items: flex-end;
		margin-bottom: 0;
	}
}

</style>
