<template>
  <div>
    Hello about
    <app-footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer';
export default {
  name: 'about',
  components: {
    'app-footer': Footer,
  },
};
</script>

<style scoped></style>
