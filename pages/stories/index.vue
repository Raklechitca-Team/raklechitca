<template>
  <div>
    <app-header></app-header>
    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  name: 'stories',
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>

<style scoped></style>
