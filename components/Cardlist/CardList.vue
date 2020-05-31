<template>
  <div :cards="cards" class="cardlist">
    <app-card
      v-for="card in cards"
      :key="card.id"
      :url="`https://strapi.kruzhok.io${card.ImageUrl[0].url}`"
      :name="card.author"
      :text="card.title"
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
    cards: Array,
  },
};
</script>

<style scoped>
.cardlist {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 330px);
  grid-gap: 40px 10px;
  margin: 70px auto 140px;
}
@media screen and (max-width: 1379px) {
  .cardlist {
    margin: 30px auto 130px;
    grid-gap: 30px 10px;
    grid-template-columns: repeat(4, 295px);
  }
}
@media screen and (max-width: 1239px) {
  .cardlist {
    margin: 30px auto 110px;
    grid-gap: 30px 30px;
    grid-template-columns: repeat(4, 238px);
  }
}
@media screen and (max-width: 1100px) {
  .cardlist {
    margin: 46px auto 110px;
    grid-gap: 46px 10px;
    grid-template-columns: repeat(4, 238px);
  }
}
@media screen and (max-width: 1024px) {
  .cardlist {
    margin: 60px auto 130px;
    grid-gap: 40px 20px;
    grid-template-columns: repeat(3, 238px);
  }
}
@media screen and (max-width: 805px) {
  .cardlist {
    margin: 60px auto 130px;
    grid-gap: 40px 10px;
    grid-template-columns: repeat(3, 232px);
  }
}
@media screen and (max-width: 768px) {
  .cardlist {
    grid-template-columns: repeat(2, 238px);
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
