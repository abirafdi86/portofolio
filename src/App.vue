<template>
  <div id="app">
    <!-- Tambahkan komponen background di sini -->
    <tech-background />

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">Portfolio</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about-me">About Me</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/project">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/gallery">Gallery</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <router-view />
    </div>

    <!-- WhatsApp Button -->
    <div class="whatsapp-button">
      <a href="https://wa.me/6282258595564" target="_blank" class="whatsapp-link">
        <div class="whatsapp-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="whatsapp-svg">
            <path
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </div>
        <span class="whatsapp-text">WhatsApp</span>
      </a>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import TechBackground from './components/TechBackground.vue'

export default {
  name: 'App',
  components: {
    Footer,
    TechBackground
  }
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';

body,
html {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow-x: hidden;
  background-color: #0a192f;
  color: #e6f1ff;
}

#app {
  background-color: #131b22;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

footer {
  margin-top: auto;
}

/* WhatsApp Button Styles */
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.whatsapp-link {
  display: flex;
  align-items: center;
  background-color: #25D366;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.whatsapp-link:hover {
  background-color: #128C7E;
  transform: scale(1.05);
}

.whatsapp-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.whatsapp-svg {
  fill: white;
  width: 100%;
  height: 100%;
}

.whatsapp-text {
  font-weight: bold;
  font-size: 14px;
}

/* Navbar styling tweaks */
.navbar {
  background-color: rgba(13, 17, 23, 0.9) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
}

.navbar-brand {
  color: #64ffda !important;
  font-weight: bold;
}

.nav-link {
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #64ffda !important;
}

.container {
  position: relative;
  z-index: 5;
}
</style>