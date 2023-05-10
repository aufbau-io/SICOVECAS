<script>
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';

	import { screenType, darkMode } from '$lib/store/store';

	let container;
	let id;
	onDestroy(() => cancelAnimationFrame(id));

	let camera, scene, renderer;
	let plane;
	let pointer,
		raycaster,
		isShiftDown = false;

	let rollOverMesh, rollOverMaterial;
	let cubeGeo, cubeMaterial;

	let width = screen.width;
	let height = screen.height;

	// let d;
	// if ($screenType == 2) {
	// 	d = 2;
	// } else {
	// 	d = 4;
	// }

	let d = 3.5;

	let colors = [0xffe38c, 0x9add8c, 0x94c8f7, 0xffaea9];
	// const colors = [0x232323];
	
	let colorIndex = Math.floor(Math.random() * colors.length);
	let randomiseColorIndex = () => {
		colorIndex = Math.floor(Math.random() * colors.length);
	};

	let materials = [
		new THREE.MeshLambertMaterial({ color: colors[0] }),
		new THREE.MeshLambertMaterial({ color: colors[1] }),
		new THREE.MeshLambertMaterial({ color: colors[2] }),
		new THREE.MeshLambertMaterial({ color: colors[3] })
	];

	const objects = [];

	init();
	render();

	function init() {
		camera = new THREE.OrthographicCamera(width / -d, width / d, height / d, height / -d, 10, 3200);
		camera.position.set(1000, 1000, 1000);
		camera.lookAt(0, 0, 0);
		camera.zoom = 5;

		scene = new THREE.Scene();
		let orange = new THREE.Color(0xdaaa55);
		let black = new THREE.Color(0x232323);

		// $: scene.background = $darkMode ? orange : black;

		// roll-over helpers

		const rollOverGeo = new THREE.BoxGeometry(50, 50, 50);
		rollOverMaterial = new THREE.MeshBasicMaterial({
			color: colors[colorIndex],
			opacity: 0.2,
			transparent: true
		});
		rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial);
		rollOverMesh.position.y = 1000; // really high to hide it initally and on mobile
		scene.add(rollOverMesh);

		// cubes

		cubeGeo = new THREE.BoxGeometry(50, 50, 50);
		cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xe0e0e0 });

		// grid

		const gridHelper = new THREE.GridHelper(2000, 40, 0x404040, 0x404040);
		scene.add(gridHelper);

		//

		raycaster = new THREE.Raycaster();
		pointer = new THREE.Vector2();

		const geometry = new THREE.PlaneGeometry(1000, 1000);
		geometry.rotateX(-Math.PI / 2);

		plane = new THREE.Mesh(
			geometry,
			new THREE.MeshBasicMaterial({ color: 0xe0e0e0, visible: false })
		);
		scene.add(plane);

		objects.push(plane);

		// lights

		const ambientLight = new THREE.AmbientLight(0x606060);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff);
		directionalLight.position.set(1, 0.75, 0.5).normalize();
		scene.add(directionalLight);

		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setClearColor(0x232323, 0);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(width, height);

		onMount(() => {
			container.appendChild(renderer.domElement);

			document.addEventListener('pointermove', onPointerMove);
			document.addEventListener('pointerdown', onPointerDown);
			document.addEventListener('keydown', onDocumentKeyDown);
			document.addEventListener('keyup', onDocumentKeyUp);
		});

		//
	}

	function onPointerMove(event) {
		pointer.set(((event.clientX - 0) / width) * 2 - 1, -(event.clientY / height) * 2 + 1);

		raycaster.setFromCamera(pointer, camera);

		const intersects = raycaster.intersectObjects(objects, false);

		if (intersects.length > 0) {
			const intersect = intersects[0];

			rollOverMesh.position.copy(intersect.point).add(intersect.face.normal);
			rollOverMesh.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);

			render();
			id = requestAnimationFrame(render);
		}
	}

	function onPointerDown(event) {
		pointer.set(((event.clientX - 0) / width) * 2 - 1, -(event.clientY / height) * 2 + 1);

		raycaster.setFromCamera(pointer, camera);

		const intersects = raycaster.intersectObjects(objects, false);

		if (intersects.length > 0) {
			const intersect = intersects[0];

			// delete cube

			if (isShiftDown) {
				if (intersect.object !== plane) {
					scene.remove(intersect.object);

					objects.splice(objects.indexOf(intersect.object), 1);
				}

				// create cube
			} else {
				const voxel = new THREE.Mesh(cubeGeo, cubeMaterial);
				voxel.material = materials[colorIndex];
				randomiseColorIndex();
				voxel.position.copy(intersect.point).add(intersect.face.normal);
				voxel.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
				scene.add(voxel);

				objects.push(voxel);
			}

			render();
		}
	}

	function onDocumentKeyDown(event) {
		switch (event.keyCode) {
			case 16:
				isShiftDown = true;
				break;
		}
	}

	function onDocumentKeyUp(event) {
		switch (event.keyCode) {
			case 16:
				isShiftDown = false;
				break;
		}
	}

	function render() {
		renderer.render(scene, camera);
	}
</script>

<div bind:this={container} class:geometry={true} />

<style>
	.geometry {
		position: fixed;
		left: 0;
		top: 0;
	}
</style>
