<template>
  <div class="statistics">
    <h2 class="statistics__title">Статистика по онкозаболеваниям</h2>
    <div class="statistics__blocks">
      <div class="statistics__block">
        <p class="statistics__quote">
          Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918
          000 человек.
        </p>
        <div class="statistics__info">
            <app-statusBar :value="1" :maxValue="3"/>
          <p class="statistics__total">1 из 3</p>
          <p class="statistics__who">Левада-Центр 2018</p>
        </div>
      </div>
      <div class="statistics__block">
        <p class="statistics__quote">2,6% Россиян имеют онкозаболевания.</p>
        <div class="statistics__info">
          <app-statusBar :value="3" :maxValue="100" />
          <p class="statistics__total">3 700 000</p>
          <p class="statistics__who">Росстат 2018</p>
        </div>
      </div>
      <div class="statistics__block">
        <p class="statistics__quote">
          На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.
        </p>
        <div class="statistics__info">
          <app-doubleBarTypeTwo :value="35" :maxValue="100"/>
          <app-doubleBarTypeFirst :value="15" :maxValue="100"/>
          <p class="statistics__total">&#8593;28%</p>
          <p class="statistics__who">МНИОИ Герцена 2018</p>
        </div>
      </div>
      <div class="statistics__block">
        <p class="statistics__quote">
          На 25% снизилась смертность в течение первого года после постановки
          диагноза.
        </p>
        <div class="statistics__info">
          <app-doubleBarTypeTwo :value="15" :maxValue="100"/>
          <app-doubleBarTypeFirst :value="35" :maxValue="100"/>
          <p class="statistics__total">&#8595;25%</p>
          <p class="statistics__who">МНИОИ Герцена 2018</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import statusBar from '@/components/ui/statusBar';
import doubleBarTypeTwo from '@/components/ui/doubleBarTypeTwo';
import doubleBarTypeFirst from '@/components/ui/doubleBarTypeFirst';
export default {
    components: {
        'app-statusBar': statusBar,
        'app-doubleBarTypeTwo': doubleBarTypeTwo,
        'app-doubleBarTypeFirst': doubleBarTypeFirst,
    }
};
</script>

<style scoped>
.statistics {
  margin: 0 auto;
  max-width: 1440px;
  width: 95%;
  display: flex;
  flex-direction: column;
}
.statistics__title {
    text-align: left;
  max-width: 415px;
  padding-bottom: 38px;
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.statistics__blocks {
    margin: 0 auto;
    width: 100%;
  display: flex;
  justify-content: space-between;
}
.statistics__block {
  border: 1px solid #efefef;
  box-sizing: border-box;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.statistics__quote {
    text-align: left;
  padding-top: 7px;
  padding-left: 20px;
  max-width: 260px;
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
}
.statistics__info {
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 88%;
}
.statistics__total {
  margin: 0;
  padding-top: 20px;
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
}
.statistics__who {
  padding-top: 15px;
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #666666;
}

@media screen and (max-width: 1350px) {
    .statistics__block {
        width: 265px;
        height: 265px;
    }
}
</style>
