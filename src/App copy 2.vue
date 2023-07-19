<template>


    <div class="bg-gray-100 flex justify-center items-center min-h-screen">
      <div class="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Sign In</h2>
    <form class="mb-4">
      <div class="mb-4">
        <input type="text" id="username" name="username" placeholder="Username" class="w-full border px-3 py-2 rounded-lg focus:ring-blue-500 focus:border-blue-500">
        <!-- 错误提示 -->
        <div class="text-red-500 text-sm" id="username-error"></div>
      </div>
      <div class="mb-4">
        <input type="password" id="password" name="password" placeholder="Password" class="w-full border px-3 py-2 rounded-lg focus:ring-blue-500 focus:border-blue-500">
        <!-- 错误提示 -->
        <div class="text-red-500 text-sm" id="password-error"></div>
      </div>
      <!-- 忘记密码链接 -->
      <div class="text-right mt-2">
        <a href="#" class="text-blue-500">Forgot Password?</a>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">Login</button>
    </form>
    <!-- 第三方登录按钮 -->
    <div class="flex flex-wrap justify-center space-x-4 mt-4">
      <button class="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600">Google Login</button>
      <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 mt-2 sm:mt-0">Facebook Login</button>
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
