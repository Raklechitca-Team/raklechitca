<template>
  <div>
    <app-header />
    Hello about
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'about',
  components: {
    'app-header': Header,
  },
};
</script>

<style scoped></style>
