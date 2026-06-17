<template>
  <section class="about-me py-5">
    <div class="profile-layout">
      <aside class="profile-card">
        <img src="@/assets/images/1.jpg" alt="Muhammad Abi Rafdi" class="profile-image">
        <h2>Muhammad Abi Rafdi</h2>
        <p>Frontend Developer</p>
        <div class="social-links">
          <a href="https://github.com/abirafdi86" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/muhammad-abi-rafdi-3a84231b8" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:abiamuba8622@gmail.com">Email</a>
        </div>
      </aside>

      <div class="about-content">
        <p class="eyebrow">About me</p>
        <h2>I build practical frontend experiences for real product workflows.</h2>
        <p>
          I am a frontend developer focused on Vue.js, responsive interfaces, dashboards,
          and API-connected web applications. My recent work includes enterprise interfaces
          for internal decision-support workflows and production web applications.
        </p>
        <p>
          I care about clean component structure, predictable user flows, and UI details
          that make daily work easier for users. I enjoy working closely with backend
          developers and designers to turn requirements into usable screens.
        </p>

        <div class="skill-section">
          <h3>Technical focus</h3>
          <div class="skill-groups">
            <div v-for="group in skillGroups" :key="group.title" class="skill-group">
              <h4>{{ group.title }}</h4>
              <div class="skill-tags">
                <span v-for="skill in group.skills" :key="skill">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      skillGroups: [
        {
          title: 'Frontend',
          skills: ['Vue.js 2 & 3', 'Vuex', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
        },
        {
          title: 'Frameworks & libraries',
          skills: ['Vuetify', 'Bootstrap', 'Tailwind CSS', 'Node.js', 'Responsive Design']
        },
        {
          title: 'Tools & libraries',
          skills: ['REST API', 'Git', 'Postman', 'Swagger', 'Jira', 'Figma', 'Agile / Scrum']
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-me {
  color: var(--primary-text);
}

.profile-layout {
  align-items: start;
  display: grid;
  grid-template-columns: minmax(240px, 0.8fr) minmax(0, 1.2fr);
  gap: 2rem;
}

.profile-card,
.skill-group {
  background: var(--surface-strong);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.profile-card {
  padding: 1.5rem;
  text-align: center;
}

.profile-image {
  aspect-ratio: 1;
  border: 4px solid var(--border-color);
  border-radius: 50%;
  margin-bottom: 1.25rem;
  object-fit: cover;
  object-position: center top;
  width: min(220px, 75%);
}

.profile-card h2 {
  color: var(--primary-text);
  font-size: 1.25rem;
  margin-bottom: 0.35rem;
}

.profile-card p {
  color: var(--muted-text);
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  justify-content: center;
  margin-top: 1rem;
}

.social-links a {
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--accent);
  font-weight: 700;
  padding: 0.55rem 0.75rem;
  text-decoration: none;
}

.social-links a:hover {
  background: var(--accent);
  color: var(--accent-contrast);
}

.eyebrow {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.about-content h2 {
  color: var(--primary-text);
  font-size: clamp(1.55rem, 3vw, 2.35rem);
  line-height: 1.16;
  margin-bottom: 0.85rem;
}

.about-content p {
  color: var(--secondary-text);
  font-size: 0.97rem;
  line-height: 1.6;
}

.skill-section {
  margin-top: 2rem;
}

.skill-section h3 {
  color: var(--primary-text);
  margin-bottom: 1rem;
}

.skill-groups {
  display: grid;
  gap: 1rem;
}

.skill-group {
  padding: 1.15rem;
}

.skill-group h4 {
  color: var(--accent);
  font-size: 1rem;
  margin-bottom: 0.8rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tags span {
  background: var(--surface-soft);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--secondary-text);
  font-size: 0.85rem;
  padding: 0.35rem 0.55rem;
}

@media (max-width: 850px) {
  .profile-layout {
    grid-template-columns: 1fr;
  }
}
</style>
