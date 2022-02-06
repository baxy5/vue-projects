<template>
  <div class="container">
    <Input/>
    <Weather/>
  </div> 
</template>

<script>
import Input from './components/Input.vue'
import Weather from './components/Weather.vue'

export default {
  name: 'App',
  components: {Input, Weather}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: rgb(143, 39, 39);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url(./assets/background.jpg);
  color: #bcbec0;
  height: 100%;
}

.container{
  display: inline-block;
  max-width: 500px;
}
</style>
