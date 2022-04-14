<script>
import Infinty from "./components/Infinty.vue";

export default {
  name: "App",
  components: { Infinty },
  data() {
    return {
      fadeInElements: "",
    };
  },
  methods: {
    fadeIn() {
      window.addEventListener("scroll", () => {
        for (let i = 0; i < this.fadeInElements.length; i++) {
          let elem = this.fadeInElements[i];
          let distInView =
            elem.getBoundingClientRect().top - window.innerHeight + 400;

          if (distInView < 0) {
            elem.classList.add("fadeIn");
          } else {
            elem.classList.remove("fadeIn");
            document.getElementsByClassName("container").style.opacity = 0;
          }
        }
      });
    },
  },
  mounted() {
    this.fadeInElements = Array.from(
      document.getElementsByClassName("container")
    );
    this.fadeIn();
  },
};
</script>

<template>
  <Infinty />
  <div class="container">
    <div class="text-container">
      <h1>FADE SCROLL</h1>
    </div>
  </div>
  <div class="container">
    <div class="text-container">
      <h1>FADE SCROLL</h1>
    </div>
  </div>
  <div class="container">
    <div class="text-container">
      <h1>FADE SCROLL</h1>
    </div>
  </div>
  <div class="container">
    <div class="text-container">
      <h1>FADE SCROLL</h1>
    </div>
  </div>
  <div class="container">
    <div class="text-container">
      <h1>FADE SCROLL</h1>
    </div>
  </div>
  <div class="container">
    <div class="text-container">
      <h1>FADE SCROLL</h1>
    </div>
  </div>
  <div class="container">
    <div class="text-container">
      <h1>FADE SCROLL</h1>
    </div>
  </div>
  <div class="container">
    <div class="text-container">
      <h1>FADE SCROLL</h1>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.container {
  height: 50vh;
  border: 2px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  webkit-transform: translateY(50px) rotate(-5deg) translateZ(0);
  transform: translateY(50px) rotate(-5deg) translateZ(0);
  -webkit-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  opacity: 0;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}
.fadeIn {
  opacity: 1;
  -webkit-transform: translateY(0px) rotate(0deg) translateZ(0);
  transform: translateY(0px) rotate(0deg) translateZ(0);
}
.text-container {
  background-color: tomato;
  padding: 10px;
}
</style>
