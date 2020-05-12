<template>
  <h2 class="section-title">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'SectionTitle',
};
</script>

<style scoped>
.section-title {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
}
</style>
