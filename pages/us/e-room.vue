<template>
  <div class="exhabition">
    <div class="room-exhabition">
      <h1>展厅掠影</h1>
      <div class="content">
        <div class="img-left">
          <img src="~/assets/img/exhabition-bac.png" alt="展厅掠影">
        </div>
        <div class="text-right">
          <h2>现在展厅对外开放，欢迎各界人士预约参展，莅临参观</h2>
          <p>物联网展厅是由广州中国科学院计算机网络信息中心基于国家物联网标识管理公共服务平台,   建设物联网标识的应用场景及商业价值展示</p>
          <p>物联网展厅坐落于广州市南沙区香港科技大学霍英东研究院，其展示包括标识在商品防伪、溯源编码 、智能电器、工业制造、智慧城市、智慧公交等场景应用</p>
        </div>
      </div>
      <div class="room-example">
        <h2>以下为展厅示意图</h2>
        <p>物联网展厅是由广州中国科学院计算机网络信息中心基于国家物联网标识管理公共服务平台,   建设物联网标识的应用场景及商业价值展</p>
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
      margin-top: 40px;
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
