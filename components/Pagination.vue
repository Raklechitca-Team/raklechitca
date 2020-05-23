<template>
  <div>
    <div class="pagination">
      <div
        v-for="page in setPages"
        @click="$emit('pageClick', page)"
        class="pagination__number"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
</style>
