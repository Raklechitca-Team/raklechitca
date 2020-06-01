<template>
  <div class="insta-story">
    <div class="insta-story__info">
      <app-section-title class="insta-story__title"
        ><a
          class="insta-story__link"
          href="https://www.instagram.com/raklechitsa/"
          target="_blank"
          >{{ instaText.title }}</a
        ></app-section-title
      >
      <div class="insta-story__prolog" v-html="instaText.text" />
    </div>
    <div class="insta-story__images">
      <div v-for="image in images.slice(0, 8)" :key="image.url">
        <a :href="image.url" target="_blank">
          <app-insta-image :url="image.display_url" />
        </a>
      </div>
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
    instaText: Object,
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

.insta-story__link {
  text-decoration: none;
}
.insta-story__link:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}

.insta-story__title {
  max-width: 175px;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 32px;
  line-height: 36px;
  text-align: left;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
}

.insta-story__link {
  color: #000;
  text-decoration: none;
  border-bottom: 2px solid #000;
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
