<template>
  <div>
    <div class="pagination">
      <a
        @click="currentPageChange(firstPage)"
        :class="[
          'pagination__quick-navigation',
          {
            'pagination__quick-navigation_active': this.activePage,
            'pagination__quick-navigation_disabled': !this.activePage,
          },
        ]"
        >Первая</a
      >
      <a @click="currentPageChange(previousPage)" class="arrow">&#9001;</a>
      <div
        v-for="page in setPages"
        @click="$emit('pageClick', page)"
        class="pagination__number"
      >
        {{ page }}
      </div>
      <a @click="currentPageChange(nextPage)" class="arrow">&#9002;</a>
      <a
        @click="currentPageChange(lastPage)"
        :class="[
          'pagination__quick-navigation',
          {
            'pagination__quick-navigation_active': !this.activePage,
            'pagination__quick-navigation_disabled': this.activePage,
          },
        ]"
        >Последняя</a
      >
    </div>
    <div class="pagination pagination_hidden">
      <div class="pagination__wrapper-top">
        <a
          @click="currentPageChange(previousPage)"
          class="pagination__quick-navigation arrow"
          >&#9001;</a
        >
        <div
          v-for="page in setPages"
          @click="$emit('pageClick', page)"
          class="pagination__number"
        >
          {{ page }}
        </div>
        <a
          @click="currentPageChange(nextPage)"
          class="pagination__quick-navigation arrow"
          >&#9002;</a
        >
      </div>
      <div class="pagination__wrapper-bottom">
        <a
          @click="currentPageChange(firstPage)"
          class="pagination__quick-navigation pagination__quick-navigation_first"
          >Первая</a
        >
        <a
          @click="currentPageChange(lastPage)"
          class="pagination__quick-navigation"
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
    };
  },
  props: {
    storiesInTotal: Number,
    storiesPerPage: Number,
  },
  computed: {
    setPages() {
      const pagesMax = Math.ceil(this.storiesInTotal / this.storiesPerPage);
      if (pagesMax > 5) {
        let arrayFromPagesMax = [];
        for (let i = 1; i !== 4; i++) {
          arrayFromPagesMax[i - 1] = i;
        }
        return arrayFromPagesMax;
      } else {
        return pagesMax;
      }
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
    activePage() {
      if (this.currentPage === 1) {
        return false;
      } else {
        return true;
      }
    },
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
.pagination__number:last-child {
  margin-right: 0;
}
.pagination__number:hover {
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
}
.pagination__quick-navigation_active {
  color: #000;
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
.pagination_hidden {
  display: none;
}
@media screen and (max-width: 500px) {
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
