<template>
  <div class="container-fluid flex justify-center bg-indigo-300 p-5">
    <div class="container-fluid">
      <div class="container p-5">
        <p>State value: {{ this.$store.state.count }}</p>
      </div>
      <div class="container p-5">
        <Button @click="increment"> Add +1 to the state value </Button>
      </div>
      <div class="container p-5">
        <Button @click="decrement"> Add -1 to the state value </Button>
      </div>
      <div class="container p-5">
        <Button @click="reset"> Reset </Button>
      </div>
    </div>
    <div class="container-fluid flex justify-center">
      <img
        src="../assets/graph.jpg"
        class="shadow-2xl"
        height="auto"
        width="500"
      />
    </div>
  </div>
  <div class="keret py-5"></div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  components: {
    Button,
  },
  methods: {
    increment() {
      this.$store.state.count++;
    },
    decrement() {
      this.$store.state.count--;
    },
    reset() {
      this.$store.state.count = 0;
    },
  },
};
</script>

<style scoped>
.keret {
  height: 200vh;
}
.keret img {
  padding-top: 500px;
}
</style>
