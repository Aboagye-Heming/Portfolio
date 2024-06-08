<template>
  <div class="about">
    <div class="container">
      <h1 class="about-title">About Me</h1>
      <div class="about-content">
        <p>
          Hello, I'm Kwabena Aboagye-Heming, a dedicated software developer with
          a passion for crafting exceptional web and mobile solutions. With a
          solid background in programming and several years of hands-on
          experience, I have honed my skills to deliver high-quality software
          tailored to meet the unique needs of clients and users alike.
        </p>
        <br />
        <p>
          My journey in the world of technology has equipped me with proficiency
          in various programming languages and frameworks, including HTML/CSS,
          JavaScript, Vue.js, React, and more. I am committed to continuous
          learning and staying abreast of the latest advancements in the field,
          ensuring that my work remains at the forefront of innovation.
        </p>
        <br />
        <p>
          Beyond coding, I find joy in exploring the great outdoors, delving
          into new technologies, and engaging in lifelong learning endeavors. I
          firmly believe in the power of collaboration and am always eager to
          collaborate with like-minded individuals to tackle exciting challenges
          and bring innovative ideas to life.
        </p>
        <div class="social-links">
          <a
            href="https://www.linkedin.com/in/kwaheming/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            >LinkedIn</a
          >
          <a
            href="https://github.com/Aboagye-Heming"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            >Github</a
          >
          <a
            href="https://twitter.com/kwabena_heming"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            >Twitter</a
          >
        </div>
      </div>

      <div class="accordion">
        <input type="checkbox" id="accordion-1" class="accordion-checkbox" />
        <label for="accordion-1" class="accordion-heading"
          >Reviews <span class="accordion-icon">▼</span></label
        >
        <div class="accordion-content">
          <div v-for="(review, index) in reviews" :key="index" class="review">
            <div class="review-text">
              <p class="review-text-main">{{ review.text }}</p>
              <h4 class="review-author">
                {{ review.author }}
              </h4>
              <p>{{ review.title }}</p>
            </div>
            <img :src="review.image" alt="Reviewer" class="reviewer-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const reviews = ref([
  {
    text: "Kwabena is an exceptional developer with a keen eye for detail. His dedication to his craft and ability to deliver outstanding results make him a valuable asset to any team.",
    author: "Gideon Assafuah",
    title: "Senior Software Developer",
    image: require("@/assets/images/myImage.jpg"),
  },
  {
    text: "I've had the pleasure of working with Kwabena on several projects, and I'm continually impressed by his professionalism and expertise. He consistently goes above and beyond to ensure project success.",
    author: "Enoch Sutherland",
    title: "Chief Technical Officer",
    image: require("@/assets/images/myImage.jpg"),
  },
]);
</script>

<style scoped>
.about {
  padding: 40px 0;
  background-color: #1e272e;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-title {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
}

.about-content {
  font-size: 1.1rem;
  color: #fff;
  line-height: 1.6;
  text-align: justify;
}

.social-links {
  margin-top: 20px;
  text-align: center;
}

.social-link {
  display: inline-block;
  margin-right: 20px;
  color: #ff4500;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #ff4500;
}

/* Accordion styles */
.accordion {
  margin-top: 40px;
}

.accordion-checkbox {
  display: none;
}

.accordion-heading {
  cursor: pointer;
  font-size: 1.5rem;
  color: #ff4500;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-icon {
  transition: transform 0.3s ease;
}

.accordion-checkbox:checked + .accordion-heading .accordion-icon {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion-checkbox:checked + .accordion-heading + .accordion-content {
  max-height: 1000px;
}

.review {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.reviewer-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 15px;
  transition: transform 0.3s ease;
}

.review:hover .reviewer-image {
  transform: scale(1.1);
}

.review-text {
  font-style: italic;
}
.review-text-main{
  max-width: 40rem;
  margin-bottom: 0.6rem;
}

.review-author {
  margin-top: 5px;
  font-weight: bold;
}
</style>
