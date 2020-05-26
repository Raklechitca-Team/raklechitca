<template>
  <div class="container">
    <app-cover :dataTitleBlock="this.titleData()">
      <span v-on:click="scroll">
        <app-button-down />
      </span>
    </app-cover>
    <app-scroll-to-component ref="element">
      <app-video ref="element" :slideArray="video" />
    </app-scroll-to-component>
    <app-cover-in-site :text="'И В ОТЛИЧИЕ ОТ РАКА,'" />
    <app-stories :cards="stories" />
    <app-cover-in-site :text="`РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ`" />
    <app-insta :dataInstaText="this.instaData()" :images="instagram" />
    <app-tell-story :tellStory="tellStory" />
    <app-statistics :statisticsData="statistics" />
    <app-about :aboutProject="aboutProject" />
  </div>
</template>

<script>
import Cover from '@/components/Cover';
import Video from '@/components/Video/Video';
import InstaBlock from '@/components/instaBlock/InstaBlock';
import TellStory from '@/components/TellStory';
import Statistics from '@/components/Statistics/Statistics';
import About from '@/components/About';
import CoverInSite from '@/components/CoverInSite';
import SectionTitle from '@/components/ui/SectionTitle';
import Stories from '@/components/Stories';
import Popup from '@/components/Popup';
import Quiz from '@/components/Quiz';
import ButtonDown from '@/components/ui/ButtonDown';
import ScrollToComponent from '@/components/ui/ScrollToComponent';
export default {
  name: 'index',
  components: {
    'app-cover': Cover,
    'app-video': Video,
    'app-cover-in-site': CoverInSite,
    'app-section-title': SectionTitle,
    'app-stories': Stories,
    'app-insta': InstaBlock,
    'app-tell-story': TellStory,
    'app-statistics': Statistics,
    'app-about': About,
    'app-popup': Popup,
    'app-quiz': Quiz,
    'app-button-down': ButtonDown,
    'app-scroll-to-component': ScrollToComponent,
  },
  data() {
    return {
      popupShown: false,
    };
  },
  fetchOnServer: false,
  async fetch({ store }) {
    await store.dispatch('video/fetchVideo');
    await store.dispatch('statistics/fetchStatistics');
    await store.dispatch('blocks/fetchBlocks');
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
    scroll() {
      this.$refs.element.scrollTo();
    },
    titleData() {
      const dataCover = this.blocks.find(el => el.block === 'cover');
      return dataCover;
    },
    instaData() {
      const dataInsta = this.blocks.find(el => el.block === 'instagram');
      return dataInsta;
    },
  },
};
</script>

<style scoped>
.container {
  font-family: 'Inter', 'Arial', sans-serif;
  scroll-behavior: smooth;
}
</style>
