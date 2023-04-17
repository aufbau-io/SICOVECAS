<script>
import { onMount, onDestroy } from 'svelte';
import { screenType, darkMode } from '$lib/store/store';
import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import * as CANNON from 'cannon-es';

let container, id;
	onDestroy(() => cancelAnimationFrame(id));

let sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const renderer = new THREE.WebGLRenderer({antialias: false});
renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor(0x171717, 0);

const scene = new THREE.Scene();

//ADD FOG
scene.fog = new THREE.FogExp2(0x232323, .1, 10);

onMount(() => {
		container.appendChild(renderer.domElement);
	});

const camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    0.5,
    15
);

if ($screenType == 1) {
  camera.position.set(0, 0, 4);
} else {
  camera.position.set(0, 0, 2.5);
}

camera.lookAt(0, 0, 0);

// fog
// {
//   const color = 0x171717;
//   const density = 0.1;
//   scene.fog = new THREE.FogExp2(color, density);
// }

const world = new CANNON.World({
    gravity: new CANNON.Vec3(0, -9.8, 0)
});


const clothGeometry = new THREE.PlaneGeometry(1, 1, 1, 1);
const clothMat = new THREE.MeshBasicMaterial({
  // side: THREE.DoubleSide,
  // wireframe: true,
  map: new THREE.TextureLoader().load('./main.jpg')
});
const clothMesh = new THREE.Mesh(clothGeometry, clothMat);



// const outlineGeometry = new THREE.BoxGeometry(1, 1, 1);
// const outlineMat = new THREE.MeshBasicMaterial({
//   color: 0xf0f0f0,
//   wireframe: true

// });
// const outlineMesh = new THREE.Mesh(outlineGeometry, outlineMat);

// outlineMesh.position.z = 1

scene.add(clothMesh);



/**
 * Particles
 */
// Geometry
const cursor = {};
cursor.x = 0;
cursor.y = 0;

const particlesCount = 400;
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount; i++) {
  positions[i * 3 + 0] = (Math.random() - 0.5) * 4;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
}

const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);

// Material
const particlesMaterialDark = new THREE.PointsMaterial({
  color: 0x232323,
  size: 0.02,
});

const particlesMaterialLight = new THREE.PointsMaterial({
  color: 0xeecccc,
  size: 0.02,
});

// $: particlesMaterial.color = $darkMode ? pink : black;

// Points
const stars = new THREE.Points(particlesGeometry, null);
scene.add(stars);

$: stars.material = $darkMode ? particlesMaterialLight : particlesMaterialDark;


// Sphere

const sphereSize = .3;
const movementRadius = .5;

const sphereGeometry = new THREE.IcosahedronGeometry(sphereSize);
const sphereMat = new THREE.MeshPhysicalMaterial({  
  roughness: 0,  
  transmission: 1,  
  thickness: 0.5, // Add refraction!
});

const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMat);
sphereMesh.position.z = 1
scene.add(sphereMesh);

const sphereShape = new CANNON.Sphere(sphereSize * 1);
let sphereBody = new CANNON.Body({
    shape: sphereShape
});
world.addBody(sphereBody);


const timeStep = 1 / 60;
const clock = new THREE.Clock();
let previousTime = 0;

function animate(time) {

  const elapsedTime = clock.getElapsedTime();

  camera.position.x += (cursor.x - camera.position.x * 1) * .015;
	camera.position.y += (-cursor.y - camera.position.y * 1) * .025;

	camera.lookAt(scene.position);

    // Update cloth
    // updateParticules();
    // world.step(timeStep);

    sphereMesh.rotation.x += 0.004;
    sphereMesh.rotation.y += 0.004;
    sphereMesh.rotation.z += 0.004;

    sphereBody.position.set(
        movementRadius * -Math.sin(elapsedTime / 2.5),
        0,
        movementRadius * -Math.cos(elapsedTime / 2.5) + 1
    );
    sphereMesh.position.copy(sphereBody.position);
    renderer.render(scene, camera);

    // orbit.update();
    id = window.requestAnimationFrame(animate);
}

id = window.requestAnimationFrame(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
});

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = event.clientY / sizes.height - 0.5;
});

</script>

<div bind:this={container} class:geometry={true} />

<style>
	.geometry {
		position: fixed;
		top: 0;
		left: 0;
		overflow: hidden;
	}
</style>
