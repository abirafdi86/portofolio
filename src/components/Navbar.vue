<template>
  <nav class="navbar navbar-expand-lg navbar-dark portfolio-navbar">
    <div class="container">
      <router-link class="navbar-brand" to="/">Abi Rafdi</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li v-for="item in items" :key="item.to" class="nav-item">
            <router-link class="nav-link" :to="item.to">
              {{ item.label }}
            </router-link>
          </li>
          <li class="nav-item nav-actions">
            <button type="button" class="command-button" @click="$emit('open-command-palette')">
              <span>Ctrl K</span>
            </button>
            <button type="button" class="theme-button" :aria-label="`Switch to ${nextTheme} theme`" @click="$emit('toggle-theme')">
              {{ theme === 'dark' ? 'Light' : 'Dark' }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    theme: {
      type: String,
      default: 'dark'
    }
  },
  emits: ['open-command-palette', 'toggle-theme'],
  data() {
    return {
      items: [
        { label: 'Home', to: '/' },
        { label: 'About Me', to: '/about-me' },
        { label: 'Experience', to: '/experience' },
        { label: 'Projects', to: '/project' },
        { label: 'Gallery', to: '/gallery' }
      ]
    }
  },
  computed: {
    nextTheme() {
      return this.theme === 'dark' ? 'light' : 'dark'
    }
  }
}
</script>

<style scoped>
.portfolio-navbar {
  background-color: color-mix(in srgb, var(--surface-strong) 92%, transparent);
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.16);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-brand {
  color: var(--accent);
  font-weight: 800;
}

.nav-link {
  color: var(--secondary-text);
  font-weight: 600;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--accent);
}

.nav-actions {
  display: flex;
  gap: 0.5rem;
  margin-left: 0.75rem;
}

.command-button,
.theme-button {
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 800;
  padding: 0.45rem 0.7rem;
}

.command-button {
  background: var(--surface-soft);
  color: var(--primary-text);
}

.theme-button {
  background: var(--accent);
  color: var(--accent-contrast);
}

@media (max-width: 991px) {
  .nav-actions {
    margin: 0.75rem 0 0;
  }

  .command-button,
  .theme-button {
    flex: 1;
  }
}
</style>
