<template>
  <div class="statistics">
    <app-container>
      <app-section-title class="statistics__title"
        >Статистика по онкозаболеваниям</app-section-title
      >
      <div class="statistics__blocks">
        <app-CardStatistics
          :quoteTitle="
            'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.'
          "
          :total="'1 из 3'"
          :who="'Левада-Центр 2018'"
          :typeBarValue="1"
          :minValue="1"
          :maxValue="3"
        />
        <app-CardStatistics
          :quoteTitle="'2,6% Россиян имеют онкозаболевания.'"
          :total="'3 700 000'"
          :who="'Росстат 2018'"
          :typeBarValue="1"
          :minValue="3"
          :maxValue="100"
        />
        <app-CardStatistics
          :quoteTitle="
            'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.'
          "
          :total="'↑28%'"
          :who="'МНИОИ Герцена 2018'"
          :typeBarValue="2"
          :minValue="30"
          :maxValue="100"
          :minValueTwo="60"
          :maxValueTwo="100"
          :color="'#e4e1e1'"
          :colorTwo="'#613a93'"
        />
        <app-CardStatistics
          :quoteTitle="
            'На 25% снизилась смертность в течение первого года после постановки диагноза.'
          "
          :total="'↓25%'"
          :who="'МНИОИ Герцена 2018'"
          :typeBarValue="2"
          :minValue="10"
          :maxValue="100"
          :minValueTwo="20"
          :maxValueTwo="100"
          :color="'#e4e1e1'"
          :colorTwo="'#613a93'"
        />
      </div>
    </app-container>
  </div>
</template>

<script>
import Container from '@/components/Container';
import statusBar from '@/components/ui/statusBar';
import miniBar from '@/components/ui/miniBar';
import SectionTitle from '@/components/ui/SectionTitle';
import CardStatistics from '@/components/Statistics/CardStatistics';
export default {
  name: 'Statistics',
  components: {
    'app-container': Container,
    'app-statusBar': statusBar,
    'app-miniBar': miniBar,
    'app-section-title': SectionTitle,
    'app-CardStatistics': CardStatistics,
  },
};
</script>

<style scoped>
.statistics {
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
}
.statistics__title {
  text-align: left;
  max-width: 415px;
  padding-bottom: 38px;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.statistics__blocks {
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
