<template>
  <div class="cover__background">
    <h2 class="cover__title">
      {{ text }}<span class="cover__span"> #ЭТОНЕЛЕЧИТСЯ</span>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Cover_in_site',
  props: ['text'],
};
</script>

<style scoped>
.cover__background {
  font-family: 'Inter', 'Arial', sans-serif;
  margin: 0 auto;
  width: 91%;
  max-width: 1320px;
  background-color: #613a93;
  color: #ffffff;
}

.cover__title {
  max-width: 750px;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 30px;
  line-height: 46px;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;
}

.cover__span {
  font-weight: bold;
}

@media screen and (max-width: 1280px) {
  .cover__title {
    font-size: calc((100vw - 320px) / (1280 - 320) * (28 - 16) + 16px);
  }
}
</style>
