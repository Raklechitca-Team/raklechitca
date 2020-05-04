<template>
  <div>
    <app-header></app-header>
    Hello
    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  name: '_id',
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>

<style scoped></style>
