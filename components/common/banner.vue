<template>
  <div :class="['container', isMobile ? 'mobile-banners' : '']">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner" alt="">
      </div>
    </div>
    <div class="swiper-button-prev" @click="prevSlide"></div>
    <div class="swiper-button-next" @click="nextSlide"></div>
  </div>
  </div>
</template>

<script>
  let Swiper, mySwiper
  if (process.browser) {
    Swiper = require('swiper')
  }
  export default {
    props: ['banners', 'isMobile'],
    mounted () {
      // eslint-disable-next-line
      mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 3000
      })
    },
    methods: {
      prevSlide () {
        mySwiper.swipePrev()
      },
      nextSlide () {
        mySwiper.swipeNext()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/idangerous.swiper.scss";
  @import "assets/scss/mixins.scss";
  .container {
    .swiper-container {
      min-width: 1200px!important;
      height: 740px;
      overflow: hidden;
      .swiper-slide {
        text-align: center;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
    }
    .swiper-button-next,.swiper-button-prev {
      position: absolute;
      top: 50%;
      margin-top: -26.5px;
      left: 10px;
      background-image: url("~/assets/img/banner-arrow.png");
      width: 40px;
      height: 55px;
      background-size: 40px 55px;
      cursor: pointer;
    }
    .swiper-button-next {
      left: auto;
      right: 10px;
      transform: rotate(180deg)
    }
  }
  .mobile-banners {
    .swiper-container {
      min-width: 100%!important;
      height: pxTorem(720px);
      .swiper-wrapper {
        height: pxTorem(720px);
      }
      .swiper-slide {
        height: pxTorem(720px)!important;
        img {
          object-fit: cover;
        }
      }
    }
    .swiper-button-next,.swiper-button-prev {
      position: absolute;
      top: 50%;
      margin-top: pxTorem(-30px);
      left: 0;
      background-image: url("~/assets/img/banner-arrow.png");
      width: pxTorem(44px);
      height: pxTorem(60px);
      @include px2rem(background-size, 44px, 60px);
      cursor: pointer;
    }
    .swiper-button-next {
      left: auto;
      right: 0;
      transform: rotate(180deg);
      // transform: rotate3d(0, 1, 0, 180deg);
    }
  }
</style>
