<template>
  <div>
    <app-header />
    Hello
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'stories',
  components: {
    'app-header': Header,
  },
};
</script>

<style scoped></style>
