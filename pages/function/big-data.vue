<template>
  <div class="big-data">
    <Item :item="bigData"></Item>
  </div>
</template>
<script>
  import Item from '~/components/function-item'
  export default {
    components: {Item},
    data () {
      return {
        bigData: {
          title: '大数据应用',
          titleText: '汇集海量大数据，预判消费趋势和潜在需求，提供前瞻性战略决策建议',
          detail: [
            {title: '每个标识码都是一个数据收集员', detail1: '汇集海量市场数据，整合、挖掘、实时分析数据，构建系统化数据体系，帮助企业进行智能化决策', img: require('~/assets/img/bigData-detail.png')}
          ]
        }
      }
    }
  }
</script>
