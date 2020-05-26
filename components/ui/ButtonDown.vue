<template>
  <div class="button">
    <button class="button__body">
      <app-button-down />
    </button>
  </div>
</template>

<script>
import buttonDown from '@/components/svg/buttonDown';
export default {
  components: {
    'app-button-down': buttonDown,
  },
};
</script>

<style scoped>
.button__body {
  background-color: #613a93;
  border: none;
}
</style>
