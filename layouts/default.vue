<template>
  <div class="container">
    <app-header />

    <app-base-popup
      v-if="popupShown"
      @closeClick="showPopup"
      @overlayClick="showPopup"
    >
      <app-quiz @closeClick="showPopup" />
    </app-base-popup>
    <nuxt />

    <app-base-popup
      v-if="popupShareShown"
      @closeClick="showSharePopup"
      @overlayClick="showSharePopup"
    >
      <app-popup-share />
    </app-base-popup>

    <app-base-popup
      v-if="popupContactShown"
      @closeClick="contactPopup"
      @overlayClick="contactPopup"
    >
      <app-leave-contact />
    </app-base-popup>

    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer/Footer';
import BasePopup from '@/components/BasePopup';
import Quiz from '@/components/Quiz/Quiz';
import PopupShare from '@/components/PopupShare';
import MainButton from '@/components/ui/MainButton';
import LeaveContact from '@/components/LeaveContact';
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-base-popup': BasePopup,
    'app-quiz': Quiz,
    'app-popup-share': PopupShare,
    'app-main-button': MainButton,
    'app-leave-contact': LeaveContact,
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown'];
    },
    popupShareShown() {
      return this.$store.getters['popup/getPopupShareShown'];
    },
    popupContactShown() {
      return this.$store.getters['popup/getPopupContact'];
    },
  },
  methods: {
    showPopup() {
      this.$store.commit('popup/togglePopup');
    },
    showSharePopup() {
      this.$store.commit('popup/toggleSharePopup');
    },
    contactPopup() {
      this.$store.commit('popup/togglePopupContact');
    },
  },
};
</script>

<style>
html {
  font-family: 'Inter', 'Arial', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
