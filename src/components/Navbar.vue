<template>
  <Transition>
    <div id="navMenu" @click="menuBar">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </Transition>
</template>

<script>
export default {
  methods: {
    menuBar() {
      const navMenu = document.getElementById("navMenu");

      navMenu.classList.toggle("active");
    },
  },
};
</script>

<style>
#navMenu > span {
  display: block;
  width: 28px;
  height: 2px;
  border-radius: 9999px;
  background-color: black;
}
#navMenu > span:not(:last-child) {
  margin-bottom: 7px;
}
#navMenu,
#navMenu > span {
  transition: all 0.4s ease-in-out;
}
#navMenu.active {
  transition-delay: 0.8s;
}
#navMenu.active > span:nth-child(2) {
  width: 0;
}
#navMenu.active > span:nth-child(1),
#navMenu.active > span:nth-child(3) {
  transition-delay: 0.4s;
}
#navMenu.active > span:nth-child(1) {
  transform: translateY(9px);
}
#navMenu.active > span:nth-child(3) {
  transform: translateY(-9px) rotate(90deg);
}
</style>
