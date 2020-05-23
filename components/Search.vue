<template>
  <section class="history">
    <div class="history__search">
      <input type="text" class="history__search-input" />
      <main-button class="history__search-button">Поиск</main-button>
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/ui/MainButton';
export default {
  name: 'app-search',
  components: {
    'main-button': MainButton,
  },
};
</script>

<style scoped>
.history {
  margin: 60px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.history__search {
  max-width: 1320px;
  display: grid;
  grid-template-columns: minmax(auto, 1074px) 226px;
  gap: 20px;
}

.history__search-input {
  line-height: 50px;
  font-size: 24px;
  padding: 0;
  border: 1px solid #e8e8e8;
}

.history__search-button {
  width: 226px;
  transition: 0.2s linear;
}

@media screen and (max-width: 1280px) {
  .history {
    margin: 50px 0 0;
  }

  .history__search-input {
    line-height: 46px;
    font-size: 22px;
  }
}

@media screen and (max-width: 1024px) {
  .history__search {
    grid-template-columns: minmax(auto, 1074px) 208px;
  }

  .history__search-input {
    line-height: 44px;
    font-size: 20px;
  }

  .history__search-button {
    width: 208px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (max-width: 650px) {
  .history__search {
    grid-template-columns: minmax(238px, 1074px) 48px;
    gap: 6px;
  }

  .history__search-button {
    width: 48px;
    font-size: 0;
    background-image: url(./svg/history__button_img.svg);
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
