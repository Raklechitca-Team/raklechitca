<template>
  <div>
    <div class="pagination">
      <a
        @click="currentPageChange(firstPage)"
        :class="[
          'pagination__quick-navigation',
          {
            'pagination__quick-navigation_active' :this.activeFirstPage,
            'pagination__quick-navigation_disabled' :!this.activeFirstPage,
          }]"
        >Первая</a
      >
      <a @click="currentPageChange(previousPage)"
      :class="[
        'arrow',
        {
          'arrow_disabled' :this.activeFirstPage,
          'arrow_disabled' :!this.activeFirstPage,
      }]"
      >&#9001;</a>
      <div
        v-for="page in this.displayPages.slice(0, 5)"
        @click="currentPageChange(page)"
        :class="[
        'pagination__number',
        { pagination__number_current : currentPage == page }
        ]"
      >
        {{ page }}
      </div>
      <a @click="currentPageChange(nextPage)"
      :class="[
        'arrow',
        {
          'arrow_disabled' :!this.activeLastPage,
          'arrow_disabled' :this.activeLastPage,
      }]"
      >&#9002;</a>
      <a
        @click="currentPageChange(lastPage)"
        :class="[
          'pagination__quick-navigation',
          {
            'pagination__quick-navigation_active' :!this.activeLastPage,
            'pagination__quick-navigation_disabled' :this.activeLastPage,
          }]"
        >Последняя</a
      >
    </div>
    <div class="pagination pagination_hidden">
      <div class="pagination__wrapper-top">
        <a
          @click="currentPageChange(previousPage)"
          :class="[
          'pagination__quick-navigation arrow',
          {
            'arrow_disabled' :this.activeFirstPage,
            'arrow_disabled' :!this.activeFirstPage,
          }]"
          >&#9001;</a
        >
        <div
          v-for="page in this.displayPages.slice(0, 3)"
          @click="currentPageChange(page)"
          :class="[
          'pagination__number',
          { pagination__number_current : currentPage == page }
          ]"
        >
          {{ page }}
        </div>
        <a
          @click="currentPageChange(nextPage)"
          :class="[
          'pagination__quick-navigation arrow',
          {
            'arrow_disabled' :!this.activeLastPage,
            'arrow_disabled' :this.activeLastPage,
          }]"
          class="pagination__quick-navigation arrow"
          >&#9002;</a
        >
      </div>
      <div class="pagination__wrapper-bottom">
        <a
          @click="currentPageChange(firstPage)"
          :class="[
          'pagination__quick-navigation pagination__quick-navigation_first',
          {
            'pagination__quick-navigation_active' :this.activeFirstPage,
            'pagination__quick-navigation_disabled' :!this.activeFirstPage,
          }]"
          >Первая</a
        >
        <a
          @click="currentPageChange(lastPage)"
          :class="[
          'pagination__quick-navigation',
          {
            'pagination__quick-navigation_active' :!this.activeLastPage,
            'pagination__quick-navigation_disabled' :this.activeLastPage,
          }]"
          >Последняя</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageRange: 5,
    };
  },
  props: {
    storiesInTotal: Number,
    storiesPerPage: Number,
  },
  computed: {
    setPages() {
      const pagesMax = Math.ceil(this.storiesInTotal / this.storiesPerPage);
        return pagesMax;
    },
    rangeStart() {
      let start = this.currentPage;
      if (start > 1 && this.setPages === 9) {
        return start - 1;
      } if (this.currentPage === 9 && this.setPages === 9) {
        return start - 2;
      } if (this.currentPage < 4) {
        return 1;
      } if (this.currentPage === this.setPages) {
        return start - 4;
      } if (this.currentPage === this.setPages-1) {
        return start - 3;
      } if (this.currentPage >= 4 && this.currentPage !== this.setPages) {
        return start - 2;
      }
    },
    rangeEnd() {
      const end = this.currentPage + this.pageRange;
      return (end < this.setPages) ? end: this.setPages;
    }, 
    displayPages() {
      const pages = [];
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      } return pages;
    },
    firstPage() {
      const first = 1;
      return first;
    },
    previousPage() {
      if (this.currentPage > 1) {
        const previous = this.currentPage - 1;
        return previous;
      } else {
        return this.firstPage;
      }
    },
    nextPage() {
      if (this.currentPage !== this.setPages) {
        const next = this.currentPage + 1;
        return next;
      } else {
        return this.lastPage;
      }
    },
    lastPage() {
      return (this.currentPage = this.setPages);
    },
    activeFirstPage() {
      if (this.currentPage === 1) {
        return false;
      } else {
        return true;
      }
    },
    activeLastPage() {
      if (this.currentPage === this.setPages) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    currentPageChange(somePage) {
      this.currentPage = somePage;
      this.$emit('pageClick', somePage);
    },
  },
};
</script>
<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
}
.pagination__number {
  width: 50px;
  height: 50px;
  background: #fbfbfb;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.pagination__number:last-of-type {
  margin-right: 0;
}
.pagination__number:hover, .pagination__number_current {
  background-color: #f4f4f4;
}
.pagination__quick-navigation {
  height: 50px;
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  transition: all 0.3s linear;
}
.pagination__quick-navigation_disabled {
  color: #a2a2a2;
  cursor: default;
}
.arrow {
  height: 50px;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #000;
  cursor: pointer;
  margin: 0 30px;
}
.arrow_disabled {
  cursor: default;
}
.pagination_hidden {
  display: none;
}
@media screen and (max-width: 600px) {
  .pagination {
    display: none;
  }
  .pagination_hidden {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pagination__wrapper-top {
    display: flex;
    margin-bottom: 34px;
  }
  .pagination__wrapper-bottom {
    display: flex;
  }
  .pagination__quick-navigation_first {
    margin-right: 109px;
  }
}
</style>
