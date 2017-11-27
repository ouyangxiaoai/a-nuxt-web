<template>
  <div class="platform">
    <div class="banner"></div>
    <div class="pla-intro">
      <h1>平台简介</h1>
      <div class="content">
        <div class="img-left">
          <img src="~/assets/img/pla-intro-bac.png" alt="平台简介">
        </div>
        <div class="text-right">
          <p>广州中国科学院计算机网络信息中心（Computer Network Information Center Chinese Academy of Sciences, Guangzhou，简称CNICG）是由中国科学院计算机网络信息中心、广州市政府以及南沙区政府三方合资共建的新型研发机构，承担物联网标识管理公共服务平台建设、运营、管理与服务的国家任务，开展物联网标识服务应用示范，建设物联网信息服务、技术研发和人才培养基地</p>
          <p>国家物联网标识管理公共服务平台是由国家发改委正式批复的物联网技术研发及产业化专项项目【发改办高技[2013]2664号】，由中国科学院计算机网络信息中心牵头，联合多家单位共同建立的全国唯一的物联网标识统一管理和公共服务平台</p>
        </div>
      </div>
      <h3>国家物联网标识管理公共服务平台于2014年正式落地广州南沙新区，致力打造物联网标识标准化、规范化管理体系，为物联网规模化发展提供有效的产业支撑，着力解决我国物联网应用的互联互通问题。现已成为广东省物联网发展重点项目、中国（广东）自由贸易试验区广州南沙片区第九大创新业务体系</h3>
    </div>
    <div class="hopeful">
      <h1>项目愿景</h1>
      <p>致力于万亿级物联网标识的价值创新，为物联网应用、大数据、云计算和人工智能等企业（单位）提供物联网标识的注册、查询、存储服务</p>
    </div>
    <div class="pla-product">
      <h1>产品概述</h1>
      <div class="text-left">
        <p>国家物联网标识管理公共服务根平台，涵盖标识注册系统、标识查询系统和标识搜索系统等三大子系统。同时，针对Ecode编码、Handle编码、CID编码等应用建立行业标识服务子平台。并在智能农业、智能交通、智能家居等不同应用领域开展物联网标识服务应用示范</p>
        <p>国家物联网标识管理公共服务平台向所有行业开放，积极实现行业数据对接合作。比如在食品溯源、智能硬件、农业生产、智能交通、云服务等方面，在物流配送、商贸流通、经营管理、安全生产、城市管理、公共安全、社会事业、节能环保等领域，推进数据整合，最终构建物联网标识一物一码、互联互通全流程可追溯的标识码解决方案</p>
      </div>
      <div class="img-right">
        <img src="~/assets/img/pla-product-bac.png" alt="产品概述">
      </div>
    </div>
    <div class="pla-mem">
      <h1>平台大事记</h1>
      <div v-for="item in mem"><span>{{item.year}}</span><span>{{item.month}}</span><p>{{item.detail}}</p></div>
    </div>
    <div class="pla-policy">
      <h1>政策支持</h1>
      <div class="content">
        <h1>项目专项</h1>
        <p>结合国民经济和社会发展的重大需求，以重点领域的物联网应用示范为依托，着力突破制约我国物联网发展的关键核心技术，为物联网规模化发展提供有效的产业支撑；制定基础共性技术标准，完善物联网标准体系，着力解决我国物联网应用的互联互通问题；依托已有基础，建设公共服务平台，着力解决检测认证和标识管理问题；加强产业自主创新能力建设，着力培育发展一批物联网技术研发和产品设备制造优势企业</p>
        <div>
          <img src="~/assets/img/pla-policy-1.png" alt="项目专项">
          <img src="~/assets/img/pla-policy-2.png" alt="项目专项">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        mem: [
          {year: '2017', month: '年3月', detail: '国家物联网标识管理公共服务平台由国家发展改革委员会正式验收通过'},
          {year: '2016', month: '年6月', detail: '基于国家平台的标识应用系统建立'},
          {year: '2016', month: '年1月', detail: '由中国科学院计算机网络信息中心、广州市政府、南沙区政府、三方出资成立广州中国科学院计算机网络信息中心，统一运营、建设'},
          {year: '2013', month: '年5月', detail: '国家发展改革委员会正式批复由中国科学院计算机网络信息中心牵头联合多方合作单位建立全国唯一的物联网标识管理和公共服务平台'}
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
  @import "assets/scss/common.scss";
  .banner {
    background-image: url("~/assets/img/platform.png");
  }
  .pla-intro, .hopeful, .pla-product, .pla-mem, .pla-policy {
    width: $width;
    height: 596px;
    margin: 0 auto;
  }
  .pla-intro, .pla-mem, .pla-policy {
    padding: 70px 0 53px 0;
    h1 {
      @extend %title-center;
    }
  }
  .pla-intro{
    .content {
      @include clearfix;
      margin-top: 40px;
      position: relative;
    }
    .img-left {
      float: left;
      img {
        width: 460px;
        height: 280px;
      }
    }
    .text-right {
      width: 670px;
      @extend %posvm;
      right: 0;
      p {
        line-height: 150%;
      }
      p:last-child{
        margin-top: 38px;
      }
    }
    h3 {
      margin-top: 50px;
      line-height: 150%;
    }
  }
  .hopeful, .pla-product, .pla-policy .content {
    height: 180px;
    padding: 50px 0;
    h1 {
      color: #333;
      font-size: 20px;
      margin-bottom: 40px;
      &:after {
        content: ' / Project Vision';
        display: inline-block;
        color: #d0cfcf;
        font-size: 12px;
        margin-left: 12px;
      }
    }
  }
  .pla-product {
    height: 382px;
    padding-top: 62px;
    position: relative;
    .text-left {
      width: 738px;
      p {
        line-height: 150%;
      }
      p:last-child {
        margin-top: 40px;
      }
    }
    .img-right {
      position: absolute;
      top: 62px;
      right: 0;
    }
  }
  .pla-mem {
    height: 566px;
    padding: 70px 0;
    h1:after {
      content: 'Platform Memorabilia'
    }
  }
  .pla-mem div {
    margin-top: 60px;
    span, p {
      display: inline-block;
    }
    span:first-child {
      font-size: 24px;
      margin-right: 10px;
    }
    span:nth-child(2) {
      font-size: 12px;
    }
    p {
      font-size: 16px;
      &:before {
        display: inline-block;
        height: 1px;
        width: 24px;
        background-color: #666;
        margin: 0 10px;
        vertical-align: middle;
      }
    }
  }
  .pla-policy {
    height: 641px;
    .content {
      height: 30px;
      padding: 0;
      margin-top: 50px;
    }
    .content h1 {
      text-align: left;
      margin: 0;
      &:after {
      content: 'Product Special'
      }
    }
    .content p {
      margin: 50px 0;
      font-size: 16px;
      line-height: 150%;
    }
    .content div {
      width: 100%;
      @include clearfix;
      img {
        float: left;
      }
      img:last-child {
        float: right;
      }
    }
  }
</style>
