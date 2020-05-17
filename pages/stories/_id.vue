<template>
  <div class="container">
    <app-container>
      <div class="story">
        <div class="story__banner">
          <div class="story__image-wrapper">
            <div
              :style="{
                backgroundImage: `url('${stories[$route.params.id - 1].url}')`,
              }"
              class="story__image"
            ></div>
          </div>
          <div class="story__text-wrapper">
            <h1 class="story__title">
              <span class="story__title story__title_bold"
                >{{ stories[$route.params.id - 1].name }}:
              </span>
              {{ stories[$route.params.id - 1].text }}
            </h1>
            <div class="story-text__bottom-wrapper">
              <a href="#" class="story__share">Поделитесь &#8599;</a>
              <date class="story__date">{{
                stories[$route.params.id - 1].date
              }}</date>
            </div>
          </div>
        </div>
        <div class="story__itself">
          <p class="story__paragraph">
            {{ stories[$route.params.id - 1].paragraph1 }}
          </p>
          <p class="story__paragraph">
            {{ stories[$route.params.id - 1].paragraph2 }}
          </p>
          <p class="story__paragraph story__paragraph_bold">
            {{ stories[$route.params.id - 1].paragraph3 }}
          </p>
          <p class="story__paragraph">
            {{ stories[$route.params.id - 1].paragraph4 }}
          </p>
          <p class="story__paragraph">
            {{ stories[$route.params.id - 1].paragraph5 }}
          </p>
          <p class="story__paragraph">
            {{ stories[$route.params.id - 1].paragraph6 }}
          </p>
        </div>
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
        <a href="#" class="story__more-articles">Больше статей</a>
      </div>
    </app-container>
  </div>
</template>

<script>
import Container from '@/components/Container';
import Cardlist from '@/components/Cardlist/CardList';
export default {
  name: '_id',
  props: {
    name: String,
  },
  components: {
    'app-container': Container,
    'app-cardlist': Cardlist,
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
  display: flex;
  padding: 100px 0 130px;
  justify-content: center;
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
}
.story__paragraph {
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  color: #000;
  text-align: left;
  margin-bottom: 30px;
}
.story__paragraph:last-of-type {
  margin-bottom: 0;
}
.story__paragraph_bold {
  font-weight: bold;
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
.story__more-articles {
  text-decoration: none;
  font-weight: normal;
  color: #000;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  padding: 31px;
  margin: 70px auto 100px;
  display: block;
  text-align: center;
  background-color: #fbfbfb;
  transition: all 0.3s linear;
}
.story__more-articles:hover {
  background-color: #f8f8f8;
}
.four-cards {
  margin: 0 auto;
}
.three-cards {
  display: none;
  margin: 0 auto;
}
@media screen and (max-width: 1279px) {
  .story__image-wrapper {
    width: 518px;
    height: 518px;
  }
  .story__text-wrapper {
    max-width: 407px;
  }
  .story__title {
    font-size: 34px;
    line-height: 44px;
  }
  .story__paragraph {
    font-size: 20px;
    line-height: 28px;
  }
  .story__more-articles {
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
    margin-left: 40px;
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
  .story__more-articles {
    font-size: 13px;
    line-height: 20px;
  }
  .four-cards {
    display: none;
  }
  .three-cards {
    display: grid;
  }
  .story__more-articles {
    margin: 46px 0 80px;
  }
}
@media screen and (max-width: 1279px) {
  .story__image-wrapper {
    width: 518px;
    height: 518px;
  }
  .story__text-wrapper {
    max-width: 407px;
  }
  .story__title {
    font-size: 34px;
    line-height: 44px;
  }
  .story__paragraph {
    font-size: 20px;
    line-height: 28px;
  }
  .story__more-articles {
    margin: 60px auto 90px;
  }
}
</style>
