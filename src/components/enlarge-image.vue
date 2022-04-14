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
      isLarge: false,
    };
  },
  methods: {
    enlarge() {
      let self = this;
      let rect = self.$refs.slot.getBoundingClientRect();
      self.transition_value = "width " + 0.3 + "s" + ", height " + 0.3 + "s";
      self.adjust_top = 0;

      self.style = {
        position: "fixed",
        height: "600px",
        width: "500px",
        transition: self.transition_value,
        "z-index": "99",
      };

      this.isLarge = true;
    },
    reset() {
      let self = this;
      self.transition_value = "width " + 0.3 + "s" + ", height " + 0.3 + "s";
      self.style = {
        position: "relative",
        width: "150px",
        height: "150px",
        "z-index": "1",
        /* transition: self.transition_value, */
      };

      this.isLarge = false;
    },
  },
};
</script>

<template>
  <div :class="{ 'enlargeable-image': isLarge }">
    <div class="slot" ref="slot">
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
  <div>
    <img
      :src="this.$props.src"
      :width="this.$props.width"
      :height="this.$props.height"
      v-show="isLarge"
    />
  </div>
</template>

<style scoped>
.enlargeable-image {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.499);
  margin: 0;
  left: 0;
  top: 0;
}
.slot {
  display: flex;
  justify-content: space-around;
  cursor: zoom-in;
}
.opened-image {
  overflow: hidden;
}
</style>
