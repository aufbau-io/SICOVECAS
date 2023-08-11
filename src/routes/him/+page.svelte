<script>
	import { screenType } from '$lib/store/store';
	
	export let data;

	const returnLineBreaks = (text) => {
		if(text.includes('<br/>')) {
			let out = text.split('<br/>');
			console.log(out)
			return out;
		} else {
			return [text];
		}
	}
</script>

<section>
<div class="main">
	<p class="lineBreakStyle">
		{#each returnLineBreaks(data.himText) as textPart}
			<span>{textPart}</span>
		{/each}
	</p>
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

.lineBreakStyle {
		display: flex;
		flex-flow: column nowrap;
		gap: 10px;
	}

.main {
		max-width: 820px;

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
			max-height: calc(100% - 240px);
		}

		.main p {
			overflow-y: scroll;
		}
	}
</style>
