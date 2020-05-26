<template>
  <div class="container">
    <app-title-cover :dataTitleBlock="blocks" />
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
import TitleCoverBlock from '@/components/TitleCoverBlock';
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
    'app-title-cover': TitleCoverBlock,
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
  fetchOnServer: false,
  async fetch({ store }) {
    await store.dispatch('video/fetchVideo');
<<<<<<< HEAD
    await store.dispatch('stories/fetchStories');
=======
    await store.dispatch('statistics/fetchStatistics');
    await store.dispatch('blocks/fetchBlocks');
>>>>>>> develop
  },
  computed: {
    instagram() {
      return this.$store.getters['instagram/instagram'];
    },
    statistics() {
      return this.$store.getters['statistics/statistics'];
    },
    aboutProject() {
      return this.$store.getters['aboutProject/aboutProject'];
    },
    tellStory() {
      return this.$store.getters['tellStory/tellStory'];
    },
    video() {
      return this.$store.getters['video/video'];
    },
    stories() {
      return this.$store.getters['stories/stories'];
    },
    blocks() {
      return this.$store.getters['blocks/blocks'];
    },
  },
  methods: {
    popupHandler() {
      this.popupShown = !this.popupShown;
      this.asyncdata();
    },
  },
};
</script>

<style scoped>
.container {
  font-family: 'Inter', 'Arial', sans-serif;
}
</style>
