<template>
  <div class="overlay" @click="$emit('overlayClick')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
};
</script>

<style scoped>
.overlay {
  display: flex;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
}
</style>
