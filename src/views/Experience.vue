<template>
  <section class="experience py-5">
    <div class="page-heading">
      <p class="eyebrow">Experience</p>
      <h2 class="page-title">Frontend work across enterprise and product teams</h2>
      <p>
        My work centers on Vue.js interfaces, API-connected workflows, responsive
        dashboards, and maintainable component implementation.
      </p>
    </div>

    <div class="timeline">
      <article v-for="item in experiences" :key="`${item.company}-${item.duration}`" class="experience-card">
        <div class="experience-header">
          <div>
            <h2>{{ item.position }}</h2>
            <p class="company">{{ item.company }}</p>
            <p class="duration">{{ item.duration }}</p>
          </div>
          <span>{{ item.type }}</span>
        </div>

        <ul>
          <li v-for="achievement in item.achievements" :key="achievement">{{ achievement }}</li>
        </ul>

        <div class="skill-tags">
          <span v-for="skill in item.skills" :key="skill">{{ skill }}</span>
        </div>
      </article>
    </div>

    <section class="skills-section">
      <h2>Core skills</h2>
      <div class="skill-grid">
        <article v-for="category in skillCategories" :key="category.category" class="skill-card">
          <span class="skill-marker">{{ category.marker }}</span>
          <h3>{{ category.category }}</h3>
          <div class="skill-tags">
            <span v-for="skill in category.skills" :key="skill">{{ skill }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="credential-section">
      <article class="credential-card">
        <p class="credential-label">Education</p>
        <h2>Bina Nusantara University</h2>
        <p>Bachelor of Computer Science</p>
        <span>Intake 2018, graduated 2022</span>
      </article>

      <article class="credential-card">
        <p class="credential-label">Certification</p>
        <h2>ITP TOEFL</h2>
        <p>Score 600</p>
        <span>July 2025 - July 2027 | Centre of Language Improvement</span>
      </article>

      <article class="credential-card">
        <p class="credential-label">Languages</p>
        <h2>Communication</h2>
        <p>English - Intermediate</p>
        <span>Indonesian - Native</span>
      </article>
    </section>

    <section class="cta-section">
      <div>
        <h2>Need a Vue.js frontend developer?</h2>
        <p>
          I can help build clean interfaces, integrate APIs, and maintain dashboard
          products with a focus on usability and consistency.
        </p>
      </div>
      <a href="/CV_Abi.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experiences: [
        {
          position: 'Frontend Developer',
          company: 'PT. Adi Data Informatika - Bank Indonesia placement',
          duration: 'Jul 2025 - Present',
          type: 'Contract',
          achievements: [
            'Build Vue.js dashboard interfaces and workflow screens for internal enterprise users.',
            'Integrate REST APIs with frontend pages, forms, and CRUD interactions.',
            'Collaborate with backend developers and UI/UX designers during Scrum delivery cycles.',
            'Maintain component consistency, responsive behavior, and cross-browser reliability.'
          ],
          skills: ['Vue.js', 'Vuex', 'Vue Router', 'Vuetify', 'Bootstrap', 'CKEditor', 'Aspose', 'REST API', 'JavaScript', 'HTML', 'CSS']
        },
        {
          position: 'Frontend Developer',
          company: 'Experd Consultant',
          duration: 'Sep 2022 - Jul 2025',
          type: 'Full-time',
          achievements: [
            'Developed responsive Vue.js application screens and reusable UI components.',
            'Implemented routing, state management, and API-connected CRUD flows.',
            'Improved interface maintainability through consistent structure and code maintenance.',
            'Worked closely with backend teams to deliver integrated web application features.'
          ],
          skills: ['Vue.js', 'Vuex', 'Vue Router', 'JavaScript', 'TypeScript', 'Bootstrap', 'REST API', 'Postman', 'Git']
        },
        {
          position: 'Data Analysis Intern',
          company: 'Kampus Merdeka',
          duration: 'Aug 2021 - Feb 2022',
          type: 'Internship',
          achievements: [
            'Learned foundational data analysis concepts and tool-based analysis workflows.',
            'Practiced processing information into clearer summaries and insights.'
          ],
          skills: ['Data Analysis', 'Analytics Tools', 'Data Processing']
        },
        {
          position: 'Cloud Computing Intern',
          company: 'Bangkit Academy led by Google',
          duration: 'Jan 2021 - Jul 2021',
          type: 'Internship',
          achievements: [
            'Studied cloud computing concepts, platform fundamentals, and resource management.',
            'Built a stronger technical foundation for modern web and cloud-based products.'
          ],
          skills: ['Cloud Computing', 'Google Cloud', 'Resource Management']
        }
      ],
      skillCategories: [
        {
          category: 'Frontend Framework',
          marker: 'FE',
          skills: ['Vue.js 2 & 3', 'Vuex', 'Vue Router', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
        },
        {
          category: 'UI & Components',
          marker: 'UI',
          skills: ['Vuetify', 'Bootstrap', 'Tailwind CSS', 'Responsive Design', 'Component-Driven Dev']
        },
        {
          category: 'API & Tools',
          marker: 'AT',
          skills: ['REST API', 'Node.js', 'Postman', 'Swagger', 'Git', 'Jira', 'Figma']
        },
        {
          category: 'Delivery',
          marker: 'DL',
          skills: ['Agile / Scrum', 'Code Review', 'Cross-Browser Testing', 'API Integration', 'Maintenance']
        }
      ]
    }
  }
}
</script>

<style scoped>
.experience {
  color: var(--primary-text);
}

.page-heading {
  max-width: 860px;
  margin-bottom: 2rem;
}

.eyebrow {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.page-title {
  color: var(--primary-text);
  font-size: clamp(1.65rem, 3vw, 2.45rem);
  line-height: 1.16;
  margin-bottom: 0.75rem;
}

.page-heading p,
.cta-section p {
  color: var(--muted-text);
  font-size: 0.98rem;
  line-height: 1.6;
}

.timeline {
  display: grid;
  gap: 1rem;
}

.experience-card,
.skill-card,
.credential-card,
.cta-section {
  background: var(--surface-strong);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.experience-card {
  padding: 1.5rem;
}

.experience-header {
  align-items: flex-start;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.experience-header h2,
.skills-section h2,
.cta-section h2 {
  color: var(--primary-text);
}

.experience-header h2 {
  font-size: 1.15rem;
  margin-bottom: 0.35rem;
}

.company {
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.duration {
  color: var(--muted-text);
  margin: 0;
}

.experience-header span {
  background: var(--surface-soft);
  border-radius: 4px;
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.45rem 0.7rem;
  white-space: nowrap;
}

.experience-card ul {
  color: var(--secondary-text);
  font-size: 0.94rem;
  line-height: 1.55;
  margin: 0 0 1.1rem;
  padding-left: 1.2rem;
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
  font-size: 0.82rem;
  padding: 0.35rem 0.55rem;
}

.skills-section {
  margin: 3rem 0;
}

.skills-section h2 {
  margin-bottom: 1rem;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.skill-card {
  padding: 1.4rem;
}

.skill-marker {
  align-items: center;
  background: var(--accent);
  border-radius: 50%;
  color: var(--accent-contrast);
  display: inline-flex;
  font-weight: 800;
  height: 54px;
  justify-content: center;
  margin-bottom: 1rem;
  width: 54px;
}

.skill-card h3 {
  color: var(--primary-text);
  font-size: 1.05rem;
  margin-bottom: 1rem;
}

.credential-section {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 3rem;
}

.credential-card {
  padding: 1.25rem;
}

.credential-label {
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  margin-bottom: 0.65rem;
  text-transform: uppercase;
}

.credential-card h2 {
  color: var(--primary-text);
  font-size: 1.1rem;
  margin-bottom: 0.45rem;
}

.credential-card p:not(.credential-label),
.credential-card span {
  color: var(--secondary-text);
  display: block;
  font-size: 0.92rem;
  line-height: 1.55;
}

.cta-section {
  align-items: center;
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  padding: 1.5rem;
}

.cta-section a {
  background: var(--accent);
  border-radius: 6px;
  color: var(--accent-contrast);
  font-weight: 800;
  padding: 0.85rem 1.1rem;
  text-decoration: none;
  white-space: nowrap;
}

.cta-section a:hover {
  background: #ffffff;
}

@media (max-width: 900px) {
  .skill-grid {
    grid-template-columns: 1fr;
  }

  .credential-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .experience-header,
  .cta-section {
    align-items: flex-start;
    flex-direction: column;
  }

  .cta-section a {
    text-align: center;
    width: 100%;
  }
}
</style>
