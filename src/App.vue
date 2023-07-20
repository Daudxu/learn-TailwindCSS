<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Layout from '@/components/Layout.vue'; // 公共布局组件

 
// 路由中添加key解决切换路由时页面不展示内容，刷新后才展示内容问题
const route = useRoute();
// const key = computed(() => {
//   return route.path + Math.random();
// });

// 处理布局（有些页面需要加头尾。有些不需要）
const shouldApplyLayout = computed(() => {
   return route.meta.isCommonLayout === true;
})
</script>

<template>
    <!-- 判断是否应用公共布局 -->
    <layout v-if="shouldApplyLayout">
      <router-view ></router-view>
    </layout>
    <!-- 不应用公共布局的路由 -->
    <router-view v-else></router-view>

  <notifications />
</template>