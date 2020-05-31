<template>
  <div class="cover-base">
    <section-title class="cover-base__title" :style="{ color: titleColor }">
      {{ data.title }}
    </section-title>
    <div class="cover-base__text-wrapper" :style="{ color: textColor }">
      <div class="cover-base__subtitle" v-html="data.text"></div>
      <div class="cover-base__direction-content">
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
            {{ data.extraTexts[0].title }}
            <div
              v-if="1 === this.currentTab"
              class="cover-base__bottom-line"
              :style="{ border: `1px solid ${textColor}` }"
            ></div>
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
            {{ data.extraTexts[1].title }}
            <div
              v-if="2 === this.currentTab"
              class="cover-base__bottom-line"
              :style="{ border: `1px solid ${textColor}` }"
            ></div>
          </li>
        </ul>
        <div class="cover-base__text-n-button-wrapper">
          <transition name="cover-base__fade" mode="out-in">
            <div
              v-if="this.currentTab == 1"
              class="cover-base__option-description"
              v-html="data.extraTexts[0].text"
              key="1"
            />
            <div
              v-if="this.currentTab == 2"
              class="cover-base__option-description"
              v-html="data.extraTexts[1].text"
              key="2"
            />
          </transition>
          <slot></slot>
        </div>
      </div>
    </div>
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
      if (selectedTab === this.currentTab) return;
      this.currentTab = selectedTab;
      this.isActive = !this.isActive;
      this.$emit('currentTabForParent', {
        currentTab: selectedTab,
      });
    },
  },
  props: {
    data: Object,
    disabledColor: String,
    textColor: String,
    titleColor: String,
  },
};
</script>

<style scoped>
.cover-base {
  width: 100%;
  font-family: 'Inter', 'Arial', sans-serif;
  overflow: hidden;
}
.cover-base__title {
  max-width: 367px;
  margin-bottom: 30px;
  text-align: left;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
}
.cover-base__text-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 0;
}
.cover-base__subtitle {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  max-width: 340px;
  text-align: left;
}
.cover-base__direction-content {
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.cover-base__fade-enter-active,
.cover-base__fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.cover-base__fade-enter,
.cover-base__fade-leave-to {
  opacity: 0;
}
.cover-base__options {
  display: flex;
  flex-direction: column;
}
.cover-base__option {
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  list-style-type: none;
  text-align: right;
}
.cover-base__bottom-line {
  display: none;
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
  min-height: 90px;
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
  .cover-base__direction-content {
    display: flex;
    flex-direction: column;
  }
  .cover-base__options {
    min-width: 380px;
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
    font-size: 15px;
    line-height: 19px;
  }
  .cover-base__bottom-line {
    display: flex;
  }
  .cover-base__text-wrapper {
    flex-direction: column;
  }
  .cover-base__option-description {
    max-width: 380px;
    margin: 0 auto 30px;
    min-height: 96px;
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
  @media screen and (max-width: 480px) {
    .cover-base__title {
      max-width: 290px;
      font-size: 18px;
      line-height: 21px;
      text-align: left;
      margin: 0 0 15px;
    }
    .cover-base__subtitle {
      margin: 0 auto 40px;
      text-align: left;
    }
    .cover-base__option {
      font-size: 13px;
      line-height: 19px;
    }
    .cover-base__option-description {
      font-size: 13px;
      line-height: 16px;
    }
  }
}
</style>
