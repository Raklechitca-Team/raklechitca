<template>
  <div class="cover__background">
    <h2 class="cover__title">
      И В ОТЛИЧИЕ ОТ РАКА,<span class="cover__span"> #ЭТОНЕЛЕЧИТСЯ</span>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Cover_in_site',
};
</script>

<style scoped>
.cover__background {
  font-family: 'Inter', 'Arial', sans-serif;
  max-width: 100%;
  background-color: #613a93;
  margin: 0 60px;
  color: #ffffff;
}

.cover__title {
  font-weight: normal;
  font-size: 28px;
  line-height: 46px;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;
}

.cover__span {
  font-weight: bold;
}
</style>
