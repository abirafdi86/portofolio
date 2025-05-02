<template>
  <div class="about-us">
    <h1 class="mb-4">About Our Team</h1>
    
    <div class="card mb-5">
      <div class="card-body">
        <h3 class="card-title mb-4">Our Story</h3>
        <p>Founded in 2020, our creative studio has been on a mission to deliver exceptional digital experiences that make a difference. What started as a small team of passionate individuals has now grown into a diverse group of talented professionals committed to pushing the boundaries of web development and design.</p>
        <p>We believe in the power of collaboration, innovation, and continuous learning. Our team combines technical expertise with creative thinking to solve complex problems and create solutions that exceed client expectations.</p>
        <p>Over the years, we've had the privilege of working with clients across various industries, from startups to established enterprises, helping them achieve their digital goals and make a meaningful impact in their respective fields.</p>
      </div>
    </div>
    
    <h2 class="mb-4">Our Team</h2>
    
    <div class="row">
      <div class="col-md-4 mb-4" v-for="(member, index) in teamMembers" :key="index">
        <div class="card h-100">
          <div class="team-img-placeholder bg-secondary text-white d-flex align-items-center justify-content-center" style="height: 250px;">
            <span class="display-6">{{ member.initials }}</span>
          </div>
          <div class="card-body text-center">
            <h4 class="card-title">{{ member.name }}</h4>
            <p class="text-muted">{{ member.role }}</p>
            <p class="card-text">{{ member.bio }}</p>
            <div class="social-links mt-3">
              <a href="#" class="btn btn-sm btn-outline-dark me-1"><i class="bi bi-github"></i></a>
              <a href="#" class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="btn btn-sm btn-outline-info"><i class="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <h2 class="mb-4 mt-5">Our Values</h2>
    
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="text-center mb-3">
              <div class="value-icon bg-primary text-white d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style="width: 80px; height: 80px;">
                <span class="h3 mb-0">🚀</span>
              </div>
            </div>
            <h4 class="card-title text-center">Innovation</h4>
            <p class="card-text">We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the competition.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="text-center mb-3">
              <div class="value-icon bg-primary text-white d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style="width: 80px; height: 80px;">
                <span class="h3 mb-0">🤝</span>
              </div>
            </div>
            <h4 class="card-title text-center">Collaboration</h4>
            <p class="card-text">We believe in the power of teamwork and work closely with our clients to understand their needs and deliver tailored solutions.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="text-center mb-3">
              <div class="value-icon bg-primary text-white d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style="width: 80px; height: 80px;">
                <span class="h3 mb-0">💡</span>
              </div>
            </div>
            <h4 class="card-title text-center">Excellence</h4>
            <p class="card-text">We are committed to delivering high-quality work with attention to detail, ensuring that every project exceeds expectations.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card mt-5">
      <div class="card-body">
        <h3 class="card-title mb-4">Get in Touch</h3>
        <p>Interested in working with us? We'd love to hear from you! Send us a message, and we'll get back to you as soon as possible.</p>
        <div class="row mt-4">
          <div class="col-md-6 mb-4">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="nameInput" placeholder="Your Name">
              <label for="nameInput">Your Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="emailInput" placeholder="Your Email">
              <label for="emailInput">Your Email</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="subjectInput" placeholder="Subject">
              <label for="subjectInput">Subject</label>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="form-floating mb-3">
              <textarea class="form-control" id="messageInput" placeholder="Your Message" style="height: 150px"></textarea>
              <label for="messageInput">Your Message</label>
            </div>
            <div class="d-grid">
              <button class="btn btn-primary">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      teamMembers: [
        {
          name: 'Andi Budi',
          role: 'Founder & Lead Developer',
          bio: 'With over 10 years of experience in web development, Andi leads our technical team and oversees all project implementations.',
          initials: 'AB'
        },
        {
          name: 'Citra Dewi',
          role: 'UI/UX Designer',
          bio: 'Citra brings creativity and user-centered thinking to every project, ensuring our designs are both beautiful and functional.',
          initials: 'CD'
        },
        {
          name: 'Eko Faisal',
          role: 'Frontend Developer',
          bio: 'Specializing in modern JavaScript frameworks, Eko is passionate about creating seamless user experiences across devices.',
          initials: 'EF'
        }
      ]
    }
  }
}
</script>

<style scoped>
.team-img-placeholder, .value-icon {
  transition: transform 0.3s ease;
}

.card:hover .team-img-placeholder, 
.card:hover .value-icon {
  transform: scale(1.05);
}
</style>