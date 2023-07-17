import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import './index.css'; 
// 读取之前保存的主题模式
const savedThemeMode = localStorage.getItem('themeMode');
// 应用主题样式
document.documentElement.classList.toggle('light', savedThemeMode === 'light');

createApp(App).mount('#app')
