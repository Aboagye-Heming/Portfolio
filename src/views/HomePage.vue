<template>
  <div class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Hi there, I'm</h1>
      <h2 class="hero-name">Kwabena Aboagye-Heming</h2>
      <h3 class="hero-subtitle">Software Developer</h3>
      <p class="hero-description">Specializing in Web and Mobile Development</p>
      <router-link to="/portfolio" class="hero-cta">View Portfolio</router-link>
    </div>
    <div class="hero-image">
      <!-- Your image goes here -->
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 88vh;
  flex-wrap: wrap;
}

.hero-content {
  text-align: center;
}

.hero-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.hero-name {
  font-size: 3rem;
  color: #000;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #555;
  font-weight: normal;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.hero-cta {
  display: inline-block;
  background-color: #ff4500;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1.2rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.hero-cta:hover {
  background-color: #e64000;
}

.hero-image {
  /* Add styles for your image container */
}
</style>
