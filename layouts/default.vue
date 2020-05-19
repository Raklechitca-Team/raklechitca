<template>
  <div class="container">
    <app-header />

    <app-popup
      v-if="popupShown"
      @closeClick="showPopup"
      @overlayClick="showPopup"
    >
      <app-quiz @closeClick="showPopup" />
    </app-popup>
    <nuxt />

    <app-popup
      v-if="popupShareShown"
      @closeClick="showSharePopup"
      @overlayClick="showSharePopup"
    >
      <app-footer-share />
    </app-popup>

    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer/Footer';
import Popup from '@/components/Popup';
import Quiz from '@/components/Quiz';
import FooterShare from '@/components/Footer/FooterShare';
import MainButton from '@/components/ui/MainButton';
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-popup': Popup,
    'app-quiz': Quiz,
    'app-footer-share': FooterShare,
    'app-main-button': MainButton,
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown'];
    },
    popupShareShown() {
      return this.$store.getters['popup/getPopupShareShown'];
    },
  },
  methods: {
    showPopup() {
      this.$store.commit('popup/togglePopup');
    },
    showSharePopup() {
      this.$store.commit('popup/toggleSharePopup');
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
