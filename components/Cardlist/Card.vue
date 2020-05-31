<template>
  <a href="#" @click="openStory(card)" class="card">
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
  props: {
    url: String,
    name: String,
    text: String,
    card: Number,
  },
  methods: {
    openStory(card) {
      this.$router.push('/stories/' + card);
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 330px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  color: #000;
  font-family: 'Inter', 'Arial', sans-serif;
  transition: all 0.3s ease-in-out;
}
.card:hover {
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  transform: scale(1.02, 1.02);
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
  line-height: 18px;
  /* height: 36px; */
  overflow: hidden;
}
@media screen and (max-width: 1379px) {
  .card__image-wrapper {
    height: 265px;
  }
  .card__title {
    font-size: 22px;
    line-height: 22px;
  }
  .card {
    width: 295px;
  }
}
@media screen and (max-width: 1239px) {
  .card__image-wrapper {
    height: 208px;
  }
  .card__title {
    font-size: 18px;
    line-height: 22px;
  }
  .card__subtitle {
    font-size: 13px;
    line-height: 16px;
    /* height: 32px; */
  }
  .card {
    width: 238px;
  }
}
@media screen and (max-width: 805px) {
  .card {
    width: 232px;
  }
  .card__image-wrapper {
    height: 202px;
  }
}
@media screen and (max-width: 767px) {
  .card {
    width: 238px;
  }
  .card__image-wrapper {
    height: 208px;
  }
}
@media screen and (max-width: 500px) {
  .card {
    margin-bottom: 30px;
    width: 290px;
    padding: 0;
  }
  .card__image-wrapper {
    height: 290px;
  }
  .card:hover {
    box-shadow: none;
  }
}
</style>
