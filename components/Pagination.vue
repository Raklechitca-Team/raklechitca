<template>
  <div>
    <div class="pagination">
      <a
        @click="currentPageChange(1)"
        :class="[
          'pagination__quick-navigation pagination__quick-navigation_first',
          currentPage === 1
            ? 'pagination__quick-navigation_disabled'
            : 'pagination__quick-navigation_active',
        ]"
        >Первая</a
      >
      <a
        @click="currentPageChange(previousPage)"
        :class="[
          'arrow arrow_left',
          currentPage === 1 ? 'arrow_disabled' : null,
        ]"
        >&#9001;</a
      >
      <div
        v-for="page in displayPages"
        @click="currentPageChange(page)"
        :class="[
          'pagination__number',
          currentPage === page ? 'pagination__number_current' : null,
        ]"
      >
        {{ page }}
      </div>
      <a
        @click="currentPageChange(nextPage)"
        :class="[
          'arrow arrow_right',
          currentPage === setPages ? 'arrow_disabled' : null,
        ]"
        >&#9002;</a
      >
      <a
        @click="currentPageChange(setPages)"
        :class="[
          'pagination__quick-navigation pagination__quick-navigation_last',
          currentPage === setPages
            ? 'pagination__quick-navigation_disabled'
            : 'pagination__quick-navigation_active',
        ]"
        >Последняя</a
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  props: {
    storiesInTotal: {
      type: Number,
      default: 0,
    },
    storiesPerPage: {
      type: Number,
      default: 0,
    },
    pageRange: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    setPages() {
      return Math.ceil(this.storiesInTotal / this.storiesPerPage);
    },
    rangeStart() {
      let start = this.currentPage;
      if (this.pageRange == 5 && this.currentPage < 4) {
        return 1;
      }
      if (this.pageRange == 3 && this.currentPage <= 2) {
        return 1;
      }
      if (this.pageRange == 5 && this.currentPage === this.setPages) {
        return start - 4;
      }
      if (this.pageRange == 5 && this.currentPage === this.setPages - 1) {
        return start - 3;
      }
      if (
        this.pageRange == 5 &&
        this.currentPage >= 4 &&
        this.currentPage !== this.setPages
      ) {
        return start - 2;
      }
      if (
        this.pageRange == 3 &&
        this.currentPage >= 3 &&
        this.currentPage !== this.setPages
      ) {
        return start - 1;
      }
      if (
        this.pageRange == 5 &&
        this.currentPage >= 4 &&
        this.currentPage == this.setPages
      ) {
        return start - 4;
      }
      if (this.pageRange == 3 && this.currentPage == this.setPages) {
        return start - 2;
      }
    },
    rangeEnd() {
      const end = this.currentPage + this.pageRange;
      return end < this.setPages ? end : this.setPages;
    },
    displayPages() {
      const pages = [];
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      }
      return pages.slice(0, this.pageRange);
    },
    previousPage() {
      if (this.currentPage > 1) {
        return this.currentPage - 1;
      } else {
        return 1;
      }
    },
    nextPage() {
      if (this.currentPage !== this.setPages) {
        return this.currentPage + 1;
      } else {
        return this.setPages;
      }
    },
  },
  methods: {
    currentPageChange(page) {
      this.currentPage = page;
      this.$emit('pageClick', page);
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

.pagination__number:hover,
.pagination__number_current {
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
  transition: all 0.3s ease-in-out;
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
}

.arrow_left {
  margin: 0 30px 0 30px;
}

.arrow_right {
  margin: 0 30px 0 30px;
}

.arrow_disabled {
  cursor: default;
  color: #a2a2a2;
}

.pagination_hidden {
  display: none;
}

@media screen and (max-width: 600px) {
  .pagination {
    margin: 0 auto 55px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }

  .pagination__quick-navigation {
    font-size: 15px;
    line-height: 18px;
  }

  .pagination__quick-navigation_first {
    margin: 34px 109px 0 0;
    order: 4;
  }

  .pagination__quick-navigation_last {
    margin-top: 34px;
    order: 5;
  }

  .arrow_left {
    margin: 0 30px 0 0;
  }

  .arrow_right {
    margin: 0 0 0 30px;
  }
}
</style>
