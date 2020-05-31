<template>
  <div class="stories">
    <app-container>
      <app-section-title class="stories__title"
        >Истории неизлечимых привычек
      </app-section-title>
      <app-search @buttonClick="setKeySearch" />
      <app-cardlist :cards="storiesToRender" class="cardlist" />
      <app-pagination
        :storiesInTotal="stories.length"
        :storiesPerPage="storiesPerPage"
        :pageRange="pageRange"
        @pageClick="changeStartIndex"
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
      startIndex: 1,
      keySearch: '',
      pageRange: 5,
    };
  },
  created() {
    if (process.browser) {
      let widthForNine = window.matchMedia('(max-width: 1023px)');
      let widthForEight = window.matchMedia('(max-width: 767px)');
      let widthForOne = window.matchMedia('(max-width: 500px)');
      if (widthForNine.matches) {
        this.storiesPerPage = 9;
      }
      if (widthForOne.matches) {
        this.storiesPerPage = 9;
        this.pageRange = 3;
      }
      if (widthForEight.matches) {
        this.storiesPerPage = 8;
      }
    }
  },
  methods: {
    changeStartIndex(index) {
      this.startIndex = (index - 1) * this.storiesPerPage;
    },
    setKeySearch(value) {
      this.keySearch = value;
      console.log(this.keySearch);
    },
  },
  computed: {
    stories() {
      const stories = this.$store.getters['stories/stories'];

      if (this.keySearch === '') {
        return stories;
      }
      return stories.filter(item => item.author.indexOf(this.keySearch) > -1);
    },
    storiesToRender() {
      console.log(this.startIndex);
      return this.stories.filter(
        (item, index) =>
          index >= this.startIndex &&
          index <= this.startIndex + this.storiesPerPage - 1
      );
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
