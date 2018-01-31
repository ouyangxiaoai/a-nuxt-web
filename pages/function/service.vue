<template>
  <div class="service">
    <Item :item="service"></Item>
    <div class="service-text">
    <div v-for="item in serviceText">
      <h2>{{item.title}}</h2>
      <p v-if="item.text">{{item.text}}</p>
      <p class="pd" v-if="item.text1">{{item.text1}}</p>
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
        service: {
          title: '售后服务',
          titleText: '轻松扫码，一键售后服务，高效及时，打造完美用户体验',
          detail: [
            {title: '技术原理：物联网标识+大数据+GIS', detail1: '每个标识码都是一个服务员，一键售后服务，搭建消费者与用户沟通的桥梁，及时高效，打造极致用户体验', img: require('~/assets/img/service-detail.png')}
          ]
        },
        serviceText: [
          {title: '消费者', text: '通过扫码售后服务诉求，系统实时向企业反馈', text1: '消费者售后诉求，并实时查看售后进度，降低售后成本'},
          {title: '标识管理系统'},
          {title: '企业端', text: '企业通过产品标识数据，快速处理', text1: '售后问题减少客服人力成本，提高售后服务质量'}
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
  .service-text {
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
          margin-right: 80px;
        }
        p {
          margin-left: 30px;
        }
        .pd {
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
          margin-left: 110px;
        }
        p {
          text-align: center;
          margin-left: 110px;
        }
        .pd {
          margin-left: 105px;
        }
      }
    }
  }
</style>
