<template>
   <button @click="toggleTheme">切换主题</button>
  <div id="app"></div>
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
  init();

  function animate() {
    requestAnimationFrame(animate);

    // particleSystem.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
});
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
</style>
