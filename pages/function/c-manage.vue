<template>
  <div class="c-manage">
   <Item :item="cManage"></Item>
  </div>
</template>
<script>
  import Item from '~/components/function-item'
  export default {
    components: {Item},
    data () {
      return {
        cManage: {
          title: '窜货管理',
          titleText: '独一无二产品标识，健康产品走向，7*24全天候监控，实时预警',
          detail: [
            { title: '每个标识码都是监管员',
              detail1: '以"一物一码"的独特产品标识，结合消费者扫码信息数据反馈，比对系统产品销售区域设置的对应关系',
              detail2: '7*24小时全天候监控渠道窜货行为，并提供实时预警',
              img: require('~/assets/img/manage-detail.png')
            }
          ]
        }
      }
    }
  }
</script>
