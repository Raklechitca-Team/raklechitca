<template>
  <div class="container">
    <app-section-title class="stories__title"
      >Истории неизлечимых привычек</app-section-title
    >
    <app-search />
    <app-stories :cards="page" />
    <app-pagination
      :storiesInTotal="stories.length"
      :storiesPerPage="storiesPerPage"
      @pageClick="paginate"
    />
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import Stories from '@/components/Stories';
import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
export default {
  name: 'stories',
  components: {
    'app-section-title': SectionTitle,
    'app-stories': CardList,
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
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 100px;
}
.stories__title {
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  text-align: left;
  margin-left: 60px;
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
