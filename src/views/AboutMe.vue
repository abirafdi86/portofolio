<template>
  <div class="about-me py-5">
    <h1 class="mb-4 text-white fade-in-down">About Me</h1>

    <div class="row">
      <div class="col-md-4 mb-4 text-center fade-in-left">
        <div class="profile-img-container mb-3">
          <div class="profile-img pulse-animation">
            <img src="@/assets/images/1.jpg" alt="Muhammad Abi Rafdi" class="img-fluid profile-image-circle">
          </div>
        </div>
        <h3 class="text-white fade-in">Muhammad Abi Rafdi</h3>
        <p class="text-white fade-in">Frontend Developer</p>
        <div class="social-links mt-3 fade-in-up">
          <a href="#" class="btn btn-outline-light me-2 hover-effect"><i class="bi bi-github"></i></a>
          <a href="#" class="btn btn-outline-light me-2 hover-effect"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="btn btn-outline-light hover-effect"><i class="bi bi-twitter"></i></a>
        </div>
      </div>

      <div class="col-md-8">
        <div class="mb-4 fade-in-right">
          <h3 class="text-white slide-in">My Story</h3>
          <p class="text-white fade-in">Hello! I'm Abi, a passionate frontend developer with over 3 years of experience
            in creating dynamic web
            applications. My journey in web development began during my college years when I built my first website
            using HTML and CSS.</p>
          <p class="text-white fade-in delay-1">Since then, I've expanded my skills to include modern JavaScript
            frameworks like Vue.js. I'm particularly
            enthusiastic about building intuitive user interfaces and creating seamless user experiences.</p>
          <p class="text-white fade-in delay-2">When I'm not coding, you can find me hiking in the mountains, reading
            sci-fi novels, or experimenting
            with new coffee brewing methods.</p>
        </div>

        <div class="fade-in-up delay-3">
          <h3 class="text-white slide-in">Skills</h3>
          <div class="row">
            <div class="col-md-6">
              <h5 class="text-white slide-in delay-1">Technical Skills</h5>
              <div class="mb-3 skill-item">
                <div class="d-flex justify-content-between text-white">
                  <span>HTML/CSS</span>
                  <span>95%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-success progress-animate" role="progressbar" style="width: 0%"
                    data-width="95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="mb-3 skill-item">
                <div class="d-flex justify-content-between text-white">
                  <span>JavaScript</span>
                  <span>90%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-success progress-animate" role="progressbar" style="width: 0%"
                    data-width="90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="mb-3 skill-item">
                <div class="d-flex justify-content-between text-white">
                  <span>Vue.js</span>
                  <span>85%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-success progress-animate" role="progressbar" style="width: 0%"
                    data-width="85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <h5 class="text-white slide-in delay-2">Additional Skills</h5>
              <div class="mb-3 skill-item">
                <div class="d-flex justify-content-between text-white">
                  <span>UI/UX Design</span>
                  <span>80%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-info progress-animate" role="progressbar" style="width: 0%"
                    data-width="80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="mb-3 skill-item">
                <div class="d-flex justify-content-between text-white">
                  <span>Responsive Design</span>
                  <span>90%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-info progress-animate" role="progressbar" style="width: 0%"
                    data-width="90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="mb-3 skill-item">
                <div class="d-flex justify-content-between text-white">
                  <span>Git/Version Control</span>
                  <span>75%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-info progress-animate" role="progressbar" style="width: 0%"
                    data-width="75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  mounted() {
    // Animate progress bars
    setTimeout(() => {
      const progressBars = document.querySelectorAll('.progress-animate');
      progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
      });
    }, 500);

    // Add staggered animation to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
      item.style.animationDelay = `${0.3 + (index * 0.15)}s`;
    });
  }
}
</script>

<style scoped>
/* Base styles */
.about-me {
  color: white;
}

.profile-img-placeholder {
  width: 200px;
  height: 200px;
  margin: 0 auto;
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
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulseGlow {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }

  70% {
    box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animation classes */
.fade-in {
  animation: fadeIn 0.8s ease-in-out forwards;
  opacity: 0;
}

.fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
  opacity: 0;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  animation-delay: 0.2s;
}

.fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
  opacity: 0;
}

.fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
  opacity: 0;
}

.pulse-animation {
  animation: pulseGlow 2s infinite;
  transition: all 0.3s ease;
}

.slide-in {
  animation: slideIn 0.6s ease-out forwards;
  opacity: 0;
}

.delay-1 {
  animation-delay: 0.3s;
}

.delay-2 {
  animation-delay: 0.6s;
}

.delay-3 {
  animation-delay: 0.9s;
}

/* Progress bar animation */
.progress-bar {
  transition: width 1.2s ease-in-out;
}

.skill-item {
  opacity: 0;
  animation: fadeIn 0.8s ease-in-out forwards;
}

/* Hover effects */
.hover-effect {
  transition: all 0.3s ease;
}

.hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
}

.profile-img {
  height: 200px;
  width: 200px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.5s ease;
  position: relative;
}

.profile-img:hover {
  transform: scale(1.05);
}

.profile-image-circle {
  width: 100%;
  height: 135%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.3);
}
</style>