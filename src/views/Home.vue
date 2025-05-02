<template>
  <div class="home">
    <div class="jumbotron bg-light p-5 rounded-3">
      <h1 class="display-4">Welcome to My Portfolio</h1>
      <p class="lead">I'm a passionate web developer specializing in Vue.js and modern front-end technologies</p>
      <hr class="my-4">
      <p>Check out my projects and get in touch if you'd like to collaborate!</p>
      <router-link to="/project" class="btn btn-primary btn-lg">View Projects</router-link>
    </div>

    <div class="row mt-5">
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Web Development</h5>
            <p class="card-text">Creating responsive and dynamic web applications using modern frameworks and technologies.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">UI/UX Design</h5>
            <p class="card-text">Designing intuitive and engaging user interfaces with a focus on user experience.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Fix & Bugs</h5>
            <p class="card-text">Identifying, tracking, and resolving software bugs to ensure optimal performance, stability, and user experience across all platforms.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-5">
      <h2>Let's Create Something Amazing Together</h2>
      <p class="lead">Have a project in mind? Get in touch and let's discuss how we can collaborate.</p>
      <a href="mailto:abiamuba8622@gmail.com" class="btn btn-outline-primary">Contact Me</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>