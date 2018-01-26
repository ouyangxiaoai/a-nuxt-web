<template>
<div class="header-wrap">
  <div class="head-container" v-if="!isMobile">
    <div class="head-left">
      <nuxt-link to="/" class="head-left" @click="handleSelect('/')"><img src="~/assets/img/logo.png" alt="NIOT" class="img-logo"></nuxt-link>
      <el-menu
        ref="headMenu"
        :router="router"
        :default-active="activeIndex"
        class="head-left"
        mode="horizontal"
        active-text-color="#409eff"
        @select="handleSelect">
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="function">
          <template slot="title">功能介绍</template>
          <el-menu-item index="/function/c-manage">窜货管理</el-menu-item>
          <el-menu-item index="/function/big-data">大数据</el-menu-item>
          <el-menu-item index="/function/security">防伪溯源</el-menu-item>
          <el-menu-item index="/function/market">精准营销</el-menu-item>
          <el-menu-item index="/function/channel">渠道优化</el-menu-item>
          <el-menu-item index="/function/service">售后服务</el-menu-item>
        </el-submenu>
        <el-submenu index="method">
          <template slot="title">解决方案</template>
          <el-menu-item index="/method/rfid">RFID解决方案</el-menu-item>
          <el-menu-item index="/method/supermarket">超市解决方案</el-menu-item>
        </el-submenu>
        <el-menu-item index="/example">应用案例</el-menu-item>
        <el-submenu index="business">
          <template slot="title">业务合作</template>
          <el-menu-item index="/business/b-intro">业务介绍</el-menu-item>
          <el-menu-item index="/business/recruit">招募专题</el-menu-item>
        </el-submenu>
        <el-menu-item index="/news">新闻中心</el-menu-item>
        <el-submenu index="us">
          <template slot="title">关于我们</template>
          <el-menu-item index="/us/platform-intro">平台简介</el-menu-item>
          <el-menu-item index="/us/e-room">展厅掠影</el-menu-item>
          <el-menu-item index="/us/link-us">联系我们</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="head-right">
      <head-search class="search head-left"></head-search>
      <a href="http://v2.cniotroot.cn/#/index/login" target="_blank" rel="noreferrer" class="login head-left">
        登录
      </a>
    </div>
  </div>
  <div class="mobile" v-else>
    <div class="f-box mobile-head">
      <nuxt-link to="/" class="logo"><img src="~/assets/img/logo.png" alt="NIOT"></nuxt-link>
      <img src="~/assets/img/mobile/list.png" alt="" @click="collapse" />
    </div>
    <div class="menu" :style="{width: isCollapse ? '100%' : '0'}">
      <el-menu ref="headMenu-mobile" :router="router" :default-active="activeIndex" mode="vertical" active-text-color="#000" text-color="#999" @select="collapse">
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="method">
          <template slot="title">解决方案</template>
          <el-menu-item index="/method/rfid">RFID解决方案</el-menu-item>
          <el-menu-item index="/method/supermarket">超市解决方案</el-menu-item>
        </el-submenu>
        <el-menu-item index="/example">应用案例</el-menu-item>
        <el-menu-item index="/business/recruit">业务合作</el-menu-item>
        <el-menu-item index="/news">新闻中心</el-menu-item>
        <el-menu-item index="/us/platform-intro">关于我们</el-menu-item>
      </el-menu>
    </div>
  </div>
</div>
</template>
<script>
  import HeadSearch from '~/components/common/headSearch'
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState({
        activeIndex: 'activeIndex',
        isMobile: 'isMobile'
      })
    },
    data () {
      return {
        router: true,
        isCollapse: false
      }
    },
    components: {'head-search': HeadSearch},
    methods: {
      handleSelect (index) {
        // this.$store.commit('CHANGE_ACTIVE_INDEX', index)
      },
      collapse () {
        if (this.isCollapse) {
          document.getElementsByTagName('body')[0].className = ''
        } else {
          document.getElementsByTagName('body')[0].className = 'mobile-fix'
        }
        this.isCollapse = !this.isCollapse
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss"; // 使用‘~/assets’会报错，原因不明
  @import "assets/scss/common.scss";
  .header-wrap {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background-color: #fff;
    z-index: 999999;
    border-bottom: pxTorem(1px) solid #dedfe0;
  }
.head-left {
  float: left;
}
.head-right {
 @extend %posvm;
  right: 8%;
}
.head-container {
  @include clearfix;
  padding: 30px 0;
  min-width: 1200px;
  margin: 0 0 0 8%;
  position: relative;
}
a {
  display: inline-block;
  height: 50px;
}
.img-logo {
  height: 50px;
  object-fit: cover;
  margin-right: 40px;
}
  .login {
    background: #009BEE;
    border-radius: 3px;
    line-height: 38px;
    color: #fff;
    height: 38px;
    width: 80px;
    text-align: center;
    display: block;
    &:hover {
      background: #38a8e1;
    }
  }
  .mobile {
    .mobile-head {
      @include px2rem(height, 170px);
      @include px2rem(padding, 0px, 50px);
      @extend %flex-box;
      align-items: flex-start;
      img {
        @include px2rem(height, 45px);
        margin-top: pxTorem(61px);
      }
      .logo>img {
        @include px2rem(height, 70px);
        margin-top: pxTorem(50px);
      }
    }
    .menu {
      position: fixed;
      overflow: hidden;
      @include px2rem(top, 170px);
      right: 0;
      width: 0;
      height: 100%;
      background-color: #f8f8f8;
      z-index: 1000;
      transition: all .5s;
    }
  }
</style>
<style lang="scss">
  .mobile {
    overflow: hidden;
  }
  // 改写element的样式
  @import "assets/scss/mixins.scss";
  .head-container {
    .el-menu {
      border-bottom: none;
    }
    .el-menu--horizontal .el-submenu>.el-menu {
      padding: 0;
    }
    .el-menu--horizontal .el-submenu .el-submenu__title, .el-menu--horizontal .el-menu-item {
      height: 46px;
      line-height: 46px;
      border-bottom: none;
      font-size: 16px;
    }
    .el-menu--horizontal .el-submenu .el-menu-item {
      margin: 0;
      padding: 0;
      text-align: center;
      min-width: 180px;
    }
    .el-menu-item.is-active,.el-submenu.is-active .el-submenu__title {
      // border-bottom: none;
      border-bottom-color: #009BEE!important;
      color: #009BEE!important;
      i {
        color: #009BEE;
        font-weight: bold;
      }
    }
    .el-submenu .el-menu-item.is-active {
      background-color: #f5f5f5;
    }
    .el-submenu__title, .el-menu-item {
      // transition: none;
      padding: 0;
      margin: 0 20px;
    }
  }
  .mobile {
    .el-menu {
      border: none;
      background-color: #f8f8f8;
    }
    .el-menu-item, .el-submenu__title {
      padding-left: pxTorem(60px)!important;
        @include px2rem(height, 138px);
        @include px2rem(line-height, 138px);
        @include px2rem(font-size, 48px);
        border-top-color: #ccc;
        border-top-style: solid;
        @include px2rem(border-top-width, 1px);
        &:last-child {
          border-bottom-color: #ccc;
          border-bottom-style: solid;
          @include px2rem(border-bottom-width, 1px);
        }
    }
    .el-menu-item.is-active {
      background-color: #fff;
    }
    .el-submenu__title {
      @include px2rem(font-size, 48px);
      @include px2rem(height, 138px);
      @include px2rem(line-height, 138px);
    }
    .el-submenu__icon-arrow {
      font-size: pxTorem(50px);
      margin-top: pxTorem(-25px);
    }
    .el-submenu .el-menu-item {
      padding-left: pxTorem(80px)!important;
      font-size: pxTorem(40px);
    }
  }
</style>
