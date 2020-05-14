<template>
  <div class="container">
    <app-privacy />
  </div>
</template>

<script>
import PrivacyPolicy from '@/components/PrivacyPolicy';
export default {
  name: 'index',
  components: {
    'app-privacy': PrivacyPolicy,
  },
};
</script>

<style scoped>
.container {
  font-family: 'Inter', 'Arial', sans-serif;
}
</style>
