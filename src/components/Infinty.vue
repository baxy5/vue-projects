<script>
export default {};
</script>

<template>
  <h1 class="infinity">Adaptics</h1>
  <img
    src="@/assets/navigation.png"
    height="100"
    width="100"
    class="infinity"
  />
  <img src="@/assets/world.png" height="100" width="100" class="infinity" />
</template>

<style>
.infinity {
  animation: infinity 5s linear infinite;
  text-shadow: 2px 2px;
}
@keyframes infinity {
  0% {
    transform: rotate3d(0, 1, 0, 0deg);
  }
  50% {
    transform: rotate3d(0, 1, 0, 180deg);
  }
  100% {
    transform: rotate3d(0, 1, 0, 0deg);
  }
}
</style>
