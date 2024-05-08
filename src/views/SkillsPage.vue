<template>
  <div class="container">
    <div class="about-section">
      <h3>My Tech Stack</h3>
      <p>Technologies I have been working with</p>
    </div>
    <div class="stack">
      <div class="skill" v-for="(skill, index) in skills" :key="index">
        <img
          :src="require(`../assets/images/${skill.image}`)"
          :alt="skill.name"
          class="skill-img"
        />
        <p>{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  { name: "HTML", image: "html 5.png" },
  { name: "CSS", image: "css.png" },
  { name: "JavaScript", image: "js.png" },
  { name: "React", image: "react.png" },
  { name: "Next.js", image: "next-js-logo.png" },
  { name: "Vue", image: "vue logo.png" },
  { name: "Ionic Vue", image: "ionic-logo.png" },
  { name: "Bootstrap", image: "bootstrap.png" },
  { name: "Tailwind CSS", image: "tailwind.png" },
  { name: "Sass", image: "sass.png" },
  { name: "Figma", image: "figma-logo.png" },
  { name: "VS Code", image: "vscode.png" },
  { name: "Git", image: "git.png" },
  { name: "GitHub", image: "github.png" },
  { name: "BitBucket", image: "bitbucket-logo.png" },
];
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-section {
  text-align: center;
  margin-bottom: 2rem;
}

.stack {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.skill {
  text-align: center;
  margin: 2rem 2rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.skill:hover {
  transform: translateY(-15px);
}

.skill img {
  margin-bottom: 1rem;
  width: 100px;
  height: 100px;
}

.skill p {
  margin: 0;
  font-size: 1.2rem;
}
</style>
