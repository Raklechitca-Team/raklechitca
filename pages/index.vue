<template>
  <div class="container">
    <app-title />
    <app-video />
    <app-cover-in-site :text="'И В ОТЛИЧИЕ ОТ РАКА,'" />
    <app-cardlist :cards="stories" />
    <app-cover-in-site :text="`РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ`" />
    <app-insta :images="instaImage" />
    <app-tell-story />
    <app-statistics />
    <app-cover />
  </div>
</template>

<script>
import Title from '@/components/Title';
import Video from '@/components/Video/Video';
import InstaBlock from '@/components/instaBlock/InstaBlock';
import TellStory from '@/components/TellStory';
import Statistics from '@/components/Statistics';
import Cover from '@/components/Cover';
import CoverInSite from '@/components/CoverInSite';
import CardList from '@/components/Cardlist/CardList';
export default {
  name: 'index',
  components: {
    'app-title': Title,
    'app-video': Video,
    'app-cover-in-site': CoverInSite,
    'app-cardlist': CardList,
    'app-insta': InstaBlock,
    'app-tell-story': TellStory,
    'app-statistics': Statistics,
    'app-cover': Cover,
  },
  data() {
    return {};
  },
  computed: {
    stories() {
      return this.$store.getters['stories/stories'];
    },
    instaImage() {
      return this.$store.getters['instagramImage/instaImage'];
    },
  },
};
</script>

<style scoped>
.container {
  font-family: 'Inter', 'Arial', sans-serif;
}
</style>
