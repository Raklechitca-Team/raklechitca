<template>
  <div class="about">
    <container class="about__container">
      <h2 class="about__title">
        #РАКЛЕЧИТСЯ
      </h2>
      <app-cover-base
        class="cover__position"
        :data="aboutProject"
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
}
.about__position {
  min-height: 520px;
}
.about__title {
  text-transform: uppercase;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  padding-top: 90px;
  margin: auto 0;
  text-align: center;
  width: 100%;
  color: #fff;
  font-family: 'Inter', 'Arial', sans-serif;
}
@media screen and (max-width: 1000px) {
  .about__title {
    display: none;
  }
  .about__position {
    min-height: 700px;
  }
}
</style>
