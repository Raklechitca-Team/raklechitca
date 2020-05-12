<template>
  <div class="container">
    <app-header @buttonClick="popupHandler" />

    <popup
      v-if="popupShown"
      @closeClick="popupHandler"
      @overlayClick="popupHandler"
    >
      <quiz />
    </popup>

    <popup
      v-if="popupShareShown"
      @closeClick="popupShareHandler"
      @overlayClick="popupShareHandler"
    >
      <footer-share />
    </popup>

    <app-footer @buttonClick="popupShareHandler" />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import Quiz from '@/components/Quiz';
import FooterShare from '@/components/FooterShare';
import Video from '@/components/Video';
import MainButton from '@/components/ui/MainButton';
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    popup: Popup,
    quiz: Quiz,
    'footer-share': FooterShare,
    'app-video': Video,
    'main-button': MainButton,
  },
  data() {
    return {
      popupShown: false,
      popupShareShown: false,
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

.container {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 60px;
}
</style>
