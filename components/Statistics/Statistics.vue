<template>
  <div class="statistics">
    <app-container>
      <app-section-title class="statistics__title"
        >Статистика по онкозаболеваниям</app-section-title
      >
      <div class="statistics__adapt">
        <div class="statistics__blocks">
          <div v-for="el in statisticsData" :key="el.value">
            <app-CardStatistics
              :quoteTitle="el.description"
              :total="el.title"
              :who="el.source"
            >
              <app-status-bar
                v-if="el.value"
                :maxValue="el.maxValue"
                :value="el.value"
              />
              <app-double-bar
                v-else-if="el.newValue"
                :newValue="el.newValue"
                :maxValue="el.maxValue"
                :oldValue="el.oldValue"
              />
            </app-CardStatistics>
          </div>
        </div>
      </div>
    </app-container>
  </div>
</template>

<script>
import Container from '@/components/Container';
import statusBar from '@/components/ui/statusBar';
import DoubleBar from '@/components/ui/DoubleBar';
import SectionTitle from '@/components/ui/SectionTitle';
import CardStatistics from '@/components/Statistics/CardStatistics';
export default {
  name: 'Statistics',
  components: {
    'app-container': Container,
    'app-status-bar': statusBar,
    'app-double-bar': DoubleBar,
    'app-section-title': SectionTitle,
    'app-CardStatistics': CardStatistics,
  },
  props: {
    statisticsData: Array,
  },
};
</script>

<style scoped>
.statistics {
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
}
@media screen and (max-width: 900px) {
  .container /deep/ {
    padding-right: 0;
    margin-right: 0;
  }
  .statistics__adapt {
    height: 220px;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .statistics__blocks {
    position: absolute;
  }
}
</style>
