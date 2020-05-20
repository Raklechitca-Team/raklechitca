<template>
  <div class="tell-story">
    <container>
      <app-cover-base
        @currentTabForParent="currentTab"
        :data="tellStory"
        :titleColor="`#000`"
        :textColor="`#666`"
        :disabledColor="`#A2A2A2`"
      >
        <main-button
          v-if="this.current === 1"
          class="tell-story__button"
          @buttonClick="showPopup"
          >Заполнить форму</main-button
        >
        <main-button
          @buttonClick="showPopupContact"
          v-if="this.current === 2" 
          class="tell-story__button"
          >Оставить контакт</main-button
        >
      </app-cover-base>
    </container>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import MainButton from '@/components/ui/MainButton';
import Container from '@/components/Container';
import CoverBase from '@/components/ui/CoverBase';
import LeaveContact from '@/components/LeaveContact';
export default {
  components: {
    'app-leave-contact': LeaveContact,
    'section-title': SectionTitle,
    'main-button': MainButton,
    'app-cover-base': CoverBase,
    container: Container,
  },
  data() {
    return {
      current: 1,
    };
  },
  props: {
    tellStory: Object,
  },
  methods: {
    showPopup() {
      this.$store.commit('popup/togglePopup');
    },
    currentTab(currentTabValue) {
      this.current = currentTabValue.currentTab;
    },
    showPopupContact(){
      this.$store.commit('popup/togglePopupContact');
    }
  },
};
</script>

<style scoped>
.tell-story {
  width: 100%;
  font-family: 'Inter', 'Arial', sans-serif;
  background-color: #f7f7f7;
}

.tell-story__button {
  margin-left: 40px;
  margin-top: 78px;
}
@media screen and (max-width: 1360px) {
  .tell-story__title {
    font-size: 28px;
    line-height: 32px;
    max-width: 367px;
    margin-bottom: 30px;
  }
  .tell-story__subtitle {
    font-size: 16px;
    line-height: 20px;
    max-width: 305px;
  }
  .tell-story__option-description {
    max-width: 570px;
  }
}
@media screen and (max-width: 1240px) {
  .tell-story__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
    margin-bottom: 20px;
  }
  .tell-story__subtitle {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
  }
  .tell-story__option {
    font-size: 15px;
    line-height: 19px;
  }
  .tell-story__option-description {
    font-size: 15px;
    line-height: 19px;
    max-width: 447px;
  }
  .tell-story__button {
    max-width: 230px;
  }
}
@media screen and (max-width: 1000px) {
  .tell-story {
    min-height: 598px;
  }
  .tell-story__title {
    font-size: 24px;
    line-height: 28px;
    margin: 0 auto 26px;
    text-align: center;
    max-width: 380px;
  }
  .tell-story__subtitle {
    max-width: 380px;
    margin: 0 auto 80px;
  }
  .tell-story__options {
    width: 380px;
    margin: 0 auto 30px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding: 0;
  }
  .tell-story__option:first-of-type {
    margin: 0 30px 0 0;
  }
  .tell-story__option {
    margin-right: 30px;
    border-bottom: 2px solid transparent;
  }
  .tell-story__option:hover {
    border-bottom: 2px solid #613a93;
  }
  .tell-story__text-wrapper {
    flex-direction: column;
  }
  .tell-story__option-description {
    max-width: 380px;
    margin: 0 auto;
    min-height: 95px;
  }
  .tell-story__text-n-button-wrapper {
    max-width: 380px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .tell-story__button {
    margin: 50px 0 0;
  }
}
</style>
