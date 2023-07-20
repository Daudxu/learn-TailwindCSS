import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCircleCheck, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'


import './style.css'
import './index.css'; 

library.add(faUserSecret, faCircleCheck, faTwitter, faFacebook, faGoogle, faBars)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
