<template>
  <main class="home py-5">
    <section class="hero" v-reveal>
      <div class="hero-copy">
        <p class="eyebrow">Frontend Developer</p>
        <h2 class="main-name">Muhammad Abi Rafdi</h2>
        <p class="hero-lead">
          I build responsive Vue.js applications, dashboard interfaces, and
          API-connected workflows for teams that need reliable web products.
        </p>

        <div class="hero-actions">
          <router-link to="/project" class="primary-action"
            >View projects</router-link
          >
          <a
            href="/CV_Abi.pdf"
            class="secondary-action"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>

      <div class="hero-panel" aria-label="Professional highlights">
        <div>
          <span class="metric">3+</span>
          <p>Years building frontend applications</p>
        </div>
        <div>
          <span class="metric">Vue.js</span>
          <p>Main framework for production work</p>
        </div>
        <div>
          <span class="metric">BI</span>
          <p>Enterprise dashboard and workflow experience</p>
        </div>
      </div>
    </section>

    <section class="focus-grid" aria-label="Core capabilities">
      <article v-for="(item, index) in focusAreas" :key="item.title" class="focus-card" v-reveal="`${index * 0.08}s`">
        <span class="focus-index">{{ item.index }}</span>
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </article>
    </section>

    <UiPlayground />

    <section class="architecture-section" v-reveal>
      <div class="section-heading">
        <p class="eyebrow">How I build</p>
        <h2>Frontend architecture habits I bring into projects</h2>
      </div>
      <div class="architecture-grid">
        <article v-for="(item, index) in architectureItems" :key="item.title" class="architecture-card" v-reveal="`${index * 0.06}s`">
          <span>{{ item.index }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section class="tech-section" v-reveal>
      <div class="section-heading">
        <p class="eyebrow">Tech stack</p>
        <h2>Tools I use to build frontend products</h2>
      </div>
      <div class="tech-grid">
        <article v-for="(tech, index) in techStack" :key="tech.name" class="tech-card" v-reveal="`${index * 0.05}s`">
          <span>{{ tech.short }}</span>
          <div>
            <h3>{{ tech.name }}</h3>
            <p>{{ tech.description }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="contact-strip" v-reveal>
      <div>
        <h2>Available for frontend collaboration</h2>
        <p>
          I am interested in Vue.js projects, dashboard products, internal
          tools, and API-driven web applications.
        </p>
      </div>
      <a href="mailto:abiamuba8622@gmail.com">Contact me</a>
    </section>

    <section class="contact-form-section" v-reveal>
      <div class="section-heading">
        <p class="eyebrow">Contact</p>
        <h2>Start a project conversation</h2>
      </div>
      <form class="contact-form" @submit.prevent="submitContact">
        <label>
          Name
          <input v-model.trim="contact.name" type="text" name="name" required placeholder="Your name">
        </label>
        <label>
          Email
          <input v-model.trim="contact.email" type="email" name="email" required placeholder="your@email.com">
        </label>
        <label class="full">
          Message
          <textarea v-model.trim="contact.message" name="message" rows="5" required placeholder="Tell me about your frontend needs"></textarea>
        </label>
        <button type="submit">Send via email</button>
      </form>
    </section>
  </main>
</template>

<script>
import UiPlayground from '@/components/UiPlayground.vue'

export default {
  name: "Home",
  components: {
    UiPlayground,
  },
  data() {
    return {
      focusAreas: [
        {
          index: "01",
          title: "Vue.js interfaces",
          description:
            "Building reusable components, routing flows, state-driven screens, and responsive layouts.",
        },
        {
          index: "02",
          title: "Dashboard products",
          description:
            "Turning complex business information into clear pages, tables, forms, and decision-support views.",
        },
        {
          index: "03",
          title: "API integration",
          description:
            "Connecting frontends with REST APIs, handling CRUD flows, and keeping interactions predictable.",
        },
      ],
      techStack: [
        {
          short: "VUE",
          name: "Vue.js 2 & 3",
          description: "Vue ecosystem, component-driven UI, routing flows, and maintainable frontend modules.",
        },
        {
          short: "TS",
          name: "JavaScript & TypeScript",
          description: "Application logic, typed frontend modules, API flows, and browser-side interactions.",
        },
        {
          short: "API",
          name: "REST API & Swagger",
          description: "CRUD integration, request handling, API documentation, and data-driven interfaces.",
        },
        {
          short: "UI",
          name: "Vuetify, Bootstrap & Tailwind",
          description: "Responsive layouts, component libraries, utility styling, and enterprise UI screens.",
        },
        {
          short: "NODE",
          name: "Node.js",
          description: "Frontend tooling, package workflow, and JavaScript ecosystem support.",
        },
        {
          short: "TOOLS",
          name: "Git, Postman, Jira & Figma",
          description: "API testing, version control, issue tracking, design collaboration, and delivery workflow.",
        },
        {
          short: "AGILE",
          name: "Agile / Scrum",
          description: "Sprint planning, reviews, retrospectives, code review, and cross-browser testing.",
        },
      ],
      contact: {
        name: "",
        email: "",
        message: "",
      },
      architectureItems: [
        {
          index: "01",
          title: "Component structure",
          description: "Split UI into reusable components with clear props, predictable events, and consistent naming.",
        },
        {
          index: "02",
          title: "API integration",
          description: "Map REST responses into UI-ready data, handle loading/error states, and keep flows easy to debug.",
        },
        {
          index: "03",
          title: "State management",
          description: "Keep shared state intentional with Vuex patterns, local state boundaries, and route-aware behavior.",
        },
        {
          index: "04",
          title: "Responsive delivery",
          description: "Build layouts that survive real content, cross-browser checks, review cycles, and maintenance.",
        },
      ],
    };
  },
  methods: {
    submitContact() {
      const subject = encodeURIComponent(`Portfolio inquiry from ${this.contact.name}`);
      const body = encodeURIComponent(
        `Name: ${this.contact.name}\nEmail: ${this.contact.email}\n\n${this.contact.message}`
      );
      window.location.href = `mailto:abiamuba8622@gmail.com?subject=${subject}&body=${body}`;
    },
  },
};
</script>

<style scoped>
.home {
  color: var(--primary-text);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
  gap: 2rem;
  min-height: 46vh;
  align-items: center;
}

.eyebrow {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.main-name {
  color: var(--primary-text);
  font-size: clamp(2rem, 5vw, 3.6rem);
  line-height: 1.08;
  margin-bottom: 1rem;
}

.hero-lead {
  color: var(--secondary-text);
  font-size: clamp(0.98rem, 1.4vw, 1.12rem);
  line-height: 1.65;
  max-width: 680px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2rem;
}

.primary-action,
.secondary-action,
.contact-strip a {
  border-radius: 6px;
  font-weight: 700;
  padding: 0.85rem 1.15rem;
  text-decoration: none;
}

.primary-action,
.contact-strip a {
  background: var(--accent);
  color: var(--accent-contrast);
}

.secondary-action {
  border: 1px solid var(--border-color);
  color: var(--accent);
}

.primary-action:hover,
.contact-strip a:hover {
  background: #ffffff;
  color: #10202b;
}

.secondary-action:hover {
  background: rgba(100, 255, 218, 0.12);
}

.hero-panel,
.focus-card,
.contact-strip,
.tech-card,
.architecture-card,
.contact-form-section {
  background: var(--surface-strong);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.hero-panel {
  display: grid;
  gap: 1rem;
  padding: 1.25rem;
}

.hero-panel div {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 1rem;
}

.hero-panel div:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.metric {
  color: var(--accent);
  display: block;
  font-size: 1.45rem;
  font-weight: 800;
  margin-bottom: 0.35rem;
}

.hero-panel p,
.focus-card p,
.contact-strip p {
  color: var(--muted-text);
  line-height: 1.65;
  margin: 0;
}

.focus-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin: 3rem 0;
}

.focus-card {
  padding: 1.4rem;
}

.focus-index {
  color: var(--accent);
  display: block;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.focus-card h2,
.contact-strip h2,
.section-heading h2 {
  color: var(--primary-text);
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.tech-section {
  margin: 3rem 0;
}

.architecture-section {
  margin: 3rem 0;
}

.section-heading {
  margin-bottom: 1rem;
  max-width: 720px;
}

.section-heading h2 {
  font-size: clamp(1.35rem, 2.4vw, 1.95rem);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  position: relative;
}

.tech-grid::before {
  background:
    linear-gradient(90deg, transparent, var(--border-color), transparent),
    linear-gradient(0deg, transparent, var(--border-color), transparent);
  content: '';
  inset: 12% 6%;
  opacity: 0.45;
  pointer-events: none;
  position: absolute;
}

.architecture-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.architecture-card {
  padding: 1.15rem;
}

.architecture-card span {
  color: var(--accent);
  display: block;
  font-weight: 900;
  margin-bottom: 1rem;
}

.architecture-card h3 {
  color: var(--primary-text);
  font-size: 1.02rem;
  margin-bottom: 0.5rem;
}

.architecture-card p {
  color: var(--muted-text);
  font-size: 0.94rem;
  line-height: 1.55;
  margin: 0;
}

.tech-card {
  align-items: flex-start;
  display: grid;
  gap: 1rem;
  grid-template-columns: auto 1fr;
  padding: 1rem;
  position: relative;
  z-index: 1;
}

.tech-card::after {
  background: radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent), transparent 62%);
  content: '';
  inset: -20%;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transition: opacity 0.25s ease;
  z-index: -1;
}

.tech-card:hover::after {
  opacity: 1;
}

.tech-card span {
  align-items: center;
  background: var(--accent);
  border-radius: 6px;
  color: var(--accent-contrast);
  display: inline-flex;
  font-size: 0.82rem;
  font-weight: 900;
  height: 44px;
  justify-content: center;
  width: 54px;
}

.tech-card h3 {
  color: var(--primary-text);
  font-size: 1.05rem;
  margin-bottom: 0.35rem;
}

.tech-card p {
  color: var(--muted-text);
  line-height: 1.6;
  margin: 0;
}

.contact-strip {
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem;
}

.contact-form-section {
  margin-top: 1rem;
  padding: 1.5rem;
}

.contact-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.contact-form label {
  color: var(--primary-text);
  display: grid;
  font-weight: 800;
  gap: 0.45rem;
}

.contact-form input,
.contact-form textarea {
  background: var(--surface-soft);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--primary-text);
  font: inherit;
  padding: 0.85rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--accent);
  outline: none;
}

.contact-form .full,
.contact-form button {
  grid-column: 1 / -1;
}

.contact-form button {
  background: var(--accent);
  border: 0;
  border-radius: 6px;
  color: var(--accent-contrast);
  font-weight: 900;
  padding: 0.9rem 1rem;
}

@media (max-width: 900px) {
  .hero,
  .focus-grid,
  .contact-strip,
  .tech-grid,
  .architecture-grid {
    grid-template-columns: 1fr;
  }

  .contact-strip {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 576px) {
  .hero-actions a,
  .contact-strip a,
  .contact-form button {
    text-align: center;
    width: 100%;
  }

  .contact-form {
    grid-template-columns: 1fr;
  }
}
</style>
