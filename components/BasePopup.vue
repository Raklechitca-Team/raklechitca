<template>
  <div class="modal-window">
    <app-overlay
      class="modal-window__overlay"
      @overlayClick="$emit('overlayClick')"
    />
    <div class="modal-window__popup">
      <close-button
        class="modal-window__close"
        alt="close"
        @closeClick="$emit('closeClick')"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
import CloseButton from '@/components/svg/CloseButton';
export default {
  name: 'BasePopup',
  components: {
    'app-overlay': Overlay,
    'close-button': CloseButton,
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

@media screen and (max-width: 650px) {
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
