<template>
  <div class="container">
    <app-cardlist :cards="stories" />
    <!--    <pagination-->
    <!--      :storiesInTotal="cards.length"-->
    <!--      :storiesPerPage="storiesPerPage"-->
    <!--      :cards="cards"-->
    <!--    />-->
  </div>
</template>

<script>
import CardList from '@/components/Cardlist/CardList';
//import Pagination from '@/components/Pagination';
export default {
  name: 'stories',
  components: {
    'app-cardlist': CardList,
    // pagination: Pagination,
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

<style scoped></style>
