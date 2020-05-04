<template>
  <div>
    <app-header></app-header>
    <bt-read-more></bt-read-more>
    <cover-qm></cover-qm>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Button_readMoreVue from '../../components/ui/Button_read-more.vue';
import Cover_size_sQuestionMarkVue from '../../components/Cover_size_s(question mark).vue';
export default {
  name: 'stories',
  components: {
    'app-header': Header,
    'bt-read-more': Button_readMoreVue,
    'cover-qm': Cover_size_sQuestionMarkVue,
  },
};
</script>

<style scoped></style>
