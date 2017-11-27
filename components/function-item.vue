<template>
<div v-bind="item">
  <div class="function-title">
    <h1>{{item.title}}</h1>
    <p>{{item.titleText}}</p>
  </div>
  <div class="function-detail" v-for="detail in item.detail">
    <h2>{{detail.title}}</h2>
    <p>{{detail.detail1}}</p>
    <p v-if="detail.detail2">{{detail.detail2}}</p>
    <img :src="detail.img" alt="CNICG 窜货管理">
  </div>
</div>
</template>
<script>
  export default {
    props: {
      item: {
        type: Object,
        require: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .function-title {
    width: 1200px;
    margin: 0 auto;
    background: url("~/assets/img/manage-title.png") no-repeat top center;
    height: 290px;
    h1 {
      padding-top: 88px;
      font-size: 30px;
      color: #009BEE;
    }
    p {
      margin-top: 25px;
      font-size: 20px;
    }
  }
  .function-detail {
    margin: 70px auto;
    text-align: center;
    h2 {
      font-size: 20px;
      color: #333;
      margin-bottom: 25px;
    }
    p {
      line-height: 150%;
    }
    img {
      margin-top: 50px;
    }
  }
  .big-data {
    .function-title {
      background-image: url("~/assets/img/bigData-title.png");
    }
  }
  .channel .function-title {
    background-image: url("~/assets/img/channel-title.png");
  }
  .market .function-title {
    background-image: url("~/assets/img/market-title.png");
  }
  .security .function-title {
    background-image: url("~/assets/img/security-title.png");
  }
  .service .function-title {
    background-image: url("~/assets/img/service-title.png");
  }
</style>
