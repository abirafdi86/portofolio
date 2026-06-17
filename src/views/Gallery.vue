<template>
  <section class="gallery py-5">
    <div class="page-heading">
      <p class="eyebrow">Gallery</p>
      <h2 class="page-title">A small personal layer</h2>
      <p>
        A curated set of travel and personal photos. This page is intentionally
        lighter so the portfolio keeps its focus on projects and experience.
      </p>
    </div>

    <div class="filter-bar">
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

    <div class="gallery-grid">
      <button
        v-for="(photo, index) in filteredPhotos"
        :key="photo.title"
        type="button"
        class="photo-card"
        @click="openGalleryView(index)"
      >
        <img :src="photo.src" :alt="photo.title" loading="lazy">
        <span>{{ photo.title }}</span>
      </button>
    </div>

    <div v-if="galleryViewOpen" class="gallery-view" @click="closeGalleryView">
      <div class="gallery-view-content" @click.stop>
        <button class="close-button" type="button" aria-label="Close gallery" @click="closeGalleryView">
          X
        </button>

        <div class="viewer-main">
          <button type="button" class="nav-button" :disabled="currentPhotoIndex === 0" @click="prevPhoto">
            Prev
          </button>
          <img :src="currentPhoto.src" :alt="currentPhoto.title">
          <button
            type="button"
            class="nav-button"
            :disabled="currentPhotoIndex >= filteredPhotos.length - 1"
            @click="nextPhoto"
          >
            Next
          </button>
        </div>

        <div class="viewer-details">
          <h2>{{ currentPhoto.title }}</h2>
          <p>{{ currentPhoto.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import travel3 from '@/assets/travel/travel3.jpg'
import travel5 from '@/assets/travel/travel5.jpg'
import travel14 from '@/assets/travel/travel14.jpg'
import travel15 from '@/assets/travel/travel15.jpg'
import me1 from '@/assets/me/me1.jpg'
import me3 from '@/assets/me/me3.jpg'
import me7 from '@/assets/me/me7.jpg'
import me8 from '@/assets/me/me8.jpg'

export default {
  name: 'Gallery',
  data() {
    return {
      filter: 'all',
      galleryViewOpen: false,
      currentPhotoIndex: 0,
      filters: [
        { label: 'All', value: 'all' },
        { label: 'Personal', value: 'me' },
        { label: 'Travel', value: 'view' }
      ],
      photos: [
        {
          title: 'Traditional Japanese Shrine',
          description: 'A quiet architectural detail from a traditional shrine visit.',
          category: 'view',
          src: travel3
        },
        {
          title: 'Castle Moat and Stone Walls',
          description: 'A strong visual memory from a historic Japanese castle area.',
          category: 'view',
          src: travel5
        },
        {
          title: 'Tsutenkaku Tower at Night',
          description: 'Night city lights and a distinct urban landmark.',
          category: 'view',
          src: travel14
        },
        {
          title: 'Canton Tower Illumination',
          description: 'A bright city skyline moment from travel photography.',
          category: 'view',
          src: travel15
        },
        {
          title: 'Portrait 1',
          description: 'Personal portrait selected for the gallery.',
          category: 'me',
          src: me1
        },
        {
          title: 'Portrait 2',
          description: 'Personal portrait selected for the gallery.',
          category: 'me',
          src: me3
        },
        {
          title: 'Portrait 3',
          description: 'Personal portrait selected for the gallery.',
          category: 'me',
          src: me7
        },
        {
          title: 'Portrait 4',
          description: 'Personal portrait selected for the gallery.',
          category: 'me',
          src: me8
        }
      ]
    }
  },
  computed: {
    filteredPhotos() {
      if (this.filter === 'all') return this.photos
      return this.photos.filter(photo => photo.category === this.filter)
    },
    currentPhoto() {
      return this.filteredPhotos[this.currentPhotoIndex] || this.filteredPhotos[0]
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
    document.body.style.overflow = ''
  },
  methods: {
    setFilter(filter) {
      this.filter = filter
      this.galleryViewOpen = false
      this.currentPhotoIndex = 0
      document.body.style.overflow = ''
    },
    openGalleryView(index) {
      this.currentPhotoIndex = index
      this.galleryViewOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeGalleryView() {
      this.galleryViewOpen = false
      document.body.style.overflow = ''
    },
    nextPhoto() {
      if (this.currentPhotoIndex < this.filteredPhotos.length - 1) {
        this.currentPhotoIndex += 1
      }
    },
    prevPhoto() {
      if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex -= 1
      }
    },
    handleKeydown(event) {
      if (!this.galleryViewOpen) return
      if (event.key === 'Escape') this.closeGalleryView()
      if (event.key === 'ArrowRight') this.nextPhoto()
      if (event.key === 'ArrowLeft') this.prevPhoto()
    }
  }
}
</script>

<style scoped>
.gallery {
  color: var(--primary-text);
}

.page-heading {
  max-width: 820px;
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
  margin-bottom: 0.75rem;
}

.page-heading p,
.viewer-details p {
  color: var(--muted-text);
  font-size: 0.96rem;
  line-height: 1.6;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.filter-button,
.nav-button {
  border: 1px solid var(--border-color);
  background: var(--surface-soft);
  border-radius: 6px;
  color: var(--accent);
  font-weight: 700;
  padding: 0.65rem 1rem;
}

.filter-button.active,
.filter-button:hover,
.nav-button:hover:not(:disabled) {
  background: var(--accent);
  color: var(--accent-contrast);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.photo-card {
  background: var(--surface-strong);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--primary-text);
  overflow: hidden;
  padding: 0;
  text-align: left;
}

.photo-card img {
  aspect-ratio: 4 / 3;
  display: block;
  object-fit: cover;
  width: 100%;
}

.photo-card span {
  display: block;
  font-size: 0.92rem;
  font-weight: 700;
  padding: 0.85rem;
}

.photo-card:hover {
  transform: translateY(-4px);
}

.gallery-view {
  align-items: center;
  background: rgba(10, 25, 47, 0.88);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  z-index: 2000;
}

.gallery-view-content {
  background: var(--surface-strong);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  max-height: 92vh;
  max-width: 1100px;
  overflow: auto;
  padding: 1rem;
  position: relative;
  width: 100%;
}

.close-button {
  background: var(--accent);
  border: 0;
  border-radius: 50%;
  color: var(--accent-contrast);
  font-weight: 800;
  height: 38px;
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 38px;
  z-index: 2;
}

.viewer-main {
  align-items: center;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 1rem;
  margin-top: 2rem;
}

.viewer-main img {
  background: var(--surface-soft);
  border-radius: 8px;
  max-height: 62vh;
  object-fit: contain;
  width: 100%;
}

.viewer-details {
  margin: 1rem auto 0;
  max-width: 760px;
  text-align: center;
}

.viewer-details h2 {
  color: var(--accent);
  font-size: 1.15rem;
}

@media (max-width: 700px) {
  .viewer-main {
    grid-template-columns: 1fr;
  }

  .nav-button {
    width: 100%;
  }
}
</style>
