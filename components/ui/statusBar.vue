<template>
  <div class="statistics__bar full-staus-bar">
    <div class="statistics__bar-value full-staus-bar" :style="style"></div>
  </div>
</template>

<script>
export default {
  name: 'fullBar',
  props: {
    value: Number,
    maxValue: Number,
  },
  computed: {
    style() {
      return `width: ${(this.value / this.maxValue) * 100}%`;
    },
  },
};
</script>

<style scoped>
.statistics__bar {
  background-color: #e4e1e1;
  width: 100%;
}
.statistics__bar-value {
  background: #613a93;
}
.full-staus-bar {
  height: 40px;
}

@media screen and (max-width: 1290px) {
  .full-staus-bar {
    height: 35px;
  }
}
@media screen and (max-width: 1030px) {
  .full-staus-bar {
    height: 28px;
  }
}
</style>
