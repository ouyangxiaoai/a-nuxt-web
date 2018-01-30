<template>
  <div class="market">
    <Item :item="market"></Item>
    <div class="text">
      <div v-for="item in text">
        <h3>{{item.title}}</h3>
        <p>{{item.detail1}}</p>
        <p v-if="item.detail2">{{item.detail2}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import Item from '~/components/function-item'
  export default {
    components: {Item},
    data () {
      return {
        market: {
          title: '精准营销',
          titleText: '低成本广覆盖，智能优化营销策略，精准触达用户，营销效果看得见',
          detail: [
            {title: '技术原理：物联网标识+大数据+GIS', detail1: '洞察消费者需求，勾勒用户画像，实时调整营销策略，将最符合消费者心理的营销活动，展现在消费者面前', img: require('~/assets/img/market-detail.png')}
          ]
        },
        text: [
          {title: '促销商品', detail1: '通过标识可将促销活动产品范围细分到单件产品上'},
          {title: '后台一键生成活动', detail1: '企业可随时自主控制营销活动范围', detail2: '活动地域，甚至单个经销商'},
          {title: '可视化报告', detail1: '活动中精准勾勒用户画像，精确管理活动的每一笔支出', detail2: '形成可视化报告 投资回报清晰可见'}
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
  .text {
    width: 1200px;
    margin: 0 auto 94px auto;
    @include clearfix;
    div {
      float: left;
      width: 33.3%;
      text-align: center;
      &:first-child {
        padding-right: 60px;
      }
      &:last-child {
        padding-left: 40px;
      }
    }
    h3 {
      color: #009BEE;
      font-size: 16px;
      margin-bottom: 20px;
    }
    p {
      line-height: 150%;
      font-size: 14px;
    }
  }
</style>
