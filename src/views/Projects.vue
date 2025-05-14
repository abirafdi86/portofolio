<template>
  <div class="projects py-5">
    <!-- Loading Animation Overlay -->
    <div class="loading-overlay" ref="loadingOverlay">
      <div class="loading-content">
        <div class="loading-logo">
          <svg class="loading-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon class="loading-polygon" points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="#007bff"
              stroke-width="4" />
            <text x="50" y="55" text-anchor="middle" fill="#007bff" font-size="12">PROJECTS</text>
          </svg>
        </div>
        <div class="loading-bar">
          <div class="loading-progress" ref="loadingProgress"></div>
        </div>
      </div>
    </div>

    <h1 class="mb-4 page-title" style="color: white;">My Projects</h1>

    <div class="d-flex mb-4 filter-container">
      <div class="btn-group">
        <button class="btn" :class="filter === 'all' ? 'btn-primary' : 'btn-outline-primary'" @click="setFilter('all')">
          All
        </button>
        <!-- Additional category buttons can be added here as needed -->
      </div>
    </div>

    <div class="row" style="place-content: center;">
      <!-- Project Cards -->
      <div v-for="(project, index) in filteredProjects" :key="index" class="col-md-10 col-lg-8 mb-5 project-container"
        :style="{ transitionDelay: `${index * 0.15}s` }">

        <!-- Project Card - Collapsed State -->
        <div :class="['project-card', { 'project-card-expanded': expandedProject === index }]"
          @click="toggleProject(index)">

          <!-- Card Header with Image -->
          <div class="card-img-wrapper">
            <img src="/src/assets/project/project.png" class="card-img-top" alt="Project thumbnail"
              style="height: 200px; object-fit: cover;">
            <div class="card-img-overlay-effect"></div>

            <!-- Expand/collapse indicator -->
            <div class="expand-indicator">
              <svg class="expand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <polyline v-if="expandedProject !== index" points="6 9 12 15 18 9"></polyline>
                <polyline v-else points="18 15 12 9 6 15"></polyline>
              </svg>
            </div>
          </div>

          <!-- Card Basic Info -->
          <div class="card-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="tag-badge">{{ tag }}</span>
            </div>
          </div>
        </div>

        <!-- Expanded Details Panel -->
        <div :class="['project-details', { 'project-details-visible': expandedProject === index }]"
          :style="{ maxHeight: expandedProject === index ? '2000px' : '0' }">
          <div class="details-container">
            <!-- Description Section -->
            <div class="details-section">
              <h4>About this project</h4>
              <p>{{ project.detailedDescription }}</p>
            </div>

            <!-- Technologies Section -->
            <div class="details-section">
              <h4>Technologies</h4>
              <div class="tech-tags">
                <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="tech-tag">{{ tag }}</span>
              </div>
            </div>

            <!-- Images Gallery Section -->
            <div class="details-section">
              <h4>Screenshots</h4>
              <div class="image-gallery">
                <!-- Image Carousel -->
                <div class="carousel-container">
                  <div class="carousel-inner">
                    <div v-for="(image, i) in project.images" :key="i"
                      :class="['carousel-slide', { 'active': activeImageIndex[index] === i }]">
                      <img :src="image" :alt="`Project screenshot ${i + 1}`">
                    </div>
                  </div>

                  <!-- Navigation Arrows -->
                  <button class="carousel-arrow prev" @click.stop="prevImage(index)"
                    :disabled="activeImageIndex[index] === 0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button class="carousel-arrow next" @click.stop="nextImage(index)"
                    :disabled="activeImageIndex[index] === project.images.length - 1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>

                <!-- Thumbnails for quick navigation -->
                <div class="thumbnails">
                  <div v-for="(image, i) in project.images" :key="i"
                    :class="['thumbnail', { 'active': activeImageIndex[index] === i }]"
                    @click.stop="setActiveImage(index, i)">
                    <img :src="image" :alt="`Thumbnail ${i + 1}`">
                  </div>
                </div>
              </div>
            </div>

            <!-- Actions Section -->
            <div class="details-section actions">
              <a :href="project.demoLink" class="action-button primary" target="_blank">
                <span>Live Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                  <path fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                </svg>
              </a>
              <button class="action-button secondary" @click.stop="toggleProject(index)">
                Close Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import images directly
import remi1 from '@/assets/project/remi1.png'
import remi2 from '@/assets/project/remi2.png'
import remi3 from '@/assets/project/remi3.png'
import remi4 from '@/assets/project/remi4.png'
import remi5 from '@/assets/project/remi5.png'
import remi6 from '@/assets/project/remi6.png'
import remi7 from '@/assets/project/remi7.png'
import remi8 from '@/assets/project/remi8.png'

export default {
  name: 'Projects',
  data() {
    return {
      filter: 'all',
      expandedProject: null, // Index of currently expanded project, null if none
      activeImageIndex: {}, // Object to track active image index for each project
      isLoading: true,
      projects: [
        {
          title: 'Rummy Live Score Calculator App',
          description: 'An app to calculate and track scores in the Rummy card game.',
          detailedDescription: 'The Rummy Score Calculator App is a digital solution designed to help players easily track and calculate scores in the Rummy card game. This app features an intuitive and user-friendly interface, reduces manual calculation errors, and includes game history storage to review player statistics and progress over time. With this app, players can focus on enjoying the game without the hassle of managing complicated scorekeeping. This application is a live Rummy score counter application in the form of a link that can be accessed by anyone who wants to view live scores, using a realtime database and a friendly, modern UI.',
          tags: ['Vue.js', 'JavaScript', 'Bootstrap', 'LocalStorage', 'Firebase', 'HTML', 'CSS'],
          category: 'utility',
          images: [
            remi1,
            remi2,
            remi3,
            remi4,
            remi5,
            remi6,
            remi7,
            remi8
          ],
          demoLink: 'https://aplikasi-remi.netlify.app/',
          githubLink: '#'
        }
        // Add more projects as needed
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.filter === 'all') {
        return this.projects
      }
      return this.projects.filter(project => project.category === this.filter)
    }
  },
  methods: {
    setFilter(filter) {
      this.filter = filter
      // Close any expanded project when filter changes
      this.expandedProject = null
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    toggleProject(index) {
      // Toggle expanded state
      if (this.expandedProject === index) {
        this.expandedProject = null // Collapse if already expanded
      } else {
        this.expandedProject = index // Expand the selected project

        // Initialize image carousel for this project if not already done
        if (this.activeImageIndex[index] === undefined) {
          // Vue 3 compatible way to add reactive property
          this.activeImageIndex = { ...this.activeImageIndex, [index]: 0 }
        }

        // Scroll to the expanded card after a brief delay
        setTimeout(() => {
          const element = document.querySelectorAll('.project-card-expanded')[0]
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }

      this.scrollToTop();
    },
    prevImage(projectIndex) {
      if (this.activeImageIndex[projectIndex] > 0) {
        this.activeImageIndex[projectIndex]--
      }
    },
    nextImage(projectIndex) {
      const maxIndex = this.projects[projectIndex].images.length - 1
      if (this.activeImageIndex[projectIndex] < maxIndex) {
        this.activeImageIndex[projectIndex]++
      }
    },
    setActiveImage(projectIndex, imageIndex) {
      this.activeImageIndex = { ...this.activeImageIndex, [projectIndex]: imageIndex }
    },
    simulateLoading() {
      const loadingOverlay = this.$refs.loadingOverlay
      const loadingProgress = this.$refs.loadingProgress

      if (!loadingOverlay || !loadingProgress) return

      // Animate the progress bar
      let progress = 0
      const interval = setInterval(() => {
        if (progress >= 100) {
          clearInterval(interval)

          // Add exit animation class
          loadingOverlay.classList.add('loading-overlay-exit')

          // Remove the overlay after animation completes
          setTimeout(() => {
            loadingOverlay.style.display = 'none'
            this.animateContent()
          }, 800)
        } else {
          progress += Math.random() * 20
          progress = Math.min(progress, 100)
          loadingProgress.style.width = `${progress}%`
        }
      }, 200)
    },
    animateContent() {
      // Trigger animations for main content
      const pageTitle = document.querySelector('.page-title')
      const filterContainer = document.querySelector('.filter-container')
      const projectContainers = document.querySelectorAll('.project-container')

      if (pageTitle) pageTitle.classList.add('show')
      if (filterContainer) filterContainer.classList.add('show')

      // Animate each project card
      projectContainers.forEach(container => {
        container.classList.add('show')
      })
    }
  },
  mounted() {
    // Initialize the component
    this.$nextTick(() => {
      // Start loading simulation
      this.simulateLoading()

      // Initialize image indices for all projects
      const initialIndices = {}
      this.projects.forEach((project, index) => {
        initialIndices[index] = 0
      })
      // Set all indices at once (Vue 3 compatible)
      this.activeImageIndex = initialIndices
    })
  }
}
</script>

<style scoped>
/* Loading Animation */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.8s ease;
}

.loading-overlay-exit {
  opacity: 0;
}

.loading-content {
  text-align: center;
}

.loading-logo {
  margin-bottom: 30px;
}

.loading-svg {
  width: 100px;
  height: 100px;
}

.loading-polygon {
  animation: rotate 3s infinite linear, pulse 2s infinite ease-in-out;
}

@keyframes rotate {
  from {
    transform-origin: center;
    transform: rotate(0deg);
  }

  to {
    transform-origin: center;
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    stroke-width: 2;
  }

  50% {
    stroke-width: 6;
  }

  100% {
    stroke-width: 2;
  }
}

.loading-bar {
  width: 200px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  margin: 0 auto;
}

.loading-progress {
  height: 100%;
  width: 0;
  background-color: #007bff;
  transition: width 0.3s ease;
}

/* Page Content Animations */
.page-title {
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.page-title.show {
  opacity: 1;
  transform: translateY(0);
}

.filter-container {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s;
}

.filter-container.show {
  opacity: 1;
  transform: translateY(0);
}

.project-container {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.project-container.show {
  opacity: 1;
  transform: translateY(0);
}

/* Project Card Styling */
.project-card {
  background-color: #1a242f;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  transform-origin: center top;
  width: 100%;
  max-width: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
}

.project-card-expanded {
  transform: scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.card-img-wrapper {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.card-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .card-img-wrapper img {
  transform: scale(1.05);
}

.card-img-overlay-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(26, 36, 47, 0.8));
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-img-overlay-effect {
  opacity: 0.9;
}

.expand-indicator {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  background-color: rgba(0, 123, 255, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
}

.expand-icon {
  width: 20px;
  height: 20px;
  stroke: white;
  transition: transform 0.3s ease;
}

.project-card-expanded .expand-icon {
  transform: rotate(180deg);
}

.card-content {
  padding: 30px;
  position: relative;
  z-index: 1;
}

.project-title {
  color: #64ffda;
  font-size: 1.6rem;
  margin-bottom: 15px;
  font-weight: 600;
  position: relative;
  padding-bottom: 10px;
}

.project-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: #64ffda;
  transition: width 0.3s ease;
}

.project-card:hover .project-title::after {
  width: 80px;
}

.project-description {
  color: #ccd6f6;
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-badge {
  background-color: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.project-card:hover .tag-badge {
  background-color: rgba(100, 255, 218, 0.2);
  transform: translateY(-2px);
}

/* Expanded Project Details */
.project-details {
  background-color: #1a242f;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.6s ease, opacity 0.4s ease;
  opacity: 0;
  border-radius: 0 0 10px 10px;
  margin-top: -10px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 0;
}

.project-details-visible {
  opacity: 1;
  z-index: 2;
}

.details-container {
  padding: 30px 35px 40px;
}

.details-section {
  margin-bottom: 25px;
}

.details-section h4 {
  color: #64ffda;
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 500;
}

.details-section p {
  color: #a8b2d1;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Tech Tags */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-tag {
  background-color: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  animation: techTagFadeIn 0.5s forwards;
  opacity: 0;
}

@keyframes techTagFadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.tech-tag:nth-child(1) {
  animation-delay: 0.1s;
}

.tech-tag:nth-child(2) {
  animation-delay: 0.2s;
}

.tech-tag:nth-child(3) {
  animation-delay: 0.3s;
}

.tech-tag:nth-child(4) {
  animation-delay: 0.4s;
}

.tech-tag:nth-child(5) {
  animation-delay: 0.5s;
}

/* Image Gallery */
.image-gallery {
  margin-top: 15px;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 400px;
  /* Increased height for better viewing */
  border-radius: 8px;
  overflow: hidden;
  background-color: #0d1622;
  margin-bottom: 15px;
}

.carousel-inner {
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-slide.active {
  opacity: 1;
  z-index: 1;
}

.carousel-slide img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;
}

.carousel-arrow:hover {
  background-color: rgba(100, 255, 218, 0.5);
}

.carousel-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-arrow.prev {
  left: 10px;
}

.carousel-arrow.next {
  right: 10px;
}

.carousel-arrow svg {
  width: 20px;
  height: 20px;
  stroke: white;
}

/* Thumbnails */
.thumbnails {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 15px;
  justify-content: center;
}

.thumbnail {
  width: 80px;
  /* Larger thumbnails */
  height: 80px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.thumbnail:hover {
  opacity: 0.9;
}

.thumbnail.active {
  opacity: 1;
  border-color: #64ffda;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Action Buttons */
.actions {
  display: flex;
  gap: 15px;
  margin-top: 50px;
  justify-content: center;
}

.action-button {
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 0.95rem;
  cursor: pointer;
  border: none;
}

.action-button.primary {
  background-color: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  border: 1px solid #64ffda;
}

.action-button.primary:hover {
  background-color: rgba(100, 255, 218, 0.2);
  transform: translateY(-2px);
}

.action-button.secondary {
  background-color: rgba(204, 214, 246, 0.1);
  color: #ccd6f6;
  border: 1px solid rgba(204, 214, 246, 0.3);
}

.action-button.secondary:hover {
  background-color: rgba(204, 214, 246, 0.15);
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .carousel-container {
    height: 250px;
  }

  .actions {
    flex-direction: column;
  }

  .thumbnails {
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .carousel-container {
    height: 200px;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .details-section h4 {
    font-size: 1.1rem;
  }
}
</style>