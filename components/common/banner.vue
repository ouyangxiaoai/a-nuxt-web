<template>
  <div class="container">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner">
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
    props: ['banners'],
    /*    data () {
      return {
        swiperOption: {
          autoplay: 3000,
          initialSlide: 1,
          direction: 'horizontal',
          loop: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          onSlideChangeEnd: swiper => {
            // console.log('onSlideChangeEnd', swiper.realIndex)
          },
          onTap: swiper => {
            // console.log('onTap', swiper.realIndex)
          }
        }
      }
    },  */
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
<style>

</style>
<style lang="scss" scoped>
  @import 'assets/scss/idangerous.swiper.css';
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
</style>
