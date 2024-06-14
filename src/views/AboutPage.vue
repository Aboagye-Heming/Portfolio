<template>
  <div class="about">
    <div class="container">
      <div class="profile">
        <h3>About Me</h3>
        <br />
        <p>
          Hi there! I'm Kwabena Aboagye-Heming, a proactive Frontend Developer with a passion for creating dynamic and responsive web and mobile applications. I specialize in using modern frameworks like Vue.js, React, React Native, and Ionic Vue to deliver seamless user experiences.
        </p>
        <br />
        <p>
          I thrive on challenges and am enthusiastic about transitioning to full-stack development. My problem-solving skills, coupled with a focus on performance optimization, allow me to tackle complex problems efficiently.
        </p>
        <p>
          With a keen eye for UI/UX design, I ensure that every project I work on not only meets but exceeds user expectations. I have experience collaborating with cross-functional teams and communicating technical details effectively to stakeholders.
        </p>
        <br />
        <p>
          Outside of work, I'm always seeking opportunities to expand my skills and stay updated with the latest frontend development trends. Let's collaborate and bring your ideas to life!
        </p>
        <div class="resume-button-container">
          <a href="../assets/pdf/KWABENA_ABOAGYE-HEMING_resume.pdf" download class="hero-cta">Download Resume</a>
        </div>
      </div>

      <div class="employment-history">
        <input type="checkbox" id="accordion-4" class="accordion-checkbox" />
        <label for="accordion-4" class="accordion-heading">Employment History <span class="accordion-icon">▼</span></label>
        <div class="accordion-content">
          <div class="job" v-for="(job, index) in employmentHistory" :key="index">
            <h4>{{ job.title }}</h4>
            <p class="job-date">{{ job.date }}</p>
            <ul>
              <li v-for="(task, index) in job.tasks" :key="index" class="fade-scroll">
                {{ task }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="freelancing">
        <input type="checkbox" id="accordion-5" class="accordion-checkbox" />
        <label for="accordion-5" class="accordion-heading">Freelancing <span class="accordion-icon">▼</span></label>
        <div class="accordion-content">
          <p class="freelancing-text fade-scroll">
            I have also been doing freelancing work, collaborating with various clients on web and mobile development projects. Responsibilities include:
          <ul>
            <li>Working closely with clients to understand their requirements and deliver tailored solutions.</li>
            <li>Developing responsive and scalable web and mobile applications.</li>
            <li>Providing ongoing support and maintenance for existing projects.</li>
          </ul>
          </p>
        </div>
      </div>

      <div class="education">
        <input type="checkbox" id="accordion-2" class="accordion-checkbox" />
        <label for="accordion-2" class="accordion-heading">Education <span class="accordion-icon">▼</span></label>
        <div class="accordion-content">
          <ul>
            <li v-for="(edu, index) in educationList" :key="index" class="fade-scroll">
              {{ edu }}
            </li>
          </ul>
        </div>
      </div>

      <div class="certification">
        <input type="checkbox" id="accordion-3" class="accordion-checkbox" />
        <label for="accordion-3" class="accordion-heading">Certification <span class="accordion-icon">▼</span></label>
        <div class="accordion-content">
          <ul>
            <li v-for="(cert, index) in certificationList" :key="index" class="fade-scroll">
              {{ cert }}
            </li>
          </ul>
        </div>
      </div>

      <div class="reviews">
        <input type="checkbox" id="accordion-1" class="accordion-checkbox" />
        <label for="accordion-1" class="accordion-heading">Reviews <span class="accordion-icon">▼</span></label>
        <div class="accordion-content">
          <div class="review fade-scroll" v-for="(review, index) in reviews" :key="index">
            <img :src="review.image" alt="Reviewer" class="reviewer-image" />
            <div class="review-text">
              <p class="review-text-main">{{ review.text }}</p>
              <h4 class="review-author">{{ review.author }}</h4>
              <h4 class="review-author">{{ review.title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const employmentHistory = ref([
  {
    title: "Product Developer, Sourcertz Technologies Limited, Ghana (Remote)",
    date: "September 2023 - Present",
    tasks: [
      "Frontend-Backend Integration: Collaborated with cross-functional teams to integrate frontend and backend infrastructure using Vue 2 & 3 and Firebase for real-time notifications.",
      "UI/UX Design Implementation: Translated complex UI designs into high-quality code, enhancing user interface and user experience with Vue.js.",
      "Mobile Development: Developed and maintained mobile applications using Ionic Vue, ensuring a consistent user experience across web and mobile platforms.",
      "Responsive Design & Compatibility: Implemented responsive design principles and ensured cross-browser compatibility using VueBootstrap, VueGoodTable, ApexChart, and Google Maps.",
      "Stakeholder Communication: Presented products to stakeholders, effectively communicating technical details and project progress.",
    ],
  },
  {
    title: "Frontend Developer, Harblot, Ghana (Remote)",
    date: "July 2023 - Present",
    tasks: [
      "Agile Development: Utilize Agile methodologies and participate in scrum meetings to ensure efficient project management.",
      "UI/UX Enhancements: Focus on UI/UX improvements, building a seamless user interface and experience.",
      "Continuous Learning: Engage in continuous learning to stay updated with the latest frontend development trends and best practices.",
      "Feature Development: Develop new features and maintain existing ones using React Native for mobile development and React for web development.",
      "Git CI/CD: Implement and maintain CI/CD pipelines using Git to ensure efficient and reliable deployment processes.",
    ],
  },
]);

const educationList = ref([
  "Software Development, Amalitech Ghana, Takoradi (November 2022 - September 2023)",
  "Front-End Engineer Career Path, Codeacademy (January 2023 - June 2023)",
  "BA Geography And Rural Development, Kwame Nkrumah University of Science and Technology, Kumasi (August 2015 - September 2019)",
]);

const certificationList = ref([
  "Legacy JavaScript Algorithms and Data Structures, FreecodeCamp (May 2024)",
  "Typescript, Codeacademy (April 2023 - May 2023)",
  "Vue.Js, Codeacademy (March 2023 - April 2023)",
  "Error Handling, Codeacademy (February 2023 - March 2023)",
  "Comprehensive Javscript, Codeacademy (December 2022 - March 2023)",
  "Responsive Web Design, Freecodecamp (October 2022 - November 2022)",
]);

const reviews = ref([
{
    text: "I've had the pleasure of working with Kwabena on several projects, and I'm continually impressed by his professionalism and expertise. He consistently goes above and beyond to ensure project success.",
    author: "Enoch Sutherland",
    image: require("@/assets/images/Enoch.jpg"),
    title: "CTO"
  },
  {
    text: "Kwabena is an exceptional developer with a keen eye for detail. His dedication to his craft and ability to deliver outstanding results make him a valuable asset to any team.",
    author: "Gideon Assafuah",
    image: require("@/assets/images/Gideon.jpg"),
    title: "Senior Developer"

  },
 
]);

let lastScrollY = window.scrollY;

const handleScroll = () => {
  const elements = document.querySelectorAll(".fade-scroll");
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

    if (isVisible) {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    } else {
      if (window.scrollY < lastScrollY) {
        element.classList.add("fade-in");
        element.classList.remove("fade-out");
      } else {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
      }
    }
  });

  lastScrollY = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

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
  margin-bottom: 20px;
  text-align: center;
}

.about-subtitle {
  font-size: 1.5rem;
  margin-bottom: 40px;
  text-align: center;
}
.profile h3 {
  cursor: pointer;
  font-size: 1.5rem;
  color: #ff4500;
}
.profile,
.employment-history,
.education,
.certification,
.reviews,
.freelancing {
  margin-bottom: 20px;
}

.job {
  margin-bottom: 20px;
}

h3 {
  color: #ff4500;
}

.job h4 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.job-date {
  color: #666;
  margin-bottom: 10px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

li {
  margin-bottom: 5px;
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
  margin-top: 1.2rem;
  text-align: center;
}

.hero-cta:hover {
  background-color: #ff7043;
  transform: scale(1.05);
}

.review {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.reviewer-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 15px;
}

.review-text {
  font-style: italic;
}

.review-text-main {
  max-width: 40rem;
  margin-bottom: 1rem;
}

.review-author {
  margin-top: 5px;
  font-weight: bold;
}

.freelancing-text {
  margin-top: 20px;
}

/* Accordion styles */
.accordion-heading {
  cursor: pointer;
  font-size: 1.5rem;
  color: #ff4500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.accordion-icon {
  transition: transform 1.14s ease;
}

.accordion-checkbox {
  display: none;
}

.accordion-checkbox:checked + .accordion-heading .accordion-icon {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.74s ease;
}

.accordion-checkbox:checked + .accordion-heading + .accordion-content {
  max-height: 1000px;
}

/* Animation */
.fade-scroll {
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform: translateY(20px);
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.fade-out {
  opacity: 0;
  transform: translateY(20px);
}

/* Resume Button Container */
.resume-button-container {
  display: flex;
  justify-content: center;
}
</style>
