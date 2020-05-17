<template>
  <div>
    <div class="bar-value half-staus-bar" :style="style"></div>
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
.bar-value {
  background: #613a93;
}
.half-staus-bar {
  height: 20px;
}

@media screen and (max-width: 1300px) {
  .half-staus-bar {
    height: 18px;
  }
}

@media screen and (max-width: 1050px) {
  .half-staus-bar {
    height: 14px;
  }
}
</style>
