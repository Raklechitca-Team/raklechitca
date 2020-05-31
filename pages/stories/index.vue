<template>
  <div class="stories">
    <app-container class="stories__container">
      <app-section-title class="stories__title"
        >Истории неизлечимых привычек
      </app-section-title>
      <app-search @buttonClick="setKeySearch" />
      <app-cardlist v-if="stories.length > 1" :cards="storiesToRender" />
      <div v-if="stories.length < 1" class="no-results">
        <p class="no-results__title">Ничего не найдено</p>
        <p class="no-results__subtitle">Попробуйте еще раз.</p>
      </div>
      <app-pagination
        v-if="stories.length > storiesPerPage"
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
    },
  },
  computed: {
    stories() {
      const stories = this.$store.getters['stories/stories'];

      if (this.keySearch === '') {
        return stories;
      }
      return stories.filter(
        item =>
          (item.author.toLowerCase().indexOf(this.keySearch.toLowerCase()) >
            -1) |
          (item.title.toLowerCase().indexOf(this.keySearch.toLowerCase()) >
            -1) |
          (item.text.toLowerCase().indexOf(this.keySearch.toLowerCase()) > -1)
      );
    },
    storiesToRender() {
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

.no-results {
  margin: 110px auto 380px;
}

.no-results__title {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
}

.no-results__subtitle {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
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

  .no-results {
    margin: 60px auto 280px;
  }

  .no-results__title {
    font-size: 24px;
    line-height: 29px;
  }

  .no-results__subtitle {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
