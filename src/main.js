import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter,faFacebook  } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import './style.css'
import './index.css'; 
// 读取之前保存的主题模式
const savedThemeMode = localStorage.getItem('themeMode');
// 应用主题样式
document.documentElement.classList.toggle('light', savedThemeMode === 'light');
library.add(faUserSecret, faTwitter)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
