<template>
  <footer class="bg-dark text-white py-4 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5>My Portfolio</h5>
          <p>A showcase of my works and skills.</p>
        </div>
        <div class="col-md-3">
          <h5>Links</h5>
          <ul class="list-unstyled">
            <li><router-link class="text-white" to="/">Home</router-link></li>
            <li><router-link class="text-white" to="/about-me">About Me</router-link></li>
            <li><router-link class="text-white" to="/project">Projects</router-link></li>
            <li><router-link class="text-white" to="/gallery">Gallery</router-link></li>
            <li><router-link class="text-white" to="/about-us">About Us</router-link></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5>Connect</h5>
          <ul class="list-unstyled">
            <li><a href="https://github.com/abirafdi86" class="text-white" target="_blank"
                rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/muhammad-abi-rafdi-3a84231b8" class="text-white" target="_blank"
                rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/abi_rafdiii/" class="text-white" target="_blank"
                rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col text-center">
          <p class="mb-0">&copy; {{ new Date().getFullYear() }} Muhammad Abi Rafdi. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>