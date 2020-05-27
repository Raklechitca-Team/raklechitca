<template>
  <div class="container">
    <app-cover :dataTitleBlock="titleData()">
      <span v-on:click="scroll">
        <app-button-down />
      </span>
    </app-cover>
    <app-scroll-to-component ref="element">
      <app-video
        ref="element"
        :videoTextData="videoData()"
        :slideArray="video"
      />
    </app-scroll-to-component>
    <app-mini-cover :noteText="noteData(1)" />
    <app-stories :storiesText="storiesData()" :cards="stories" />
    <app-mini-cover :noteText="noteData(2)" />
    <app-insta :instaText="instaData()" :images="instagram" />
    <app-tell-story :tellStory="tellStoryData()" />
    <app-statistics
      :statisticsText="statisticsData()"
      :statisticsData="statistics"
    />
    <app-about :aboutText="aboutText()" />
  </div>
</template>

<script>
import Cover from '@/components/Cover';
import Video from '@/components/Video/Video';
import InstaBlock from '@/components/instaBlock/InstaBlock';
import TellStory from '@/components/TellStory';
import Statistics from '@/components/Statistics/Statistics';
import About from '@/components/About';
import MiniCover from '@/components/MiniCover';
import SectionTitle from '@/components/ui/SectionTitle';
import Stories from '@/components/Stories';
import BasePopup from '@/components/BasePopup';
import Quiz from '@/components/Quiz/Quiz';
import ButtonDown from '@/components/ui/ButtonDown';
import ScrollToComponent from '@/components/ui/ScrollToComponent';
export default {
  name: 'index',
  components: {
    'app-cover': Cover,
    'app-video': Video,
    'app-mini-cover': MiniCover,
    'app-section-title': SectionTitle,
    'app-stories': Stories,
    'app-insta': InstaBlock,
    'app-tell-story': TellStory,
    'app-statistics': Statistics,
    'app-cover': Cover,
    'app-base-popup': BasePopup,
    'app-about': About,
    'app-quiz': Quiz,
    'app-button-down': ButtonDown,
    'app-scroll-to-component': ScrollToComponent,
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
    statisticsData() {
      const dataStatistics = this.blocks.find(el => el.block === 'statistics');
      return dataStatistics;
    },
    aboutText() {
      const dataAbout = this.blocks.find(el => el.block === 'about');
      return dataAbout;
    },
    tellStoryData() {
      const dataStory = this.blocks.find(el => el.block === 'story');
      return dataStory;
    },
    noteData(option) {
      const dataNote = this.blocks.find(el => el.block === `note-${option}`);
      return dataNote;
    },
    videoData() {
      const dataVideo = this.blocks.find(el => el.block === `videos`);
      return dataVideo;
    },
    storiesData() {
      const dataStories = this.blocks.find(el => el.block === `stories`);
      return dataStories;
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
