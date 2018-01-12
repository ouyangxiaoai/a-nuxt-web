<template>
  <div>
  <div v-for="item in list" class="mobile-example">
    <nuxt-link :to="{name: 'detail-id', params: {detail: 'example', id: item.cms_id}}">
      <i :style="{backgroundImage: `url(${item.img})`}"></i>
      <div v-if="activeIndex !== '/example'">{{item.ctime.split(' ')[0]}}</div>
      <h2>{{item.title}}</h2>
      <p class="detail">{{item.detail || item.content}}</p>
    </nuxt-link>
  </div>
  </div>
</template>
<script>
  export default {
    props: ['list'],
    methods: {
      getDateIndex (time) { // 分开时间
        let list = time.split(' ')[0].split('-')
        let month = list.slice(1).join('-')
        let year = list[0]
        let date = [year, month]
        return date
      }
    },
    computed: {
      activeIndex () {
        return this.$store.state.activeIndex
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
  .mobile-example {
    padding-bottom: pxTorem(100px);
    i {
      display: block;
      width: 100%;
      height: pxTorem(600px);
      background-position: center center;
      background-size: cover;
    }
    div {
      padding-top: pxTorem(80px);
    }
    h2 {
      @include px2rem(padding, 40px, 0px);
      font-size: pxTorem(50px);
      color: #000;
    }
    p, div{
      font-size: pxTorem(40px);
      color: #999;
    }
  }
</style>
