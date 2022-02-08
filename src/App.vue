<template>
  <div class="container">
    <input type="text" placeholder="Search for..." v-model="query">
    <WeatherUI :query="query" />
  </div> 
</template>

<script>
import WeatherUI from './components/WeatherUI.vue'

export default {
  name: 'App',
  components: {WeatherUI},
  data(){
    return {
      query: '',
    }
  }
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
