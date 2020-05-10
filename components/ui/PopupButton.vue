<template>
  <button class="button" @click="$emit('btnClick')">
    <slot>Some Button</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style scoped>
.button {
  font-family: 'Inter', 'Arial', sans-serif;
  font-size: 16px;
  cursor: pointer;
  border: 0;
  margin: 0;
}
</style>
