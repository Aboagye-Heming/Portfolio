<template>
  <div class="projects">
    <h1 class="projects-title">Projects</h1>
    <div class="projects-list">
      <div
        class="project-item"
        v-for="(project, index) in projects"
        :key="index"
      >
        <img
          :src="require(`../assets/images/${project.image}`)"
          :alt="project.name"
          class="project-image"
        />
        <div class="project-details">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <a
            v-if="
              project.name !== 'Sparse Proximity Syndicate Application' &&
              project.name !== 'Forecourt Management System'
            "
            :href="project.link"
            class="project-link"
            >View Project</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: "PlugDrive Web and Mobile",
    description:
      "PlugDrive is a  comprehensive web and mobile application designed to provide an OCPP(Open Charge Point Protocol) platform,supporting versions 1.6 and 2.0. This platform is tailored for managing electric vehicle charging Terminals, catering to both operators and drivers of electric cars.",
    image: "plug-drive.jpg",
    link: "https://www.linkedin.com/company/plugdrive-app/",
  },
  {
    name: "Forecourt Management System",
    description:
      "The Forecourt Management System is designed to assist businesses in the fuel industry with managing and optimizing their operations.This system includes inventory management,remote monitoring,real-time reporting and other automated processes to enhance efficiency and productivity. ",
    image: "fms.png",
    // link: "https://www.linkedin.com/company/plugdrive-app/",
  },
  {
    name: "Sparse Proximity Syndicate Application",
    description:
      "Sparse Proximity Syndicate (SPS) is a cutting-edge application that revolutionizes the payment and transaction process by offering unparalleled speed and convenience using biometric authentication with your palm.",
    image: "sps.png",
    // link: "https://www.linkedin.com/company/plugdrive-app/",
  },
  {
    name: "Pomodoro App",
    description:
      "Pomodoro App is a productivity tool based on the Pomodoro Technique, helping users manage their time and tasks effectively by breaking work into intervals separated by short breaks.",
    image: "pomodoro.jpg",
    link: "https://pomodoroheming.netlify.app/",
  },
  {
    name: "Countries Theme Switcher",
    description:
      "Countries Theme Switcher is a web application that allows users to explore countries around the world while dynamically changing the theme based on their preferences.",
    image: "countries.jpg",
    link: "https://countrieswithcolorthemeswitcher.netlify.app/",
  },
  {
    name: "Weather App",
    description:
      "The Weather App is a web application built with Vue.js that enables users to retrieve current weather information and a 4-day forecast for any city worldwide. Leveraging the OpenWeatherMap API, this app provides real-time weather data with a user-friendly interface.",
    image: "weather-icon-set-vector.jpg",
    link: "https://weather-app-321real-time.netlify.app/",
  },
];
</script>

<style scoped>
.projects {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

.projects-title {
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
}

.projects-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.project-item {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  margin-bottom: 1rem;
}

.project-item:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-details {
  padding: 20px;
}

.project-details h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #fff;
}

.project-details p {
  font-size: 1rem;
  color: #fff;
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

@media screen and (min-width: 769px) {
  .project-image {
    height: 300px;
  }
}
</style>
