<template>
  <div class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Hi there, I'm</h1>
      <h2 class="hero-name">Kwabena Aboagye-Heming</h2>
      <h3 class="hero-subtitle">Software Developer</h3>
      <p class="hero-description">Specializing in Web and Mobile Development</p>
     
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

<script setup></script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 88vh;
  flex-wrap: wrap;
  background-color: #1e272e;
  color: #fff;
  padding: 0 20px;
}

.hero-content {
  text-align: center;
  flex: 1 1 40%;
  min-width: 300px;
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



.hero-image {
  flex: 1 1 40%;
  display: flex;
  justify-content: center;
  min-width: 300px;
}

.hero-img {
  width: 100%;
  max-width: 580px;
  height: auto;
  border-radius: 2rem;
  transition: transform 1.5s ease;
}

.hero-img:hover {
  transform: rotateY(180deg);
}
</style>
