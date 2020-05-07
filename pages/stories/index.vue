<template>
  <div class="stories">
    <app-header />
    <app-cardList />
    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CardList from '@/components/CardList';
export default {
  name: 'stories',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-cardList': CardList,
  },
};
</script>

<style scoped>
.stories {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
