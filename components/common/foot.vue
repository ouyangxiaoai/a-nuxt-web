<template>
  <div>
  <footer class="foot" v-if="!isMobile">
    <!--<div>
      <div class="address">
        <p class="dib">
          <span>地址：广东省广州市南沙区南沙资讯科技园香港科技大学霍英东研究院科技楼三楼</span>
          <a href="javascript:void(0)" class="tel">电话：400-806-0373</a>
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
    </div>-->
    <ul class="foot-ul">
      <li><img src="../../assets/img/footer-logo.png" alt="niot"></li>
      <li><img src="../../assets/img/footer-code.png" alt="niot"></li>
      <li><span class="line"></span></li>
      <li class="friends">
        <p>地址：广东省广州市南沙区南沙资讯科技园香港科技大学霍英东研究院科技楼三楼</p>
        <p>电话：400-806-0373    邮箱：support@cnicg.cn</p>
        <p class="dib">
          <span>友情链接：</span>
          <a :href="item.link" target="_blank" rel="noreferrer" v-for="item in friends">{{ item.name }}</a>
        </p>
      </li></ul>
    <div class="copy">
      <p class="dib">
        <span>国家物联网标识管理公共服务平台</span>
        <span>粤ICP备16031487号-2</span>
        <span>版权所有：广州中国科学院计算机网络信息中心</span>
      </p>
    </div>
  </footer>
  <div class="mobile mobile-foot" v-else>
    <p>国家物联网标识管理公共服务平台   粤ICP备16031487号-2</p>
    <p>版权所有：广州中国科学院计算机网络信息中心</p>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'foot',
    computed: {
      isMobile () {
        return this.$store.state.isMobile
      }
    },
    data () {
      return {
        friends: [
          {
            link: 'http://iotcid.cn/',
            name: 'CID平台'
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
      span, .tel {
        color: #e9e8e8;
        margin-left: 28px;
        &:first-child {
          margin-left: 0;
        }
      }
      .tel:hover {
        text-decoration: none;
        cursor: text;
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
    .foot-ul {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 50px 0;
      li {
        &:first-child {
          img {
            width: 152px;
            height: 89px;
          }
        }
        &:nth-child(2) {
          img {
            width: 89px;
            height: 89px;
          }
        }
        &:nth-child(3) {
          span {
            display: block;
            height: 122px;
            width: 2px;
            background-color: rgba(255, 255, 255, .6);
          }
        }
      }
      .friends {
        padding-top: 0;
        margin-bottom: 0;
        text-align: left;
        font-size: 13px;
        p {
          padding: 6px 0;
        }
        .dib {
          white-space: nowrap;
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
  .mobile-foot {
    @include px2rem(padding, 50px, 0px);
    text-align: center;
    color: #e9e8e8;
    background-color: #353B48;
    @include px2rem(font-size, 34px);
  }
</style>
