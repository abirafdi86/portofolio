<template>
  <div class="gallery py-5">
    <!-- Loading Animation Overlay -->
    <div class="loading-overlay" ref="loadingOverlay">
      <div class="loading-content">
        <div class="loading-logo">
          <svg class="loading-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon class="loading-polygon" points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="#64ffda"
              stroke-width="4" />
            <text x="50" y="55" text-anchor="middle" fill="#64ffda" font-size="12">GALLERY</text>
          </svg>
        </div>
        <div class="loading-bar">
          <div class="loading-progress" ref="loadingProgress"></div>
        </div>
      </div>
    </div>

    <h1 class="mb-4 page-title" style="color: white;">Photo Gallery</h1>

    <div class="d-flex mb-4 filter-container">
      <div class="btn-group">
        <button class="btn" :class="filter === 'all' ? 'btn-primary' : 'btn-outline-primary'" @click="setFilter('all')">
          All
        </button>
        <button class="btn" :class="filter === 'me' ? 'btn-primary' : 'btn-outline-primary'" @click="setFilter('me')">
          Me
        </button>
        <button class="btn" :class="filter === 'view' ? 'btn-primary' : 'btn-outline-primary'"
          @click="setFilter('view')">
          Travel Views
        </button>
      </div>
    </div>

    <div class="gallery-grid" ref="gallery">
      <div v-for="(photo, index) in filteredPhotos" :key="index" class="gallery-item"
        :style="{ transitionDelay: `${index * 0.05}s` }" @click="openGalleryView(index)">
        <div class="photo-card">
          <div class="photo-wrapper">
            <img :src="photo.src" :alt="photo.title" class="gallery-img">
            <div class="photo-overlay">
              <div class="photo-info">
                <h5>{{ photo.title }}</h5>
                <span class="photo-category">{{ photo.category }}</span>
              </div>
              <div class="view-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery View -->
    <div class="gallery-view" v-if="galleryViewOpen" @click="closeGalleryView">
      <div class="gallery-view-content" @click.stop>
        <button class="gallery-close-btn" @click="closeGalleryView">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="gallery-navigation">
          <button class="gallery-nav-btn prev" @click.stop="prevPhoto" :disabled="currentPhotoIndex === 0">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div class="gallery-main-image">
            <img :src="currentPhoto.src" :alt="currentPhoto.title" class="main-img">
          </div>

          <button class="gallery-nav-btn next" @click.stop="nextPhoto"
            :disabled="currentPhotoIndex >= filteredPhotos.length - 1">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div class="gallery-details">
          <h3 class="gallery-photo-title">{{ currentPhoto.title }}</h3>
          <p class="gallery-photo-description">{{ currentPhoto.description }}</p>
          <span class="gallery-photo-category">{{ currentPhoto.category === 'me' ? 'Personal' : 'Travel Photography'
          }}</span>
        </div>

        <!-- Thumbnails Navigation -->
        <div class="gallery-thumbnails">
          <div class="thumbnails-container">
            <div v-for="(photo, index) in filteredPhotos" :key="index"
              :class="['thumbnail-item', { active: index === currentPhotoIndex }]" @click.stop="setPhoto(index)">
              <img :src="photo.src" :alt="photo.title" class="thumbnail-img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      filter: 'all',
      galleryViewOpen: false,
      currentPhotoIndex: 0,
      isLoading: true,
      // Inside the photos array in the data() method, update to match your actual images:

      photos: [
        // Travel/View Photos
        {
          title: 'Ferry Approaching Kobe Harbor',
          description: 'A passenger ferry navigates the blue waters of Kobe Harbor on a clear day, with the distinctive architecture of the port visible in the background.',
          category: 'view',
          src: '/src/assets/travel/travel10.jpg'
        },
        {
          title: 'Urban Shopping Center',
          description: 'A modern shopping complex featuring a large white facade with the "umie" logo visible, showcasing contemporary Japanese architectural design.',
          category: 'view',
          src: '/src/assets/travel/travel11.jpg'
        },
        {
          title: 'Bustling Chinatown Market Street',
          description: 'A vibrant, crowded street in Chinatown decorated with red traditional banners and lanterns overhead, filled with visitors exploring the cultural district.',
          category: 'view',
          src: '/src/assets/travel/travel12.jpg'
        },
        {
          title: 'Elevated Shopping District Walkway',
          description: 'An elevated pedestrian walkway connecting large department stores in a major Japanese city, with urban infrastructure and modern buildings visible.',
          category: 'view',
          src: '/src/assets/travel/travel13.jpg'
        },
        {
          title: 'Tsutenkaku Tower at Night',
          description: 'The iconic Tsutenkaku Tower illuminated with vibrant blue lighting against the night sky, showcasing its distinctive architectural features.',
          category: 'view',
          src: '/src/assets/travel/travel14.jpg'
        },
        {
          title: 'Canton Tower with Rainbow Illumination',
          description: 'A spectacular night view of the Canton Tower with its distinctive shape brilliantly illuminated in rainbow colors against the dark city skyline.',
          category: 'view',
          src: '/src/assets/travel/travel15.jpg'
        },
        {
          title: 'View from Airplane Window',
          description: 'A serene view from an airplane window showing the aircraft\'s wing against a golden sunset sky with clouds visible below.',
          category: 'view',
          src: '/src/assets/travel/travel1.jpg'
        },
        {
          title: 'Modern Transportation Infrastructure',
          description: 'An architectural photograph showing Japan\'s modern transportation facilities with clean, minimalist design against a clear blue sky.',
          category: 'view',
          src: '/src/assets/travel/travel2.jpg'
        },
        {
          title: 'Traditional Japanese Shrine',
          description: 'A beautiful traditional Japanese shrine structure displaying numerous white paper lanterns with Japanese calligraphy written on them.',
          category: 'view',
          src: '/src/assets/travel/travel3.jpg'
        },
        {
          title: 'Lawson Convenience Store',
          description: 'A modern Lawson convenience store building with minimalist design situated in a park or recreational area surrounded by trees.',
          category: 'view',
          src: '/src/assets/travel/travel4.jpg'
        },
        {
          title: 'Castle Moat and Stone Walls',
          description: 'The impressive stone walls and moat of a traditional Japanese castle, showcasing the skilled stonework of the defensive walls.',
          category: 'view',
          src: '/src/assets/travel/travel5.jpg'
        },
        {
          title: 'Geometric Glass Ceiling',
          description: 'An artistic view looking up at a geometric triangular glass ceiling structure in a modern museum or cultural center in Japan.',
          category: 'view',
          src: '/src/assets/travel/travel6.jpg'
        },
        {
          title: 'Historical Marker',
          description: 'A memorial plaque or historical marker embedded in stonework, containing Japanese text about the site\'s historical significance.',
          category: 'view',
          src: '/src/assets/travel/travel7.jpg'
        },
        {
          title: 'Urban Shopping District',
          description: 'A street-level view of a commercial district featuring the distinctive glass facade of a shopping mall against a blue sky.',
          category: 'view',
          src: '/src/assets/travel/travel8.jpg'
        },
        {
          title: 'Modern Shopping Atrium',
          description: 'The interior of a contemporary shopping center with a dramatic glass roof, showing multiple levels of retail spaces and colorful design elements.',
          category: 'view',
          src: '/src/assets/travel/travel9.jpg'
        },

        // Me Photos - Create placeholders (update these as needed)
        {
          category: 'me',
          src: '/src/assets/me/me1.jpg'
        },
        {
          category: 'me',
          src: '/src/assets/me/me2.jpg'
        },
        {
          category: 'me',
          src: '/src/assets/me/me3.jpg'
        },
        {
          category: 'me',
          src: '/src/assets/me/me4.jpg'
        },
        {
          category: 'me',
          src: '/src/assets/me/me5.jpg'
        },
        {
          category: 'me',
          src: '/src/assets/me/me7.jpg'
        },
        {
          category: 'me',
          src: '/src/assets/me/me8.jpg'
        }
      ]
    }
  },
  computed: {
    filteredPhotos() {
      if (this.filter === 'all') {
        return this.photos
      }
      return this.photos.filter(photo => photo.category === this.filter)
    },
    currentPhoto() {
      return this.filteredPhotos[this.currentPhotoIndex] || this.photos[0]
    }
  },
  methods: {
    setFilter(filter) {
      this.filter = filter
      this.galleryViewOpen = false

      // Reset any scroll position
      window.scrollTo({ top: 0, behavior: 'smooth' })

      // Add a slight delay to allow animations to complete
      setTimeout(() => {
        this.animateGalleryItems()
      }, 300)
    },
    openGalleryView(index) {
      this.currentPhotoIndex = index
      this.galleryViewOpen = true
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    },
    closeGalleryView() {
      this.galleryViewOpen = false
      document.body.style.overflow = '' // Restore scrolling
    },
    nextPhoto() {
      if (this.currentPhotoIndex < this.filteredPhotos.length - 1) {
        this.currentPhotoIndex++
      }
    },
    prevPhoto() {
      if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex--
      }
    },
    setPhoto(index) {
      this.currentPhotoIndex = index
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
          progress += Math.random() * 15
          progress = Math.min(progress, 100)
          loadingProgress.style.width = `${progress}%`
        }
      }, 200)
    },
    animateContent() {
      // Trigger animations for main content
      const pageTitle = document.querySelector('.page-title')
      const filterContainer = document.querySelector('.filter-container')

      if (pageTitle) pageTitle.classList.add('show')
      if (filterContainer) filterContainer.classList.add('show')

      // Animate gallery items with a delay
      setTimeout(() => {
        this.animateGalleryItems()
      }, 400)
    },
    animateGalleryItems() {
      const galleryItems = document.querySelectorAll('.gallery-item')
      galleryItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('show')
        }, 50 * index)
      })
    }
  },
  mounted() {
    // Initialize the component
    this.$nextTick(() => {
      // Start loading simulation
      this.simulateLoading()

      // Listen for escape key to close gallery view
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.galleryViewOpen) {
          this.closeGalleryView()
        } else if (e.key === 'ArrowRight' && this.galleryViewOpen) {
          this.nextPhoto()
        } else if (e.key === 'ArrowLeft' && this.galleryViewOpen) {
          this.prevPhoto()
        }
      })
    })
  },
  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener('keydown', this.handleKeydown)
    document.body.style.overflow = '' // Ensure scrolling is restored
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
  background-color: #64ffda;
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

/* Filter buttons styling */
.btn-group .btn {
  padding: 8px 16px;
  margin: 0 3px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #64ffda;
  border-color: #64ffda;
  color: #131b22;
}

.btn-outline-primary {
  color: #64ffda;
  border-color: #64ffda;
}

.btn-outline-primary:hover {
  background-color: rgba(100, 255, 218, 0.1);
  color: #64ffda;
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.gallery-item {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  position: relative;
}

.gallery-item.show {
  opacity: 1;
  transform: translateY(0);
}

.photo-card {
  background-color: #1a242f;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
}

.photo-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.photo-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.photo-card:hover .gallery-img {
  transform: scale(1.1);
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(19, 27, 34, 0.9), transparent);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  transition: opacity 0.3s ease;
}

.photo-card:hover .photo-overlay {
  opacity: 1;
}

.photo-info {
  color: white;
  transform: translateY(20px);
  transition: transform 0.3s ease 0.1s;
}

.photo-card:hover .photo-info {
  transform: translateY(0);
}

.photo-info h5 {
  margin: 0;
  margin-bottom: 5px;
  font-weight: 600;
  color: #64ffda;
}

.photo-category {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ccd6f6;
  opacity: 0.8;
}

.view-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background-color: rgba(100, 255, 218, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: transform 0.3s ease;
}

.view-icon svg {
  stroke: #64ffda;
}

.photo-card:hover .view-icon {
  transform: scale(1);
}

/* Gallery View */
.gallery-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 25, 47, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.gallery-view-content {
  position: relative;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  background-color: #131b22;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: scale(0.95);
  animation: scaleIn 0.3s ease forwards;
}

@keyframes scaleIn {
  from {
    transform: scale(0.95);
  }

  to {
    transform: scale(1);
  }
}

.gallery-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background-color: rgba(100, 255, 218, 0.1);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}

.gallery-close-btn:hover {
  background-color: rgba(100, 255, 218, 0.2);
}

.gallery-close-btn svg {
  stroke: #64ffda;
}

.gallery-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  position: relative;
}

.gallery-nav-btn {
  width: 50px;
  height: 50px;
  background-color: rgba(100, 255, 218, 0.1);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
}

.gallery-nav-btn:hover:not(:disabled) {
  background-color: rgba(100, 255, 218, 0.2);
}

.gallery-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.gallery-nav-btn svg {
  stroke: #64ffda;
}

.gallery-main-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  max-height: 500px;
  margin: 0 20px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.main-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: opacity 0.3s ease;
}

.gallery-details {
  margin-top: 20px;
  text-align: center;
  padding: 0 40px;
}

.gallery-photo-title {
  margin: 0;
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 10px;
}

.gallery-photo-description {
  color: #ccd6f6;
  margin-bottom: 10px;
  line-height: 1.6;
}

.gallery-photo-category {
  font-size: 0.85rem;
  color: #8892b0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Thumbnails */
.gallery-thumbnails {
  margin-top: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.gallery-thumbnails::-webkit-scrollbar {
  height: 6px;
}

.gallery-thumbnails::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.gallery-thumbnails::-webkit-scrollbar-thumb {
  background: rgba(100, 255, 218, 0.3);
  border-radius: 10px;
}

.thumbnails-container {
  display: flex;
  gap: 10px;
  padding: 5px 0;
}

.thumbnail-item {
  width: 80px;
  height: 60px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  flex-shrink: 0;
}

.thumbnail-item:hover {
  opacity: 0.8;
}

.thumbnail-item.active {
  opacity: 1;
  border-color: #64ffda;
}

.thumbnail-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .gallery-view-content {
    width: 95%;
    padding: 10px;
  }

  .gallery-main-image {
    height: 40vh;
  }

  .gallery-details {
    padding: 0 20px;
  }

  .gallery-photo-title {
    font-size: 1.2rem;
  }

  .gallery-photo-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }

  .photo-info h5 {
    font-size: 0.9rem;
  }

  .photo-category {
    font-size: 0.7rem;
  }

  .gallery-navigation {
    flex-direction: column;
  }

  .gallery-main-image {
    margin: 10px 0;
    height: 30vh;
  }

  .gallery-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .gallery-nav-btn.prev {
    left: 5px;
  }

  .gallery-nav-btn.next {
    right: 5px;
  }

  .thumbnail-item {
    width: 60px;
    height: 45px;
  }
}
</style>