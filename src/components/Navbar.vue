<template>
  <div class="container-fluid bg-indigo-500">
    <ul class="flex p-3">
      <li class="p-2 text-xl text-white">
        <router-link to="/"> Home </router-link>
      </li>
      <li class="p-2 text-xl text-white">
        <router-link to="About"> About </router-link>
      </li>
      <li class="p-2 text-xl text-white">
        <router-link to="/"> Projects </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  position: relative;
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #fff;
}

a::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

a:hover::before {
  transform: scaleX(1);
}
</style>
