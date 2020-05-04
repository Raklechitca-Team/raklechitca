<template>
  <div>
    <app-header />
    Hello about
    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  name: 'about',
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>

<style scoped></style>
