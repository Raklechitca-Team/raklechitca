<template>
  <div>
    <div class="page__numbers">
      <div
        v-for="page in setPages"
        @click="$emit('pageClick', page)"
        class="page__number"
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
.page__numbers {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
}
.page__number {
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
.page__numbers:last-child {
  margin-right: 0;
}
.page__number:hover {
  background-color: #f4f4f4;
}
</style>
