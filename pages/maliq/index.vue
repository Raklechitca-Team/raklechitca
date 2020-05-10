<template>
  <div>
    <app-header></app-header>
    <cover-qm></cover-qm>
    <bt-fill-form></bt-fill-form>
  </div>
</template>

<script>
import Header from '@/components/Header';
import CoverSizeSmall from '../../components/CoverSizeSmall.vue';
import ButtonFillFormVue from '../../components/ui/ButtonFillForm.vue';
export default {
  name: 'stories',
  components: {
    'app-header': Header,
    'cover-qm': CoverSizeSmall,
    'bt-fill-form': ButtonFillFormVue,
  },
};
</script>

<style scoped></style>
