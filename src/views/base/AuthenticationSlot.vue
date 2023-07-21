<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three';

const canvasRef = ref(null);

// 是否旋转
let isAutoRotate = true;
// 速度
const autoRotateSpeed = 0.00001;

onMounted(()=> {
  let  scene, camera, renderer;
  // 初始化场景
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#092133');
  // 初始化相机
  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  // camera.rotation.order = 'XZY';
  // camera.position.set(0, 0, 0);
  // 渲染
  renderer = new THREE.WebGLRenderer({ antialias: true});
  canvasRef.value.appendChild(renderer.domElement);
  // 创建图片材质贴图
  const createImages = () => {
      const loadManager = new THREE.LoadingManager();
      const textureLoader = new THREE.TextureLoader(loadManager);

      const materials = [];
      for (let i = 0; i < 3; i++) {
          materials.push(new THREE.MeshBasicMaterial({
              map: textureLoader.load(`./images/${i + 1}.jpg`)
          }));
      }
      const h = 7, vSpace = 2;
      const row = 7, column = 60;
      const radius = 90;
      const totalH = row * h + (row - 1) * vSpace;
      const geo = new THREE.PlaneGeometry(h, h);
      for (let i = 0; i < row; i++) {
          for (let j = 0; j < column; j++) {
              const y = -totalH * 0.5 + i * (h + vSpace) + h * 0.5;
              const radians = Math.PI * 2 / column * j;
              const x = Math.sin(radians) * radius;
              const z = Math.cos(radians) * radius;
              const mat = materials[Math.floor(Math.random() * materials.length)];
              const plane = new THREE.Mesh(geo, mat);
              plane.position.set(x, y, z);
              plane.lookAt(0, y, 0);
              scene.add(plane);
          }
      }
  };

  const resize = () => {
      const aspect = window.innerWidth / window.innerHeight;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
  };
  createImages();
  resize();
  const animate  = (time) => {
      renderer.render(scene, camera);
      if (isAutoRotate) {
          const radians = (time * autoRotateSpeed) % (Math.PI * 2);
          camera.rotation.y = radians;
      }
      requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
}) 
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900 min-h-[100vh]" >
       <div class="absolute top-0 left-0 bg-container opacity-[0.99] dark:opacity-[0.64] w-full h-full" ref="canvasRef"></div>
       <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative">
            <slot></slot>
      </div>
  </section>
</template>

<style lang="less" scoped>
    body {
       overflow: hidden;
    }
  .bg-container{
      -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
      mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
      -webkit-transform: translateZ(0px);
      -moz-transform: translateZ(0px);
      -ms-transform: translateZ(0px);
      transform: translateZ(0px);
  }
</style>
