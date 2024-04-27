<template>
  <div>
    <div>
      <h3>My Tech Stack</h3>
      <p>Technologies I have been working with</p>
    </div>
    <div class="stack">
      <div class="skill">
        <img src="../assets/images/html 5.png" alt="html logo" />
        <p>HTML</p>
      </div>
      <div class="skill">
        <img src="../assets/images/css.png" alt="css logo" />
        <p>CSS</p>
      </div>
      <div class="skill">
        <img src="../assets/images/js.png" alt="javascript logo" />
        <p>Javascript</p>
      </div>
      <div class="skill">
        <img src="../assets/images/react.png" alt="react logo" />
        <p>React</p>
      </div>
      <div class="skill vue">
        <img src="../assets/images/next-js-logo.png" alt="next logo" />
        <p>Next js</p>
      </div>
      <div class="skill vue">
        <img src="../assets/images/vue logo.png" alt="vue.js logo" />
        <p>Vue</p>
      </div>
      <div class="skill vue">
        <img src="../assets/images/ionic-logo.png" alt="Ionic logo" />
        <p>Ionic Vue</p>
      </div>
      <div class="skill">
        <img src="../assets/images/bootstrap.png" alt="Bootstrap logo" />
        <p>Bootstrap</p>
      </div>
      <div class="skill">
        <img src="../assets/images/tailwind.png" alt="TailwindCss logo" />
        <p>Tailwind CSS</p>
      </div>
      <div class="skill">
        <img src="../assets/images/sass.png" alt="Sass logo" />
        <p>Sass</p>
      </div>
      <div class="skill vue">
        <img src="../assets/images/figma-logo.png" alt="Figma logo" />
        <p>Figma</p>
      </div>
      <div class="skill">
        <img src="../assets/images/vscode.png" alt="vs code logo" />
        <p>VS code</p>
      </div>
      <div class="skill">
        <img src="../assets/images/git.png" alt="Git logo" />
        <p>Git</p>
      </div>
      <div class="skill">
        <img src="../assets/images/github.png" alt="Github logo" />
        <p>Github</p>
      </div>
      <div class="skill vue">
        <img src="../assets/images/bitbucket-logo.png" alt="BitBucket logo" />
        <p>BitBucket</p>
      </div>
      
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.stack {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.skill {
  text-align: center;
  margin: 2rem 2rem;
}
.skill img {
  margin-bottom: 1rem;
}
.vue img {
  width: 100px;
  height: 100px;
}
</style>
