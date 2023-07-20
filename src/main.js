import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCircleCheck, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import router from "./router/index";

import './style.css'
import './index.css'; 

library.add(faUserSecret, faCircleCheck, faTwitter, faFacebook, faGoogle, faBars)
const app = createApp(App);
app.use(router) ;
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
