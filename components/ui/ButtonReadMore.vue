<template>
  <button class="button__read-more">Читать дальше</button>
</template>

<script>
export default {
  name: 'bt_read-more',
};
</script>

<style scoped>
.button__read-more {
  color: #ffffff;
  width: 93px;
  height: 39px;
  border: 3px solid #ffffff;
  background-color: #000000;
  font-family: 'Times New Roman', Times, serif;
  box-sizing: content-box;
  font-weight: 400;
  font-size: 14px;
  line-height: 39px;
  padding: 0 30px;
  cursor: pointer;
  transition: 0.2s linear;
}

.button__read-more:hover,
.button__read-more:focus {
  background-color: #ffffff;
  color: #000000;
  border-color: #000000;
  outline: none;
  transition: 0.2s linear;
}
</style>
