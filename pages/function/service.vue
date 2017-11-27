<template>
  <div class="service">
    <Item :item="service"></Item>
  </div>
</template>
<script>
  import Item from '~/components/function-item'
  export default {
    components: {Item},
    data () {
      return {
        service: {
          title: '售后服务',
          titleText: '轻松扫码，一键售后服务，高效及时，打造完美用户体验',
          detail: [
            {title: '技术原理：GIS+物联网标识+大数据', detail1: '每个标识码都是一个服务员，一键售后服务，搭建消费者与用户沟通的桥梁，及时高效，打造极致用户体验', img: require('~/assets/img/service-detail.png')}
          ]
        }
      }
    }
  }
</script>
