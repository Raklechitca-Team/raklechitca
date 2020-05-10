<template>
  <div class="tell-story">
    <h3 class="tell-story__title">Расскажите свою историю</h3>
    <div class="tell-story__text-wrapper">
      <p class="tell-story__subtitle">
        Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.
      </p>
      <ul class="tell-story__options">
        <li
          @click="selectTab(1)"
          class="tell-story__option"
          :class="[
            isActive
              ? 'tell-story__option_active'
              : 'tell-story__option_disabled',
          ]"
        >
          1-й вариант
        </li>
        <li
          @click="selectTab(2)"
          class="tell-story__option"
          :class="[
            isActive
              ? 'tell-story__option_disabled'
              : 'tell-story__option_active',
          ]"
        >
          2-й вариант
        </li>
      </ul>
      <div>
        <p v-if="currentTab == 1" class="tell-story__option-description">
          Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю
          после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
          испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
        </p>
        <p v-if="currentTab == 2" class="tell-story__option-description">
          Оставить контакт (почту или номер телефона) и мы свяжемся с вами,
          зададим вопросы, уточним детали вашей истории.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentTab: 1,
      isActive: true,
    };
  },
  methods: {
    selectTab(selectedTab) {
      (this.currentTab = selectedTab), (this.isActive = !this.isActive);
    },
  },
};
</script>

<style scoped>
.tell-story {
  width: 100%;
  font-family: 'Inter', sans-serif;
  background-color: #f7f7f7;
  padding: 100px 60px;
}
.tell-story__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-align: left;
  max-width: 413px;
  margin-bottom: 32px;
}
.tell-story__text-wrapper {
  display: flex;
  justify-content: space-between;
}
.tell-story__subtitle {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  max-width: 340px;
  color: #666;
  text-align: left;
}
.tell-story__options {
  display: flex;
  flex-direction: column;
}
.tell-story__option {
  font-size: 18px;
  line-height: 22px;
  display: flex;
  text-align: left;
  cursor: pointer;
}
.tell-story__option:first-of-type {
  margin-bottom: 10px;
}
.tell-story__option_active {
  font-weight: 500;
}
.tell-story__option_disabled {
  color: #a2a2a2;
  font-weight: 400;
}
.tell-story__option_disabled:hover {
  color: #000;
}
.tell-story__option-description {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  max-width: 640px;
  color: #666;
  margin-left: 40px;
  text-align: left;
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
  }
}
</style>
