<template>
  <div>
    <app-header></app-header>
    <cover-in-site></cover-in-site>
    <bt-fill-form></bt-fill-form>
    <app-search />
  </div>
</template>

<script>
import Header from '@/components/Header';
import ButtonFillFormVue from '../../components/ui/ButtonFillForm.vue';
import CoverInSiteVue from '../../components/CoverInSite.vue';
import SearchVue from '../../components/Search.vue';
export default {
  name: 'stories',
  components: {
    'app-header': Header,
    'cover-in-site': CoverInSiteVue,
    'bt-fill-form': ButtonFillFormVue,
    'app-search': SearchVue,
  },
};
</script>

<style scoped></style>
