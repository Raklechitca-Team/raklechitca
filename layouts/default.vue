<template>
  <div class="container">
    <app-header />
    <nuxt />

    <popup v-if="popupShown">
      <quiz />
    </popup>

    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import Quiz from '@/components/Quiz';
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    popup: Popup,
    quiz: Quiz,
  },
  data() {
    return {
      popupShown: false,
    };
  },
  methods: {
    popupHandler() {
      this.popupShown = !this.popupShown;
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
  max-width: 1440px;
}
</style>
