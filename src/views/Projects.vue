<template>
  <section class="projects py-5">
    <div class="page-heading" v-reveal>
      <p class="eyebrow">Project explorer</p>
      <h2 class="page-title">Explore my frontend project work</h2>
      <p>
        Filter by category or tech stack, scan the project list, then open a focused
        preview or full case detail.
      </p>
    </div>

    <div class="explorer-shell" v-reveal>
      <aside class="explorer-sidebar">
        <label class="search-box">
          <span>Search</span>
          <input v-model.trim="query" type="search" placeholder="Search project, stack, domain">
        </label>

        <div class="filter-group">
          <span class="filter-label">Category</span>
          <button
            v-for="option in filters"
            :key="option.value"
            type="button"
            class="filter-button"
            :class="{ active: filter === option.value }"
            @click="setFilter(option.value)"
          >
            {{ option.label }}
          </button>
        </div>

        <div class="filter-group">
          <span class="filter-label">Tech stack</span>
          <div class="chip-list">
            <button
              v-for="tech in techFilters"
              :key="tech"
              type="button"
              class="tech-filter-button"
              :class="{ active: selectedTech === tech }"
              @click="setTechFilter(tech)"
            >
              {{ tech }}
            </button>
          </div>
        </div>
      </aside>

      <div class="project-results">
        <div class="results-toolbar">
          <span>{{ filteredProjects.length }} project{{ filteredProjects.length === 1 ? '' : 's' }}</span>
          <button type="button" @click="resetFilters">Reset filters</button>
        </div>

        <div v-if="!filteredProjects.length" class="empty-state">
          <strong>No matching project</strong>
          <p>Try another keyword, category, or stack filter.</p>
        </div>

        <div class="project-list" v-else>
          <div
            v-for="project in filteredProjects"
            :key="project.slug"
            class="project-row"
            :class="{ active: selectedProject && selectedProject.slug === project.slug }"
          >
            <button type="button" class="row-main" @click="selectProject(project)">
              <span class="row-code">{{ project.visualLabel }}</span>
              <span>
                <strong>{{ project.title }}</strong>
                <small>{{ project.organization }} - {{ project.role }}</small>
              </span>
            </button>
            <label class="compare-check">
              <input
                type="checkbox"
                :checked="isCompared(project)"
                :disabled="!isCompared(project) && compareSlugs.length >= 2"
                @change="toggleCompare(project)"
              >
              Compare
            </label>
          </div>
        </div>

        <section v-if="comparedProjects.length" class="compare-panel">
          <div class="compare-header">
            <div>
              <span>Compare mode</span>
              <strong>{{ comparedProjects.length }}/2 selected</strong>
            </div>
            <button type="button" @click="compareSlugs = []">Clear</button>
          </div>
          <div class="compare-table">
            <div class="compare-row compare-head">
              <span>Field</span>
              <span v-for="project in comparedProjects" :key="project.slug">{{ project.visualLabel }}</span>
            </div>
            <div class="compare-row">
              <span>Project</span>
              <strong v-for="project in comparedProjects" :key="project.slug">{{ project.title }}</strong>
            </div>
            <div class="compare-row">
              <span>Domain</span>
              <span v-for="project in comparedProjects" :key="project.slug">{{ project.organization }}</span>
            </div>
            <div class="compare-row">
              <span>Status</span>
              <span v-for="project in comparedProjects" :key="project.slug">{{ project.status }}</span>
            </div>
            <div class="compare-row">
              <span>Stack</span>
              <span v-for="project in comparedProjects" :key="project.slug">{{ project.tags.slice(0, 5).join(', ') }}</span>
            </div>
            <div class="compare-row">
              <span>Impact</span>
              <span v-for="project in comparedProjects" :key="project.slug">{{ project.metrics.slice(0, 4).join(', ') }}</span>
            </div>
          </div>
        </section>

      </div>

      <article class="preview-panel" v-if="selectedProject">
        <div class="dummy-preview" :aria-label="`${selectedProject.title} dummy preview`">
          <span class="dummy-kicker">{{ selectedProject.status }}</span>
          <strong>{{ selectedProject.visualLabel }}</strong>
          <small>{{ selectedProject.visualCaption }}</small>
        </div>

        <div class="preview-content">
          <p class="eyebrow">{{ selectedProject.categoryLabel }}</p>
          <h2>{{ selectedProject.title }}</h2>
          <p>{{ selectedProject.description }}</p>

          <div class="preview-grid">
            <div>
              <span>Problem</span>
              <p>{{ selectedProject.problem }}</p>
            </div>
            <div>
              <span>Contribution</span>
              <p>{{ selectedProject.contribution }}</p>
            </div>
          </div>

          <div class="tag-list">
            <span v-for="metric in selectedProject.metrics" :key="metric">{{ metric }}</span>
          </div>

          <div class="tech-tags">
            <span v-for="tag in selectedProject.tags" :key="tag">{{ tag }}</span>
          </div>

          <div class="actions">
            <router-link :to="`/project/${selectedProject.slug}`">Open full detail</router-link>
            <a v-if="selectedProject.demoLink" :href="selectedProject.demoLink" target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
            <span v-else>Internal project. Public demo is not available.</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { projects } from '@/data/projects'

export default {
  name: 'Projects',
  data() {
    return {
      filter: 'all',
      compareSlugs: [],
      query: '',
      selectedProjectSlug: projects[0]?.slug || null,
      selectedTech: 'All',
      filters: [
        { label: 'All', value: 'all' },
        { label: 'Enterprise', value: 'enterprise' },
        { label: 'Personal', value: 'personal' }
      ],
      projects
    }
  },
  computed: {
    techFilters() {
      const tags = this.projects.flatMap(project => project.tags)
      return ['All', ...Array.from(new Set(tags)).sort()]
    },
    filteredProjects() {
      const keyword = this.query.toLowerCase()
      return this.projects.filter(project => {
        const categoryMatch = this.filter === 'all' || project.category === this.filter
        const techMatch = this.selectedTech === 'All' || project.tags.includes(this.selectedTech)
        const searchable = [
          project.title,
          project.description,
          project.organization,
          project.role,
          ...project.tags,
          ...project.metrics
        ].join(' ').toLowerCase()
        return categoryMatch && techMatch && searchable.includes(keyword)
      })
    },
    comparedProjects() {
      return this.compareSlugs
        .map(slug => this.projects.find(project => project.slug === slug))
        .filter(Boolean)
    },
    selectedProject() {
      return (
        this.filteredProjects.find(project => project.slug === this.selectedProjectSlug) ||
        this.filteredProjects[0] ||
        null
      )
    }
  },
  watch: {
    filteredProjects(projects) {
      if (!projects.some(project => project.slug === this.selectedProjectSlug)) {
        this.selectedProjectSlug = projects[0]?.slug || null
      }
    },
    '$route.query.tech': {
      immediate: true,
      handler(tech) {
        if (tech && this.techFilters.includes(tech)) {
          this.selectedTech = tech
        }
      }
    }
  },
  methods: {
    resetFilters() {
      this.filter = 'all'
      this.query = ''
      this.selectedTech = 'All'
      this.selectedProjectSlug = this.projects[0]?.slug || null
    },
    selectProject(project) {
      this.selectedProjectSlug = project.slug
    },
    isCompared(project) {
      return this.compareSlugs.includes(project.slug)
    },
    setFilter(filter) {
      this.filter = filter
    },
    setTechFilter(tech) {
      this.selectedTech = tech
    },
    toggleCompare(project) {
      if (this.isCompared(project)) {
        this.compareSlugs = this.compareSlugs.filter(slug => slug !== project.slug)
      } else if (this.compareSlugs.length < 2) {
        this.compareSlugs = [...this.compareSlugs, project.slug]
      }
    }
  }
}
</script>

<style scoped>
.projects {
  color: var(--primary-text);
}

.page-heading {
  max-width: 820px;
  margin-bottom: 2rem;
}

.eyebrow {
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.page-title {
  color: var(--primary-text);
  font-size: clamp(1.65rem, 3vw, 2.45rem);
  margin-bottom: 0.75rem;
}

.page-heading p {
  color: var(--muted-text);
  font-size: 0.98rem;
  line-height: 1.6;
}

.explorer-shell {
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(220px, 0.75fr) minmax(260px, 0.9fr) minmax(320px, 1.35fr);
}

.explorer-sidebar,
.project-results,
.preview-panel {
  background: var(--surface-strong);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.explorer-sidebar {
  align-self: start;
  display: grid;
  gap: 1.25rem;
  padding: 1rem;
}

.search-box,
.filter-group {
  display: grid;
  gap: 0.6rem;
}

.search-box span,
.filter-label {
  color: var(--muted-text);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.search-box input {
  background: var(--surface-soft);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--primary-text);
  font: inherit;
  padding: 0.75rem;
}

.search-box input:focus {
  border-color: var(--accent);
  outline: none;
}

.filter-button,
.tech-filter-button,
.results-toolbar button,
.compare-header button,
.actions a {
  border: 1px solid var(--border-color);
  background: var(--surface-soft);
  border-radius: 6px;
  color: var(--accent);
  font-weight: 800;
  padding: 0.55rem 0.75rem;
}

.filter-button.active,
.filter-button:hover,
.tech-filter-button.active,
.tech-filter-button:hover,
.results-toolbar button:hover,
.compare-header button:hover,
.actions a:hover {
  background: var(--accent);
  color: var(--accent-contrast);
}

.chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.tech-filter-button {
  font-size: 0.78rem;
  padding: 0.38rem 0.55rem;
}

.project-results {
  align-self: start;
  padding: 1rem;
}

.results-toolbar {
  align-items: center;
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.results-toolbar span {
  color: var(--muted-text);
  font-size: 0.85rem;
  font-weight: 800;
}

.project-list {
  display: grid;
  gap: 0.6rem;
}

.project-row {
  align-items: center;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--primary-text);
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr auto;
  padding: 0.75rem;
  text-align: left;
}

.row-main {
  align-items: center;
  background: transparent;
  border: 0;
  color: var(--primary-text);
  display: grid;
  gap: 0.75rem;
  grid-template-columns: auto 1fr;
  padding: 0;
  text-align: left;
}

.project-row:hover,
.project-row.active {
  background: var(--surface-soft);
  border-color: var(--accent);
}

.row-code {
  align-items: center;
  background: var(--accent);
  border-radius: 6px;
  color: var(--accent-contrast);
  display: inline-flex;
  font-size: 0.78rem;
  font-weight: 900;
  height: 42px;
  justify-content: center;
  width: 52px;
}

.project-row strong,
.project-row small {
  display: block;
}

.project-row small {
  color: var(--muted-text);
  margin-top: 0.2rem;
}

.compare-check {
  align-items: center;
  color: var(--muted-text);
  display: inline-flex;
  font-size: 0.8rem;
  font-weight: 800;
  gap: 0.35rem;
  white-space: nowrap;
}

.compare-check input {
  accent-color: var(--accent);
}

.compare-panel {
  border-top: 1px solid var(--border-color);
  margin-top: 1rem;
  padding-top: 1rem;
}

.compare-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.compare-header span,
.compare-header strong {
  display: block;
}

.compare-header span {
  color: var(--muted-text);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.compare-header strong {
  color: var(--primary-text);
}

.compare-table {
  display: grid;
  gap: 0.45rem;
  overflow-x: auto;
}

.compare-row {
  display: grid;
  gap: 0.65rem;
  grid-template-columns: 0.75fr repeat(2, minmax(150px, 1fr));
  min-width: 520px;
}

.compare-row > * {
  background: var(--surface-soft);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--secondary-text);
  font-size: 0.82rem;
  line-height: 1.45;
  padding: 0.55rem;
}

.compare-head > * {
  color: var(--primary-text);
  font-weight: 900;
}

.empty-state {
  color: var(--muted-text);
  padding: 1rem;
}

.preview-panel {
  overflow: hidden;
}

.dummy-preview {
  align-items: flex-start;
  background:
    linear-gradient(135deg, var(--surface-soft), transparent),
    repeating-linear-gradient(90deg, transparent 0 22px, var(--border-color) 22px 23px);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  justify-content: center;
  min-height: 220px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.dummy-preview::before {
  background: radial-gradient(circle at 70% 28%, color-mix(in srgb, var(--accent) 24%, transparent), transparent 42%);
  content: '';
  inset: 0;
  opacity: 0;
  position: absolute;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.preview-panel:hover .dummy-preview::before {
  opacity: 1;
  transform: scale(1.04);
}

.dummy-preview strong {
  font-size: clamp(2.4rem, 7vw, 4.6rem);
  line-height: 1;
  position: relative;
}

.dummy-preview small,
.dummy-kicker {
  color: var(--muted-text);
  position: relative;
}

.dummy-kicker {
  border: 1px solid var(--border-color);
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.65rem;
  text-transform: uppercase;
}

.preview-content {
  padding: 1.25rem;
}

.preview-content h2 {
  font-size: 1.25rem;
  margin-bottom: 0.65rem;
}

.preview-content p,
.preview-grid p,
.actions span {
  color: var(--secondary-text);
  font-size: 0.94rem;
  line-height: 1.55;
}

.preview-grid {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 1rem 0;
}

.preview-grid span {
  color: var(--primary-text);
  display: block;
  font-size: 0.82rem;
  font-weight: 800;
  margin-bottom: 0.35rem;
}

.tag-list,
.tech-tags,
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-list {
  margin-bottom: 0.75rem;
}

.tag-list span,
.tech-tags span {
  background: var(--surface-soft);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--secondary-text);
  font-size: 0.82rem;
  padding: 0.35rem 0.55rem;
}

.actions {
  align-items: center;
  margin-top: 1rem;
}

.actions a {
  text-decoration: none;
}

@media (max-width: 1100px) {
  .explorer-shell {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .preview-grid,
  .results-toolbar {
    grid-template-columns: 1fr;
  }

  .results-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .project-row {
    grid-template-columns: 1fr;
  }

  .compare-check {
    justify-content: flex-start;
  }
}
</style>

