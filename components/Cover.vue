<template>
  <div class="cover">
    <container>
      <h2 class="cover__title">
        #РАКЛЕЧИТСЯ
      </h2>
      <app-cover-base
        :data="aboutProject"
        :titleColor="`#fff`"
        :textColor="`#DEDEDE`"
        disabledColor="`#C9C9C9`"
      />
    </container>
  </div>
</template>

<script>
import Container from '@/components/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import CoverBase from '@/components/ui/CoverBase';
export default {
  name: 'Cover',
  components: {
    container: Container,
    'app-cover-base': CoverBase,
  },
  props: {
    aboutProject: Object,
  },
};
</script>

<style scoped>
.cover {
  width: 100%;
  background-color: #613a93;
}
.cover__title {
  text-transform: uppercase;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  padding-top: 90px;
  margin: auto 0;
  text-align: center;
  width: 100%;
  color: #fff;
  font-family: 'Inter', 'Arial', sans-serif;
}

.cover__subtitle {
  padding-top: 50px;
  margin: 0 auto;
  text-align: left;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #fff;
}

.cover__info {
  padding-top: 30px;
  padding-bottom: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.cover__quote {
  max-width: 340px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  font-family: 'Inter', Arial, sans-serif;
}

.cover__text {
  display: flex;
}

.cover__author {
  display: flex;
  flex-direction: column;
  text-align: right;
  padding-right: 40px;
}

.cover__projcet {
  color: #fff;
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

.cover__name-project {
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #c9c9c9;
}

.cover__excerpt {
  text-align: left;
  max-width: 640px;
  color: #dedede;
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
</style>
