<template>
  <div class="about">
    <div class="container">
      <h1 class="about-title">About Me</h1>
      <div class="about-content">
        <p>
          My name is Kwabena Aboagye-Heming, and I am a passionate software
          developer specializing in web and mobile development. With several years
          of experience in the industry, I have a proven track record of
          delivering high-quality solutions to meet client needs.
        </p>
        <p>
          I have expertise in a variety of programming languages and frameworks,
          including HTML/CSS, JavaScript, Vue.js, React, Node.js, and more. I am
          dedicated to staying up-to-date with the latest technologies and best
          practices to ensure that my work is always cutting-edge.
        </p>
        <p>
          Outside of coding, I enjoy spending time outdoors, exploring new
          technologies, and continuous learning. I believe in the power of
          collaboration and am always eager to work with others to tackle
          interesting challenges.
        </p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn</a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" class="social-link">Twitter</a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" class="social-link">Instagram</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.about {
  padding: 40px 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.about-content {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.social-links {
  margin-top: 20px;
  text-align: center;
}

.social-link {
  display: inline-block;
  margin-right: 20px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #ff4500;
}
</style>
