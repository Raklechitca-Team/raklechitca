<template>
  <div>
    <app-header></app-header>
    <bt-read-more></bt-read-more>
    <cover-qm></cover-qm>
  </div>
</template>

<script>
import Header from '@/components/Header';
import ButtonReadMore from '../../components/ui/ButtonReadMore.vue';
import CoverSizeSmall from '../../components/CoverSizeSmall.vue';
export default {
  name: 'stories',
  components: {
    'app-header': Header,
    'bt-read-more': ButtonReadMore,
    'cover-qm': CoverSizeSmall,
  },
};
</script>

<style scoped></style>
