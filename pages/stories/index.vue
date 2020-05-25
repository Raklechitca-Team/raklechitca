<template>
  <div class="stories">
    <app-container>
    <app-section-title class="stories__title"
      >Истории неизлечимых привычек</app-section-title
    >
    <app-search />
    <app-cardlist :cards="page" class="cardlist" />
    <app-pagination
      :storiesInTotal="stories.length"
      :storiesPerPage="storiesPerPage"
      @pageClick="paginate"
    />
    </app-container>
  </div>
</template>

<script>
import Container from '@/components/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import CardList from '@/components/Cardlist/CardList';
import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
export default {
  name: 'stories',
  components: {
    'app-container': Container,
    'app-section-title': SectionTitle,
    'app-cardlist': CardList,
    'app-pagination': Pagination,
    'app-search': Search,
  },
  data() {
    return {
      storiesPerPage: 16,
      currentPage: 1,
      page: 1,
    };
  },
  fetchOnServer: false,
  async fetch({ store }) {
    await store.dispatch('stories/fetchStories');
  },
  created() {
    if (process.browser) {
      let widthForNine = window.matchMedia('(max-width: 1023px)');
      let widthForEight = window.matchMedia('(max-width: 767px)');
      let widthForOne = window.matchMedia('(max-width: 500px)');
      if (widthForNine.matches || widthForOne.matches) {
        this.storiesPerPage = 9;
        this.paginate(this.currentPage);
      }
      if (widthForEight.matches) {
        this.storiesPerPage = 8;
        this.paginate(this.currentPage);
      }
    }
    this.paginate(this.currentPage);
  },
  methods: {
    paginate(currentPage) {
      let storiesPerPage = this.storiesPerPage;
      let from = currentPage * storiesPerPage - storiesPerPage;
      let to = currentPage * storiesPerPage;
      this.page = this.stories.slice(from, to);
    },
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
  padding-top: 100px;
}
.stories__title {
  max-width: 413px;
}
@media screen and (max-width: 767px) {
  .stories__title {
    max-width: 380px;
    margin: 0 auto;
    text-align: center;
  }
}
@media screen and (max-width: 500px) {
  .stories__title {
    text-align: left;
  }
}
</style>
