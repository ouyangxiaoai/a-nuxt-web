<template>
  <div>
    <banner :banners="banners"></banner>
    <div class="num">
      <div v-for="item in nums">
        <p>{{num(item.num)}}</p>
        <span>{{item.name}}</span>
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
      <div class="adv-item" v-for="item in advList">
        <h1>{{item.index}}</h1>
        <div>
        <h2>{{item.name}}</h2>
        <p>{{item.detail1}}</p>
        <p>{{item.detail2}}</p>
        </div>
      </div>
    </div>
    <!-- 新闻中心 -->
    <div class="news">
      <div class="news-left">
        <h1>新闻中心<span> / News Center</span></h1>
        <div class="new-content" @click="goDetail(contentLeft[0].cms_id, activeNews === 'first' ? 26 : 113)">
          <h2>{{getMonth(contentLeft[0].time)}}</h2>
          <h3>{{contentLeft[0].title}}</h3>
          <div v-html="contentLeft[0].content" class="left-content"></div>
        </div>
      </div>
      <div class="news-right">
        <el-tabs v-model="activeNews" @tab-click="handleClick">
          <el-tab-pane label="平台动向" name="first">
            <div v-for="item in newsContentRight" class="newsItem" @click="goDetail(item.cms_id, 26)">
                <news-item :item="item"></news-item>
              </div>
          </el-tab-pane>
          <el-tab-pane label="国家政策" name="second">
            <div v-for="item in policyContentRight" class="newsItem" @click="goDetail(item.cms_id, 113)">
                <news-item :item="item"></news-item>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!--  合作伙伴  -->
    <div class="partner">
      <h1>携手共赢，与全球合作伙伴共建标识生态</h1>
      <h2>加入国物标识合作伙伴计划，开创新业务，获取技术、资源、实现更快速成长</h2>
      <ul>
        <li v-for="item in partner">
          <img :src="item.img" alt="国物标识合作伙伴">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import banner from '~/components/common/banner'
import { mapGetters, mapState } from 'vuex'
import chunk from 'lodash/chunk'
import newsItem from '~/components/new-item'
export default {
  components: {
    banner, 'news-item': newsItem
  },
  computed: {
    ...mapGetters({
      banners: 'bannersImg',
      newsContentRight: 'newsRight',
      policyContentRight: 'policyRight'
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
          title: '留住用户',
          titleEn: ' / keep the user',
          img: require('~/assets/img/keep-the-user.png'),
          titleDetail: '（留住用户的方法有很多种，这可能是最省钱的一种）',
          list: [
            {title: '售前扫码', icon: require('~/assets/img/phone.png'), detail: '一有异常，提前止损，让消费者放心购物'},
            {title: '一键复购', icon: require('~/assets/img/buycar.png'), detail: '我要的，现在就要，一键复购，马上拥有'},
            {title: '售后服务', icon: require('~/assets/img/buyafter.png'), detail: '优质售后服务，及时响应，周到体贴'}
          ]
        },
        {
          index: '1',
          title: '降低成本',
          titleEn: ' / reduce the cost',
          img: require('~/assets/img/reduce-the-cost.png'),
          titleDetail: '（成本降低了，利润自然上去了）',
          list: [
            {title: '市场调研', icon: require('~/assets/img/reduce-2.png'), detail: '直面用户，节省调研经费，数据真实有效'},
            {title: '渠道优化', icon: require('~/assets/img/reduce-1.png'), detail: '基于大数据分析，全国销售网点清晰可见。优化渠道投放，触达目标用户'}
          ]
        },
        {
          index: '2',
          title: '销售转化',
          titleEn: ' / boost sales',
          img: require('~/assets/img/boost-sales.png'),
          titleDetail: '（开拓市场，促进销售转化）',
          list: [
            {title: '精准营销', icon: require('~/assets/img/boost-1.png'), detail: '可配合经销商策划活动，自主控制活动范围'},
            {title: '销售员无处不在', icon: require('~/assets/img/boost-2.png'), detail: '一个标识码就是一个销售员，抓住用户消费冲动。一键即可购买'}
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
        {index: '03', name: '政策扶持', detail1: '国家发改委批复的国家级战略', detail2: '项目由政府出资重点建设'},
        {index: '04', name: '安全稳定', detail1: '表示信息存储运营，数据信息安全稳定', detail2: ''},
        {index: '05', name: '技术保障', detail1: '有中科院高级研发人员共同研发建设', detail2: '技术国内领先'}
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
    num (num) { // 转为货币格式
      let nums = ''
      let list = chunk([...num].reverse().join('').split(''), 3).reverse()
      list.forEach((item) => {
        nums = nums + item.reverse().join('') + ','
      })
      return nums.substring(0, nums.length - 1)
    },
    advActive (index) { // 点击激活某一个产品优势模块
      this.activeAdv = index
    },
    handleClick (tab, event) { // 新闻tab
      this.contentLeft = this.activeNews === 'first' ? this.$store.state.newsContent : this.$store.state.policyContent
    },
    getMonth (time) { // 只获取月日
      let list = time.split(' ')[0].split('-').slice(1)
      return list.join('-')
    },
    changeTab (index) {
      this.$router.push(index)
      // this.$store.commit('CHANGE_ACTIVE_INDEX', index)
    },
    goDetail (id, gmtype) {
      // this.$store.commit('CHANGE_ACTIVE_INDEX', '/news')
      this.$router.push({
        name: 'detail-id',
        params: {detail: 'news', id, gmtype}
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "assets/scss/mixins.scss";
  .num { // 中间数字部分
    width: 100%;
    height: 190px;
    padding: 30px 0;
    div {
      width: 33.3%;
      text-align: center;
      display: inline-block;
      p{
        color: #333;
        font-size: 24px;
        margin-bottom: 12px;
      }
    }
  }
  .product-advantage, .product-feature, .product-advantage-2 { // 产品优势一整块
    width: 1200px;
    height: 840px;
    margin: 70px auto;
    text-align: center;
    overflow: hidden;
    position: relative;
    @include clearfix;
    .title {
      h3 {
        color: #333;
        font-size: 26px;
      }
      h5 {
        margin-top: 10px;
        color: #d6d5d5;
      }
    }
  }
  .product-advantage h6 {
    margin-top: 46px;
    font-size: 16px;
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
      }
      .content-header > div {
        width: 100%;
        text-align: center;
        height: 66px;
        line-height: 66px;
        border: 1px solid #ccc;
        border-top: none;
        h6 {
          display: inline-block;
          color: #333;
        }
      }
      .content-show {
        display: none;
        position: absolute;
        left: 0;
        width: 1200px;
        height: 260px;
        margin-top: 48px;
        padding: 62px 0 62px 50px;
        border: 1px solid #ccc;
        .content-title {
          text-align: left;
          font-size: 20px;
          color: #333;
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
            margin: 10px 80px 10px 0;
            &:last-child {
              margin-right: 0;
            }
            i, h2, span {
              display: inline-block;
            }
          }
          div img {
            position: absolute;
            top: 1.5px;
            left: 0;
          }
          div h2 {
            color: #333;
            font-size: 16px;
            margin-left: 40px;
          }
        }
        &:before, &:after {
          z-index: 2;
          position: absolute;
          top: -36px;
          left: 175px;
          @include upTriangle()
        }
        &:before {
          z-index: 3;
          border-bottom-color: #fff;
        }
      }
      .show1:before, .show1:after {
         left: 585px;
       }
      .show2:before, .show2:after {
        left: 995px;
      }
    }
    .isActive .content-show {
      display: block;
    }
    .isActive .content-header > div {
      border: none;
    }
/*  产品功能  */
  .product-feature {
    width: 100%;
    height: 770px;
    .title p{
      font-size: 16px;
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
      font-size: 16px;
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
    margin-top: 0;
    height: 640px;
    background: url("~/assets/img/adv-2-bac.png") no-repeat center center;
    .adv-item {
      position: absolute;
      left: 0;
      top: 130px;
      width: 316px;
      height: 178px;
      cursor: pointer;
      h1 {
        display: none;
        position: absolute;
        top: 0;
        left: 16px;
        font-size: 44px;
        color: #009BEE;
        font-weight: bold;
      }
      div {
        @extend %posvm;
        right: 0;
        text-align: right;
        font-size: 16px;
        h2 {
          font-size: 18px;
          color: #333;
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
        h1 {
          display: block;
        }
        h2 {
          color: #009BEE;
        }
        &:after {
          animation: borderWidth 1s 0.5s linear forwards;
        }
      }
      &:nth-child(3), &:nth-child(5) {
        left: auto;
        right: 0;
      }
      &:nth-child(3) div, &:nth-child(5) div {
        right: auto;
        left: 0;
        text-align: left;
      }
      &:nth-child(3) h1, &:nth-child(5) h1 {
        left: auto;
        right: 16px;
      }
      &:nth-child(4), &:nth-child(5) {
        top: 328px;
      }
      &:nth-child(6) {
        @include poshc;
        top: auto;
        bottom: 0;
      }
    }
  }
  /*  新闻  */
  .news {
    width: 1200px;
    margin: 0 auto;
    @include clearfix;
  }
  .news-left {
    float: left;
    margin-top: 70px;
    width: 600px;
    h1 {
      color: #333;
      font-size: 24px;
      span {
        color: #d6d5d5;
      }
    }
    .new-content {
      margin-top: 66px;
      padding-left: 40px;
      cursor: pointer;
      h2 {
        margin-bottom: 40px;
        font-size: 28px;
        color: #d6d5d5;
      }
      h3 {
        font-size: 22px;
        margin-bottom: 32px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .left-content {
        font-size: 16px;
        color: #999;
        width: 560px;
        height: 528px;
        overflow: hidden;
      }
      }
    }
  .news-right {
    float: right;
    margin-top: 65px;
    width: 526px;
    height: 873px;
    position: relative;
    color: #999;
  }
  /*  合作伙伴 */
  .partner {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    h1 {
      font-size: 24px;
      color: #333;
    }
    h2 {
      font-size: 16px;
      padding: 14px 0;
    }
    ul {
      @include clearfix;
      margin: 30px auto;
    }
    li {
      float: left;
      width: 25%;
      position: relative;
      height: 100px;
      img {
        @extend %posc
      }
    }
  }
</style>
<style lang="scss">
  @import "assets/scss/mixins.scss";
  /* el-tab的自定义样式 */
  .news-right {
    .el-tabs__header {
      margin-bottom: 44px;
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
    .el-tabs__content {
      @extend %posvm;
    }
  }
  /*  新闻内容的自定义样式 */
  .left-content {
    p {
      margin-top: 20px;
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
  .newsItem {
    width: 526px;
    height: 176px;
    position: relative;
    cursor: pointer;
    &:hover .newsItemLeft h1 {
      color: #009BEE;
      &:before {
        background-color: #009BEE;
      }
    }
  }
</style>
