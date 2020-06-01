<template>
  <app-container>
    <div class="video">
      <div class="video__text-container">
        <app-section-title class="video__title">
          {{ videoTextData.title }}
        </app-section-title>
        <div class="video__subtitle" v-html="videoTextData.text" />
        <div class="video__arrows">
          <div class="swiper-button-prev" />
          <div class="swiper-button-next" />
        </div>
      </div>

      <div class="video__container">
        <div class="slider" v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <!--       TODO:     закоментировал пока, ждём обложки-->
            <!--            <div class="video__cap">-->
            <!--              <img class="video__cap-image" src="@/static/ellipse.svg" />-->
            <!--            </div>-->
            <app-video-iframe
              v-for="slide in slideArray"
              :key="slide.id"
              :src="slide.url"
              class="swiper-slide video__clip"
            />
          </div>
        </div>
        <p class="video__paragraph">
          {{ videoTextData.note.slice(0, -15) }}
          <a
            href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
            class="video__paragraph-link"
            target="_blank"
            >{{ videoTextData.note.slice(-15) }}</a
          >
        </p>
      </div>
    </div>
  </app-container>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import VideoIframe from '@/components/Video/VideoIframe';
import Container from '@/components/Container';
export default {
  name: 'Video',
  components: {
    'app-video-iframe': VideoIframe,
    'app-section-title': SectionTitle,
    'app-container': Container,
  },
  props: {
    slideArray: Array,
    videoTextData: Object,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      },
    };
  },
};
</script>

<style scoped>
.video {
  display: flex;
  padding-top: 100px;
  padding-bottom: 74px;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
}

.video__text-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.video__title {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  max-width: 413px;
  text-align: left;
}

.video__subtitle {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  max-width: 340px;
  text-align: left;
  margin: 32px 0 0;
}
.video__arrows {
  display: flex;
  align-self: flex-start;
  margin: 155px 0 0;
  width: 80px;
  position: relative;
}
.swiper-button-prev {
  background: #fbfbfb;
}
.swiper-button-next {
  background: #fbfbfb;
}
.swiper-button-prev:focus {
  outline: none;
}
.swiper-button-next:focus {
  outline: none;
}
.swiper-button-prev:hover.swiper-button-prev:after {
  color: #000000;
  transition: color 0.3s ease-in-out;
}
.swiper-button-next:hover.swiper-button-next:after {
  color: #000000;
  transition: color 0.3s ease-in-out;
}

.swiper-button-prev:after {
  color: #bfbfbf;
  font-size: 15px;
}
.swiper-button-next:after {
  color: #bfbfbf;
  font-size: 15px;
}

.video__cap {
  width: 867px;
  height: 450px;
  background: #ededed;
  position: absolute;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.video__cap-image {
  width: 90px;
  height: 90px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: pointer;
}

.video__cap-image:hover {
  transform: scale(1.2);
}

.video__container {
  width: 867px;
  height: 450px;
  position: relative;
}

.video__clip {
  width: 867px;
  height: 450px;
}

.video__paragraph {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  width: 100%;
  text-align: left;
  margin: 10px 0 0;
}

.video__paragraph-link {
  color: #666666;
}

.video__paragraph-link:hover {
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}

@media screen and (max-width: 1280px) {
  .video {
    padding-top: 90px;
    padding-bottom: 64px;
  }
  .video__title {
    font-size: 28px;
    line-height: 32px;
  }
  .video__subtitle {
    font-size: 16px;
    line-height: 20px;
  }
  .video__container {
    width: 773px;
    height: 400px;
  }

  .video__clip {
    width: 773px;
    height: 400px;
  }
}

@media screen and (max-width: 1024px) {
  .video {
    padding-top: 80px;
    padding-bottom: 54px;
  }
  .video__title {
    font-size: 24px;
    line-height: 28px;
  }
  .video__subtitle {
    font-size: 13px;
    line-height: 16px;
  }
  .video__container {
    width: 606px;
    height: 314px;
  }

  .video__clip {
    width: 606px;
    height: 314px;
  }
}
@media screen and (max-width: 768px) {
  .video {
    flex-direction: column;
    align-items: center;
  }
  .video__title {
    text-align: center;
    max-width: 380px;
  }
  .video__subtitle {
    text-align: center;
    max-width: 380px;
    margin-bottom: 60px;
  }
  .video__arrows {
    display: none;
  }
  .video__container {
    width: 100%;
  }

  .video__clip {
    width: 100%;
  }
}
@media screen and (max-width: 450px) {
  .video__container {
    width: 290px;
    height: 150px;
  }

  .video__clip {
    width: 290px;
    height: 150px;
  }
}

@media screen and (max-width: 320px) {
  .video {
    padding-top: 50px;
    padding-bottom: 30px;
  }
  .video__title {
    font-size: 18px;
    line-height: 28px;
  }
}
</style>
