<template>
  <div :cards="cards" class="cardList">
    <app-card
      v-for="(card, i) in cards"
      :key="i"
      :url="card.url"
      :name="card.name"
      :text="card.text"
      :card="card.id"
    />
  </div>
</template>

<script>
import Card from '@/components/Cardlist/Card';
export default {
  components: {
    'app-card': Card,
  },
  props: ['cards'],
};
</script>

<style scoped>
.cardList {
  padding: 0 60px;
  margin: 70px auto 140px;
  display: grid;
  justify-content: center;
  grid-template-columns: 300px 300px 300px 300px;
  grid-gap: 70px 40px;
}
@media screen and (max-width: 1379px) {
  .cardList {
    margin: 60px auto 130px;
    grid-gap: 60px 40px;
    grid-template-columns: 265px 265px 265px 265px;
  }
}
@media screen and (max-width: 1239px) {
  .cardList {
    margin: 46px auto 110px;
    grid-gap: 46px 30px;
    grid-template-columns: 208px 208px 208px 208px;
  }
}
@media screen and (max-width: 1023px) {
  .cardList {
    margin: 60px auto 130px;
    grid-gap: 40px 20px;
    grid-template-columns: 216px 216px 216px;
  }
}
@media screen and (max-width: 767px) {
  .cardList {
    margin: 60px auto 130px;
    grid-gap: 40px 20px;
    grid-template-columns: 216px 216px;
  }
}
@media screen and (max-width: 500px) {
  .cardList {
    padding: 0;
    margin: 30px auto 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
