import { createPinia } from 'pinia';
import { useCartStore } from './stores/useCartStore.js'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


 
createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
