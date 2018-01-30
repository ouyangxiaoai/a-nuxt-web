<template>
  <div class="security">
    <Item :item="security"></Item>
  </div>
</template>
<script>
  import Item from '~/components/function-item'
  export default {
    components: {Item},
    data () {
      return {
        security: {
          title: '防伪溯源',
          titleText: '一物一码，全程追溯，假货无所遁形，打造让消费者信赖的品牌',
          detail: [
            {subTitle: '平台系统功能原理图', title: '技术原理：物联网标识+大数据+GIS', detail1: '结合GIS获取消费者扫码时间、地点等数据维度，系统大数据实时对比，实现产品数据化防伪，降低企业防伪成本', img: require('~/assets/img/security-detail1.png')},
            {title: '建立商品全过程溯源体系', detail1: '有效管理生产流程    提高生产效率    降低运营成本', img: require('~/assets/img/security-detail2.png')}
          ]
        }
      }
    }
  }
</script>
