<template>
  <div id="app" :data-theme="theme">
    <!-- Tambahkan komponen background di sini -->
    <tech-background />

    <Navbar :theme="theme" @toggle-theme="toggleTheme" @open-command-palette="openCommandPalette" />

    <div class="container mt-4">
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
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

    <!-- Scroll to Top Button -->
    <div class="scroll-to-top-button" :class="{ 'show': showScrollTop }" @click="scrollToTop">
      <div class="scroll-to-top-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="scroll-to-top-svg">
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </div>
    </div>

    <Footer />
    <CommandPalette :open="commandPaletteOpen" @close="closeCommandPalette" />
  </div>
</template>

<script>
import CommandPalette from './components/CommandPalette.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import TechBackground from './components/TechBackground.vue'

export default {
  name: 'App',
  components: {
    CommandPalette,
    Footer,
    Navbar,
    TechBackground
  },
  data() {
    return {
      commandPaletteOpen: false,
      theme: 'dark',
      showScrollTop: false
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.theme = savedTheme
    }
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    closeCommandPalette() {
      this.commandPaletteOpen = false
    },
    handleScroll() {
      // Show button when user scrolls down 200px from the top
      this.showScrollTop = window.scrollY > 200
    },
    handleKeydown(event) {
      const isCommandShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k'
      if (isCommandShortcut) {
        event.preventDefault()
        this.openCommandPalette()
      }

      if (event.key === 'Escape') {
        this.closeCommandPalette()
      }
    },
    openCommandPalette() {
      this.commandPaletteOpen = true
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('portfolio-theme', this.theme)
    }
  }
}
</script>

<style>
:root {
  --accent: #64ffda;
  --accent-contrast: #10202b;
  --app-bg: #131b22;
  --body-bg: #0a192f;
  --border-color: rgba(100, 255, 218, 0.16);
  --muted-text: #a8b2d1;
  --primary-text: #e6f1ff;
  --secondary-text: #cbd5f5;
  --surface-soft: rgba(100, 255, 218, 0.08);
  --surface-strong: rgba(26, 36, 47, 0.96);
}

body,
html {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow-x: hidden;
  background-color: var(--body-bg);
  color: var(--primary-text);
}

#app {
  background-color: var(--app-bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  transition: background-color 0.25s ease, color 0.25s ease;
}

#app[data-theme='light'] {
  --accent: #006b5f;
  --accent-contrast: #ffffff;
  --app-bg: #f5f7fb;
  --body-bg: #e9eef6;
  --border-color: rgba(15, 23, 42, 0.13);
  --muted-text: #5b6474;
  --primary-text: #172033;
  --secondary-text: #334155;
  --surface-soft: rgba(15, 23, 42, 0.05);
  --surface-strong: rgba(255, 255, 255, 0.94);
}

#app[data-theme='light'] .tech-background {
  opacity: 0.08;
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

/* Scroll to Top Button Styles */
.scroll-to-top-button {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  background-color: rgba(13, 17, 23, 0.6);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  border: 1px solid rgba(100, 255, 218, 0.3);
}

.scroll-to-top-button.show {
  opacity: 0.8;
  visibility: visible;
  transform: translateY(0);
}

.scroll-to-top-button:hover {
  opacity: 1;
  background-color: rgba(13, 17, 23, 0.8);
  transform: scale(1.1);
  border-color: rgba(100, 255, 218, 0.6);
}

.scroll-to-top-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-to-top-svg {
  fill: #ffffff;
  width: 100%;
  height: 100%;
}

.container {
  position: relative;
  z-index: 5;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.reveal-item {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.reveal-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

a,
button {
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

a:hover,
button:hover {
  box-shadow: 0 8px 22px color-mix(in srgb, var(--accent) 16%, transparent);
  transform: translateY(-1px);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }

  .reveal-item {
    opacity: 1;
    transform: none;
  }
}
</style>
