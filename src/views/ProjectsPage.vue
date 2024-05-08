<template>
  <div class="projects">
    <h1 class="projects-title">Projects</h1>
    <div class="projects-list">
      <div class="project-item" v-for="(project, index) in projects" :key="index">
        <img :src="project.image" :alt="project.name" class="project-image">
        <div class="project-details">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <a :href="project.link" class="project-link">View Project</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius justo ac orci luctus, eget vestibulum ligula sollicitudin.',
    image: 'project1.jpg',
    link: 'https://example.com/project1'
  },
  {
    name: 'Project 2',
    description: 'Sed luctus felis vel elit laoreet, nec bibendum purus dapibus. Nulla facilisi.',
    image: 'project2.jpg',
    link: 'https://example.com/project2'
  },
  // Add more projects as needed
];
</script>

<style scoped>
.projects {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.projects-title {
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
}

.projects-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.project-item {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-item:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px; /* Adjust as needed */
  object-fit: cover;
}

.project-details {
  padding: 20px;
}

.project-details h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #333;
}

.project-details p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 15px;
}

.project-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff4500;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: #e64000;
}

@media screen and (max-width: 768px) {
  .project-item {
    border-radius: 5px;
  }
}
</style>
