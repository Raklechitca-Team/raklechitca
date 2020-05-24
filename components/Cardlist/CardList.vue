<template>
  <div :cards="cards" class="cardlist">
    <app-card
      v-for="card in cards"
      :key="card.id"
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
  props: {
    cards: Array
  }
};
</script>

<style scoped>
.cardlist {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 300px);
  grid-gap: 70px 40px;
  margin: 70px auto 140px;
}
@media screen and (max-width: 1379px) {
  .cardlist {
    margin: 60px auto 130px;
    grid-gap: 60px 40px;
    grid-template-columns: repeat(4, 265px);
  }
}
@media screen and (max-width: 1239px) {
  .cardlist {
    margin: 46px auto 110px;
    grid-gap: 46px 30px;
    grid-template-columns: repeat(4, 208px);
  }
}
@media screen and (max-width: 1023px) {
  .cardlist {
    margin: 60px auto 130px;
    grid-gap: 40px 20px;
    grid-template-columns: repeat(3, 216px);
  }
}
@media screen and (max-width: 767px) {
  .cardlist {
    grid-template-columns: repeat(2, 216px);
  }
}
@media screen and (max-width: 500px) {
  .cardlist {
    padding: 0;
    margin: 30px auto 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
