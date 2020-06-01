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
  color: #fff;
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
  margin: 78px 0 0 40px;
}

.main-button:hover {
  opacity: 0.9;
  transition: 0.3s ease-in-out;
}

.main-button:focus {
  outline: none;
}

@media screen and (max-width: 1280px) {
  .main-button {
    width: 230px;
    height: 48px;
    margin: 0;
  }
}
@media screen and (max-width: 768px) {
  .main-button {
    font-size: 15px;
    line-height: 18px;
    margin: 0;
  }
}
@media screen and (max-width: 320px) {
  .main-button {
    width: 100%;
    height: 48px;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
