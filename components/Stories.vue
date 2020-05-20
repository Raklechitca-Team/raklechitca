<template>
  <div class="stories">
    <app-section-title>Истории неизлечимых привычек</app-section-title>
    <app-cardlist class="eight-cards" :cards="stories.slice(0, 8)" />
    <app-cardlist class="nine-cards" :cards="stories.slice(0, 9)" />
    <app-more-articles />
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import CardList from '@/components/Cardlist/CardList';
import MoreArticles from '@/components/ui/MoreArticles';
export default {
  components: {
    'app-section-title': SectionTitle,
    'app-cardlist': CardList,
    'app-more-articles': MoreArticles,
  },
  props: {
    cards: Object,
  },
  computed: {
    stories() {
      return this.$store.getters['stories/stories'];
    },
  },
};
</script>

<style scoped>
.stories {
  padding: 100px 60px 74px;
  max-width: 1440px;
  margin: 0 auto;
}
.nine-cards {
  display: none;
}
@media screen and (max-width: 1023px) {
  .nine-cards {
    display: grid;
  }
  .eight-cards {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  .eight-cards {
    display: grid;
  }
  .nine-cards {
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .eight-cards {
    display: flex;
  }
}
</style>
