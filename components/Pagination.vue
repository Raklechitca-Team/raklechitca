<template>
  <div>
    <div class="pagination">
      <a
        @click="$emit('pageClick', currentPage)"
        class="pagination__quick-navigation pagination__quick-navigation_disabled"
        >Первая<span class="arrow">&#9001;</span></a
      >
      <div
        v-for="page in setPages"
        @click="$emit('pageClick', page)"
        class="pagination__number"
      >
        {{ page }}
      </div>
      <a
        @click="$emit('pageClick', setPages)"
        class="pagination__quick-navigation"
        ><span class="arrow">&#9002;</span>Последняя</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      isActive: true,
    };
  },
  props: {
    storiesInTotal: Number,
    storiesPerPage: Number,
  },
  computed: {
    setPages() {
      return Math.ceil(this.storiesInTotal / this.storiesPerPage);
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
.pagination__quick-navigation_disabled:hover {
  color: #000;
}
.arrow {
  margin: 0 30px;
  color: #000;
}
</style>
