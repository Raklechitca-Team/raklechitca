<template>
  <div class="container">
    <app-title />
    <!--<app-video />-->
    <div>SOME BLOCK</div>
    <app-cover-mini :text="'Kek'" />
    <app-card-list />
    <app-cover-mini :text="'Kek'" />
    <app-insta />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Title from '@/components/Title';
import Video from '@/components/Video';
import CoverInSite from '@/components/CoverInSite';
import CardList from '@/components/CardList';
import instaBlock from '@/components/InstaBlock';
import Footer from '@/components/Footer';
export default {
  name: 'index',
  components: {
    'app-header': Header,
    'app-title': Title,
    'app-video': Video,
    'app-cover-mini': CoverInSite,
    'app-card-list': CardList,
    'app-insta': instaBlock,
    'app-footer': Footer,
  },
};
</script>

<style scoped>
.container {
  font-family: 'Inter', 'Arial', sans-serif;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  text-align: center;
}
.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
