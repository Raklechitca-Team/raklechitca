<template>
  <div class="container">
    <h2 class="stories__title">Истории неизлечимых привычек</h2>
    <search />
    <app-cardlist :cards="stories" />
    <page-numbers />
  </div>
</template>

<script>
import CardList from '@/components/Cardlist/CardList';
import PageNumber from '@/components/ui/PageNumber';
import Search from '@/components/Search';
export default {
  name: 'stories',
  components: {
    'app-cardlist': CardList,
    'page-numbers': PageNumber,
    search: Search,
  },
  data() {
    return {
      storiesPerPage: 4,
    };
  },
  computed: {
    stories() {
      return this.$store.getters['stories/stories'];
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
}
.stories__title {
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  text-align: left;
  margin: 100px auto 0 60px;
}
@media screen and (max-width: 1379px) {
  .stories__title {
    max-width: 367px;
    font-size: 28px;
    line-height: 32px;
  }
}
@media screen and (max-width: 1239px) {
  .stories__title {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }
}
@media screen and (max-width: 979px) {
  .stories__title {
    max-width: 380px;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }
}
@media screen and (max-width: 767px) {
  .stories__title {
    max-width: 380px;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }
}
@media screen and (max-width: 500px) {
  .stories__title {
    max-width: 265px;
    margin: 98px auto 50px;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
}
</style>
