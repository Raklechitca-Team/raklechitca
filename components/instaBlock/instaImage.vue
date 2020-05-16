<template>
  <div
    :style="{ backgroundImage: `url('${url}')` }"
    class="insta-story__image"
  ></div>
</template>

<script>
export default {
  props: {
    url: String,
  },
};
</script>

<style scoped>
.insta-story__image {
  background-color: #ededed;
  height: 195px;
  width: 195px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.insta-story__image {
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .insta-story__image {
    height: 171px;
    width: 171px;
  }
}

@media screen and (max-width: 1024px) {
  .insta-story__image {
    height: 136px;
    width: 136px;
  }
}

@media screen and (max-width: 960px) {
  .insta-story__image {
    height: 157px;
    width: 157px;
  }
}

@media screen and (max-width: 750px) {
  .insta-story__image {
    height: 140px;
    width: 140px;
  }
}
</style>
