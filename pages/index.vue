<template>
  <div class="container">
    <app-title />
    <app-video :cellArray="allLessons" />
    <app-cover-in-site :text="'И В ОТЛИЧИЕ ОТ РАКА,'" />
    <app-cardlist :cards="stories" />
    <app-cover-in-site :text="`РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ`" />
    <app-insta :images="instagram" />
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
import Popup from '@/components/Popup';
import Quiz from '@/components/Quiz';
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
    'app-popup': Popup,
    'app-quiz': Quiz,
  },
  data() {
    return {
      popupShown: false,
      allLessons: [
        {
          id: 2,
          name: 'Марина Казнина',
          text:
            'Моя любовь к пилону и сложным трюкам не лечится, в отличие от рака',
        },
        {
          id: 3,
          name: 'Анастасия Жохова',
          text:
            'Я всегда буду ходить на концерты любимых исполнителей, и это не лечится, в отличие от рака',
        },
      ],
    };
  },
  computed: {
    stories() {
      return this.$store.getters['stories/stories'];
    },
    instagram() {
      return this.$store.getters['instagram/instagram'];
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
