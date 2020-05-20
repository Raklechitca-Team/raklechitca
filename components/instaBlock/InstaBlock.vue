<template>
  <div class="insta-story">
    <div class="insta-story__info">
      <app-section-title class="insta-story__title"
        >Инстаграм</app-section-title
      >
      <p class="insta-story__prolog">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
      </p>
    </div>
    <div class="insta-story__images">
      <app-insta-image v-for="image in images" :url="image.url">
      </app-insta-image>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import InstaImage from '@/components/instaBlock/instaImage';
export default {
  name: 'InstaBlock',
  components: {
    'app-section-title': SectionTitle,
    'app-insta-image': InstaImage,
  },
  props: {
    images: Array,
  },
};
</script>

<style scoped>
.insta-story {
  overflow: hidden;
  padding: 100px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
}

.insta-story__info {
  max-width: 25%;
  flex-direction: column;
}

.insta-story__title {
  max-width: 175px;
  margin-top: 0;
  margin-bottom: 0;
  border-bottom: 2px solid #000;
  font-size: 32px;
  line-height: 36px;
  text-align: left;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
}

.insta-story__prolog {
  text-align: left;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin: 32px 0 0;
  color: #666666;
}

.insta-story__images {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}

@media screen and (max-width: 1280px) {
  .insta-story__title {
    font-size: 28px;
    line-height: 32px;
  }
  .insta-story__prolog {
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .insta-story__title {
    font-size: 24px;
    line-height: 28px;
  }
  .insta-story__prolog {
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 960px) {
  .insta-story {
    flex-direction: column;
  }
  .insta-story__info {
    margin: 0 auto;
    max-width: 380px;
    padding-bottom: 60px;
  }
  .insta-story__title {
    text-align: center;
    margin: 0 auto;
  }
  .insta-story__images {
    max-width: 750px;
    grid-gap: 10px;
  }
  .insta-story {
    margin: 60px 0;
    padding: 0;
  }
  .insta-story__info {
    max-width: 380px;
    padding-bottom: 40px;
    padding-left: 10px;
  }
  .insta-story__title {
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    margin: 0;
  }
  .insta-story__images {
    margin: 0 auto;
    max-width: 320px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
}
</style>
