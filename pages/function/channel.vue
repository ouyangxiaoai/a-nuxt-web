<template>
  <div class="channel">
    <Item :item="channel"></Item>
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
        }
      }
    }
  }
</script>
