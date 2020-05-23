<template>
  <div class="stories">
    <app-section-title class="stories__title"
      >Истории неизлечимых привычек</app-section-title
    >
    <app-cardlist class="cardlist eight-cards" :cards="stories.slice(0, 8)" />
    <app-cardlist class="cardlist nine-cards" :cards="stories.slice(0, 9)" />
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
    cards: Array,
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
.cardlist {
  margin: 70px auto 70px;
}
.stories__title {
  max-width: 413px;
}
.nine-cards {
  display: none;
}
@media screen and (max-width: 1279px) {
  .cardlist {
    margin: 60px auto 60px;
  }
}
@media screen and (max-width: 1023px) {
  .cardlist {
    margin: 46px auto 46px;
  }
  .nine-cards {
    display: grid;
  }
  .eight-cards {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  .cardlist {
    margin: 60px auto 40px;
  }
  .eight-cards {
    display: grid;
  }
  .nine-cards {
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .cardlist {
    margin: 40px auto 40px;
  }
  .eight-cards {
    display: flex;
  }
}
</style>
