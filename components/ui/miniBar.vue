<template>
  <div>
    <div class="statistics__bar-value half-staus-bar" :style="style"></div>
  </div>
</template>

<script>
export default {
  name: 'fullBar',
  props: {
    color: String,
    value: Number,
    maxValue: Number,
  },
  computed: {
    style() {
      return `width: ${(this.value / this.maxValue) * 100}%; background: ${
        this.color
      };`;
    },
  },
};
</script>

<style scoped>
.statistics__bar-value {
  background: #613a93;
}
.half-staus-bar {
  height: 20px;
}
</style>
