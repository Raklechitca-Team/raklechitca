<template>
  <div class="container">
    <app-header />
    <h1>Hello</h1>

    <!-- popup-->
    <overlay v-if="popupShown">
      <popup>
        <form class="popup__story">
          <slot>
            <h3 class="popup__title">Шаг 1 из 12</h3>
          </slot>
          <label class="popup__label">
            <slot>
              <p class="popup__subtitle">Как вас зовут?</p>
            </slot>
            <input
              class="popup__input"
              type="text"
              placeholder="Напишите тут"
              minlength="2"
              maxlength="20"
              required
            />
          </label>
          <div class="popup__buttons">
            <popup-button class="popup__button popup__button_back" type="submit"
              >Назад</popup-button
            >
            <popup-button class="popup__button popup__button_next"
              >Далее</popup-button
            >
          </div>
        </form>
      </popup>
    </overlay>

    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Overlay from '@/components/ui/Overlay';
import Popup from '@/components/Popup';
import PopupButton from '@/components/ui/PopupButton';
export default {
  name: 'index',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    overlay: Overlay,
    popup: Popup,
    'popup-button': PopupButton,
  },
  data() {
    return {
      popupShown: false,
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Helvetica Neue', 'Intro', 'Arial', sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}

.popup__title {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  display: flex;
  color: #000000;
}

.popup__subtitle {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  color: #000000;
  margin: 40px 0 0;
}

.popup__input {
  width: 100%;
  margin: 134px 0 0;
  padding: 0 0 10px;
  border: 0;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #666666;
  border-bottom: 1px solid #e7e7e7;
}

.popup__input:focus {
  outline: none !important;
}

.popup__buttons {
  display: flex;
  align-self: flex-start;
  margin: 200px 0 0;
  width: 334px;
}

.container /deep/ .popup__button_back {
  margin: 16px 30px;
  color: #c0c0c0;
}

.container /deep/ .popup__button_next {
  width: 226px;
  height: 52px;
  background-color: #613a93;
  color: #fff;
}
</style>
