<template>
  <div>
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="nav-logo">Heming</router-link>
        <div
          class="menu-icon"
          :class="{ active: isMenuOpen }"
          @click="toggleMenu"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <ul :class="{ 'nav-menu active': isMenuOpen, 'nav-menu': !isMenuOpen }">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-links"
              @click="closeMenu"
              :class="{ active: $route.path === '/' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-links"
              @click="closeMenu"
              :class="{ active: $route.path === '/about' }"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/skills"
              class="nav-links"
              @click="closeMenu"
              :class="{ active: $route.path === '/skills' }"
              >Skills</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/projects"
              class="nav-links"
              @click="closeMenu"
              :class="{ active: $route.path === '/projects' }"
              >Projects</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/contact"
              class="nav-links"
              @click="closeMenu"
              :class="{ active: $route.path === '/contact' }"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function handleClickOutside(event) {
  if (isMenuOpen.value && !event.target.closest(".navbar-container")) {
    closeMenu();
  }
}

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.navbar {
  background-color: #1e272e;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
}

.nav-logo {
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
}

.menu-icon {
  display: none;
  cursor: pointer;
  width: 30px;
  height: 20px;
  position: relative;
}

.bar {
  width: 100%;
  height: 2px;
  background-color: #fff;
  position: absolute;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.bar:nth-child(1) {
  top: 0;
  transform: translateY(-5px) rotate(0deg);
}

.bar:nth-child(2) {
  top: 8px;
  transform: translateY(0px) rotate(0deg);
}

.bar:nth-child(3) {
  top: 16px;
  transform: translateY(5px) rotate(0deg);
}

.menu-icon.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-icon.active .bar:nth-child(2) {
  opacity: 0;
}

.menu-icon.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.nav-menu {
  display: flex;
  list-style: none;
}

.nav-item {
  margin-right: 24px;
}

.nav-links {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-links:hover {
  color: #ff4500;
}

.active {
  font-weight: bold;
  color: #ff4500;
}

@media screen and (max-width: 960px) {
  .menu-icon {
    display: block;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 39vh;
    position: absolute;
    top: 60px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }

  .nav-menu.active {
    background-color: #1e272e;
    left: 0;
    opacity: 1;
    z-index: 1;
  }

  .nav-item {
    width: 100%;
    margin-right: 0;
    margin-top: 30px;
  }

  .nav-links {
    text-align: center;
    padding: 16px;
  }
}
</style>
