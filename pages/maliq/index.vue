<template>
  <div>
    <app-header></app-header>
    <cover-in-site></cover-in-site>
    <bt-fill-form></bt-fill-form>
  </div>
</template>

<script>
import Header from '@/components/Header';
import ButtonFillFormVue from '../../components/ui/ButtonFillForm.vue';
import CoverInSiteVue from '../../components/CoverInSite.vue';
export default {
  name: 'stories',
  components: {
    'app-header': Header,
    'cover-in-site': CoverInSiteVue,
    'bt-fill-form': ButtonFillFormVue,
  },
};
</script>

<style scoped></style>
