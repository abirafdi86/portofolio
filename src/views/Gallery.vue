<template>
  <div class="gallery">
    <h1 class="mb-4">Photo Gallery</h1>

    <div class="gallery-filter mb-4">
      <div class="btn-group">
        <button class="btn" :class="filter === 'all' ? 'btn-primary' : 'btn-outline-primary'" @click="setFilter('all')">
          All
        </button>
        <button class="btn" :class="filter === 'travel' ? 'btn-primary' : 'btn-outline-primary'"
          @click="setFilter('travel')">
          Travel
        </button>
        <button class="btn" :class="filter === 'nature' ? 'btn-primary' : 'btn-outline-primary'"
          @click="setFilter('nature')">
          Nature
        </button>
        <button class="btn" :class="filter === 'work' ? 'btn-primary' : 'btn-outline-primary'"
          @click="setFilter('work')">
          Work
        </button>
      </div>
    </div>

    <div class="row g-3" ref="gallery">
      <div v-for="(photo, index) in filteredPhotos" :key="index" class="col-6 col-md-4 col-lg-3 gallery-item">
        <div class="card h-100" @click="openLightbox(index)">
          <div class="photo-placeholder bg-secondary text-white d-flex align-items-center justify-content-center"
            style="height: 200px; cursor: pointer;">
            <span>{{ photo.title }}</span>
          </div>
          <div class="card-body">
            <h6 class="card-title">{{ photo.title }}</h6>
            <p class="card-text small text-muted">{{ photo.category }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <div class="lightbox" v-if="lightboxOpen" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close btn btn-sm btn-light" @click="closeLightbox">&times;</button>
        <button class="lightbox-prev btn btn-light" @click="prevPhoto" v-if="currentPhotoIndex > 0">&lt;</button>
        <div class="lightbox-image-container">
          <div class="lightbox-placeholder bg-dark d-flex align-items-center justify-content-center text-white"
            style="height: 60vh; width: 100%;">
            <h3>{{ currentPhoto ? currentPhoto.title : '' }}</h3>
          </div>
          <div class="lightbox-caption mt-2">
            <h5>{{ currentPhoto ? currentPhoto.title : '' }}</h5>
            <p>{{ currentPhoto ? currentPhoto.description : '' }}</p>
          </div>
        </div>
        <button class="lightbox-next btn btn-light" @click="nextPhoto"
          v-if="currentPhotoIndex < filteredPhotos.length - 1">&gt;</button>
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
      lightboxOpen: false,
      currentPhotoIndex: 0,
      photos: [
        {
          title: 'Mountain Sunrise',
          description: 'Beautiful sunrise captured during a hiking trip in the mountains.',
          category: 'nature',
        },
        {
          title: 'Tokyo Streets',
          description: 'Busy street in Tokyo with neon lights at night.',
          category: 'travel',
        },
        {
          title: 'Coding Session',
          description: 'Late night coding session working on a new project.',
          category: 'work',
        },
        {
          title: 'Beach Sunset',
          description: 'Golden sunset at the beach with palm trees silhouettes.',
          category: 'nature',
        },
        {
          title: 'Italian Cafe',
          description: 'Small cafe in a quiet street in Rome, Italy.',
          category: 'travel',
        },
        {
          title: 'Team Meeting',
          description: 'Brainstorming session with the design team.',
          category: 'work',
        },
        {
          title: 'Forest Path',
          description: 'Mystical path through a foggy forest in the early morning.',
          category: 'nature',
        },
        {
          title: 'Ancient Temple',
          description: 'Historic temple discovered during a trip to Southeast Asia.',
          category: 'travel',
        },
        {
          title: 'Project Presentation',
          description: 'Presenting a new website design to clients.',
          category: 'work',
        },
        {
          title: 'Waterfall',
          description: 'Hidden waterfall found during a hike in the rainforest.',
          category: 'nature',
        },
        {
          title: 'City Skyline',
          description: 'Modern city skyline at dusk with lights turning on.',
          category: 'travel',
        },
        {
          title: 'Design Workshop',
          description: 'Leading a workshop on UI/UX design principles.',
          category: 'work',
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
      return this.filteredPhotos[this.currentPhotoIndex]
    }
  },
  methods: {
    setFilter(filter) {
      this.filter = filter
      this.lightboxOpen = false
    },
    openLightbox(index) {
      this.currentPhotoIndex = index
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = ''
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
    }
  }
}
</script>

<style scoped>
.gallery-item {
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1010;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  cursor: pointer;
  z-index: 1010;
}

.lightbox-prev {
  left: -50px;
}

.lightbox-next {
  right: -50px;
}

.lightbox-image-container {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}

.lightbox-caption {
  color: #333;
  text-align: center;
}
</style>