<template>
  <div class="about">
    <h2 class="about__title">
      {{ aboutText.hashtag }}
    </h2>
    <container class="about__container">
      <app-cover-base
        :data="aboutText"
        titleColor="#fff"
        textColor="#DEDEDE"
        disabledColor="#C9C9C9"
      />
    </container>
  </div>
</template>

<script>
import Container from '@/components/Container';
import CoverBase from '@/components/ui/CoverBase';
export default {
  name: 'About',
  props: {
    aboutProject: Object,
    aboutText: Object,
  },
  components: {
    container: Container,
    'app-cover-base': CoverBase,
  },
};
</script>

<style scoped>
.about {
  width: 100%;
  background-color: #613a93;
  min-height: 655px;
  display: flex;
  flex-direction: column;
}
.about__title {
  text-transform: uppercase;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  margin: 0 auto;
  padding: 90px 0 70px;
  text-align: center;
  width: 100%;
  color: #fff;
  font-family: 'Inter', 'Arial', sans-serif;
}
@media screen and (max-width: 1300px) {
  .about {
    min-height: 665px;
  }
}
@media screen and (max-width: 1000px) {
  .about__title {
    display: none;
  }
  .about {
    min-height: 660px;
  }
}
@media screen and (max-width: 500px) {
  .about {
    min-height: 628px;
  }
}
</style>
