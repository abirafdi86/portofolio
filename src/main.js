import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import custom CSS
import './assets/styles/main.css'

const app = createApp(App)

app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal-item')
    if (binding.value) {
      el.style.transitionDelay = binding.value
    }

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('is-visible')
        observer.unobserve(el)
      }
    }, { threshold: 0.16 })

    observer.observe(el)
  }
})

app
  .use(router)
  .mount('#app')
