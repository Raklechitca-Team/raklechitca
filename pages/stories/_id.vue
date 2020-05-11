<template>
  <div class="container">
    <app-header />
    <div class="story">
      <div class="story__image-wrapper">
        <div class="story__image"></div>
      </div>
      <div class="story__text-wrapper">
        <h1 class="story__title">
          <span class="story__title_bold">Имя: </span> текст истории
        </h1>
        <div class="story-text-wrapper_bottom">
          <a href="#" class="story__share">Поделитесь &#8599;</a>
          <p class="story__share">20 апреля 2018</p>
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>

<style scoped>
.container {
  font-family: 'Inter', sans-serif;
  display: flex;
  margin-top: 100px;
  max-width: 1440px;
}
.story {
  display: flex;
  margin: 100px auto 130px;
}
.story__image-wrapper {
  width: 580px;
  height: 580px;
}
.story__image {
  background-color: wheat;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.story__text-wrapper {
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.story-text-wrapper_bottom {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px solid #efefef;
}
.story__title {
  max-width: 680px;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  padding-top: 30px;
  border-top: 1px solid #efefef;
  text-align: left;
}
.story__title_bold {
  font-weight: bold;
}
.story__bottom-wrapper {
  display: flex;
}
.story__share {
  text-decoration: none;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}
.story__date {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}
</style>
