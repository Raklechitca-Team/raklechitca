<template>
  <div class="container">
    <app-title />
    <app-video :slideArray="video" />
    <app-cover-in-site :text="'И В ОТЛИЧИЕ ОТ РАКА,'" />
    <app-stories :cards="stories" />
    <app-cover-in-site :text="`РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ`" />
    <app-insta :images="instagram" />
    <app-tell-story :tellStory="tellStory" />
    <app-statistics :statisticsData="statistics" />
    <app-cover :aboutProject="aboutProject" />
  </div>
</template>

<script>
import Title from '@/components/Title';
import Video from '@/components/Video/Video';
import InstaBlock from '@/components/instaBlock/InstaBlock';
import TellStory from '@/components/TellStory';
import Statistics from '@/components/Statistics/Statistics';
import Cover from '@/components/Cover';
import CoverInSite from '@/components/CoverInSite';
import SectionTitle from '@/components/ui/SectionTitle';
import Stories from '@/components/Stories';
import Popup from '@/components/Popup';
import Quiz from '@/components/Quiz';
export default {
  name: 'index',
  components: {
    'app-title': Title,
    'app-video': Video,
    'app-cover-in-site': CoverInSite,
    'app-section-title': SectionTitle,
    'app-stories': Stories,
    'app-insta': InstaBlock,
    'app-tell-story': TellStory,
    'app-statistics': Statistics,
    'app-cover': Cover,
    'app-popup': Popup,
    'app-quiz': Quiz,
  },
  data() {
    return {
      popupShown: false,
    };
  },
  computed: {
    instagram() {
      return this.$store.getters['instagram/instagram'];
    },
    statistics() {
      return this.$store.getters['statistics/statistics'];
    },
<<<<<<< HEAD
    aboutProject() {
      return this.$store.getters['aboutProject/aboutProject'];
    },
    tellStory() {
      return this.$store.getters['tellStory/tellStory'];
=======
    video() {
      return this.$store.getters['video/video'];
>>>>>>> 28b6c6a0f982a47f4a1de50b66c98492c99c9a01
    },
  },
  methods: {
    popupHandler() {
      this.popupShown = !this.popupShown;
    },
  },
};
</script>

<style scoped>
.container {
  font-family: 'Inter', 'Arial', sans-serif;
}
</style>
