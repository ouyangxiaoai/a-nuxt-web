<template>
  <div>
  <div class="sideBar" v-if="!isMobile">
    <ul class="sideBar-list">
      <li class="list-item">
        <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDE4NjAyMl80NzI0NDhfODAwMTg2MDIyXzJf" target="_blank" rel="noreferrer" class="item-link">
          <i class="icon icon-earphone" :style="{backgroundImage: `url('${require('~/assets/img/icon-earphone.png')}')`}"></i>
          <p class="item-text">在线<br>咨询</p>
        </a>
      </li>
      <li class="list-item list-item--weixin">
        <i class="icon icon-message" :style="{backgroundImage: `url('${require('~/assets/img/icon-message.png')}')`}"></i>
        <p class="item-text">官方<br>微信</p>
        <div class="code">
          <img src="~/assets/img/code-weixin.png" alt="微信二维码">
        </div>
      </li>
      <li class="list-item" @click="goToTop">
        <i class="icon icon-goTop"></i>
        <p class="item-text">TOP</p>
      </li>
    </ul>
  </div>
  <div class="mobile mobile-side" @click="goToTop" v-else>

  </div>
  </div>
</template>

<script>
  import { animate } from '~/api/util.js'

  export default {
    name: 'sideBar',
    computed: {
      isMobile () {
        return this.$store.state.isMobile
      }
    },
    methods: {
      goToTop () {
        animate(document.body, {scrollTop: '0'}, 400, 'ease-out')
        animate(document.documentElement, {scrollTop: '0'}, 400, 'ease-out')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "assets/scss/mixins";
  .sideBar-list {
    position: fixed;
    z-index: 99;
    top: 50%;
    right: 0;
    margin-top: -135px;
    .icon {
      display: inline-block;
      vertical-align: middle;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    >.list-item {
      position: relative;
      width: 50px;
      height: 90px;
      line-height: 16px;
      font-size: 12px;
      background-color: #646577;
      text-align: center;
      cursor: pointer;
      &:first-child {
        background-color: #6fd0ff;
        a {
          color: #2c2c2c;
        }
      }
      &.list-item--weixin {
        border-bottom: 1px solid #4b4c63;
        color: #fff;
        &:hover {
          .code {
            display: block;
          }
        }
      }
      &:last-child {
        cursor: pointer;
        color: #fff;
      }
      .icon-earphone {
        width: 22px;
        height: 18px;
        margin-top: 16px;
        margin-bottom: 9px;
      }
      .icon-message {
        width: 23px;
        height: 22px;
        margin-top: 15px;
        margin-bottom: 6px;
      }
      .code {
        display: none;
        position: absolute;
        top: -1px;
        right: 50px;
        padding: 2px;
        border: 1px solid #e1e1e1;
        background-color: #f8f8f8;
      }
      .icon-goTop {
        position: relative;
        margin-top: 29px;
        margin-bottom: 9px;
        @include upTriangles(17px, 9px, #fff);
        &:after {
          content: '';
          position: absolute;
          top: 3px;
          left: (-17px / 2);
          @include upTriangles(17px, 9px, #646577);
        }
      }
    }
  }
  .mobile-side {
    position: fixed;
    right: 5%;
    bottom: 10%;
    z-index: 10000;
    width: pxTorem(118px);
    height: pxTorem(118px);
    background: url("~/assets/img/mobile/go-top.png") no-repeat;
    background-size: cover;
  }
</style>
