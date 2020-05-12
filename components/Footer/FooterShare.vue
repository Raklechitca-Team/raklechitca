<template>
  <div class="footer-share">
    <section-title class="footer-share__title">Поделитесь</section-title>
    <div class="footer-share__icons">
      <a href="" target="_blank" class="footer-share__link">
        <img
          src="@/static/share/facebook.svg"
          class="footer-share__icon"
          alt="facebook"
        />
      </a>
      <a href="" target="_blank" class="footer-share__link">
        <img
          src="@/static/share/twitter.svg"
          class="footer-share__icon"
          alt="facebook"
        />
      </a>
      <a href="" target="_blank" class="footer-share__link">
        <img
          src="@/static/share/vkontakte.svg"
          class="footer-share__icon"
          alt="facebook"
        />
      </a>
      <a href="" target="_blank" class="footer-share__link">
        <img
          src="@/static/share/odnoklassniki.svg"
          class="footer-share__icon"
          alt="facebook"
        />
      </a>
      <a href="" target="_blank" class="footer-share__link">
        <img
          src="@/static/share/instagram.svg"
          class="footer-share__icon"
          alt="facebook"
        />
      </a>
      <a href="" target="_blank" class="footer-share__link">
        <img
          src="@/static/share/youtube.svg"
          class="footer-share__icon"
          alt="facebook"
        />
      </a>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
export default {
  name: 'FooterShare',
  components: {
    'section-title': SectionTitle,
  },
};
</script>

<style scoped>
.footer-share {
  width: 840px;
  height: 244px;
  display: flex;
  flex-direction: column;
}

.footer-share__title {
  margin: 0 auto;
}

.footer-share__icons {
  width: 388px;
  margin: 108px auto 0;
  display: flex;
  justify-content: space-between;
}

.footer-share__icon {
  width: 48px;
  height: 48px;
}
</style>
