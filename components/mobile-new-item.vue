<template>
  <div>
  <div v-for="item in list" class="mobile-example">
    <nuxt-link :to="{name: 'detail-id', params: {detail: activeIndex === '/example' ? 'example' : 'news', id: item.cms_id}}">
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
    @include px2rem(padding, 100px, 51px, 90px);
    background-color: #ffffff;
    margin-bottom: pxTorem(30px);
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
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
<style lang="scss">
  @import "assets/scss/mixins.scss";
  .mobile-content-policy .mobile-example {
    background-color: #f5f5f5;
  }
  .new-list .mobile-example:first-child {
    padding-top: pxTorem(100px);
  }
</style>
