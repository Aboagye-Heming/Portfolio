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
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 40px 0;
  /* background-color: #f9f9f9; */
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
</style>
