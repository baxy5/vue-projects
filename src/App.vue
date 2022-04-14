<template>
  <Navbar />
  <!-- <FancyBtn> Surpass your limits right here, right now! </FancyBtn> -->
  <div class="image-container">
    <EnlargeImage
      src="https://dane-iracleous-portfolio.s3-us-west-2.amazonaws.com/stock/demo1_small.jpg"
    />
  </div>
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import FancyBtn from "./components/FancyBtn.vue";
import EnlargeImage from "./components/enlarge-image.vue";

export default {
  components: {
    Navbar,
    FancyBtn,
    EnlargeImage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.image-container {
  display: flex;
}
</style>
