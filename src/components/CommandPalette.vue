<template>
  <div v-if="open" class="palette-backdrop" @click="$emit('close')">
    <section class="palette" role="dialog" aria-modal="true" aria-label="Command palette" @click.stop>
      <div class="palette-header">
        <span>Quick actions</span>
        <button type="button" aria-label="Close command palette" @click="$emit('close')">Esc</button>
      </div>

      <div class="palette-search">
        <input
          ref="searchInput"
          v-model.trim="query"
          type="search"
          placeholder="Search command, project, or tech stack"
          @keydown.down.prevent="moveSelection(1)"
          @keydown.up.prevent="moveSelection(-1)"
          @keydown.enter.prevent="runSelectedCommand"
        >
      </div>

      <div class="command-list">
        <button
          v-for="command in filteredCommands"
          :key="command.label"
          type="button"
          class="command-item"
          :class="{ active: selectedIndex === index }"
          @mouseenter="selectedIndex = index"
          @click="runCommand(command)"
        >
          <span class="command-icon">{{ command.icon }}</span>
          <span>
            <strong>{{ command.label }}</strong>
            <small>{{ command.description }}</small>
          </span>
        </button>
        <div v-if="!filteredCommands.length" class="no-results">
          No command found.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { projects } from '@/data/projects'

export default {
  name: 'CommandPalette',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  data() {
    return {
      query: '',
      selectedIndex: 0,
      baseCommands: [
        {
          label: 'Go to Projects',
          description: 'View selected work and case notes',
          icon: 'PR',
          route: '/project'
        },
        {
          label: 'Go to Experience',
          description: 'Read work history and skills',
          icon: 'EX',
          route: '/experience'
        },
        {
          label: 'Download Frontend CV',
          description: 'Open the latest frontend CV in a new tab',
          icon: 'CV',
          href: '/CV_Abi.pdf'
        },
        {
          label: 'Open GitHub',
          description: 'Visit source profile',
          icon: 'GH',
          href: 'https://github.com/abirafdi86'
        },
        {
          label: 'Open LinkedIn',
          description: 'Visit professional profile',
          icon: 'IN',
          href: 'https://www.linkedin.com/in/muhammad-abi-rafdi-3a84231b8'
        },
        {
          label: 'Copy Email',
          description: 'Copy email address to clipboard',
          icon: 'CP',
          copy: 'abiamuba8622@gmail.com'
        },
        {
          label: 'Send Email',
          description: 'Start a collaboration message',
          icon: 'EM',
          href: 'mailto:abiamuba8622@gmail.com'
        }
      ]
    }
  },
  computed: {
    commands() {
      const projectCommands = projects.map(project => ({
        label: `Open ${project.title}`,
        description: `${project.organization} · ${project.tags.slice(0, 4).join(', ')}`,
        icon: project.visualLabel,
        route: `/project/${project.slug}`,
        keywords: [...project.tags, ...project.metrics, project.organization]
      }))

      const stackCommands = Array.from(new Set(projects.flatMap(project => project.tags))).map(tag => ({
        label: `Filter projects by ${tag}`,
        description: 'Open project explorer for this stack',
        icon: 'ST',
        route: `/project?tech=${encodeURIComponent(tag)}`,
        keywords: [tag, 'stack', 'technology']
      }))

      return [...this.baseCommands, ...projectCommands, ...stackCommands]
    },
    filteredCommands() {
      const keyword = this.query.toLowerCase()
      if (!keyword) return this.commands

      return this.commands.filter(command => {
        const searchable = [
          command.label,
          command.description,
          ...(command.keywords || [])
        ].join(' ').toLowerCase()
        return searchable.includes(keyword)
      })
    }
  },
  watch: {
    filteredCommands() {
      this.selectedIndex = 0
    },
    open(isOpen) {
      if (isOpen) {
        this.query = ''
        this.selectedIndex = 0
        this.$nextTick(() => {
          this.$refs.searchInput?.focus()
        })
      }
    }
  },
  methods: {
    moveSelection(direction) {
      if (!this.filteredCommands.length) return
      const lastIndex = this.filteredCommands.length - 1
      const nextIndex = this.selectedIndex + direction
      if (nextIndex < 0) {
        this.selectedIndex = lastIndex
      } else if (nextIndex > lastIndex) {
        this.selectedIndex = 0
      } else {
        this.selectedIndex = nextIndex
      }
    },
    async runCommand(command) {
      if (command.route) {
        this.$router.push(command.route)
      }

      if (command.href) {
        window.open(command.href, command.href.startsWith('mailto:') ? '_self' : '_blank')
      }

      if (command.copy && navigator.clipboard) {
        await navigator.clipboard.writeText(command.copy)
      }

      this.$emit('close')
    },
    runSelectedCommand() {
      const command = this.filteredCommands[this.selectedIndex]
      if (command) {
        this.runCommand(command)
      }
    }
  }
}
</script>

<style scoped>
.palette-backdrop {
  align-items: flex-start;
  background: rgba(3, 10, 18, 0.66);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 12vh 1rem 1rem;
  position: fixed;
  z-index: 3000;
}

.palette {
  background: var(--surface-strong);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.34);
  max-width: 640px;
  overflow: hidden;
  width: 100%;
}

.palette-header {
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  color: var(--muted-text);
  display: flex;
  font-size: 0.85rem;
  font-weight: 800;
  justify-content: space-between;
  letter-spacing: 0.08em;
  padding: 0.9rem 1rem;
  text-transform: uppercase;
}

.palette-header button {
  background: var(--surface-soft);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--primary-text);
  font-size: 0.78rem;
  font-weight: 800;
  padding: 0.35rem 0.55rem;
}

.palette-search {
  border-bottom: 1px solid var(--border-color);
  padding: 0.75rem;
}

.palette-search input {
  background: var(--surface-soft);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--primary-text);
  font: inherit;
  padding: 0.8rem;
  width: 100%;
}

.palette-search input:focus {
  border-color: var(--accent);
  outline: none;
}

.command-list {
  display: grid;
  gap: 0.35rem;
  max-height: 52vh;
  overflow: auto;
  padding: 0.5rem;
}

.command-item {
  align-items: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  color: var(--primary-text);
  display: grid;
  gap: 0.85rem;
  grid-template-columns: auto 1fr;
  padding: 0.85rem;
  text-align: left;
}

.command-item:hover,
.command-item.active {
  background: var(--surface-soft);
  border-color: var(--border-color);
}

.command-icon {
  align-items: center;
  background: var(--accent);
  border-radius: 6px;
  color: var(--accent-contrast);
  display: inline-flex;
  font-size: 0.78rem;
  font-weight: 900;
  height: 40px;
  justify-content: center;
  width: 40px;
}

.command-item strong,
.command-item small {
  display: block;
}

.command-item small {
  color: var(--muted-text);
  margin-top: 0.15rem;
}

.no-results {
  color: var(--muted-text);
  padding: 1rem;
  text-align: center;
}
</style>
