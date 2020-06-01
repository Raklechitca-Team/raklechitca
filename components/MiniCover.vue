<template>
  <app-container class="mini-cover">
    <div class="mini-cover__content">
      <div class="mini-cover__background">
        <h2 class="mini-cover__title">
          {{ noteText.title }}
          <span class="mini-cover__title-bold"> {{ noteText.hashtag }}</span>
        </h2>
      </div>
    </div>
  </app-container>
</template>

<script>
import Container from '@/components/Container';
export default {
  name: 'Mini_cover',
  props: {
    noteText: Object,
  },
  components: {
    'app-container': Container,
  },
};
</script>

<style scoped>
.mini-cover__background {
  font-family: 'Inter', 'Arial', sans-serif;
  width: 100%;
  background-color: #613a93;
  color: #fff;
}

.mini-cover__title {
  max-width: 750px;
  font-family: 'Inter', 'Arial', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 25px;
  line-height: 38px;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;
}

.mini-cover__title-bold {
  font-size: 30px;
  line-height: 46px;
  font-weight: bold;
}

@media screen and (max-width: 1280px) {
  .mini-cover__title {
    font-size: 23px;
  }

  .mini-cover__title-bold {
    font-size: 28px;
  }
}

@media screen and (max-width: 1024px) {
  .mini-cover__title {
    font-size: 19px;
    line-height: 32px;
  }

  .mini-cover__title-bold {
    font-size: 24px;
    line-height: 40px;
  }
}

@media screen and (max-width: 768px) {
  .mini-cover__title {
    max-width: 350px;
    font-size: 15px;
    line-height: 30px;
  }

  .mini-cover__title-bold {
    font-size: 22px;
    line-height: 36px;
  }
}

@media screen and (max-width: 650px) {
  .mini-cover__background {
    margin: 15px 0 0;
  }

  .mini-cover__title {
    max-width: 244px;
    font-size: 14px;
    line-height: 16px;
  }

  .mini-cover__title-bold {
    font-size: 16px;
    line-height: 18px;
  }
}
</style>
