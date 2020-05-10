<template>
  <div class="overlay"></div>
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
  position: absolute;
  background: #000000;
  opacity: 0.5;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: none;
}

@media screen and (min-width: 980px) {
  .overlay {
    display: none;
  }
}
</style>
