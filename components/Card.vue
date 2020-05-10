<template>
  <a class="card">
    <div class="card__image-wrapper">
      <div
        :style="{ backgroundImage: `url('${url}')` }"
        class="card__image"
      ></div>
    </div>
    <h3 class="card__title">{{ name }}</h3>
    <p class="card__subtitle">{{ text }}</p>
  </a>
</template>

<script>
export default {
  props: ['url', 'name', 'text'],
};
</script>

<style scoped>
.card {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  font-family: Arial;
  text-align: left;
  font-family: 'Inter', sans-serif;
}
.card__image-wrapper {
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
}
.card__image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card__title {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  margin-bottom: 14px;
}
.card__subtitle {
  font-weight: normal;
  font-size: 14px;
}
@media screen and (max-width: 1380px) {
  .card__image-wrapper {
    height: 265px;
  }
}
@media screen and (max-width: 1240px) {
  .card__image-wrapper {
    height: 208px;
  }
}
@media screen and (max-width: 980px) {
  .card__image-wrapper {
    height: 216px;
  }
}
</style>
