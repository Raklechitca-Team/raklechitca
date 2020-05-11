<template>
  <div class="container">
    <app-header />
    <app-title />
    <app-video />
    <app-card />
    <app-insta />
    <app-tell-story />
    <app-statistics />
    <app-cover />
    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Title from '@/components/Title';
import Card from '@/components/Card';
import Video from '@/components/Video';
import TellStory from '@/components/TellStory';
import InstaBlock from '@/components/InstaBlock';
import Statistics from '@/components/Statistics';
import Cover from '@/components/ui/Cover';
import Footer from '@/components/Footer';
export default {
  name: 'index',
  components: {
    'app-header': Header,
    'app-title': Title,
    'app-card': Card,
    'app-video': Video,
    'app-tell-story': TellStory,
    'app-insta': InstaBlock,
    'app-tell-story': TellStory,
    'app-statistics': Statistics,
    'app-cover': Cover,
    'app-footer': Footer,
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Helvetica Neue', 'Intro', 'Arial', sans-serif;
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
