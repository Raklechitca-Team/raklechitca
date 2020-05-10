<template>
  <div :cards="cards" class="cardList">
    <app-card
      v-for="(card, i) in cards"
      :key="i"
      :url="card.url"
      :name="card.name"
      :text="card.text"
    />
  </div>
</template>

<script>
import Card from '@/components/Card';
export default {
  components: {
    'app-card': Card,
  },
  props: ['cards'],
};
</script>

<style scoped>
.cardList {
  max-width: 1440px;
  margin: 70px auto 140px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 300px 300px 300px 300px;
  grid-gap: 70px 40px;
}
@media screen and (max-width: 1380px) {
  .cardList {
    max-width: 1280px;
    margin: 60px auto 130px;
    grid-gap: 60px 40px;
    grid-template-columns: 265px 265px 265px 265px;
  }
}
@media screen and (max-width: 1240px) {
  .cardList {
    max-width: 1024px;
    margin: 46px auto 110px;
    grid-gap: 46px 30px;
    grid-template-columns: 208px 208px 208px 208px;
  }
}
@media screen and (max-width: 980px) {
  .cardList {
    max-width: 768px;
    margin: 60px auto 130px;
    grid-gap: 40px 20px;
    grid-template-columns: 216px 216px 216px;
  }
}
</style>
