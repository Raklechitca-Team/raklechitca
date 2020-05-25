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
    showPopupContact() {
      this.$store.commit('popup/togglePopupContact');
    },
  },
};
</script>

<style scoped>
.tell-story {
  width: 100%;
  min-height: 522px;
  background-color: #f7f7f7;
}
.tell-story__button {
  margin-left: 40px;
  margin-top: 78px;
}
@media screen and (max-width: 1240px) {
  .tell-story__button {
    width: 230px;
  }
}
@media screen and (max-width: 1000px) {
  .tell-story {
    min-height: 598px;
  }
  .tell-story__button {
    margin: 50px 0 0;
    width: 380px;
  }
}
</style>
