<template>
  <div class="statistics__block">
    <p class="statistics__quote">
      {{ quoteTitle }}
    </p>
    <div class="statistics__info">
      <slot></slot>
      <p class="statistics__total">{{ total }}</p>
      <p class="statistics__who">{{ who }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quoteTitle: String,
    total: String,
    who: String,
    minValue: Number,
    maxValue: Number,
    minValueTwo: Number,
    maxValueTwo: Number,
  },
  methods: {},
};
</script>

<style scoped>
.statistics__block {
  border: 1px solid #efefef;
  box-sizing: border-box;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.statistics__quote {
  text-align: left;
  padding-top: 7px;
  padding-left: 20px;
  max-width: 260px;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
}
.statistics__info {
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 88%;
}
.statistics__total {
  margin: 0;
  padding-top: 20px;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
}
.statistics__who {
  padding-top: 15px;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #666666;
}

@media screen and (max-width: 1350px) {
  .statistics__block {
    width: 265px;
    height: 265px;
  }
}

@media screen and (max-width: 1200px) {
  .statistics__block {
    width: 208px;
    height: 208px;
  }
  .statistics__quote {
    font-size: 10px;
    line-height: 14px;
  }
  .statistics__total {
    font-size: 26px;
    line-height: 30px;
  }
  .statistics__who {
    font-size: 10px;
    line-height: 14px;
  }
}
@media screen and (max-width: 930px) {
  .statistics__block {
    width: 216px;
    height: 216px;
    margin-right: 10px;
  }
}
</style>
