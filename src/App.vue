<template>
    <div class="container mx-auto px-4">
      <div>
        <div class="flex items-center space-x-2 text-base">
          <h4 class="font-semibold text-slate-900">Contributors</h4>
          <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
        </div>
        <div class="mt-3 flex -space-x-2 overflow-hidden">
          {#each contributors as user}
            <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="{user.avatarUrl}" alt="{user.handle}"/>
          {/each}
        </div>
        <div class="mt-3 text-sm font-medium">
          <a href="#" class="text-blue-500">+ 198 others</a>
        </div>
      </div>
      <button @click="toggleTheme" class="btn-primary">切换主题</button>
      <div class="">This is responsive!</div>
      <div class="p-6 max-w-sm mx-auto bg-black rounded-xl shadow-lg flex items-center space-x-4">
         Settings
      </div>
      <div id="app"></div>

      <!-- <button class="bg-sky-500 px-8 text-left hover:bg-sky-700">
        Save changes
      </button> -->
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <!-- <div class="shrink-0">
          <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
        </div> -->
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>

      </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let scene, camera, renderer, particleSystem, controls;
const toggleTheme = () => {
      // 切换主题模式
      document.documentElement.classList.toggle('light');
      const themeMode = document.documentElement.classList.contains('light') ? 'light' : 'dark';
      localStorage.setItem('themeMode', themeMode);
}
const init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('app').appendChild(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);
  
  const text = 'three';
  const fontLoader = new FontLoader();

  fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new TextGeometry(text, {
      font: font,
      size: 0.5,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: false
    });

    const positions = textGeometry.attributes.position.array;
    const particleCount = positions.length / 3;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const index = i * 3;
      particlePositions[index] = positions[index];
      particlePositions[index + 1] = positions[index + 1];
      particlePositions[index + 2] = positions[index + 2];
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });

    particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
  });
};

onMounted(() => {
  // init();

  // function animate() {
  //   requestAnimationFrame(animate);

  //   // particleSystem.rotation.y += 0.01;
  //   controls.update();
  //   renderer.render(scene, camera);
  // }

  // animate();
});
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
</style>
