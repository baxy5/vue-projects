<template>
  <h1>My tasks:</h1>
  <div class="tasks-container">
    <AddTask/>
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {AddTask}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tasks-container{
  display: inline-block;
  min-width: 400px;
  border-radius: 5px;
}
</style>
