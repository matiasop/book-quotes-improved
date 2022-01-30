<template>
  <nav>
    <div class="container">
      <h1>Book Quotes</h1>
      <div
        class="menu"
        :class="hamburgerIsActive ? 'hamburgerActive' : 'hamburgerNotActive'"
      >
        <router-link to="/">Home</router-link>
        <router-link to="/quotes">Quotes</router-link>
      </div>

      <button class="hamburger is-active" @click="toggleHamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data: function () {
    return {
      hamburgerIsActive: true,
    };
  },
  methods: {
    toggleHamburger() {
      this.hamburgerIsActive = !this.hamburgerIsActive;
    },
  },
});
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond&family=Montserrat:wght@900&display=swap");
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
body {
  margin-top: 100px;
  font-family: "EB Garamond", serif;
  font-size: 2rem;
}

.container {
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  color: #fff;
  /* font-family: "Montserrat", sans-serif; */
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: gray;
  padding: 16px 32px;
  border-bottom: 3px solid yellowgreen;
}

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

.menu {
  /* display: none; */
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  justify-content: flex-end;
  margin: 0 -16px;
}

.menu a {
  color: #fff;
  margin: 0 16px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.4s;
  padding: 8px 16px;
  border-radius: 99px;
}

.menu a.is-active,
.menu a:hover {
  background-color: lightsalmon;
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
  .menu {
    flex-direction: row;
  }
  .menu a {
    display: block;
  }
}

.hamburgerActive {
  display: none;
}

.hamburgerNotActive {
  display: block;
}
</style>
