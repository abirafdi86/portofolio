<template>
  <div class="projects">
    <h1 class="mb-4">My Projects</h1>
    
    <div class="d-flex mb-4">
      <div class="btn-group">
        <button class="btn" :class="filter === 'all' ? 'btn-primary' : 'btn-outline-primary'" @click="setFilter('all')">
          All
        </button>
        <button class="btn" :class="filter === 'web' ? 'btn-primary' : 'btn-outline-primary'" @click="setFilter('web')">
          Web
        </button>
        <button class="btn" :class="filter === 'mobile' ? 'btn-primary' : 'btn-outline-primary'" @click="setFilter('mobile')">
          Mobile
        </button>
        <button class="btn" :class="filter === 'design' ? 'btn-primary' : 'btn-outline-primary'" @click="setFilter('design')">
          Design
        </button>
      </div>
    </div>
    
    <div class="row">
      <div v-for="(project, index) in filteredProjects" :key="index" class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <div class="project-img-placeholder bg-secondary text-white d-flex align-items-center justify-content-center" style="height: 200px;">
            <span>{{ project.title }}</span>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="d-flex flex-wrap mb-2">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="badge bg-primary me-1 mb-1">{{ tag }}</span>
            </div>
          </div>
          <div class="card-footer bg-white border-top-0">
            <div class="d-flex justify-content-between">
              <a :href="project.demoLink" class="btn btn-sm btn-outline-primary">Live Demo</a>
              <a :href="project.githubLink" class="btn btn-sm btn-outline-dark">Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      filter: 'all',
      projects: [
        {
          title: 'E-commerce Website',
          description: 'A fully responsive e-commerce website built with Vue.js and Vuex for state management.',
          tags: ['Vue.js', 'Vuex', 'Bootstrap'],
          category: 'web',
          demoLink: '#',
          githubLink: '#'
        },
        {
          title: 'Weather App',
          description: 'A weather application that displays current weather and forecasts using OpenWeatherMap API.',
          tags: ['Vue.js', 'API Integration', 'CSS Grid'],
          category: 'web',
          demoLink: '#',
          githubLink: '#'
        },
        {
          title: 'Task Manager',
          description: 'A mobile application for managing daily tasks and setting reminders.',
          tags: ['React Native', 'Redux', 'Firebase'],
          category: 'mobile',
          demoLink: '#',
          githubLink: '#'
        },
        {
          title: 'Portfolio Design',
          description: 'A minimalist portfolio design created in Figma with a focus on typography and white space.',
          tags: ['Figma', 'UI Design', 'Typography'],
          category: 'design',
          demoLink: '#',
          githubLink: '#'
        },
        {
          title: 'Recipe Finder',
          description: 'A web application that helps users find recipes based on available ingredients.',
          tags: ['Vue.js', 'API Integration', 'Responsive Design'],
          category: 'web',
          demoLink: '#',
          githubLink: '#'
        },
        {
          title: 'Fitness Tracker',
          description: 'A mobile app for tracking workouts, nutrition, and health metrics.',
          tags: ['React Native', 'HealthKit', 'Google Fit'],
          category: 'mobile',
          demoLink: '#',
          githubLink: '#'
        }
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
    }
  }
}
</script>