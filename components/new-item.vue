<template>
  <div class="left-content" @click="goDetail(item.cms_id)" v-bind="item">
    <div class="date-left"><span>{{getDateIndex(item.ctime)[0]}}</span><span>{{getDateIndex(item.ctime)[1]}}</span></div>
    <div class="text-right">
      <h5>{{item.title}}</h5>
      <div>{{item.content}}</div>
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
      getDateIndex (time) { // 分开时间
        let list = time.split(' ')[0].split('-')
        let month = list.slice(1).join('-')
        let year = list[0]
        let date = [year, month]
        return date
      },
      goDetail (id) { // 去到详情
        this.$router.push({
          name: 'detail-id',
          params: {detail: 'news', id}
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
  @import "assets/scss/common.scss";
  .left-content, .newsItem {
    height: 136px;
    background-color: $mainBlue;
    color: #fff;
    overflow: hidden;
    @include clearfix;
    position: relative;
    .date-left, .text-right {
      width: 136px;
      height: 66px;
      @extend %posvm;
      left: 0;
    }
    .date-left {
      text-align: center;
      span {
        display: block;
        font-size: 22px;
      }
      span:last-child {
        font-size: 16px;
        &:before {
          display: block;
          width: 45px;
          height: 1px;
          margin: 5px auto;
          background-color: rgba(255, 255, 255, .4);
        }
      }
    }
    .text-right {
      width: 400px;
      left: auto;
      right: 0;
      padding-right: 30px;
      h5 {
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        @extend %text-overflow;
      }
      div {
        height: 30px;
        margin-top: 3px;
        text-indent: 0!important;
        line-height: 30px;
        font-size: 16px;
        @extend %text-overflow;
      }
    }
  }
  .newsItem {
    width: 600px;
    height: 122px;
    background-color: #f8f8f8;
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    }
    .date-left {
      span {
        color: #666;
        &:last-child {
          color: #999;
          &:before {
            background-color: #ccc;
            opacity: .5;
          }
        }
      }
    }
    .text-right {
      width: 464px;
      h5 {
        color: #666;
        font-size: 16px;
      }
      div {
        color: #999;
      }
    }
    &:nth-child(2) {
      margin: 28px 0;
    }
    &:hover .text-right h5 {
      color: $mainBlue;
    }
  }
</style>
