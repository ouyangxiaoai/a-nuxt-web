<template>
  <div class="container">
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  </div>
</template>

<script>
  export default {
    props: ['banners'],
    data () {
      return {
        swiperOption: {
          autoplay: false,
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
    },
    mounted () {
      //
    }
  }
</script>


<style lang="scss" scoped>
  .container {
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    .swiper-button-next,.swiper-button-prev {
      background-image: url("~/assets/img/banner-arrow.png");
      width: 40px;
      height: 55px;
      background-size: 40px 55px;
    }
    .swiper-button-next {
      transform: rotate(180deg)
    }
  }
</style>
