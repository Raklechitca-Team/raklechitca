<template>
  <div class="stories">
    <app-container>
      <app-section-title class="stories__title">{{
        storiesText.title
      }}</app-section-title>
      <app-cardlist class="cardlist eight-cards" :cards="stories.slice(0, 8)" />
      <app-cardlist class="cardlist nine-cards" :cards="stories.slice(0, 9)" />
      <app-more-articles class="stories__more-articles" />
    </app-container>
  </div>
</template>

<script>
import Container from '@/components/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import CardList from '@/components/Cardlist/CardList';
import MoreArticles from '@/components/ui/MoreArticles';
export default {
  components: {
    'app-section-title': SectionTitle,
    'app-cardlist': CardList,
    'app-more-articles': MoreArticles,
    'app-container': Container,
  },
  props: {
    cards: Array,
    storiesText: Object,
  },
  computed: {
    stories() {
      return this.$store.getters['stories/stories'];
    },
  },
};
</script>

<style scoped>
.cardlist {
  margin: 70px auto 70px;
}
.stories__title {
  margin-top: 100px;
  max-width: 413px;
}
.stories__more-articles {
  margin-bottom: 100px;
}
.nine-cards {
  display: none;
}
@media screen and (max-width: 1279px) {
  .cardlist {
    margin: 60px auto 60px;
  }
  .stories__title {
    margin-top: 90px;
  }
  .stories__more-articles {
    margin-bottom: 90px;
  }
}
@media screen and (max-width: 1023px) {
  .stories__title {
    margin-top: 80px;
  }
  .stories__more-articles {
    margin-bottom: 80px;
  }
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
  .stories__title {
    margin-top: 50px;
  }
  .stories__more-articles {
    margin-bottom: 50px;
  }
  .cardlist {
    margin: 40px auto 40px;
  }
  .eight-cards {
    display: flex;
  }
}
</style>
