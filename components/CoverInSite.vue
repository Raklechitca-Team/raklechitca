<template>
  <app-container class="cover-in-site">
    <div class="cover-in-site__content">
      <div class="cover-in-site__background">
        <h2 class="cover-in-site__title">
          {{ noteText.title }}
          <span class="cover-in-site__title-bold"> {{ noteText.hashtag }}</span>
        </h2>
      </div>
    </div>
  </app-container>
</template>

<script>
import Container from '@/components/Container';
export default {
  name: 'Cover_in_site',
  props: {
    noteText: Object,
  },
  components: {
    'app-container': Container,
  },
};
</script>

<style scoped>
.cover-in-site__background {
  font-family: 'Inter', 'Arial', sans-serif;
  width: 100%;
  background-color: #613a93;
  color: #fff;
}

.cover-in-site__title {
  max-width: 750px;
  font-family: 'Inter', 'Arial', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 30px;
  line-height: 46px;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;
}

.cover-in-site__title-bold {
  font-weight: bold;
}

@media screen and (max-width: 1280px) {
  .cover-in-site__title {
    font-size: calc((100vw - 320px) / (1280 - 320) * (28 - 16) + 16px);
  }
}
</style>
