<template>
  <app-container>
    <div class="cover__background">
      <h2 class="cover__title">
        {{ text }}<span class="cover__title-bold"> #ЭТОНЕЛЕЧИТСЯ</span>
      </h2>
    </div>
  </app-container>
</template>

<script>
import Container from '@/components/Container';
export default {
  name: 'Cover_in_site',
  props: {
    text: String,
  },
  components: {
    'app-container': Container,
  },
};
</script>

<style scoped>
.cover__background {
  font-family: 'Inter', 'Arial', sans-serif;
  width: 100%;
  background-color: #613a93;
  color: #fff;
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

.cover__title-bold {
  font-weight: bold;
}

@media screen and (max-width: 1280px) {
  .cover__title {
    font-size: calc((100vw - 320px) / (1280 - 320) * (28 - 16) + 16px);
  }
}
</style>
