<template>
  <div class="footer-share">
    <section-title class="footer-share__title">Поделитесь</section-title>
    <div class="footer-share__icons">
      <div class="footer-share__item">
        <a href="" target="_blank" class="footer-share__fb">
          <facebook class="footer-share__icon" />
        </a>
      </div>
      <div class="footer-share__item">
        <a href="" target="_blank" class="footer-share__tw">
          <twitter class="footer-share__icon" />
        </a>
      </div>
      <div class="footer-share__item">
        <a href="" target="_blank" class="footer-share__vk">
          <vkontakte />
        </a>
      </div>
      <div class="footer-share__item">
        <a href="" target="_blank" class="footer-share__ok">
          <odnoklassniki />
        </a>
      </div>
      <div class="footer-share__item">
        <a href="" target="_blank" class="footer-share__ig">
          <instagram class="footer-share__icon" />
        </a>
      </div>
      <div class="footer-share__item">
        <a href="" target="_blank" class="footer-share__yt">
          <youtube class="footer-share__icon" />
        </a>
      </div>
    </div>
    <!-- коммент от Хаза:
    в перспективе лучше конечно это реализовать через цикл,
    так будет проще добавлять и удалять соцсети в случае необходмости -->
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
  name: 'FooterShare',
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
.footer-share {
  width: 840px;
  display: flex;
  flex-direction: column;
}

.footer-share__title {
  margin: 0 auto;
}

.footer-share__icons {
  width: 388px;
  margin: 108px auto 108px;
  display: flex;
  justify-content: space-between;
}

.footer-share__item {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-share__fb {
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-share__tw {
  width: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-share__vk {
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-share__ok {
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-share__ig {
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-share__yt {
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1280px) {
  .footer-share {
    max-width: 720px;
  }
}

@media screen and (max-width: 768px) {
  .footer-share {
    max-width: 500px;
  }
}

@media screen and (max-width: 600px) {
  .footer-share {
    width: 270px;
    height: 191px;
  }

  .footer-share__title {
    font-size: 18px;
    line-height: 21px;
  }

  .footer-share__icons {
    padding: 65px 0 0;
    margin: 0 auto;
    max-width: 270px;
  }

  .footer-share__item {
    width: 35px;
    height: 35px;
  }

  .footer-share__fb {
    width: 12px;
  }

  .footer-share__tw {
    width: 21px;
  }

  .footer-share__vk {
    width: 23px;
  }

  .footer-share__ok {
    width: 13.5px;
  }

  .footer-share__ig {
    width: 22px;
  }

  .footer-share__yt {
    width: 22px;
  }
}
</style>
