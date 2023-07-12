<script>
	import { onMount } from 'svelte';
	import { screenType } from '$lib/store/store';

	import * as THREE from 'three';

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
	let previousTime = 0;
	let elapsedTime = 0;

	let bandMesh, bandTexture;

	const maxRotation = 30 * Math.PI / 180;
	let targetRotationY = 0;
	let targetRotationZ = 0;

	init();
	animate();

	function init() {
		camera = new THREE.PerspectiveCamera(20, width / height, 1, 800);
		camera.position.z = 400;

		scene = new THREE.Scene();
		scene.background = new THREE.Color(0xdaaa55);

		// Create Obi Square
		// const textureLoader = new THREE.TextureLoader();
		// const texture = textureLoader.load('obi.jpg'); // The path to your image

		// const material2 = new THREE.MeshBasicMaterial({ color: 0x232323 });
		// const geometry2 = new THREE.PlaneGeometry(height / 20, height / 20);
		// const mesh2 = new THREE.Mesh(geometry2, material2);
		// mesh2.position.set(0, 150, 0);
		// mesh2.rotation.x = - Math.PI / 2;
		// scene.add(mesh2);

		// const material = new THREE.MeshBasicMaterial({ map: texture });
		// const geometry = new THREE.PlaneGeometry(height / 21, height / 21);
		// const mesh = new THREE.Mesh(geometry, material);
		// mesh.position.set(0, 150, 0);
		// mesh.rotation.x = - Math.PI / 2;
		// // scene.add(mesh);

		// // Create Text Ring
		// const radius = height / 20;
		// const cylinderGeometry = new THREE.CylinderGeometry(radius, radius, 11, 64, 1, true); 
		// // const bandMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });

		// // Load texture
		// const bandTextureLoader = new THREE.TextureLoader();
		// bandTexture = bandTextureLoader.load('logo.svg'); // The path to your image
		// bandTexture.wrapS = THREE.RepeatWrapping; // This allows the texture to repeat
		// bandTexture.repeat.set(5, 1); // Repeat twice horizontally and once vertically
		// const bandMaterial = new THREE.MeshBasicMaterial({ map: bandTexture, side: THREE.DoubleSide, transparent: true });



		bandMesh = new THREE.Mesh(cylinderGeometry, bandMaterial);

		bandMesh.rotation.x = - Math.PI / 2;
		bandMesh.rotation.z = Math.PI / 4;
		bandMesh.position.set(0, 150, 0); // The same position as the image

		// scene.add(bandMesh);



		// const light = new THREE.DirectionalLight(0xf4f4f4);
		// light.position.set(0, 1, 1);
		// scene.add(light);

		// -------------------------------------------------------------------------

		let numSegments = $screenType == 3 ? 960 : 480; 

		sphere = new THREE.Mesh(
			new THREE.SphereGeometry(150, numSegments),
			new THREE.MeshBasicMaterial({ color: 0x880808, wireframe: true })
		);

		sphere_2 = new THREE.Mesh(
			new THREE.SphereGeometry(150, numSegments),
			new THREE.MeshBasicMaterial({ color: 0xf0f0f0, wireframe: true })
		);

		// sphere_3 = new THREE.Mesh(
		// 	new THREE.IcosahedronGeometry(160, 240),
		// 	new THREE.MeshBasicMaterial({ color: 0xb0b0b0, wireframe: true })
		// );

		scene.add(sphere, sphere_2);

		sphere.rotation.z = 0.000001
		sphere_2.rotation.x = 0.000001

		scene.rotation.x += Math.PI / 2;

		// -------------------------------------------------------------------------

		renderer = new THREE.WebGLRenderer({ antialias: false });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(width, height);

		onMount(() => {
			container.appendChild(renderer.domElement);
		});

		window.addEventListener('mousemove', onDocumentMouseMove);
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
		mouseX = (event.clientX / width) * 2 - 1;
		mouseY = (event.clientY / height) * 2 - 1;

		targetRotationY = maxRotation * mouseX;
		targetRotationZ = maxRotation/180 + Math.PI/2 * mouseY;
		// mouseY = event.clientY;
	}

	function animate() {
		requestAnimationFrame(animate);
		render();
	}

	// gsap.to(sphere.rotation, { duration: 1000, z: 0.1, yoyo: true, repeat: -1 })
	// gsap.to(sphere_2.rotation, { duration: 1000, x: 0.1, yoyo: true, repeat: -1 })

	function render() {
		const elapsedTime = clock.getElapsedTime();
		const deltaTime = elapsedTime - previousTime;
		previousTime = elapsedTime;

		sphere.rotation.z += Math.tan(deltaTime / 20000000) * factor;
		sphere_2.rotation.x += Math.tan(deltaTime  / 20000000) * factor;

		if (sphere.rotation.z > 0.000005) {
			sphere.rotation.z = 0.000005
			sphere_2.rotation.x = 0.000005
			factor = -1;
		} else if (sphere.rotation.z < -0.000005) {
			sphere.rotation.z = -0.000005
			sphere_2.rotation.x = -0.000005
			factor = 1;
		}

		let direction = bandMesh.rotation.y < targetRotationY ? 1 : -1;

		bandMesh.rotation.y = THREE.MathUtils.lerp(bandMesh.rotation.y, targetRotationY, deltaTime/2);
		bandMesh.rotation.z = THREE.MathUtils.lerp(bandMesh.rotation.z, targetRotationZ, deltaTime/2);
		bandTexture.offset.x -= 0.05 * direction * deltaTime;

		// camera.lookAt(scene.position);
		renderer.render(scene, camera);
	}
</script>

<div bind:this={container} class:geometry={true} />

<style>
	.geometry {
		position: absolute;
		overflow: hidden;
		opacity: .95;
	}
</style>
