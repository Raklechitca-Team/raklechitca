<template>
  <section class="error">
    <h1 class="error__text error__text_title">
      404
    </h1>
    <h2 class="error__text error__text_subtitle">
      Страница не найдена.
    </h2>
    <h3 class="error__text error__text_subtitle">
      <nuxt-link to="/">Перейти на главную</nuxt-link>
    </h3>
    <h4 class="error__text error__text_subtitle">
      Либо можно обратиться к этим ребятам:
    </h4>
    <div class="developers">
      <div
        class="developers__person"
        v-for="(obj, i) in developers"
        :key="obj.link"
      >
        <img class="developers__photo" :src="obj.link" />
        <p class="developers__description">{{ obj.name }}</p>
        <p class="developers__description">{{ obj.contacts }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'error',
  data() {
    return {
      developers: [
        {
          name: 'Егор Шкиря',
          link:
            'https://ca.slack-edge.com/TPV9DP0N4-UQPV7A3EY-38f2d8db61c9-512',
          contacts: 'TG: @egorshkirya',
        },
        {
          name: 'Полина Задорожная',
          link:
            'https://ca.slack-edge.com/TPV9DP0N4-UQTQJBPGV-9bcfaf845798-512',
          contacts: 'TG: @LekaRen',
        },
        {
          name: 'Варя Лиханина',
          link:
            'https://ca.slack-edge.com/TPV9DP0N4-UQTA2HS3W-68b9c3570655-512',
          contacts: 'TG: @varyalikhanina',
        },
        {
          name: 'Мария Котлярова',
          link:
            'https://ca.slack-edge.com/TPV9DP0N4-U010ER340PK-908cd838ee2c-512',
          contacts: 'TG: @itwassoclear',
        },
        {
          name: 'Батыров Малик',
          link:
            'https://ca.slack-edge.com/TPV9DP0N4-UVC7N21JA-ac09c8d44237-512',
          contacts: 'TG: @Mate_MaliQ',
        },
      ],
    };
  },
};
</script>

<style scoped>
.error {
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 30px;
}
.error__text {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  /*margin-top: 30px;*/
}
.error__text_title {
  font-size: 144px;
  line-height: 174px;
}
.error__text.error__text_subtitle {
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  color: #000;
}
.developers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}
.developers__person {
  max-width: 200px;
  margin: 30px auto;
}
.developers__photo {
  width: 200px;
  border-radius: 50%;
}
.developers__description {
  text-align: center;
}
</style>
