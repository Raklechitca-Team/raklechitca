<template>
  <div>
    <app-header />
    <div v-for="story in stories" :key="story.id">
      <a href="#" @click.prevent="openStory(story)">{{ story.name }}</a>
    </div>
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
  async fetch({ store }) {
    console.log('q');
    if (store.getters.stories.stories.length === 0) {
      await store.dispatch('stories/fetch');
    }
  },
  computed: {
    stories() {
      return this.$store.getters.stories.stories;
    },
  },
  methods: {
    openStory(story) {
      this.$route.push('/stories/' + stories.id);
      console.log('click');
    },
  },
};
</script>

<style scoped></style>
