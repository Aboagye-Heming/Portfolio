<template>
  <div class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Hi there, I'm</h1>
      <h2 class="hero-name">Kwabena Aboagye-Heming</h2>
      <h3 class="hero-subtitle">Software Developer</h3>
      <p class="hero-description">Specializing in Web and Mobile Development</p>
      <a href="../assets/pdf/HemingCV.pdf" download class="hero-cta"
        >Download Resume</a
      >
    </div>
    <div class="hero-image">
      <img
        src="../assets/images/myImage.jpg"
        alt="Heming's Image"
        class="hero-img"
      />
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 88vh;
  flex-wrap: wrap;
  background-color: #1e272e;
  color: #fff;
}

.hero-content {
  text-align: center;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #ff5722;
}

.hero-name {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-cta {
  display: inline-block;
  background-color: #ff5722;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1.2rem;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.hero-cta:hover {
  background-color: #ff7043;
  transform: scale(1.05);
}

.hero-img {
  width: 100%;
  max-width: 580px;
  height: auto;
  border-radius: 2rem;
}

</style>
