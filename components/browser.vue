<template>
  <div>
    <div class="bg-wrap"></div>
    <div class="browser-box-wrap">
      <div class="box">
        <i class="el-icon-close close" @click="close()"></i>
        <p>检测到IE9或者更低版本浏览器</p>
        <p>为获得最佳网站体验推荐您使用以下现代化浏览器，点击图标可前往下载</p>
        <div>
          <a :href="browser.http" v-for="browser in browsers" :style="{backgroundImage: `url(${browser.img})`}" target="_blank">{{browser.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        browsers: [
          {name: '360极速', http: 'http://chrome.360.cn/', img: require('~/assets/img/360.png')},
          {name: 'QQ', http: 'http://browser.qq.com/?adtag=SEM1', img: require('~/assets/img/QQ.png')},
          {name: 'IE11', http: 'https://www.microsoft.com/zh-cn/download/internet-explorer-11-for-windows-7-details.aspx', img: require('~/assets/img/IE.png')},
          {name: 'Firefox', http: 'http://www.firefox.com.cn/', img: require('~/assets/img/firefox.png')}
        ]
      }
    },
    methods: {
      close () {
        let boxBac = document.getElementsByClassName('bg-wrap')[0]
        let box = document.getElementsByClassName('browser-box-wrap')[0]
        boxBac.style.display = 'none'
        box.style.display = 'none'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .bg-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
    background-color: rgba(0, 0, 0, .5);
    z-index: 2000;
  }
  .browser-box-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 2001;
    &:after {
      display: inline-block;
      height: 100%;
      width: 0;
      vertical-align: middle;
    }
    .box {
      display: inline-block;
      width: 660px;
      padding: 20px;
      vertical-align: middle;
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #e6ebf5;
      font-size: 18px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      text-align: left;
      overflow: hidden;
      backface-visibility: hidden;
      position: relative;
      p {
        text-align: center;
        margin-top: 20px;
        color: red;
      }
      div {
        width: 100%;
        margin: 30px auto ;
        a {
          display: inline-block;
          width: 25%;
          height: 94px;
          padding-top: 74px;
          background-position: top center;
          background-size: 64px 64px;
          background-repeat: no-repeat;
          text-align: center;
        }
      }
      .close {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        border: none;
        outline: 0;
        background: 0 0;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
</style>
