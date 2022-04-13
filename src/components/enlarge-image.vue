<script>
export default {
  components: {},
  props: {
    src: String,
    src_second: String,
    width: {
      type: Number,
      default: 150,
    },
    height: {
      type: Number,
      default: 150,
    },
  },
  data() {
    return {
      state: this.state,
      style: this.style,
      /* enlargedImgContainer: this.enlargedImgContainer, */
      isLarge: false,
    };
  },
  methods: {
    enlarge() {
      let self = this;
      self.transition_value = "width " + 0.3 + "s" + ", height " + 0.3 + "s";
      self.style = {
        position: "fixed",
        height: "400px",
        width: "500px",
        transition: self.transition_value,
      };
      /* self.enlargedImgContainer = {
        position: "fixed",
        height: "100%",
        width: "100%",
        "z-index": "99",
      }; */
      this.isLarge = true;
    },
    reset() {
      let self = this;
      self.transition_value = "width " + 0.3 + "s" + ", height " + 0.3 + "s";
      self.style = {
        position: "relative",
        width: "150px",
        height: "150px",
        transition: self.transition_value,
      };
      this.isLarge = false;
    },
  },
};
</script>

<template>
  <div>
    <div class="slot" ref="slot" :style="this.enlargedImgContainer">
      <slot>
        <img
          :src="this.$props.src"
          :width="this.$props.width"
          :height="this.$props.height"
          :style="this.style"
          v-on="this.isLarge == false ? { click: enlarge } : { click: reset }"
        />
      </slot>
    </div>
  </div>
</template>

<style scoped>
.slot {
  display: flex;
  justify-content: space-around;
}
</style>
