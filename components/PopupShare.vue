<template>
  <div class="popup-share">
    <section-title class="popup-share__title">Поделитесь</section-title>
    <div class="popup-share__icons">
      <div class="popup-share__item">
        <a
          href="https://www.facebook.com/sharer.php?src=sp&u=https%3A%2F%2Fwww.raklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2"
          target="_blank"
          class="popup-share__fb"
        >
          <facebook class="popup-share__icon" />
        </a>
      </div>
      <div class="popup-share__item">
        <a
          href="https://twitter.com/intent/tweet?text=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&url=https%3A%2F%2Fwww.raklechitsa.ru%2F&utm_source=share2"
          target="_blank"
          class="popup-share__tw"
        >
          <twitter class="popup-share__icon" />
        </a>
      </div>
      <div class="popup-share__item">
        <a
          href="https://vk.com/share.php?url=https%3A%2F%2Fwww.raklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2"
          target="_blank"
          class="popup-share__vk"
        >
          <vkontakte />
        </a>
      </div>
      <div class="popup-share__item">
        <a
          href="https://connect.ok.ru/offer?url=https%3A%2F%2Fwww.raklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2"
          target="_blank"
          class="popup-share__ok"
        >
          <odnoklassniki />
        </a>
      </div>
      <div class="popup-share__item">
        <a
          href="https://www.instagram.com/raklechitsa/"
          target="_blank"
          class="popup-share__ig"
        >
          <instagram class="popup-share__icon" />
        </a>
      </div>
      <div class="popup-share__item">
        <a
          href="https://www.youtube.com/results?search_query=%23этонелечится"
          target="_blank"
          class="popup-share__yt"
        >
          <youtube class="popup-share__icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import Facebook from '@/components/svg/Facebook';
import Twitter from '@/components/svg/Twitter';
import VKontakte from '@/components/svg/VKontakte';
import Odnoklassniki from '@/components/svg/Odnoklassniki';
import Instagram from '@/components/svg/Instagram';
import Youtube from '@/components/svg/Youtube';
export default {
  name: 'PopupShare',
  components: {
    'section-title': SectionTitle,
    facebook: Facebook,
    twitter: Twitter,
    vkontakte: VKontakte,
    odnoklassniki: Odnoklassniki,
    instagram: Instagram,
    youtube: Youtube,
  },
};
</script>

<style scoped>
.popup-share {
  width: 840px;
  display: flex;
  flex-direction: column;
}

.popup-share__title {
  margin: 0 auto;
}

.popup-share__icons {
  width: 388px;
  margin: 108px auto 108px;
  display: flex;
  justify-content: space-between;
}

.popup-share__item {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-share__item:hover {
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}

.popup-share__fb {
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-share__tw {
  width: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-share__vk {
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-share__ok {
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-share__ig {
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-share__yt {
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1280px) {
  .popup-share {
    max-width: 720px;
  }
}

@media screen and (max-width: 768px) {
  .popup-share {
    max-width: 500px;
  }
}

@media screen and (max-width: 600px) {
  .popup-share {
    width: 270px;
    height: 191px;
  }

  .popup-share__title {
    font-size: 18px;
    line-height: 21px;
  }

  .popup-share__icons {
    padding: 65px 0 0;
    margin: 0 auto;
    max-width: 270px;
  }

  .popup-share__item {
    width: 35px;
    height: 35px;
  }

  .popup-share__fb {
    width: 12px;
  }

  .popup-share__tw {
    width: 21px;
  }

  .popup-share__vk {
    width: 23px;
  }

  .popup-share__ok {
    width: 13.5px;
  }

  .popup-share__ig {
    width: 22px;
  }

  .popup-share__yt {
    width: 22px;
  }
}
</style>
