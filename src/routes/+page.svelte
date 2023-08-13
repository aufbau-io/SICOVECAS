<script>
	import { screenType } from '$lib/store/store';
	import LazyImage from '$lib/components/common/LazyImage.svelte';

	export let data;

	$: isMobileLayout = ($screenType == 1 || window.innerWidth < 768);
	// $: imgHeight = isMobileLayout ? 'auto' : '389px';
	// $: imgWidth = isMobileLayout ? '100%' : '50%';

  let imgHeight, imgWidth

  if ($screenType == 1) {
    imgHeight = 'auto';
    imgWidth = '100%';
  } else if (window.innerWidth > 840) {
    imgHeight = '389px';
    imgWidth = '100%';
  } else if (window.innerWidth < 768) {
    imgHeight = 'auto';
    imgWidth = '100%';
  } else {
    let width = (window.innerWidth - 80) / 2;
    imgHeight = `${width}px`;
    imgWidth = '50%';
  }

  // handle resize
  window.addEventListener('resize', () => {
    if ($screenType == 1) {
      imgHeight = 'auto';
      imgWidth = '100%';
    } else if (window.innerWidth > 840) {
      imgHeight = '389px';
      imgWidth = '100%';
    } else {
      let width = (window.innerWidth - 80) / 2;
      imgHeight = `${width}px`;
      imgWidth = '50%';
    }
  });
  
</script>

<section>
	<div class="main">
		<div class="images">
      <LazyImage
        src={data.homePhoto.url} 
        alt={data.name}
        width={imgWidth}
				height={imgHeight}
      />
      {#if !isMobileLayout}
      <LazyImage 
        src={data.homePhoto.url} 
        alt={data.name}
        width={imgWidth}
        height={imgHeight}
        customStyles="transform: rotate(180deg);"
      />
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
		width: 820px;
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
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .images LazyImage {
    flex: 0 0 auto;
    aspect-ratio: 1/1; /* CSS4: Makes sure the height is equal to the width */
  }

	@media only screen and (max-width: 768px) {
		.main {
			position: absolute;
			bottom: 20px;
			width: calc(100% - 40px);
			gap: 15px;
			padding:  20px 20px 15px 20px;
		}

    .images {
      flex-direction: column;
    }

    .images LazyImage {
      width: 100%;
    }
	}
</style>
