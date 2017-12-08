<template>
  <footer class="foot">
    <div>
      <div class="address">
        <p class="dib">
          <span>地址：广东省广州市南沙区南沙资讯科技园香港科技大学霍英东研究院科技楼三楼</span>
          <span>电话：400-806-0373 </span>
          <span>邮箱：support@cnicg.cn</span>
        </p>
      </div>
      <div class="friends">
        <p class="dib">
          <span>友情链接：</span>
          <a :href="item.link" target="_blank" rel="noreferrer" v-for="item in friends">{{ item.name }}</a>
        </p>
      </div>
      <div class="copy">
        <p class="dib">
          <span>国家物联网标识管理公共服务平台</span>
          <span>粤ICP备16031487号-2</span>
          <span>版权所有：广州中国科学院计算机网络信息中心</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'foot',
    data () {
      return {
        friends: [
          {
            link: 'http://iotcid.cn/',
            name: 'CID平台'
          },
          {
            link: 'http://www.iotroot.com/home',
            name: 'Ecode平台'
          },
          {
            link: 'http://www.cndona.cn/',
            name: 'Hande平台'
          },
          {
            link: 'http://www.chinasigns.cn/',
            name: '中国标识网'
          },
          {
            link: 'http://www.jk-niot.cn',
            name: '上海嘉堃实业有限公司'
          },
          {
            link: 'http://www.senlin-tea.com/',
            name: '四川森林茶叶有限公司'
          },
          {
            link: 'http://www.syshop.com/',
            name: '世界婴童网'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";

  .foot {
    min-width: 1200px;
    padding-top: 30px;
    text-align: center;
    @include sc(14px, #fff);
    background-color: #444855;
    .foot-tt {
      a {
        font-size: 18px;
        vertical-align: middle;
        color: #fff;
      }
      .space {
        display: inline-block;
        vertical-align: middle;
        width: 1px;
        height: 15px;
        margin-left: 36px;
        margin-right: 36px;
        background-color: #a4a6ac;
      }
    }
    .address {
      color: #e9e8e8;
      span {
        margin-left: 28px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
    .friends {
      padding-top: 20px;
      margin-bottom: 30px;
      a {
        color: #fff;
        margin-left: 12px;
        &:first-of-type {
          margin-left: 6px;
        }
        &:hover {
          color: #22a0de;
        }
      }
    }
    .copy {
      color: #e9e8e8;
      background-color: #363a48;
      p {
        line-height: 64px;
      }
      span {
        margin-left: 15px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
  .link-us {
    padding: 44px 0 30px 0;
    a {
      color: #fff;
      margin: 0 41px;
      font-size: 16px;
      position: relative;
      display: inline-block;
      height: 20px;
      line-height: 20px;
      cursor: pointer;
      &:after {
        position: absolute;
        top: 4px;
        right: -41px;
        width: 1px;
        height: 16px;
        border-right: 1px solid #fff;
      }
    }
    .last:after{
      border:0;
    }
  }
</style>
