<template>
  <div class="modal-window">
    <overlay
      class="modal-window__overlay"
      @overlayClick="$emit('overlayClick')"
    ></overlay>
    <div class="modal-window__popup">
      <img
        class="modal-window__close"
        src="../static/x.svg"
        alt="close"
        @click="$emit('closeClick')"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
export default {
  name: 'Popup',
  components: {
    overlay: Overlay,
  },
};
</script>

<style scoped>
.modal-window__popup {
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: #fff;
  z-index: 2;
}
.modal-window__close {
  position: absolute;
  top: 43px;
  right: 43px;
  width: 14px;
  background-size: contain;
  background-repeat: no-repeat;
  background: center;
  cursor: pointer;
  color: black;
  z-index: 3;
}

@media screen and (max-width: 1280px) {
  .modal-window__close {
    top: 38px;
    right: 38px;
    width: 12px;
  }
}

@media screen and (max-width: 320px) {
  .modal-window__popup {
    padding: 15px;
  }

  .modal-window__close {
    width: 12px;
    top: 20px;
    right: 20px;
  }
}
</style>
