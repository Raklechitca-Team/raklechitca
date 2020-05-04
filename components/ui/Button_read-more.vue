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
}

.button__read-more:hover,
.button__read-more:focus {
  background-color: #ffffff;
  color: #000000;
  border-color: #000000;
  outline: none;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
</style>
