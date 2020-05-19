<template>
  <div class="cover-base">
    <container>
      <section-title class="cover-base__title" :style="{ color: titleColor }">{{
        data.title
      }}</section-title>
      <div class="cover-base__text-wrapper" :style="{ color: textColor }">
        <p class="cover-base__subtitle">
          {{ data.subtitle }}
        </p>
        <ul class="cover-base__options">
          <li
            @click="selectTab(1)"
            :style="isActive ? { color: titleColor } : { color: disabledColor }"
            :class="[
              'cover-base__option',
              {
                'cover-base__option_active': isActive,
                'cover-base__option_disabled': !isActive,
              },
            ]"
          >
            {{ data.button.one }}
          </li>
          <li
            @click="selectTab(2)"
            :style="
              !isActive ? { color: titleColor } : { color: disabledColor }
            "
            :class="[
              'cover-base__option',
              {
                'cover-base__option_disabled': isActive,
                'cover-base__option_active': !isActive,
              },
            ]"
          >
            {{ data.button.two }}
          </li>
        </ul>
        <div class="cover-base__text-n-button-wrapper">
          <p v-if="currentTab == 1" class="cover-base__option-description">
            {{ data.description.one }}
          </p>
          <p v-if="currentTab == 2" class="cover-base__option-description">
            {{ data.description.two }}
          </p>
          <slot></slot>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import MainButton from '@/components/ui/MainButton';
import Container from '@/components/Container';
export default {
  components: {
    'section-title': SectionTitle,
    'main-button': MainButton,
    container: Container,
  },
  data() {
    return {
      currentTab: 1,
      isActive: true,
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.currentTab = selectedTab;
      this.isActive = !this.isActive;
    },
  },
  props: {
    disabledColor: String,
    textColor: String,
    titleColor: String,
    data: Object,
  },
};
</script>

<style scoped>
.cover-base {
  width: 100%;
  font-family: 'Inter', 'Arial', sans-serif;
  min-height: 522px;
  padding: 100px 60px;
}
.cover-base__title {
  margin: 0 auto;
  text-align: left;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.cover-base__text-wrapper {
  display: flex;
  justify-content: space-between;
}
.cover-base__subtitle {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  max-width: 340px;
  text-align: left;
}
.cover-base__options {
  display: flex;
  flex-direction: column;
}
.cover-base__option {
  font-size: 18px;
  line-height: 22px;
  display: flex;
  text-align: left;
  cursor: pointer;
}
.cover-base__option:first-of-type {
  margin-bottom: 10px;
}
.cover-base__option_active {
  font-weight: 500;
}
.cover-base__option_disabled {
  font-weight: 400;
}
.cover-base__option_disabled:hover {
  font-weight: 400;
}
.cover-base__option-description {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  max-width: 640px;
  margin-left: 40px;
  text-align: left;
  min-height: 88px;
}
.cover-base__button {
  margin-left: 40px;
  margin-top: 78px;
}
@media screen and (max-width: 1360px) {
  .cover-base__title {
    font-size: 28px;
    line-height: 32px;
    max-width: 367px;
    margin-bottom: 30px;
  }
  .cover-base__subtitle {
    font-size: 16px;
    line-height: 20px;
    max-width: 305px;
  }
  .cover-base__option-description {
    max-width: 570px;
  }
}
@media screen and (max-width: 1240px) {
  .cover-base__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
    margin-bottom: 20px;
  }
  .cover-base__subtitle {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
  }
  .cover-base__option {
    font-size: 15px;
    line-height: 19px;
  }
  .cover-base__option-description {
    font-size: 15px;
    line-height: 19px;
    max-width: 447px;
  }
  .cover-base__button {
    max-width: 230px;
  }
}
@media screen and (max-width: 1000px) {
  .cover-base {
    min-height: 598px;
  }
  .cover-base__title {
    font-size: 24px;
    line-height: 28px;
    margin: 0 auto 26px;
    text-align: center;
    max-width: 380px;
  }
  .cover-base__subtitle {
    max-width: 380px;
    margin: 0 auto 80px;
  }
  .cover-base__options {
    width: 380px;
    margin: 0 auto 30px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding: 0;
  }
  .cover-base__option:first-of-type {
    margin: 0 30px 0 0;
  }
  .cover-base__option {
    margin-right: 30px;
    border-bottom: 2px solid transparent;
  }
  .cover-base__option:hover {
    border-bottom: 2px solid #613a93;
  }
  .cover-base__text-wrapper {
    flex-direction: column;
  }
  .cover-base__option-description {
    max-width: 380px;
    margin: 0 auto;
    min-height: 95px;
  }
  .cover-base__text-n-button-wrapper {
    max-width: 380px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .cover-base__button {
    margin: 50px 0 0;
  }
}
</style>
