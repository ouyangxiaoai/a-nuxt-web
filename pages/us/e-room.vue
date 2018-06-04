<template>
  <div class="exhabition">
    <div class="room-exhabition">
      <h1>展厅掠影</h1>
      <div class="content">
        <div class="img-left">
          <img src="~/assets/img/exhabition-bac.png" alt="展厅掠影">
        </div>
        <div class="text-right">
          <h2>物联网体验中心展厅是由广州中国科学院计算机网络信息中心（以下简称“广州网络中心”）基于物联网标识管理公共服务平台（以下简称“国物标识平台”），建设的物联网标识及应用场景展示平台</h2>
          <p>该展厅总面积600平米，设有14个展区，以物联网标识为主题，重点展示国物标识平台的成立背景、物联网标识类别及发展现状、广州网络中心发展战略；内设行业环幕视频区，用生动形象的视觉表达，让参观者深切感知物联网标识的重要影响</p>
          <p>在标识应用方面，展厅从智慧农业、智能冰箱、智慧医疗、智慧家居、智能制造、智慧路灯、充电桩、危化品监测等多领域，全方位展现物联网标识应用场景</p>
        </div>
      </div>
      <div class="room-example">
        <h2>物联网体验中心展厅坐落于广州市南沙区南沙资讯科技园香港科技大学霍英东研究院一楼</h2>
        <p>工作日全天对外开放，欢迎各界人士预约参观</p>
        <div class="example-pic">
          <img src="~/assets/img/room-example-1.png" alt="CNICG 展厅掠影">
          <img src="~/assets/img/room-example-2.png" alt="CNICG 展厅掠影">
          <img src="~/assets/img/room-example-3.png" alt="CNICG 展厅掠影">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
  .exhabition {
    background-color: #f5f5f5;
    width: 100%;
    min-width: 1200px;
  }
  .room-exhabition {
    width: 1200px;
    margin: 0 auto;
    padding: 70px 0 101px 0;
    .content {
      @include clearfix;
      margin-top: 17px;
      position: relative;
    }
    h1 {
      @extend %title-center;
      &:after {
        content: 'Exhibition hall Glimpse';
      }
    }
    .img-left {
      float: left;
      margin-top: 43px;
      img {
        width: 460px;
      }
    }
    .text-right {
      @extend %posvm;
      right: 0;
      width: 670px;
      h2 {
        font-size: 16px;
        color: #333;
        margin-bottom: 50px;
      }
      p {
        font-size: 16px;
        line-height: 150%;
      }
      p:last-child {
        margin-top: 35px;
      }
    }
    .room-example {
      margin-top: 50px;
      h2 {
        font-size: 16px;
        color: #333;
      }
      p {
        font-size: 16px;
        margin: 30px 0 50px;
      }
      img {
        display: inline-block;
        width: 383px;
        height: 288px;
      }
      img:nth-child(3n-1) {
        margin: 0 25px;
      }
    }
  }
</style>
