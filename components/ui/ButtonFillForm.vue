<template>
  <button class="button__fill-form"><slot>Заполнить форму</slot></button>
</template>

<script>
export default {
  name: 'ButtonFillForm',
};
</script>

<style scoped>
.button__fill-form {
  color: #ffffff;
  width: 192px;
  height: 18px;
  background-color: #613a93;
  font-family: 'Inter', 'Arial', sans-serif;
  box-sizing: content-box;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  padding: 17px 44px;
  cursor: pointer;
  transition: 0.2s linear;
}

.button__fill-form:hover,
.button__fill-form:focus {
  opacity: 0.9;
  transition: 0.2s linear;
}

@media screen and (max-width: 1280px) {
  .button__fill-form {
    width: 170px;
    height: 16px;
    font-size: 16px;
    line-height: 19px;
    padding: 15px 30px;
  }
}
</style>
