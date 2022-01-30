<template>
  <nav class="navbar">
    <router-link to="/" class="logo">logo</router-link>
    <span class="navbar-toggle" id="js-navbar-toggle">
      <button class="fas fa-bars hamburger" @click="toggleNavbar">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </span>
    <ul class="main-nav" id="js-menu">
      <li><router-link class="nav-links" to="/">Home</router-link></li>
      <li><router-link class="nav-links" to="/quotes">Quotes</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    toggleNavbar() {
      console.log("hambur");
      const mainNav = document.getElementById("js-menu");
      mainNav.classList.toggle("active");
    },
  },
});
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: "Josefin Sans", sans-serif;
}
.navbar {
  font-size: 18px;
  background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
}
.main-nav {
  list-style-type: none;
}
.nav-links,
.logo {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
}

.main-nav li {
  text-align: center;
  margin: 15px auto;
}
.logo {
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
}

.navbar-toggle {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
}

.main-nav {
  list-style-type: none;
  display: none;
}

.active {
  display: block;
}

/* hamburger */
.hamburger {
  display: block;
  position: relative;
  z-index: 1;
  user-select: none;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}
.hamburger span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background-color: lightgreen;
  border-radius: 6px;
  z-index: 1;
  transform-origin: 0 0;
  transition: 0.4s;
}

@media screen and (min-width: 768px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
  .main-nav {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
  .main-nav li {
    margin: 0;
  }
  .nav-links {
    margin-left: 40px;
  }
  .logo {
    margin-top: 0;
  }
  .navbar-toggle {
    display: none;
  }
  .logo:hover,
  .nav-links:hover {
    color: rgba(255, 255, 255, 1);
  }
}
</style>
