<template>
  <div class="experience">
    <h1 class="mb-4 text-white">Experience</h1>

    <div class="intro-section mb-5">
      <div class="intro-content">
        <h3 class="mb-4 text-white">Professional Journey</h3>
        <p class="text-white">Throughout my career as a Front-End Developer, I have gained extensive experience in
          building modern, responsive web applications using cutting-edge technologies. My journey has taken me through
          various roles and projects, each contributing to my growth as a developer and my expertise in Vue.js
          ecosystem.</p>
        <p class="text-white">From internships that introduced me to data analysis and cloud computing, to full-time
          positions where I've led front-end development initiatives, I have consistently focused on delivering
          high-quality user experiences and maintainable code solutions.</p>
      </div>
    </div>

    <h2 class="mb-4 text-white">Work Experience</h2>

    <div class="timeline">
      <div class="timeline-item mb-5" v-for="(experience, index) in experiences" :key="index">
        <div class="experience-content h-100">
          <div class="row">
            <div class="col-md-8">
              <h4 class="position-title text-primary">{{ experience.position }}</h4>
              <h5 class="company-name text-white mb-2">{{ experience.company }}</h5>
              <p class="duration text-light mb-3">
                <i class="bi bi-calendar-range me-2"></i>{{ experience.duration }}
              </p>
            </div>
            <div class="col-md-4 text-md-end">
              <span class="badge bg-primary fs-6">{{ experience.type }}</span>
            </div>
          </div>

          <div class="responsibilities mt-4">
            <h6 class="mb-3 text-white">Key Responsibilities & Achievements:</h6>
            <ul class="list-unstyled">
              <li class="mb-2 text-light" v-for="(responsibility, idx) in experience.responsibilities" :key="idx">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                {{ responsibility }}
              </li>
            </ul>
          </div>

          <div class="skills mt-4" v-if="experience.skills">
            <h6 class="mb-2 text-white">Technologies & Skills:</h6>
            <span class="badge bg-secondary me-1 mb-1" v-for="skill in experience.skills" :key="skill">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <h2 class="mb-4 mt-5 text-white">Skills & Technologies</h2>

    <div class="row">
      <div class="col-md-4 mb-4" v-for="(skillCategory, index) in skillCategories" :key="index">
        <div class="skill-category h-100">
          <div class="skill-content">
            <div class="text-center mb-3">
              <div
                class="skill-icon bg-primary text-white d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style="width: 80px; height: 80px;">
                <span class="h3 mb-0">{{ skillCategory.icon }}</span>
              </div>
            </div>
            <h4 class="text-center text-white">{{ skillCategory.category }}</h4>
            <div class="text-center">
              <span class="badge bg-outline-primary me-1 mb-1" v-for="skill in skillCategory.skills" :key="skill">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section mt-5 mb-5">
      <div class="cta-content">
        <h3 class="mb-4 text-white">Let's Work Together</h3>
        <p class="text-light">I'm always interested in new opportunities and challenging projects. If you're looking for
          a dedicated Front-End Developer with expertise in Vue.js and modern web technologies, I'd love to hear from
          you.</p>
        <div class="row mt-4">
          <div class="col-md-12 text-center">
            <button class="btn btn-outline-light btn-lg" @click="downloadCV">
              <i class="bi bi-download me-2"></i>Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experiences: [
        {
          position: 'Front-End Developer',
          company: 'PT. Adi Data Informatika (Penempatan: Bank Indonesia)',
          duration: '07/2025 - Present',
          type: 'Contract',
          responsibilities: [
            'Developing User Interfaces (UI) to enhance user experience using Vue.js components and frameworks',
            'Building responsive and interactive web applications with Vue.js, Vuex for state management, and Vue Router for efficient navigation',
            'Organizing application logic to ensure applications run efficiently, maintainable, and easy to understand by following Vue.js best practices',
            'Implementing Vue.js component libraries and ensuring cross-browser compatibility',
            'Performing regular code maintenance to ensure smooth application performance and minimize bugs',
            'Optimizing Vue.js applications for maximum speed and scalability',
            'Developing CRUD functionalities and building APIs to integrate with various systems and applications',
            'Collaborating with backend developers to integrate RESTful APIs with Vue.js frontend',
            'Applying Agile methodologies (Scrum/Kanban), participating in daily stand-ups, sprint planning, sprint reviews, and retrospectives',
            'Working closely with UI/UX designers to translate designs into functional and visually appealing interfaces',
            'Conducting code reviews to maintain code quality and consistency across the team'
          ],
          skills: ['Vue.js', 'Vuex', 'Vue Router', 'JavaScript', 'REST API', 'Agile', 'Scrum', 'HTML/CSS']
        },
        {
          position: 'Front-End Developer',
          company: 'Experd Consultant',
          duration: '09/2022 - 07/2025',
          type: 'Full-time',
          responsibilities: [
            'Developing User Interfaces (UI) to improve user experience using Vue.js components and frameworks',
            'Building responsive and interactive web applications with Vue.js, Vuex for state management, and Vue Router',
            'Organize Application Logic to ensure applications run efficiently and are easy to learn through Vue.js best practices',
            'Implementing Vue.js component libraries and ensuring cross-browser compatibility',
            'Perform regular Code Maintenance to ensure the application runs smoothly and without bugs',
            'Optimizing Vue applications for maximum speed and scalability',
            'Building CRUD APIs that help integration with various other systems and applications',
            'Collaborating with backend developers to integrate RESTful APIs with Vue.js frontend'
          ],
          skills: ['Vue.js', 'Vuex', 'Vue Router', 'JavaScript', 'API Development', 'CRUD', 'HTML/CSS']
        },
        {
          position: 'Internship',
          company: 'INDEPENDENT CAMPUS',
          duration: '08/2021 - 02/2022',
          type: 'Internship',
          responsibilities: [
            'Basic understanding of data analysis and introduction to data analysis tools',
            'Improve basic understanding of data analysis',
            'Develop data analysis skills',
            'Increase efficiency in the use of data analysis tools'
          ],
          skills: ['Data Analysis', 'Analytics Tools', 'Data Processing']
        },
        {
          position: 'Internship',
          company: 'BANGKIT ACADEMY LED BY GOOGLE',
          duration: '01/2021 - 07/2021',
          type: 'Internship',
          responsibilities: [
            'Introducing the concept of Cloud Computing',
            'Understand Cloud platforms',
            'Manage resources effectively',
            'Contribute to the development of Cloud Computing capabilities'
          ],
          skills: ['Cloud Computing', 'Google Cloud Platform', 'Resource Management', 'Cloud Architecture']
        }
      ],
      skillCategories: [
        {
          category: 'Frontend Development',
          icon: '💻',
          skills: ['Vue.js', 'Vuex', 'Vue Router', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
        },
        {
          category: 'Development Tools',
          icon: '🛠️',
          skills: ['Git', 'npm', 'Webpack', 'VS Code', 'Chrome DevTools', 'Postman']
        },
        {
          category: 'Methodologies',
          icon: '⚡',
          skills: ['Agile', 'Scrum', 'Kanban', 'Code Review', 'API Integration', 'Responsive Design']
        }
      ]
    }
  },
  methods: {
    downloadCV() {
      try {
        // Create a link element
        const link = document.createElement('a');
        link.href = '/src/assets/cv/CV_Abi.pdf';
        link.download = 'CV_Abi.pdf';
        link.target = '_blank';

        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show success message (optional)
        this.showDownloadMessage();
      } catch (error) {
        console.error('Error downloading CV:', error);
        alert('Sorry, there was an error downloading the CV. Please try again.');
      }
    },

    showDownloadMessage() {
      // Create a temporary notification
      const notification = document.createElement('div');
      notification.innerHTML = `
        <div class="alert alert-success position-fixed" style="top: 20px; right: 20px; z-index: 9999; min-width: 300px;">
          <i class="bi bi-check-circle-fill me-2"></i>
          CV download started successfully!
        </div>
      `;

      document.body.appendChild(notification);

      // Remove notification after 3 seconds
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 3000);
    }
  }
}
</script>

<style scoped>
/* Base styling with white text */
.experience {
  color: white;
}

/* Section styling without cards */
.intro-section,
.cta-section {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

.intro-section:hover,
.cta-section:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

/* Experience content styling */
.experience-content {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

.experience-content:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

/* Skill category styling */
.skill-category {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

.skill-category:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

/* Staggered animation delays */
.intro-section {
  animation-delay: 0s;
}

.timeline-item:nth-child(1) .experience-content {
  animation-delay: 0.1s;
}

.timeline-item:nth-child(2) .experience-content {
  animation-delay: 0.2s;
}

.timeline-item:nth-child(3) .experience-content {
  animation-delay: 0.3s;
}

.timeline-item:nth-child(4) .experience-content {
  animation-delay: 0.4s;
}

.row .col-md-4:nth-child(1) .skill-category {
  animation-delay: 0.5s;
}

.row .col-md-4:nth-child(2) .skill-category {
  animation-delay: 0.6s;
}

.row .col-md-4:nth-child(3) .skill-category {
  animation-delay: 0.7s;
}

.cta-section {
  animation-delay: 0.8s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Timeline styling */
.timeline-item {
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 30px;
  width: 12px;
  height: 12px;
  background-color: #007bff;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #007bff;
  animation: pulseTimeline 2s ease-in-out infinite;
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: -14px;
  top: 42px;
  width: 2px;
  height: calc(100% - 12px);
  background: linear-gradient(to bottom, #007bff, rgba(255, 255, 255, 0.3));
  animation: drawLine 1s ease-out forwards;
}

.timeline-item:last-child::after {
  display: none;
}

@keyframes pulseTimeline {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
}

@keyframes drawLine {
  from {
    height: 0;
  }

  to {
    height: calc(100% - 12px);
  }
}

/* Skill icons animation */
.skill-icon {
  transition: all 0.3s ease;
}

.skill-category:hover .skill-icon {
  transform: scale(1.05) rotateY(180deg);
}

/* Badge animations */
.badge {
  transition: all 0.2s ease;
  animation: slideInRight 0.5s ease forwards;
  opacity: 0;
  transform: translateX(20px);
}

.badge:nth-child(1) {
  animation-delay: 0.1s;
}

.badge:nth-child(2) {
  animation-delay: 0.2s;
}

.badge:nth-child(3) {
  animation-delay: 0.3s;
}

.badge:nth-child(4) {
  animation-delay: 0.4s;
}

.badge:nth-child(5) {
  animation-delay: 0.5s;
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.badge:hover {
  transform: scale(1.1);
}

.badge.bg-outline-primary {
  color: #007bff;
  border: 1px solid #007bff;
  background-color: transparent;
}

/* Responsibilities list animation */
.responsibilities ul li {
  padding-left: 0;
  text-align: justify;
  animation: fadeInLeft 0.6s ease forwards;
  opacity: 0;
  transform: translateX(-20px);
}

.responsibilities ul li:nth-child(1) {
  animation-delay: 0.1s;
}

.responsibilities ul li:nth-child(2) {
  animation-delay: 0.15s;
}

.responsibilities ul li:nth-child(3) {
  animation-delay: 0.2s;
}

.responsibilities ul li:nth-child(4) {
  animation-delay: 0.25s;
}

.responsibilities ul li:nth-child(5) {
  animation-delay: 0.3s;
}

@keyframes fadeInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Check icon animation */
.bi-check-circle-fill {
  transition: all 0.2s ease;
}

.responsibilities ul li:hover .bi-check-circle-fill {
  transform: scale(1.2);
  color: #28a745 !important;
}

/* Button animations */
.btn {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
}

.btn-outline-light:hover {
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
}

/* Timeline container */
.timeline {
  margin-left: 20px;
}

/* Title animations */
h1,
h2,
h3,
h4 {
  animation: fadeInDown 0.8s ease forwards;
  opacity: 0;
  transform: translateY(-20px);
}

h1 {
  animation-delay: 0s;
}

h2 {
  animation-delay: 0.1s;
}

h3 {
  animation-delay: 0.2s;
}

@keyframes fadeInDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Text colors */
.position-title {
  color: #007bff !important;
  font-weight: bold;
}

.company-name {
  color: white !important;
  font-weight: 500;
}

.duration {
  color: #e9ecef !important;
}

.text-light {
  color: #f8f9fa !important;
}

/* Responsive design */
@media (max-width: 768px) {
  .timeline {
    margin-left: 0;
  }

  .timeline-item::before,
  .timeline-item::after {
    display: none;
  }

  .experience-content:hover,
  .skill-category:hover,
  .intro-section:hover,
  .cta-section:hover {
    transform: translateY(-3px);
  }

  .intro-section,
  .cta-section,
  .experience-content,
  .skill-category {
    padding: 1.5rem;
  }
}
</style>