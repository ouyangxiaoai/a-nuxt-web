<template>
  <div>
    <banner :banners="banners"></banner>
    <div class="num-wrap">
    <div class="num">
      <div v-for="item in nums">
        <p v-num-scroll="item.num">0</p>
        <span>{{item.name}}</span>
      </div>
    </div>
    </div>
    <!--  产品优势  -->
    <div class="product-advantage">
      <div class="title">
        <h3>这里有你需要的一切</h3>
        <h5>There Is Everything For You</h5>
        <h6>物联网拐点到来，企业如何弯道超车？想要留住用户，还不想花大价钱？如何开源节流，实现利益最大化？</h6>
      </div>
      <div @click="advActive(content.index)" class="adv-content" v-for="content in advContent" :class="content.index === activeAdv ? 'isActive' : ''">
        <div class="content-header">
          <img :src="content.img" alt="国物标识">
          <div>
          <h6>{{content.title}}</h6>
          <span>{{content.titleEn}}</span>
          </div>
        </div>
        <div class="content-show" :class="'show' + content.index">
          <h1 class="content-title">{{content.title}}<span>{{content.titleDetail}}</span></h1>
          <div class="content-list">
            <div v-for="item in content.list"><img :src="item.icon" alt="产品优势"><h2>{{item.title}}：</h2><span>{{item.detail}}</span></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 产品功能 -->
    <div class="product-feature">
      <div class="title">
        <h3>产品功能</h3>
        <h5>Product Feature</h5>
        <p>以防伪溯源为切入点，通过物联网标识技术 + 大数据分析 + GIS技术</p>
        <p>构建产品消费安全第一道防线</p>
      </div>
      <div class="fea-content">
        <ul class="fea-list">
          <li v-for="item in feaList" @click="changeTab(item.path)"><img :src="item.icon" :alt="item.name"><p>{{item.name}}</p></li>
        </ul>
        <div class="waveWrapper waveAnimation">
          <div class="waveWrapperInner bgMiddle">
            <div class="wave waveMiddle"></div>
          </div>
          <div class="waveWrapperInner bgBottom">
            <div class="wave waveBottom"></div>
          </div>
        </div>
      </div>
    </div>
    <!--  产品优势2 -->
    <div class="product-advantage-2">
      <div class="title">
        <h3>产品优势</h3>
        <h5>Product Advantages</h5>
      </div>
      <div class="content">
      <div class="adv-item" v-for="item in advList">
        <h1>{{item.index}}</h1>
        <div>
        <h2>{{item.name}}</h2>
        <p>{{item.detail1}}</p>
        <p>{{item.detail2}}</p>
        </div>
      </div>
      </div>
    </div>
    <!-- 新闻中心 -->
    <div class="news">
      <div class="news-left">
        <h1>新闻中心<span>/</span><span>News Center</span></h1>
        <div class="new-content" @click="goDetail(contentLeft[0].cms_id)">
          <!--<img :src="contentLeft[0].img" alt="">-->
          <i class="img" :style="{backgroundImage: `url(${contentLeft[0].img})`}"></i>
          <news-item :item="contentLeft[0]"></news-item>
        </div>
      </div>
      <div class="news-right">
        <el-tabs v-model="activeNews" @tab-click="handleClick">
          <el-tab-pane label="平台动向" name="first">
            <news-item v-for="(item, index) in newsContent.slice(1, 4)" class="newsItem" :item="item" :key="index"></news-item>
          </el-tab-pane>
          <el-tab-pane label="国家政策" name="second">
            <news-item v-for="(item, index) in policyContent.slice(1, 4)" class="newsItem" :item="item" :key="index"></news-item>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!--  合作伙伴  -->
    <div class="partner">
      <div class="par-content">
      <h1>携手共赢，与全球合作伙伴共建标识生态</h1>
      <h2>加入国物标识合作伙伴计划，开创新业务，获取技术、资源、实现更快速成长</h2>
      <ul>
        <li v-for="item in partner">
          <img :src="item.img" alt="国物标识合作伙伴">
        </li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '~/components/common/banner'
import { mapGetters, mapState } from 'vuex'
/* import chunk from 'lodash/chunk' */
import numScroll from '~/directives/numScroll'
import newsItem from '~/components/new-item'
export default {
  components: {
    banner, 'news-item': newsItem
  },
  directives: {'num-scroll': numScroll},
  computed: {
    ...mapGetters({
      banners: 'bannersImg'
    }),
    ...mapState({
      newsContent: state => state.newsContent,
      policyContent: state => state.policyContent
    })
  },
  data () {
    return {
      activeAdv: '0',
      activeNews: 'first',
      contentLeft: this.$store.state.newsContent,
      nums: [
        {name: '已注册企业数', num: '23612'},
        {name: '标识注册总量', num: '35987483'},
        {name: '累计查询次数', num: '10879385'}
      ],
      advContent: [
        {
          index: '0',
          title: '销售转化',
          titleEn: ' / boost sales',
          img: require('~/assets/img/boost-sales.png'),
          titleDetail: '（开拓市场，促进销售转化）',
          list: [
            {title: '精准营销', icon: require('~/assets/img/boost-3.png'), detail: '利用场景化的互动与消费者沟通，充分满足用户刚需'},
            {title: '销售员无处不在', icon: require('~/assets/img/boost-2.png'), detail: '一个标识码就是一个销售员，抓住用户消费冲动。一键即可购买'},
            {title: '多端促销', icon: require('~/assets/img/boost-1.png'), detail: '活动配置灵活，不同活动可同时开展'}
          ]
        },
        {
          index: '1',
          title: '降低成本',
          titleEn: ' / reduce the cost',
          img: require('~/assets/img/reduce-the-cost.png'),
          titleDetail: '（成本降低了，利润自然上去了）',
          list: [
            {title: '活动推广', icon: require('~/assets/img/reduce-3.png'), detail: '标识即入口，无需重复更改包装，节约营销成本'},
            {title: '市场调研', icon: require('~/assets/img/reduce-2.png'), detail: '直面用户，节省调研经费，数据真实有效'},
            {title: '渠道优化', icon: require('~/assets/img/reduce-1.png'), detail: '基于大数据分析，全国销售网点清晰可见。优化渠道投放，触达目标用户'}
          ]
        },
        {
          index: '2',
          title: '留住用户',
          titleEn: ' / keep the user',
          img: require('~/assets/img/keep-the-user.png'),
          titleDetail: '（留住用户的方法有很多种，这可能是最省钱的一种）',
          list: [
            {title: '售前扫码', icon: require('~/assets/img/phone.png'), detail: '一有异常，提前止损，让消费者放心购物'},
            {title: '一键复购', icon: require('~/assets/img/buycar.png'), detail: '我要的，现在就要，一键复购，马上拥有'},
            {title: '售后服务', icon: require('~/assets/img/buyafter.png'), detail: '优质售后服务，及时响应，周到体贴'}
          ]
        }
      ],
      feaList: [
        {icon: require('~/assets/img/1.png'), name: '大数据应用', path: '/function/big-data'},
        {icon: require('~/assets/img/2.png'), name: '精准营销', path: '/function/market'},
        {icon: require('~/assets/img/3.png'), name: '渠道优化', path: '/function/channel'},
        {icon: require('~/assets/img/4.png'), name: '窜货管理', path: '/function/c-manage'},
        {icon: require('~/assets/img/5.png'), name: '售后服务', path: '/function/service'},
        {icon: require('~/assets/img/6.png'), name: '防伪溯源', path: '/function/security'}
      ],
      advList: [
        {index: '01', name: '品牌权威', detail1: '国家级物联网标识基建平台', detail2: '公信力强'},
        {index: '02', name: '兼容性强', detail1: '作为国家产品基础数据库，独有异构', detail2: '解析技术，兼容所以标识码'},
        {index: '05', name: '政策扶持', detail1: '国家发改委批复的国家级战略', detail2: '项目由政府出资重点建设'},
        {index: '03', name: '安全稳定', detail1: '表示信息存储运营，数据信息安全稳定', detail2: ''},
        {index: '04', name: '技术保障', detail1: '有中科院高级研发人员共同研发建设', detail2: '技术国内领先'}
      ],
      partner: [
        {img: require('~/assets/img/partner-1.png')},
        {img: require('~/assets/img/partner-2.png')},
        {img: require('~/assets/img/partner-3.png')},
        {img: require('~/assets/img/partner-4.png')},
        {img: require('~/assets/img/partner-5.png')},
        {img: require('~/assets/img/partner-6.png')},
        {img: require('~/assets/img/partner-7.png')}
      ]
    }
  },
  methods: {
    advActive (index) { // 点击激活某一个产品优势模块
      this.activeAdv = index
    },
    handleClick (tab, event) { // 新闻tab
      this.contentLeft = this.activeNews === 'first' ? this.$store.state.newsContent : this.$store.state.policyContent
    },
    changeTab (index) {
      window.open(index)
    },
    goDetail (id) { // 去到详情
      this.$router.push({
        name: 'detail-id',
        params: {detail: 'news', id}
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "assets/scss/mixins.scss";
  @import "assets/scss/common.scss";
  .num-wrap {
    background-color: $bgf8;
  }
  .num { // 中间数字部分
    width: $width;
    margin: 0 auto;
    height: 130px;
    padding: 30px 0;
    div {
      width: 33.3%;
      text-align: center;
      display: inline-block;
      p{
        @extend %title-zh;
        font-size: 32px;
        margin-bottom: 12px;
      }
    }
  }
  .product-advantage, .product-feature, .product-advantage-2 { // 产品优势一整块
    width: $width;
    height: 776px;
    margin: 70px auto;
    text-align: center;
    overflow: hidden;
    position: relative;
    @include clearfix;
    .title {
      h3 {
        @extend %title-zh;
      }
      h5 {
        @extend %title-en;
        margin-top: 10px;
      }
    }
  }
  .product-advantage h6 {
    margin-top: 46px;
    font-size: $f16;
  }
    .adv-content {
      margin-top: 50px;
      float: left;
      width: 380px;
      margin-right: 30px;
      height: 294px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      .content-header {
        @include clearfix;
      }
      .content-header > img, .content-header > div{
        float: left;
        width: 100%;
        height: 230px;
      }
      .content-header > div {
        width: 100%;
        text-align: center;
        height: 64px;
        line-height: 64px;
        border: 1px solid #e9e9e9;
        border-top: none;
        h6 {
          margin-top: 0;
          display: inline-block;
          color: $c3;
        }
        span {
          @extend %title-en;
        }
      }
      .content-show {
        display: none;
        position: absolute;
        left: 0;
        width: $width;
        height: 260px;
        margin-top: 48px;
        padding: 62px 0 62px 50px;
        border: 1px solid #e9e9e9;
        background-color: $bgf8;
        .content-title {
          text-align: left;
          font-size: 20px;
          color: $c3;
          span {
            font-size: 14px;
            color: #666;
          }
        }
        .content-list {
          margin-top: 20px;
          @include clearfix;
          div {
            float: left;
            height: 30px;
            line-height: 30px;
            position: relative;
            margin: 10px 60px 10px 0;
            &:last-child {
              margin-right: 0;
            }
            i, h2, span {
              display: inline-block;
            }
          }
          div img {
            position: absolute;
            top: 5px;
            left: 0;
          }
          div h2 {
            color: $c3;
            font-size: $f16;
            margin-left: 40px;
          }
        }
        &:before, &:after {
          z-index: 2;
          position: absolute;
          top: -36px;
          left: 175px;
          @include upTriangle(18px, #999)
        }
        &:before {
          z-index: 3;
          border-bottom-color: #f8f8f8;
        }
      }
      .show1:before, .show1:after {
         left: 585px;
       }
      .show2:before, .show2:after {
        left: 995px;
      }
      .show2 .content-list div:first-child img {
        left: 3px;
        top: 1.5px;
      }
      &.isActive {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      }
    }
    .isActive .content-show {
      display: block;
    }
    .isActive .content-header > div {
      // border: none;
    }
/*  产品功能  */
  .product-feature {
    width: 100%;
    padding: 70px 0;
    margin-top: 0;
    margin-bottom: 0;
    background-color: $bgf8;
    .title p{
      font-size: $f16;
      padding: 5px 0;
    }
    .title h5 {
      margin-bottom: 38px;
    }
  }
  .fea-content {
    width: 100%;
    height: 579px;
    background: url("~/assets/img/fea-bac.png") no-repeat center center;
    background-size: cover;
    margin-top: 50px;
    position: relative;
  }
  .fea-list {
    width: 1192px;
    position: absolute;
    top: 162px;
    left: 50%;
    margin-left: -596px;
    @include clearfix;
    li {
      float: left;
      width: 127px;
      height: 82px;
      text-align: center;
      margin: 0 43px;
      color: #fff;
      font-size: $f16;
      background: url("~/assets/img/fea-item.png") no-repeat center top;
      position: relative;
      z-index: 100;
      cursor: pointer;
      &:hover {
        background-image: url("~/assets/img/fea-item-active.png");
      }
      p {
        position: absolute;
        width: 100%;
        bottom: -30px;
        left: 0;
        text-align: center;
      }
      img {
        @extend %posc;
      }
      a {
        color: #fff;
      }
    }
    li:first-child {
      margin-left: 0;
      background-position: left top;
    }
    li:last-child {
      margin-right: 0;
      background-position: right top;
    }
  }
  /* 波浪动画 */
  .waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    bottom: 140px;
  }
  .bgMiddle {
    z-index: 10;
    opacity: 0.75;
  }
  .bgBottom {
    z-index: 5;
  }
  .wave {
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
  }
  .waveMiddle {
    background-size: 50% 120px;
  }
  .waveAnimation .waveMiddle {
    background-image: url("~/assets/img/wave-top.png");
    animation: wave 15s linear infinite;
  }
  .waveBottom {
    background-size: 50% 100px;
  }
  .waveAnimation .waveBottom {
    background-image: url("~/assets/img/wave-bottom.png");
    animation: wave 10s linear infinite;
  }
  /*  产品优势2  */
  .product-advantage-2 {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    height: 770px;
    padding-top: 70px;
    background: url("~/assets/img/adv-2-bac.png") no-repeat center center;
    background-color: $bgf8;
    .content {
      width: $width;
      height: 640px;
      margin: 0 auto;
      position: relative;
    }
    .adv-item {
      position: absolute;
      left: 0;
      top: 50px;
      width: 316px;
      height: 178px;
      cursor: pointer;
      h1 {
        display: none;
        position: absolute;
        top: -30px;
        left: 16px;
        height: 60px;
        font-size: 44px;
        color: #009BEE;
        font-weight: bold;
      }
      div {
        @extend %posvm;
        right: 30px;
        text-align: right;
        font-size: 16px;
        h2 {
          font-size: 18px;
          color: $c3;
          margin-bottom: 16px;
        }
      }
      &:after {
        height: 1px;
        background-color: #aaa;
        @include poshc;
        bottom: 0;
      }
      &:hover {
        background-color: #fff;
        h1 {
          display: block;
        }
        h2 {
          color: $mainBlue;
        }
       /* &:after {
          animation: borderWidth 1s 0.5s linear forwards;
        } */
      }
      &:nth-child(2), &:nth-child(4) {
        left: auto;
        right: 0;
      }
      &:nth-child(2) div, &:nth-child(4) div {
        right: auto;
        left: 30px;
        text-align: left;
      }
      &:nth-child(2) h1, &:nth-child(4) h1 {
        left: auto;
        right: 16px;
      }
      &:nth-child(3), &:nth-child(4) {
        top: 328px;
      }
      &:nth-child(5) {
        @include poshc;
        top: auto;
        bottom: 30px;
      }
    }
  }
  /*  新闻  */
  .news {
    width: $width;
    margin: 0 auto;
    @include clearfix;
  }
  .news-left {
    float: left;
    margin-top: 70px;
    width: 536px;
    h1 {
      @extend %title-zh;
      height: 36px;
      line-height: 36px;
      span {
        @extend %title-en;
      }
      span:nth-child(1) {
        font-size: 18px;
        padding: 0 6px 0 8px;
      }
    }
    .new-content {
      width: 536px;
      height: 422px;
      margin-top: 50px;
      cursor: pointer;
      .img {
        width: 100%;
        height: 286px;
        display: block;
        background-size: cover;
        background-position: center;
      }
      }
    }
  .news-right {
    float: right;
    margin-top: 70px;
    width: 600px;
    height: 508px;
    position: relative;
    color: #999;
  }
  /*  合作伙伴 */
  .partner {
    width: 100%;
    text-align: center;
    background-color: $bgf8;
    .par-content {
      width: $width;
      margin: 70px auto 0;
      padding-top: 70px;
    }
    h1 {
     @extend %title-zh;
    }
    h2 {
      font-size: $f16;
      padding: 14px 0;
    }
    ul {
      @include clearfix;
      margin: 50px auto 0;
    }
    li {
      float: left;
      width: 25%;
      height: 100px;
      text-align: center;
      img {
        //@extend %posc
      }
      &:nth-child(3) {
        padding-top: 10px;
      }
    }
  }
</style>
<style lang="scss">
  @import "assets/scss/mixins.scss";
  @import "assets/scss/common.scss";
  /* el-tab的自定义样式 */
  .news-right {
    .el-tabs__header {
      margin-bottom: 50px;
    }
    .el-tabs__content {
      overflow: visible;
    }
    .el-tabs__nav {
      float: right;
    }
    .el-tabs__item {
      width: 86px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      padding: 0;
      margin-right: 20px;
    }
    .el-tabs__item.is-active {
      color: #fff;
      background-color: #009BEE;
    }
    .el-tabs__nav-wrap:after {
      height: 0;
    }
    .el-tabs__active-bar {
      transition: none;
    }
  }
  /*  新闻内容的自定义样式 */
  .newsItem {
    .text-right span {
      display: inline-block;
      width: 434px!important;
      font-size: 16px;
      @extend %text-overflow;
    }
  }
  .left-content {
    section {
      padding: 0!important;
    }
    .text-right>div p, .text-right>div span {
      text-align: left!important;
      text-indent: 0!important;
      line-height: 30px!important;
      font-size: 16px!important;
      height: 30px!important;
    }
    strong {
      font-size: 20px;
    }
    img {
      max-width: 65%;
      margin: 50px 0 160px 0;
    }
    a {
      color: rgb(0, 0, 204);
      font-weight: 600;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .news-left .text-right>div span {
    display: inline-block;
    width: 370px;
    @extend %text-overflow;
    color: #fff!important;
  }
</style>
