<template>
  <button class="main-button" @click="$emit('buttonClick')">
    <slot>some text</slot>
  </button>
</template>

<script>
export default {
  name: 'MainButton',
};
</script>

<style scoped>
.main-button {
  color: #ffffff;
  width: 280px;
  height: 52px;
  background-color: #613a93;
  font-family: 'Inter', 'Arial', sans-serif;
  box-sizing: content-box;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;
  margin: 0;
  padding: 0;
}

.main-button:hover {
  opacity: 0.9;
  transition: 0.2s linear;
}

.main-button:focus {
  outline: none !important;
}

@media screen and (max-width: 1280px) {
  .main-button {
    width: 230px;
    height: 48px;
  }
}
</style>
