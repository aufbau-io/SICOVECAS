<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	let group;

	let container;

	let camera, scene, renderer;

	let factor  = 1;

	let mouseX = 0,
		mouseY = 0;

	let width = window.innerWidth;
	let height = window.innerHeight;

	let sphere, sphere_2;

	let windowHalfX = width / 2;
	let windowHalfY = height / 2;

	const clock = new THREE.Clock();
	let previousTime,
		elapsedTime,
		deltaTime = 0;

	init();
	animate();

	function init() {
		camera = new THREE.PerspectiveCamera(20, width / height, 1, 800);
		camera.position.z = 400;

		scene = new THREE.Scene();
		scene.background = new THREE.Color(0xdaaa55);

		// const light = new THREE.DirectionalLight(0xf4f4f4);
		// light.position.set(0, 1, 1);
		// scene.add(light);

		// -------------------------------------------------------------------------

		sphere = new THREE.Mesh(
			new THREE.SphereGeometry(150, 960),
			new THREE.MeshBasicMaterial({ color: 0x880808, wireframe: true })
		);

		sphere_2 = new THREE.Mesh(
			new THREE.SphereGeometry(150, 960),
			new THREE.MeshBasicMaterial({ color: 0xf0f0f0, wireframe: true })
		);

		// sphere_3 = new THREE.Mesh(
		// 	new THREE.IcosahedronGeometry(160, 240),
		// 	new THREE.MeshBasicMaterial({ color: 0xb0b0b0, wireframe: true })
		// );

		scene.add(sphere, sphere_2);

		scene.rotation.x += Math.PI / 2;

		// -------------------------------------------------------------------------

		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(width, height);

		onMount(() => {
			container.appendChild(renderer.domElement);
		});

		document.addEventListener('mousemove', onDocumentMouseMove);

		//

		window.addEventListener('resize', onWindowResize);
	}

	function onWindowResize() {
		let width = window.innerWidth;
		let height = window.innerHeight;

		windowHalfX = width / 2;
		windowHalfY = height / 2;

		camera.aspect = width / height;
		camera.updateProjectionMatrix();

		renderer.setSize(width, height);
	}

	function onDocumentMouseMove(event) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}

	function animate() {
		requestAnimationFrame(animate);
		render();
	}


	function render() {
		const elapsedTime = clock.getElapsedTime();
		// const deltaTime = elapsedTime - previousTime;
		previousTime = elapsedTime;

		sphere.rotation.z += Math.tan(previousTime / 4000000000) * factor;
		sphere_2.rotation.x += Math.tan(previousTime / 4000000000) * factor;

		if (sphere.rotation.z > 0.000005) {
			factor = -1;
		} else if (sphere.rotation.z < -0.000005) {
			factor = 1;
		}
		// scene.rotation.y = mouseX / 10000 + scene.rotation.y;

		// scene.rotation.x = mouseX / 10000 + scene.rotation.x;

		camera.lookAt(scene.position);

		renderer.render(scene, camera);
	}
</script>

<div bind:this={container} class:geometry={true} />

<style>
	.geometry {
		position: absolute;
		overflow: hidden;
		opacity: 0.9;
	}
</style>
