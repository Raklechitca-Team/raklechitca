<template>
  <div class="container">
    <app-header @buttonClick="popupHandler" />

    <app-popup
      v-if="popupShown"
      @closeClick="popupHandler"
      @overlayClick="popupHandler"
    >
      <app-quiz />
    </app-popup>
    <nuxt />

    <app-popup
      v-if="popupShareShown"
      @closeClick="popupShareHandler"
      @overlayClick="popupShareHandler"
    >
      <app-footer-share />
    </app-popup>

    <app-popup v-if="popupContactShown">
      <app-leave-contact />
    </app-popup>

    <app-footer @buttonClick="popupShareHandler" />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer/Footer';
import Popup from '@/components/Popup';
import Quiz from '@/components/Quiz';
import FooterShare from '@/components/Footer/FooterShare';
import MainButton from '@/components/ui/MainButton';
import LeaveContactVue from '../components/LeaveContact.vue';
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-popup': Popup,
    'app-quiz': Quiz,
    'app-footer-share': FooterShare,
    'app-main-button': MainButton,
    'app-leave-contact': LeaveContactVue,
  },
  data() {
    return {
      popupShown: false,
      popupShareShown: false,
      popupContactShown: false,
    };
  },
  methods: {
    popupHandler() {
      this.popupShown = !this.popupShown;
    },
    popupShareHandler() {
      this.popupShareShown = !this.popupShareShown;
    },
  },
};
</script>

<style>
html {
  font-family: 'Inter', Arial, sans-serif;
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
