<template>
  <section class="project-detail py-5" v-if="project">
    <router-link class="back-link" to="/project">Back to projects</router-link>

    <div class="detail-hero" v-reveal>
      <div>
        <p class="eyebrow">{{ project.categoryLabel }}</p>
        <h2 class="page-title">{{ project.title }}</h2>
        <p class="summary">{{ project.description }}</p>
      </div>
      <div class="dummy-preview" :aria-label="`${project.title} visual placeholder`">
        <span>{{ project.status }}</span>
        <strong>{{ project.visualLabel }}</strong>
        <small>{{ project.organization }}</small>
      </div>
    </div>

    <div class="case-layout">
      <aside class="toc-card">
        <span>Case study</span>
        <a
          v-for="item in tocItems"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ active: activeSection === item.id }"
          @click.prevent="scrollToSection(item.id)"
        >
          {{ item.label }}
        </a>
      </aside>

      <div class="case-content">
        <div id="overview" class="info-grid observed-section" v-reveal>
          <article>
            <span>Role</span>
            <strong>{{ project.role }}</strong>
          </article>
          <article>
            <span>Organization</span>
            <strong>{{ project.organization }}</strong>
          </article>
          <article>
            <span>Status</span>
            <strong>{{ project.status }}</strong>
          </article>
        </div>

        <section id="system-flow" class="system-diagram detail-card observed-section" v-reveal>
          <div class="diagram-heading">
            <div>
              <h3>System flow</h3>
              <p>How the frontend sits inside the product workflow.</p>
            </div>
          </div>
          <div class="flow-line">
            <div v-for="(node, index) in project.systemFlow" :key="node" class="flow-node" :style="{ '--delay': `${index * 0.12}s` }">
              <span>{{ index + 1 }}</span>
              <strong>{{ node }}</strong>
            </div>
          </div>
        </section>

        <div id="problem-solution" class="detail-grid observed-section" v-reveal>
          <article class="detail-card">
            <h3>Problem</h3>
            <p>{{ project.problem }}</p>
          </article>
          <article class="detail-card">
            <h3>Solution</h3>
            <p>{{ project.solution }}</p>
          </article>
          <article class="detail-card">
            <h3>Contribution</h3>
            <p>{{ project.contribution }}</p>
          </article>
          <article class="detail-card">
            <h3>Impact tags</h3>
            <div class="tag-list">
              <span v-for="metric in project.metrics" :key="metric">{{ metric }}</span>
            </div>
          </article>
        </div>

        <section id="features" class="detail-card observed-section" v-reveal>
          <h3>Key features</h3>
          <ul>
            <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
          </ul>
        </section>

        <section id="process" class="detail-card observed-section" v-reveal>
          <h3>Build process</h3>
          <div class="process-timeline">
            <div v-for="(step, index) in project.process" :key="step" class="process-step">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <p>{{ step }}</p>
            </div>
          </div>
        </section>

        <section id="implementation" class="detail-card observed-section" v-reveal>
          <h3>Implementation snapshot</h3>
          <pre><code>{{ project.codeSnippet.join('\n') }}</code></pre>
        </section>

        <section id="impact" class="detail-card observed-section" v-reveal>
          <h3>Result / impact</h3>
          <ul>
            <li v-for="result in project.results" :key="result">{{ result }}</li>
          </ul>
        </section>

        <section id="stack" class="detail-card observed-section" v-reveal>
          <h3>Tech stack</h3>
          <div class="tag-list">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
        </section>

        <section v-if="project.images.length" id="screenshots" class="detail-card observed-section" v-reveal>
          <h3>Screenshots</h3>
          <div class="screenshot-grid">
            <img v-for="image in project.images" :key="image" :src="image" :alt="`${project.title} screenshot`" loading="lazy">
          </div>
        </section>

        <div class="actions">
          <a v-if="project.demoLink" :href="project.demoLink" target="_blank" rel="noopener noreferrer">Open live demo</a>
          <span v-else>Internal project. Public demo is not available.</span>
        </div>
      </div>
    </div>
  </section>

  <section v-else class="project-detail py-5">
    <router-link class="back-link" to="/project">Back to projects</router-link>
    <div class="detail-card">
      <h2>Project not found</h2>
      <p>The project detail you requested is not available.</p>
    </div>
  </section>
</template>

<script>
import { getProjectBySlug } from '@/data/projects'

export default {
  name: 'ProjectDetail',
  data() {
    return {
      activeSection: 'overview',
      sectionObserver: null,
      tocItems: [
        { id: 'overview', label: 'Overview' },
        { id: 'system-flow', label: 'System flow' },
        { id: 'problem-solution', label: 'Problem / Solution' },
        { id: 'features', label: 'Features' },
        { id: 'process', label: 'Build process' },
        { id: 'implementation', label: 'Implementation' },
        { id: 'impact', label: 'Impact' },
        { id: 'stack', label: 'Stack' }
      ]
    }
  },
  computed: {
    project() {
      return getProjectBySlug(this.$route.params.slug)
    }
  },
  mounted() {
    this.setupSectionObserver()
  },
  beforeUnmount() {
    this.sectionObserver?.disconnect()
  },
  methods: {
    scrollToSection(id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    setupSectionObserver() {
      this.sectionObserver = new IntersectionObserver((entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) {
          this.activeSection = visible.target.id
        }
      }, {
        rootMargin: '-18% 0px -60% 0px',
        threshold: [0.12, 0.25, 0.5]
      })

      this.$nextTick(() => {
        document.querySelectorAll('.observed-section').forEach(section => {
          this.sectionObserver.observe(section)
        })
      })
    }
  }
}
</script>

<style scoped>
.project-detail {
  color: var(--primary-text);
}

.back-link,
.actions a {
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--accent);
  display: inline-flex;
  font-weight: 800;
  margin-bottom: 1.25rem;
  padding: 0.65rem 0.9rem;
  text-decoration: none;
}

.back-link:hover,
.actions a:hover {
  background: var(--accent);
  color: var(--accent-contrast);
}

.detail-hero {
  align-items: stretch;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
  margin-bottom: 1.5rem;
}

.eyebrow {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.page-title {
  font-size: clamp(1.7rem, 3vw, 2.5rem);
  line-height: 1.14;
  margin-bottom: 0.85rem;
}

.summary,
.detail-card p,
.detail-card li,
.actions span {
  color: var(--secondary-text);
  font-size: 0.96rem;
  line-height: 1.6;
}

.dummy-preview,
.detail-card,
.info-grid article {
  background: var(--surface-strong);
  border: 1px solid var(--border-color);
  border-radius: 8px;
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
  min-height: 260px;
  padding: 2rem;
  overflow: hidden;
  position: relative;
}

.dummy-preview::before {
  background: radial-gradient(circle at 72% 28%, color-mix(in srgb, var(--accent) 24%, transparent), transparent 44%);
  content: '';
  inset: 0;
  opacity: 0;
  position: absolute;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.dummy-preview:hover::before {
  opacity: 1;
  transform: scale(1.04);
}

.dummy-preview span,
.dummy-preview small,
.info-grid span {
  color: var(--muted-text);
}

.dummy-preview strong {
  font-size: clamp(2.6rem, 7vw, 5rem);
  line-height: 1;
  position: relative;
}

.dummy-preview span,
.dummy-preview small {
  position: relative;
}

.info-grid,
.detail-grid {
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
}

.case-layout {
  align-items: start;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(190px, 0.34fr) minmax(0, 1fr);
}

.toc-card {
  background: var(--surface-strong);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  display: grid;
  gap: 0.35rem;
  padding: 0.9rem;
  position: sticky;
  top: 86px;
}

.toc-card span {
  color: var(--muted-text);
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}

.toc-card a {
  border-left: 2px solid transparent;
  color: var(--muted-text);
  font-size: 0.86rem;
  font-weight: 800;
  padding: 0.45rem 0.55rem;
  text-decoration: none;
}

.toc-card a:hover,
.toc-card a.active {
  background: var(--surface-soft);
  border-left-color: var(--accent);
  color: var(--accent);
}

.observed-section {
  scroll-margin-top: 96px;
}

.info-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.detail-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.info-grid article,
.detail-card {
  padding: 1.25rem;
}

.info-grid span,
.info-grid strong {
  display: block;
}

.info-grid strong {
  margin-top: 0.3rem;
}

.detail-card {
  margin-bottom: 1rem;
}

.detail-card h3 {
  color: var(--accent);
  font-size: 1rem;
  margin-bottom: 0.8rem;
}

.diagram-heading p {
  color: var(--muted-text);
  margin: 0;
}

.flow-line {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  position: relative;
}

.flow-node {
  animation: flowIn 0.55s ease both;
  animation-delay: var(--delay);
  background: var(--surface-soft);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  min-height: 104px;
  padding: 0.85rem;
  position: relative;
}

.flow-node::after {
  background: var(--accent);
  content: '';
  height: 2px;
  opacity: 0.55;
  position: absolute;
  right: -0.75rem;
  top: 50%;
  width: 0.75rem;
}

.flow-node:last-child::after {
  display: none;
}

.flow-node span {
  align-items: center;
  background: var(--accent);
  border-radius: 50%;
  color: var(--accent-contrast);
  display: inline-flex;
  font-size: 0.75rem;
  font-weight: 900;
  height: 28px;
  justify-content: center;
  margin-bottom: 0.65rem;
  width: 28px;
}

.flow-node strong {
  display: block;
  font-size: 0.92rem;
  line-height: 1.35;
}

@keyframes flowIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.detail-card ul {
  margin: 0;
  padding-left: 1.2rem;
}

.process-timeline {
  display: grid;
  gap: 0.8rem;
}

.process-step {
  align-items: center;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: auto 1fr;
}

.process-step span {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 900;
}

.process-step p {
  margin: 0;
}

pre {
  background: #07111c;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: #d1fae5;
  margin: 0;
  overflow: auto;
  padding: 1rem;
}

code {
  font-family: Consolas, Monaco, 'Courier New', monospace;
  font-size: 0.86rem;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-list span {
  background: var(--surface-soft);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--secondary-text);
  font-size: 0.84rem;
  padding: 0.35rem 0.55rem;
}

.screenshot-grid {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.screenshot-grid img {
  background: var(--surface-soft);
  border-radius: 6px;
  width: 100%;
}

.actions {
  margin-top: 1rem;
}

@media (max-width: 850px) {
  .detail-hero,
  .info-grid,
  .detail-grid,
  .flow-line,
  .case-layout {
    grid-template-columns: 1fr;
  }

  .toc-card {
    position: static;
  }

  .flow-node::after {
    bottom: -0.75rem;
    height: 0.75rem;
    left: 24px;
    right: auto;
    top: auto;
    width: 2px;
  }
}
</style>
