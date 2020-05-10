<template>
  <div class="popup">
    <img class="close" src="@/static/x.svg" @click="$emit('closeClick')" />
    <slot>Содержимое окна</slot>
  </div>
</template>

<script>
export default {
  name: 'Popup',
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 920px;
  height: 600px;
  min-height: 300px;
  padding: 40px;
  background-color: #fff;
  z-index: 2;
}
.close {
  position: absolute;
  top: 43px;
  right: 43px;
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background: center;
  cursor: pointer;
  color: black;
  z-index: 3;
}
</style>
