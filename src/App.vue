<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  methods: {},
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
