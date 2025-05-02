<template>
  <div class="about-me">
    <h1 class="mb-4">About Me</h1>

    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body text-center">
            <div class="profile-img-container mb-3">
              <div class="profile-img"
                style="height: 200px; width: 200px; margin: 0 auto; overflow: hidden; border-radius: 50%;">
                <img src="@/assets/images/1.jpg" alt="Muhammad Abi Rafdi" class="img-fluid"
                  style="width: 100%; height: 136%; object-fit: cover;">
              </div>
            </div>
            <h3>Muhammad Abi Rafdi</h3>
            <p class="text-muted">Frontend Developer</p>
            <div class="social-links mt-3">
              <a href="#" class="btn btn-outline-dark me-2"><i class="bi bi-github"></i></a>
              <a href="#" class="btn btn-outline-primary me-2"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="btn btn-outline-info"><i class="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title">My Story</h3>
            <p>Hello! I'm Abi, a passionate frontend developer with over 3 years of experience in creating dynamic web
              applications. My journey in web development began during my college years when I built my first website
              using HTML and CSS.</p>
            <p>Since then, I've expanded my skills to include modern JavaScript frameworks like Vue.js. I'm particularly
              enthusiastic about building intuitive user interfaces and creating seamless user experiences.</p>
            <p>When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting
              with new coffee brewing methods.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Skills</h3>
            <div class="row">
              <div class="col-md-6">
                <h5>Technical Skills</h5>
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <span>HTML/CSS</span>
                    <span>95%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 95%" aria-valuenow="95"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <span>JavaScript</span>
                    <span>90%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 90%" aria-valuenow="90"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <span>Vue.js</span>
                    <span>85%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 85%" aria-valuenow="85"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h5>Additional Skills</h5>
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <span>UI/UX Design</span>
                    <span>80%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-info" role="progressbar" style="width: 80%" aria-valuenow="80"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <span>Responsive Design</span>
                    <span>90%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-info" role="progressbar" style="width: 90%" aria-valuenow="90"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <span>Git/Version Control</span>
                    <span>75%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
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
  name: 'AboutMe'
}
</script>

<style scoped>
.profile-img-placeholder {
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
</style>