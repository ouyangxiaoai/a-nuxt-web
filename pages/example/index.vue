<template>
  <div class="examples">
    <div class="banner">
      <!--<div class="text">
        <h1>应用案例</h1>
        <p>国家物联网标识的实际应用案例，基于标识的扩展功能，解决行业的需求痛点</p>
        <p>目前国家平台应用领域包括跨境电商、母婴、生鲜、食品、医疗等行业</p>
      </div>-->
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
</template>
<script>
  import { mapGetters, mapState } from 'vuex'
  import ScrollShowCallBack from '~/directives/scrollShowCallBack'
  export default {
    computed: {
      ...mapGetters({
        'exampleList': 'example/exampleList'
      }),
      ...mapState({
        examplesParams: (state) => state.example.examples.examplesParams,
        scrollDisable: state => state.scrollDisable
      })
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
        this.$store.dispatch('getContent', {gmtype: 112, page: ++page})
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
        border: 1px solid #eee;
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
        border: none;
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

          left: -1px;
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
</style>
