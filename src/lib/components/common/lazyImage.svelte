<script>
  import { onMount, onDestroy } from 'svelte';

  export let src = '';
  export let alt = '';
  export let width = 'auto';
  export let height = 'auto';
  export let customStyles = '';

  let imgElement;
  let observer;

  function loadImage() {
    imgElement.src = src;

    imgElement.onload = () => {
      imgElement.style.opacity = '1';
      if (observer) {
        observer.unobserve(imgElement);
      }
    };
  }

  onMount(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.01
    };

    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadImage();
      }
    }, options);

    observer.observe(imgElement);
  });

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });
</script>

<style>
  img {
    /* opacity: 0; */
    /* transition: opacity 0.5s ease-in-out; */
    width: 100%;
    height: auto;
    display: block;
  }
</style>

<div style={`width:${width}; height:${height}; ${customStyles}`}>
  <img bind:this={imgElement} alt={alt} />
</div>
