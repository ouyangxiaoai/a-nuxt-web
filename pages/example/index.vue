<template>
  <div>
  <div class="examples" v-if="!isMobile">
    <div class="banner">
    </div>
    <div class="content">
      <h1>案例展示<span>/</span><span>Case Display</span></h1>
      <ul v-scroll-show-callback="handleTrendScroll">
        <li v-for="item in exampleList" class="example">
          <nuxt-link :to="{name: 'detail-id', params: {detail: 'example', id: item.cms_id}}">
         <div>
          <img :src="item.img" :alt="item.title">
           <div class="text">
          <h2>{{item.title}}</h2>
          <p>{{item.labels.split(' ')[0]}}</p>
           <p class="detail">{{item.detail}}</p>
           </div>
         </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
  <div class="mobile-examples" v-else>
    <div class="mobile-banner"></div>
    <div class="mobile-content">
      <h1>案例展示</h1>
      <div v-scroll-show-callback="handleTrendScroll">
        <mobile-new-item :list="exampleList"></mobile-new-item>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import { mapGetters, mapState } from 'vuex'
  import ScrollShowCallBack from '~/directives/scrollShowCallBack'
  import MobileNewItem from '~/components/mobile-new-item'
  export default {
    components: {'mobile-new-item': MobileNewItem},
    computed: {
      ...mapGetters({
        'exampleList': 'example/exampleList'
      }),
      ...mapState({
        examplesParams: (state) => state.example.examples.examplesParams,
        scrollDisable: state => state.scrollDisable,
        isMobile: 'isMobile'
      })
    },
    fetch ({store}) {
      let example = store.state.example.examples.examplesList
      if (example.length === 0) {
        store.commit('SCROLL_DISABLE')
        return store.dispatch('getContent', {gmtype: 112, size: store.state.isMobile ? 2 : 6})
      }
    },
    directives: {'scroll-show-callback': ScrollShowCallBack},
    methods: {
      handleTrendScroll () {
        let {page, size, newsTotal} = this.examplesParams
        if (page >= Math.ceil(newsTotal / size)) {
          return false // 判断是否已经请求全部
        }
        if (this.scrollDisable) { // 判断上次请求是否完成
          return false
        }
        this.$store.commit('SCROLL_DISABLE') // 上个请求未完成禁止进入
        this.$store.dispatch('getContent', {gmtype: 112, page: ++page, size})
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
  @import "assets/scss/common.scss";
  .banner {
    background-image: url("~/assets/img/example-banner.png");
  }
  .mobile-banner {
    background-image: url('~/assets/img/mobile/example-banner-mobile.png');
    height: pxTorem(720px);
  }
  .content {
    width: 1200px;
    margin: 70px auto;
    h1 {
      @extend %title-zh;
      margin-bottom: 50px;
      span {
        @extend %title-en;
      }
      span:nth-child(1) {
        font-size: 18px;
        padding: 0 6px 0 8px;
      }
    }
    ul {
      @include clearfix;
    }
    .example {
      float: left;
      width: 380px;
      height: 320px;
      margin-bottom: 30px;
      cursor: pointer;
      div {
        width:100%;
        height: 100%;
        text-align: center;
        border: 1px solid transparent;
        border-bottom: none;
        position: relative;
        @include clearfix;
        // overflow: hidden;
      }
      img {
        position: absolute;
        top: 0;
        left: -1px;
        width: 380px;
        height: 230px;
      }
      .text {
        height: 90px;
        position: absolute;
        bottom: 0;
        width: 380px;
        border: 1px solid #eee;
        left: -1px;
        background-color: #fff;
        transition: height 1s;
      }
      h2 {
        position: absolute;
        top: 20px;
        width: 100%;
        left: 0;
        font-size: 16px;
        height: 20px;
        line-height: 20px;
        color: #333;
      }
      p {
        position: absolute;
        top: 40px;
        left: 0;
        padding: 15px 48px;
        color: #999;
        width: 100%;
        height: 50px;
        text-align: center;
        transition: display 1s;
        font-size: 14px;
      }
      .detail {
        display: none;
      }
      &:hover h2 {
        color: #009bee;
      }
      &:hover {
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
        // overflow: hidden;
        .text {
          height: 120px;
          width: 380px;
          left: -1px;
          border: none;
        }
        div>p:nth-child(2) {
          display: none;
        }
        .detail {
          display: block;
        }
        img {
          // transform: scale(1.1);
        }
      }
    }
    .example:nth-child(3n - 1) {
      margin: 0 30px;
    }
  }
  .mobile-content {
    h1 {
      font-size: pxTorem(50px);
      @include px2rem(padding, 100px, 51px, 80px);
    }
  }
</style>
