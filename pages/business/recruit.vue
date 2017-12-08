<template>
  <div class="recruit">
    <div class="banner"></div>
    <div class="our-advantage">
      <h1>国家平台的优势</h1>
      <ul v-for="list in advantage" class="adv-ul">
        <li v-for="item in list" class="adv-item">
          <img :src="item.icon" alt="CNICG">
          <div>
            <h2>{{item.title}}</h2>
            <p>{{item.detail}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="partner-adv-wrap">
    <div class="partner-adv">
      <h1>成为国家平台合作伙伴的好处</h1>
    </div>
    </div>
    <div class="partner-condition">
      <h1>成为国家平台合作伙伴的条件</h1>
      <div class="condition-content">
        <p v-for="list in partnerCondition">
          <span v-for="item in list">{{item}}</span>
        </p>
      </div>
    </div>
    <div class="partner-process-wrap">
    <div class="partner-process">
      <h1>成为合作伙伴的审核流程</h1>
      <div>
        <div v-for="item in step" class="step">
          <div>
            <img :src="item.icon" alt="CNICG">
            <p>{{item.title}}</p>
          </div>
          <span></span>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        advantage: [
          [ {icon: require('~/assets/img/recruit-adv-1.png'), title: '政策重点支持', detail: '由国家发改委批复的国家级战略项目'},
            {icon: require('~/assets/img/recruit-adv-2.png'), title: '品牌权威', detail: '国家平台由中科院牵头品牌公信力强，业务扩展相比其他企业产品更加迅速'},
            {icon: require('~/assets/img/recruit-adv-3.png'), title: '"高精尖"研发团队', detail: '研发团队由中科院高级研发人员共同研发建设研发技术国内领先'}
          ],
          [ {icon: require('~/assets/img/recruit-adv-4.png'), title: '小投入大收益', detail: '相比其他企业，国家平台推广机构几乎零成本投入'},
            {icon: require('~/assets/img/recruit-adv-5.png'), title: '产品应用广阔', detail: '基于平台强大的研发技术，提供高度匹配的个性化技术解决方案'},
            {icon: require('~/assets/img/recruit-adv-6.png'), title: '合作资源丰富', detail: '联合工信部、中国物品编码中心中国检验认证集团等合作机构，市场资源更具竞争力'}
          ]
        ],
        partnerCondition: [
          ['一定的生产领域、行业资源积累', '行业协会、商会、联盟等组织'],
          ['物联网从业群体', '看好物联网时代发展前景'],
          ['有正规团队的企业', '传统企业转型者']
        ],
        step: [
          {icon: require('~/assets/img/step-1.png'), title: '合作意向洽谈'},
          {icon: require('~/assets/img/step-2.png'), title: '提交审核资质材料'},
          {icon: require('~/assets/img/step-3.png'), title: '10个工作日内完成审核'},
          {icon: require('~/assets/img/step-4.png'), title: '签订合作协议'},
          {icon: require('~/assets/img/step-5.png'), title: '缴纳相关费用'},
          {icon: require('~/assets/img/step-6.png'), title: '合作账户开通'},
          {icon: require('~/assets/img/step-7.png'), title: '技术对接平台培训'}
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/common";
  @import "assets/scss/mixins";
  .banner {
    background-image: url("~/assets/img/recruit-banner.png");
  }
  .our-advantage {
    @extend %title;
    height: auto;
    padding: 80px 0;
    .adv-ul {
      @include clearfix;
      margin-top: 60px;
     /* &:before {
        display: block;
        width: 100%;
        height: 8px;
        background-color:#E0F2FB;
      }*/
      &:last-child {
        margin-top: 54px;
      }
    }
    .adv-item {
      float: left;
      width: 380px;
      height: 192px;
      padding: 0 42px 0 46px;
      position: relative;
      border: 1px solid #E0F2FB;
      border-top-width: 8px;
      img, div {
        position: absolute;
        @extend %posvm;
        left: 46px;
        float: left;
      }
      div {
        left: auto;
        right: 42px;
        width: 200px;
      }
      div h2 {
        font-size: 16px;
        color: #009bee;
        padding-bottom: 22px;
      }
      div p {
        line-height: 150%;
      }
      &:nth-child(2) {
        margin: 0 30px;
      }
    }
  }
  .partner-adv, .partner-condition, .partner-process {
    @extend %title;
    height: 590px;
    padding: 80px 0;
    background: url("~/assets/img/partner-adv-bac.png") no-repeat center 160px;
  }
  .partner-adv-wrap, .partner-process-wrap {
    background-color: $bgf8;
  }
  .partner-condition {
    background: url("~/assets/img/partner-condition-bac.png") no-repeat left 170px;
    .condition-content {
      margin-top: 140px;
      margin-left: 500px;
      width: 700px;
      p:nth-child(2) {
        margin: 60px 0;
      }
      span {
        display: inline-block;
        width: 280px;
        font-size: 16px;
        &:last-child {
          margin-left: 116px;
        }
        &:before {
          display: inline-block;
          margin-right: 35px;
          width: 14px;
          height: 14px;
          background: url("~/assets/img/partner-condition-icon.png") no-repeat;
        }
      }
    }
  }
  .partner-process {
    background: none;
    height: 612px;
    .step{
      display: inline-block;
      margin-top: 80px;
      text-align: center;
      div {
        display: inline-block;
        vertical-align: top;
        width: 142.5px;
      }
      &:after {
        vertical-align: middle;
        display: inline-block;
        width: 120px;
        margin-top: 41.5px;
        height: 0;
        border-top: 1px dashed #009bee;
      }
      &:nth-child(5):after, &:nth-child(7):after {
        display: none;
      }
      img {
        width: 83px;
        height: 83px;
      }
      p {
        white-space: nowrap;
        margin-top: 30px;
      }
    }
  }
</style>
