<template>
  <div>
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="nav-logo">Logo</router-link>
        <div class="menu-icon" @click="toggleMenu">
          <!-- <i
            :class="{ 'fas fa-times': isMenuOpen, 'fas fa-bars': !isMenuOpen }"
          ></i> -->
          Menu
        </div>
        <ul :class="{ 'nav-menu active': isMenuOpen, 'nav-menu': !isMenuOpen }">
          <li class="nav-item">
            <router-link to="/" class="nav-links" @click="closeMenu"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-links" @click="closeMenu"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/skills" class="nav-links" @click="closeMenu"
              >Skills</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-links" @click="closeMenu"
              >Projects</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-links" @click="closeMenu"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<style scoped>
.navbar {
  background: #333;
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
  color: #fff;
  font-size: 24px;
  cursor: pointer;
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
    background: #333;
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
