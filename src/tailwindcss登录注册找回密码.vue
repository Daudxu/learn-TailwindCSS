<script setup>
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import gsap from 'gsap';

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('app').appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  const fontLoader = new THREE.FontLoader();
  fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new TextGeometry('Hello', {
      font: font,
      size: 1,
      height: 0.5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5
    });

    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    scene.add(textMesh);

    const particles = new THREE.Geometry();
    const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });

    textMesh.geometry.vertices.forEach((vertex) => {
      const particle = vertex.clone();
      particles.vertices.push(particle);
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    function animate() {
      requestAnimationFrame(animate);

      particleSystem.geometry.verticesNeedUpdate = true;

      renderer.render(scene, camera);
    }

    gsap.to(particleSystem.rotation, { y: Math.PI * 2, duration: 5, repeat: -1 });
    animate();
  });
});
</script>

<template>
    <div id="app"></div>
    <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="max-w-md w-full mx-auto">

      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-3xl font-bold text-center mb-6">Login</h1>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
          <p class="text-red-500 text-xs mt-1">Username is required.</p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
          <p class="text-red-500 text-xs mt-1 ">Password is required.</p>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 sm:mb-0" type="button">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">Forgot Password?</a>
        </div>
        <div class="text-gray-500 text-xs mt-1 text-center mx-2 p-7">Don't have an account? <a class="text-blue-500 hover:text-blue-800" href="#register">Register here</a></div>

      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy; 2023 Acme Corp. All rights reserved.
      </p>
    </div>
    <div class="max-w-md w-full mx-auto mt-4">
 
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-3xl font-bold text-center mb-6" id="register">Register</h1>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
          <p class="text-red-500 text-xs mt-1">Username is required.</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
          <p class="text-red-500 text-xs mt-1">Email is required.</p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
          <p class="text-red-500 text-xs mt-1">Password is required.</p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            <input class="mr-1" type="checkbox">
            I agree to the <a class="text-blue-500 hover:text-blue-800" href="#">Terms of Service</a> and <a class="text-blue-500 hover:text-blue-800" href="#">Privacy Policy</a>.
          </label>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Register
          </button>
         
        </div>
        <div class="text-gray-500 text-xs p-7 text-center">Already have an account? <a class="text-blue-500 hover:text-blue-800" href="#">Login here</a></div>
      </form>
    </div>
  </div>
</template>

<style >
body{
  background-color: #000000;
}
:root{
  background-color: #000000;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
