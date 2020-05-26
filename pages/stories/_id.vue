<template>
  <div class="container">
    <app-container>
      <div class="story">
        <div class="story__banner story__banner_row">
          <div class="story__image-wrapper">
            <div
              :style="{
                backgroundImage: `url('${stories[$route.params.id].url}')`,
              }"
              class="story__image"
            ></div>
          </div>
          <div class="story__text-wrapper">
            <h1 class="story__title">
              <span class="story__title story__title_bold"
                >{{ stories[$route.params.id].author }}:
              </span>
              {{ stories[$route.params.id].title }}
            </h1>
            <div class="story-text__bottom-wrapper">
              <a href="#" class="story__share">Поделитесь &#8599;</a>
              <p class="story__date">
                {{ stories[$route.params.id].date }}
              </p>
            </div>
          </div>
        </div>

        <div class="story__banner story__banner_column">
          <h1 class="story__title">
            <span class="story__title story__title_bold"
              >{{ stories[$route.params.id].name }}:
            </span>
            {{ stories[$route.params.id].text }}
          </h1>
          <div class="story__image-wrapper">
            <div
              :style="{
                backgroundImage: `url('${stories[$route.params.id].url}')`,
              }"
              class="story__image"
            ></div>
          </div>
          <div class="story-text__bottom-wrapper">
            <a href="#" class="story__share">Поделитесь &#8599;</a>
            <p class="story__date">{{ stories[$route.params.id].date }}</p>
          </div>
        </div>

        <div
          class="story__itself"
          v-html="stories[$route.params.id].text"
        ></div>
        <a href="#" class="story__share story__share_social"
          >Поделитесь этой статьей в своих социальных сетях &#8599;</a
        >
        <app-cardlist
          class="four-cards"
          :cards="
            stories.slice($route.params.id, parseInt($route.params.id) + 4)
          "
        />
        <app-cardlist
          class="three-cards"
          :cards="
            stories.slice($route.params.id, parseInt($route.params.id) + 3)
          "
        />
        <app-cardlist
          class="two-cards"
          :cards="
            stories.slice($route.params.id, parseInt($route.params.id) + 2)
          "
        />
        <app-more-articles class="more-articles" href="#" />
      </div>
    </app-container>
  </div>
</template>

<script>
import Container from '@/components/Container';
import Cardlist from '@/components/Cardlist/CardList';
import MoreArticles from '@/components/ui/MoreArticles';
export default {
  name: 'id',
  path: '/id',
  component: 'pages/stories/_id',
  props: {
    name: String,
  },
  components: {
    'app-container': Container,
    'app-cardlist': Cardlist,
    'app-more-articles': MoreArticles,
  },
  computed: {
    stories() {
      return this.$store.getters['stories/stories'];
    },
  },
};
</script>

<style scoped>
.container {
  font-family: 'Inter', 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 100px auto 0;
}
.story__banner {
  padding: 100px 0 130px;
  justify-content: center;
}
.story__banner_row {
  display: flex;
}
.story__banner_column {
  display: none;
}
.story__image-wrapper {
  width: 580px;
  height: 580px;
}
.story__image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.story__text-wrapper {
  max-width: 680px;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}
.story-text__bottom-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
}
.story__title {
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  padding-top: 30px;
  text-align: left;
}
.story__title_bold {
  font-weight: bold;
}
.story__bottom-wrapper {
  display: flex;
}
.story__share {
  text-decoration: none;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  transition: all 0.3s linear;
}
.story__share:hover {
  opacity: 0.8;
}
.story__date {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}
.story__itself {
  margin: 0 auto 70px;
  max-width: 780px;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  color: #000;
  text-align: left;
}
.story__share_social {
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 30px;
  max-width: 780px;
  margin: 70px auto 160px;
  display: block;
  text-align: center;
  transition: all 0.3s linear;
}
.story__share_social:hover {
  opacity: all 0.3s linear;
}
.four-cards {
  margin: 0 auto;
}
.three-cards {
  display: none;
  margin: 0 auto;
}
.two-cards {
  display: none;
  margin: 0 auto;
}
.more-articles {
  margin: 70px auto 100px;
}
@media screen and (max-width: 1280px) {
  .story__banner {
    padding: 100px 0 120px;
  }
  .story__image-wrapper {
    width: 518px;
    height: 518px;
  }
  .story__text-wrapper {
    max-width: 602px;
  }
  .story__title {
    font-size: 34px;
    line-height: 44px;
  }
  .story__paragraph {
    font-size: 20px;
    line-height: 28px;
  }
  .story__share_social {
    margin: 60px auto 150px;
  }
  .story__more-articles {
    margin: 60px auto 90px;
    padding: 29px;
  }
  .more-articles {
    margin: 60px auto 90px;
  }
}
@media screen and (max-width: 1023px) {
  .story__banner {
    padding: 100px 0 90px;
  }
  .story__image-wrapper {
    width: 407px;
    height: 407px;
  }
  .story__text-wrapper {
    max-width: 477px;
  }
  .story__title {
    font-size: 30px;
    line-height: 38px;
  }
  .story__paragraph {
    font-size: 18px;
    line-height: 27px;
  }
  .story__share,
  .story__date {
    font-size: 16px;
    line-height: 24px;
  }
  .story__share_social {
    font-size: 16px;
    line-height: 22px;
    margin: 46px auto 120px;
  }
  .more-articles {
    margin: 46px auto 80px;
  }
  .four-cards {
    display: none;
  }
  .three-cards {
    display: grid;
  }
}
@media screen and (max-width: 767px) {
  .story__banner {
    margin: 80px 0 100px;
    padding: 0;
  }
  .story__banner_row {
    display: none;
  }
  .story__banner_column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .story__banner {
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
  }
  .story__image-wrapper {
    width: 420px;
    height: 420px;
    margin-bottom: 60px;
  }
  .story__text-wrapper {
    max-width: 100%;
  }
  .story__bottom-wrapper {
    max-width: 100%;
    justify-content: space-between;
    padding-bottom: 20px;
  }
  .story__title {
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    margin-bottom: 60px;
  }
  .story__itself {
    max-width: 100%;
  }
  .story__paragraph {
    font-size: 18px;
    line-height: 27px;
  }
  .story__share_social {
    padding: 24px;
    font-size: 16px;
    line-height: 22px;
    max-width: 100%;
    margin: 80px auto 120px;
  }
  .story__more-articles {
    font-size: 13px;
    line-height: 16px;
    width: 100%;
    margin: 40px auto 80px;
  }
  .three-cards {
    display: none;
  }
  .two-cards {
    display: grid;
  }
  .more-articles {
    margin: 40px auto 80px;
  }
}
@media screen and (max-width: 500px) {
  .two-cards {
    display: flex;
  }
  .story__share_social {
    margin: 40px auto 100px;
  }
}
@media screen and (max-width: 320px) {
  .story__banner {
    margin: 50px 0 40px;
  }
  .story__title {
    font-size: 18px;
    line-height: 21px;
    margin: 20px 0 30px;
    padding: 0;
  }
  .story__image-wrapper {
    width: 290px;
    height: 290px;
    margin-bottom: 30px;
  }
  .story-text__bottom-wrapper {
    padding-bottom: 20px;
  }
  .story__paragraph {
    font-size: 13px;
    line-height: 16px;
  }
  .story__share_social {
    padding: 20px;
    font-size: 13px;
    line-height: 16px;
    margin: 60px auto 100px;
  }
  .more-articles {
    margin: 40px auto 50px;
  }
}
</style>
