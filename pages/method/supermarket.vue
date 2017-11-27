<template>
  <div class="supermarket">
    <div class="banner"></div>
    <div class="sm-bac">
      <h1>项目背景</h1>
      <div class="content">
        <div class="img-left">
          <img src="~/assets/img/sm-bac.png" alt="项目背景">
        </div>
        <div class="text-right">
          <h2>湖南高桥大市场简介</h2>
          <p>湖南高桥大市场作为中南地区最大的国家级综合批发市场和全国第三大综合性市场，立足于长沙，服务范围
            辐射江西、湖北、广东等周边十余个省市，年交易额1000多亿元，经营户6000多户，经营从业人员15万余人
          </p>
        </div>
      </div>
    </div>
    <div class="sm-origin">
      <h1>溯源全景图</h1>
      <div v-for="item in originText">
        <h2>{{item.title}}</h2>
        <p v-if="item.text">{{item.text}}</p>
      </div>
    </div>
    <div class="sm-adv">
      <h1>项目优势</h1>
      <div v-for="item in smAdv">
        <span><i>{{item.title}}</i></span>
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        originText: [
          {title: '商品周期追溯', text: '通过防伪溯源系统，打造商品全生命周期追溯'},
          {title: '后台管理系统'},
          {title: '跨境商品追溯', text: '各个进口馆的商品贴上唯一的身份标识，用户购买时，通过手机扫码，获取商品流通信息、检验信息、报关信息'}
        ],
        smAdv: [
          {title: '企业', text: '帮助企业提高产品竞争力'},
          {title: '消费者', text: '打消消费者疑虑，提振消费信心'},
          {title: '监管部门', text: '协助监管部门有效管理审查'}
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
  @import "assets/scss/common.scss";
  .banner {
    background-image: url("~/assets/img/supermarket-banner.png");
  }
  .sm-bac, .sm-origin, .sm-adv {
    @extend %title;
  }
  .sm-bac .content {
      @include clearfix;
      padding: 0 30px;
    .img-left {
      float: left;
      margin-top: 77px;
      img {
        width: 482px;
      }
    }
    .text-right {
      float: right;
      margin-top: 124px;
      width: 588px;
      h2 {
        font-size: 16px;
        color: #333;
        height: 20px;
        line-height: 20px;
      }
      p {
        word-wrap: break-word;
        line-height: 150%;
        margin-top: 27px;
      }
    }
    }
  .sm-origin {
    height: 562px;
    background: url("~/assets/img/sm-origin.png") no-repeat center 140px;
    position: relative;
    div {
      position: absolute;
      top: 383px;
      left: 0;
      width: 33.3%;
      padding: 0 20px;
      h2 {
        text-align: center;
        color: #009BEE;
        font-size: 16px;
      }
      p {
        margin-top: 20px;
      }
    }
    div:nth-child(2), div:last-child {
      top: 410px;
      h2 {
        margin-right: 130px;
      }
    }
    div:nth-child(3) {
      left: 33.3%;
    }
    div:last-child {
      left: 66.7%;
      h2 {
        margin-left: 130px;
      }
    }
  }
  .sm-adv {
    background: url("~/assets/img/sm-adv-bac.png") no-repeat center 140px;
    position: relative;
    height: 560px;
    div span {
      position: absolute;
      top: 242px;
      left: 25px;
      width: 102px;
      height: 102px;
      background: url("~/assets/img/rfid-4.png") no-repeat center center;
    }
    div:nth-child(2) span i {
      line-height: 36px;
    }
    div p {
      position: absolute;
      top: 360px;
      left: 0;
    }
    div:nth-child(3) span {
      top: 120px;
      left: auto;
      right: 40px;
      i {
        padding: 0;
        line-height: 46px;
      }
    }
    div:nth-child(3) p {
      top: 240px;
      left: auto;
      right: 10px;
    }
    div:nth-child(4) span {
      top: 328px;
      left: auto;
      right: 10px;
    }
    div:nth-child(4) p {
      top: 446px;
      left: auto;
      right: 0;
    }
    i {
      @extend %circle-title;
    }
  }
</style>
