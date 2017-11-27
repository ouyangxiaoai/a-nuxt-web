<template>
  <div v-bind="item">
      <div class="newsItemLeft">
        <h1>{{item.title}}</h1>
        <div v-html="item.content">
        </div>
      </div>
      <div class="newsItemRight">
        <p>{{getMonth(item.time)}}</p>
        <p><i></i><span></span></p>
      </div>
  </div>
</template>
<script>
  export default {
    props: {
      item: {
        type: Object
      }
    },
    methods: {
      getMonth (time) { // 只获取月日
        let list = time.split(' ')[0].split('-').slice(1)
        return list.join('-')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins";
    .newsItemLeft {
      @extend %posvm;
      width: 80%;
      height: 91px;
      &:after {
        content: '....';
        width: 50%;
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: #fff;
      }
    }
    .newsItemRight{
      @extend %posvm;
      width: 20%;
      right: 0;
      height: 91px;
    }
    .newsItemLeft h1 {
      font-size: 16px;
      color: #666;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: relative;
      padding-left: 14px;
      margin-bottom: 30px;
      &:before {
        @extend %posvm;
        left: 0;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: #666;
      }
    }
    .newsItemLeft div {
      height: 40px;
      width: 100%;
      overflow: hidden;
    }
    .newsItemRight p{
      position: absolute;
      top: 0;
      right: 0;
      font-size: 22px;
      color: #d6d5d5;
      i,span{
        display: inline-block;
      }
      i {
        width: 1px;
        height: 13px;
        background: url("~/assets/img/news-line.png") no-repeat;
      }
      span {
        margin-left: 12px;
        width: 18px;
        height: 14px;
        background: url("~/assets/img/news-arrow.png") no-repeat;
      }
    }
    .newsItemRight p:last-child {
      top: auto;
      bottom: 0;
    }
</style>
<style lang="scss">
  /*  新闻内容的自定义样式 */
  .newsItemLeft div p, .newsItemLeft div span{
    text-indent: 0!important;
    font-size: 16px!important;
    color: #999!important;
    line-height: normal!important;
    /* display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden; */
  }
</style>
