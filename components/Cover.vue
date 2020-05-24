<template>
  <div class="cover">
    <container class="cover__container">
      <h2 class="cover__title">
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
  name: 'Cover',
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
.cover {
  width: 100%;
  background-color: #613a93;
}
.cover__position {
  min-height: 520px;
}
.cover__title {
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
  .cover__title {
    display: none;
  }
  .cover__position {
    min-height: 700px;
  }
}
</style>
