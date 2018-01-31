<template>
  <div class="channel">
    <Item :item="channel"></Item>
    <div class="channel-text">
      <div v-for="item in channelText">
        <h2>{{item.title}}</h2>
        <p>{{item.text}}</p>
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
        channel: {
          title: '渠道优化',
          titleText: '一个标识就是一个营销员+调查员，优化渠道投放，提升销售转化',
          detail: [
            { title: '每个标识码都是监管员',
              detail1: '基于标识大数据分析，通过后台数据可视化展示，企业可直观查询销售区域市场特点、消费偏好、竞争关系等信息',
              detail2: '进一步优化渠道投放，促进销售转化',
              img: require('~/assets/img/channel-detail.png')}
          ]
        },
        channelText: [
          {title: '大数据分析', text: '基于标识大数据分析，通过后台数据可视化展示'},
          {title: '分析结果', text: '企业可直观查询销售区域市场特点、消费偏好、竞争关系等信息'},
          {title: '销售转化', text: '优化渠道投放，促进销售转化'}
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
  .channel-text {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    padding: 30px 0 50px;
    @include clearfix;
    div {
      float: left;
      width: 33.3%;
      h2 {
        text-align: center;
        color: #009BEE;
        font-size: 16px;
      }
      p {
        margin-top: 20px;
        color: #999;
        font-size: 14px;
      }
      .pd {
        margin-top: 5px;
      }
      &:first-child {
        h2 {
          margin-right: 150px;
        }
        p {
          margin-left: 0;
        }
      }
      &:nth-child(2) {
        h2 {
          margin-right: 40px;
        }
      }
      &:nth-child(3) {
        h2 {
          margin-left: 150px;
        }
        p {
          text-align: center;
          margin-left: 160px;
        }
      }
    }
  }
</style>
