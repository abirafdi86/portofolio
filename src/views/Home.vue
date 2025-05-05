<template>
  <div class="home py-5">
    <div class="jumbotron bg-dark p-5 rounded-3 text-white animate-in fade-in-down">
      <h1 class="display-4 slide-in-left">Welcome to My Portfolio</h1>
      <p class="lead slide-in-right">I'm a passionate web developer specializing in Vue.js and modern front-end
        technologies</p>
      <hr class="my-4 expand-hr">
      <p class="fade-in">Check out my projects and get in touch if you'd like to collaborate!</p>
      <router-link to="/project" class="btn btn-primary btn-lg pulse-btn">
        <span class="btn-text-wrapper">View Projects</span>
      </router-link>
    </div>

    <div class="row mt-5 text-white">
      <div class="col-md-4 mb-4 service-card">
        <div class="service-icon">
          <i class="bi bi-code-slash"></i>
        </div>
        <h5 class="service-title">Web Development</h5>
        <p>Creating responsive and dynamic web applications using modern frameworks and technologies.</p>
      </div>
      <div class="col-md-4 mb-4 service-card">
        <div class="service-icon">
          <i class="bi bi-brush"></i>
        </div>
        <h5 class="service-title">UI/UX Design</h5>
        <p>Designing intuitive and engaging user interfaces with a focus on user experience.</p>
      </div>
      <div class="col-md-4 mb-4 service-card">
        <div class="service-icon">
          <i class="bi bi-bug"></i>
        </div>
        <h5 class="service-title">Fix & Bugs</h5>
        <p>Identifying, tracking, and resolving software bugs to ensure optimal performance, stability, and user
          experience across all platforms.</p>
      </div>
    </div>

    <div class="text-center mt-5 text-white fade-in-up">
      <h2 class="glow-text">Let's Create Something Amazing Together</h2>
      <p class="lead fade-in">Have a project in mind? Get in touch and let's discuss how we can collaborate.</p>
      <a href="mailto:abiamuba8622@gmail.com" class="btn btn-outline-light floating-btn">
        Contact Me
        <i class="bi bi-arrow-right ms-2 btn-icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    // Animation for service cards with staggered delay
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      card.style.animationDelay = `${0.3 + (index * 0.2)}s`;
      card.classList.add('fade-in-up');
    });

    // Intersection Observer for scroll animations
    this.setupScrollAnimations();
  },
  methods: {
    setupScrollAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      // Observe all animatable elements
      document.querySelectorAll('.service-card, .fade-in-up, .fade-in').forEach(el => {
        observer.observe(el);
      });
    }
  }
}
</script>

<style scoped>
/* Base styling */
.home {
  perspective: 1000px;
}

/* Animation keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes expandHr {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.7);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(13, 110, 253, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(13, 110, 253, 0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-6px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes glow {
  0% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }

  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3);
  }

  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }
}

@keyframes rotate3d {
  0% {
    transform: rotate3d(0, 1, 0, 0deg);
  }

  100% {
    transform: rotate3d(0, 1, 0, 360deg);
  }
}

/* Animation classes */
.animate-in {
  opacity: 0;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

.fade-in-down {
  animation-name: fadeInDown;
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

.slide-in-left {
  opacity: 0;
  animation: slideInLeft 0.8s ease-out forwards;
}

.slide-in-right {
  opacity: 0;
  animation: slideInRight 0.8s ease-out forwards;
  animation-delay: 0.2s;
}

.expand-hr {
  width: 0;
  animation: expandHr 1.5s ease-out forwards;
  animation-delay: 0.5s;
}

/* Jumbotron styling with 3D effect */
.jumbotron {
  position: relative;
  transform-style: preserve-3d;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  border-left: 4px solid #0d6efd;
}

.jumbotron:hover {
  transform: translateY(-5px);
}

/* Button animations */
.pulse-btn {
  position: relative;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
  border: none;
}

.pulse-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(13, 110, 253, 0.4);
}

.btn-text-wrapper {
  position: relative;
  z-index: 1;
}

.pulse-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.6s;
}

.pulse-btn:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

/* Service cards styling */
.service-card {
  padding: 25px;
  border-radius: 8px;
  transition: all 0.4s ease;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 3px solid transparent;
  opacity: 0;
  transform: translateY(20px);
}

.service-card:hover {
  transform: translateY(-10px);
  border-bottom: 3px solid #0d6efd;
  background: rgba(0, 0, 0, 0.4);
}

.service-icon {
  font-size: 2.5rem;
  color: #0d6efd;
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.2);
}

.service-title {
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.service-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #0d6efd;
  transition: width 0.4s ease;
}

.service-card:hover .service-title::after {
  width: 50px;
}

/* Floating contact button */
.floating-btn {
  position: relative;
  transition: all 0.3s ease;
  animation: float 3s ease-in-out infinite;
}

.floating-btn:hover {
  background-color: #ffffff;
  color: #343a40;
  padding-right: 30px;
}

.btn-icon {
  position: relative;
  transition: all 0.3s ease;
  opacity: 0;
  right: -20px;
}

.floating-btn:hover .btn-icon {
  opacity: 1;
  right: 0;
}

/* Glowing text effect */
.glow-text {
  animation: glow 3s ease-in-out infinite;
}

/* Scroll animation support */
.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>