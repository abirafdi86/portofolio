import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import custom CSS
import './assets/styles/main.css'

createApp(App)
  .use(router)
  .mount('#app')