<template>
  <section class="history">
    <div class="history__search">
      <input v-model="inputValue" type="text" class="history__search-input" />
      <app-main-button
        @buttonClick="$emit('buttonClick', inputValue)"
        class="history__search-button"
        >Поиск<app-history-loupe class="history__loupe"
      /></app-main-button>
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/ui/MainButton';
import HistoryLoupeVue from './svg/HistoryLoupe.vue';
export default {
  name: 'app-search',
  components: {
    'app-main-button': MainButton,
    'app-history-loupe': HistoryLoupeVue,
  },
  data() {
    return {
      inputValue: '',
    };
  },
};
</script>

<style scoped>
.history {
  max-width: 1440px;
  margin: 60px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.history__search {
  max-width: 1320px;
  display: grid;
  grid-template-columns: minmax(auto, 1074px) 226px;
  grid-gap: 20px;
}
.history__search-input {
  line-height: 50px;
  font-size: 24px;
  padding: 0 0 0 10px;
  border: 1px solid #e8e8e8;
}
.history__search-button {
  width: 226px;
  transition: 0.3s ease-in-out;
  margin: 0;
}
.history__loupe {
  display: none;
}
@media screen and (max-width: 1280px) {
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
    grid-template-columns: minmax(238px, 1074px) 46px;
    grid-gap: 6px;
  }
  .history__search-button {
    display: flex;
    justify-content: center;
    width: 46px;
    font-size: 0;
    align-items: center;
  }
  .history__loupe {
    display: flex;
  }
}
</style>
