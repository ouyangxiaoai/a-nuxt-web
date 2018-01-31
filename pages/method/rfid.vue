<template>
  <div class="rfid">
    <div v-if="!isMobile">
    <div class="banner"></div>
    <div class="rfid-content">
    <div class="rfid-bac">
      <h1>项目背景</h1>
      <div class="img-left">
        <img src="~/assets/img/rfid-bac.png" alt="RFID">
      </div>
      <div class="text-right">
        <div v-for="item in rfidBac">
          <h2>{{item.title}}</h2>
          <p>{{item.detail}}</p>
        </div>
      </div>
    </div>
    </div>
    <div class="rfid-zican">
      <h1>固定资产管理系统</h1>
      <div class="content">
        <div class="content-tab">
          <i class="active-line"></i>
        <el-tabs tab-position="left" style="height: 300px;" @tab-click="activeTab">
          <el-tab-pane :label="item.title" v-for="(item, index) in tabContent" key="index">
            <div>
              <h2>{{item.title}}</h2>
              <p>{{item.detail1}}</p>
              <p>{{item.detail2}}</p>
            </div>
          </el-tab-pane>
        </el-tabs>
        </div>
      </div>
    </div>
    <div class="rfid-content">
    <div class="rfid-adv">
      <h1>项目优势</h1>
      <div class="rfid-adv-content">
        <div v-for="(item, index) in rfidAdv">
          <span><i>{{item.title}}</i></span>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
    </div>
    <div class="rfid-system">
      <h1>系统设计</h1>
      <img src="~/assets/img/rfid-system.png" alt="系统设计">
    </div>
    </div>
    <div class="mobile" v-else>
      <div class="mobile-banner"></div>
      <div class="rfid-bac-mobile">
        <h1>项目背景</h1>
        <i></i>
        <div v-for="item in rfidBac" class="rfid-bac-item">
          <h2>{{item.title}}</h2>
          <p>{{item.detail}}{{item.detail2}}</p>
        </div>
      </div>
      <div class="zican-manage">
        <h1>固定资产管理系统</h1>
        <div class="manage-list">
        <el-collapse accordion v-model="activeIndex">
          <el-collapse-item v-for="(item, index) in tabContent" :key="index" :name="index + ''">
            <template slot="title">
              <i :class="['header-icon',`icon-${index}`]"></i>
              <span>{{item.title}}</span>
              <i :class="(index + '') === activeIndex ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
            </template>
            <p>{{item.detail1}}{{item.detail2 || '' }}</p>
          </el-collapse-item>
        </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {Tabs, TabPane, CollapseItem, Collapse} from 'element-ui'
  export default {
    components: {'el-tabs': Tabs, 'el-tab-pane': TabPane, 'el-collapse-item': CollapseItem, 'el-collapse': Collapse},
    computed: {
      isMobile () {
        return this.$store.state.isMobile
      }
    },
    data () {
      return {
        activeIndex: '-1',
        rfidBac: [
          {title: '背景介绍', detail: 'RFID是一种无线射频识别技术，由读写器、天线和标签组成。当标签靠近到读写器和天线组成的感应范围时，标签会将存储在芯片里的数据发送给读写器，读写器会将数据上传至信息系统'},
          {title: '技术应用', detail: '目前RFID技术，正被广泛应用于农业、工业、物流、公共交通和各种服务领域'}
        ],
        tabContent: [
          {title: '资产定位', icon: require('~/assets/img/mobile/manage-1.png'), detail1: '资产定位即记录资产的位置信息。为实现资产定位功能，需要对所有需要实现定位的资产加装电子标签，从而将电子便签与资产进行绑定', detail2: '在有安装RFID的读卡器办公区域或空间内，对资产进行监控管理'},
          {title: '资产追踪', icon: require('~/assets/img/mobile/manage-2.png'), detail1: '资产追踪是记录资产位置及位置变化情况。通过在写字楼、办公室、会议室等地方部署相应的RFID读写设备，读取电子标签，实现位置信息的动态记录', detail2: '同时，为了更好管理资产的位置状态，一旦资产产生位置变化，将生成通知消息，提供给资产管理员进行监控和管理参考'},
          {title: '远程管理', icon: require('~/assets/img/mobile/manage-3.png'), detail1: '实现资产自动管理，利用RFID技术和无线远程传输功能，实现对资产全生命周期（新增、调拨、闲置、报废、维修等）过程的智能化动态', detail2: '实时跟踪，集中监控管理，为资产合理调配提供准确的参考数据'},
          {title: '资产盘点', icon: require('~/assets/img/mobile/manage-4.png'), detail1: '资产盘点即定期或不定期地对公司的资产、存货进行全部或部分的清点，以确实掌握企业存货数量、价值，并加以改善，加强管理', detail2: '资产盘点是资产管理中最耗时耗力的应用环节，固定资产管理系统目的之一就是为了实现高效的资产盘点'},
          {title: '设备防盗', icon: require('~/assets/img/mobile/manage-5.png'), detail1: '当资产从安装到RFID读写器的大门经过时，如果资产未经授权，或标签遭到暴力拆除时，现场将触发警报，同时后台将报警的时间、地点、固定资产信息送到相关人员', detail2: '所有报警事件会自动记录到系统数据库中，并形成报警日志以供查询'}
        ],
        rfidAdv: [
          {title: '方便快捷', text: '快速识别，高可靠性，易操作'},
          {title: '降低成本', text: '节约人力，提高企业管理效益'},
          {title: '减少浪费', text: '合理调配资源，减少资源浪费'},
          {title: '资产防盗', text: '自动识别，防止财产丢失'},
          {title: '智能管理', text: '有序管理，可实时监控记录'}
        ]
      }
    },
    methods: {
      activeTab (tab, event) {
        let activeLine = document.getElementsByClassName('active-line')[0]
        let content = document.getElementsByClassName('content')[0]
        let y = 0
        let img = ''
        switch (tab.label) {
          case '资产定位':
            y = 0
            img = require('~/assets/img/zican-position.png')
            break
          case '资产追踪':
            y = 56
            img = require('~/assets/img/zican-track.png')
            break
          case '远程管理':
            y = 112
            img = require('~/assets/img/zican-manager.png')
            break
          case '资产盘点':
            y = 168
            img = require('~/assets/img/zican-pan.png')
            break
          case '设备防盗':
            y = 224
            img = require('~/assets/img/zican-anti.png')
            break
          default:
            y = 0
            img = require('~/assets/img/zican-position.png')
        }
        if (window.Modernizr && window.Modernizr.csstransitions) {
          activeLine.style.transform = `translateY(${y}px)`
        } else {
          activeLine.style.top = `${y + 20}px`
        }
        content.style.backgroundImage = `url(${img})`
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
  @import "assets/scss/common.scss";
  .rfid-bac,.rfid-zican, .rfid-adv, .rfid-system {
    @extend %title;
  }
  .rfid-content {
    width: 100%;
    min-width: 1200px;
    background-color: $bgf8;
  }
    .img-left {
      float: left;
      padding: 20px 33px 20px 30px;
      margin-top: 50px;
      background-color: #fff;
    }
    .text-right {
      float: right;
      padding: 40px 30px 51px 33px;
      margin-top: 50px;
      background-color: #fff;
      div:first-child {
        margin-bottom: 30px;
      }
      h2 {
        font-size: 16px;
        color: #333;
        height: 20px;
        line-height: 20px;
      }
      p {
        word-wrap: break-word;
        width: 594px;
        margin-top: 10px;
        line-height: 150%;
        font-size: 14px;
        color: #999;
      }
    }
  .rfid-zican {
    width: 100%;
    min-width: 1200px;
    height: 570px;
    position: relative;
    h1 {
      width: 1200px;
      margin: 0 auto;
    }
    .content {
      position: absolute;
      top: 140px;
      left: 0;
      width: 100%;
      height: 430px;
      background: url("~assets/img/zican-position.png") no-repeat center center;
      background-size: cover;
      transition: all 1s;
      .content-tab {
        @extend %posc;
      }
    }
  }
  .rfid-adv {
    height: 570px;
    padding-bottom: 80px;
    .rfid-adv-content {
      margin-top: 50px;
      height: 100%;
      background: url("~/assets/img/rfid-adv.png") no-repeat center center;
      position: relative;
      div span {
        position: absolute;
        top: 10px;
        left: 55px;
        width: 102px;
        height: 102px;
        background: url("~/assets/img/rfid-1.png") no-repeat center center;
        color: #fff;
      }
      i {
        @extend %circle-title;
      }
      div p {
        position: absolute;
        top: 90px;
        left: 180px;
        font-size: 14px;
      }
      div:nth-child(2)>span {
        top: 13px;
        left: 762px;
        i {
          background-color: #1B9DA8;
        }
      }
      div:nth-child(2)>p {
        top: 53px;
        left: 880px;
      }
      div:nth-child(3)>span {
        top: 223px;
        left: 0;
        i {
          background-color: #1B9CA9;
        }
      }
      div:nth-child(3)>p {
        top: 296px;
        left: 122px;
      }
      div:nth-child(4)>span {
        top: 123px;
        left: auto;
        right: 0;
        i {
          background-color: #16A6CB;
        }
      }
      div:nth-child(4)>p {
        top: 193px;
       left: 900px;
      }
      div:nth-child(5)>span {
        top: 264px;
        left: auto;
        right: 100px;
        i {
          background-color: #EDBE51;
        }
      }
      div:nth-child(5)>p {
        top: 344px;
        left: 790px;
      }
    }
  }
  .rfid-system {
    height: 801px;
    padding-bottom: 100px;
   /* background: url("~/assets/img/rfid-system.png") no-repeat center 140px;
    background-size: 1200px 561px;*/
    img {
      //width: 1200px;
      margin: 50px auto 0;
    }
  }
  .mobile-banner {
    background-image: url('~/assets/img/mobile/rfid-banner-mobile.png');
  }
  .rfid-bac-mobile {
    @include px2rem(padding, 115px, 50px, 0px);
    @extend %mobile-line;
    i {
      display: block;
      width: 100%;
      height: pxTorem(600px);
      background: url('~/assets/img/mobile/rfid-bac-mobile.png') no-repeat center center;
      background-size: cover;
      margin-bottom: pxTorem(80px);
    }
    .rfid-bac-item {
      margin-bottom: pxTorem(100px);
      h2 {
        font-size: pxTorem(48px);
        color: #000;
      }
      p {
        font-size: pxTorem(40px);
        color: #999;
        margin-top: pxTorem(50px);
        line-height: 1.5;
      }
    }
  }
  .zican-manage {
    @include px2rem(padding, 100px, 50px, 50px);
    @extend %mobile-line;
    background-color: #f5f5f5;
  }
</style>
<style lang="scss">
  @import "assets/scss/common.scss";
  @import "assets/scss/mixins.scss";
  .content-tab {
    width: 100%;
    height: 300px;
    position: relative;
    min-width: 227px;
    .active-line {
      position: absolute;
      top: 20px;
      left: 20%;
      margin-left: 133px;
      background-color: #009BEE;
      width: 3px;
      height: 36px;
      z-index: 100;
      transition: transform .3s cubic-bezier(.645,.045,.355,1);
    }
    .el-tabs {
      width: 60%;
      margin: 0 auto;
      position: relative;
      min-width: 136px;
    }
    .el-tabs__item {
      color: #fff;
      height: 36px;
      line-height: 36px;
      padding: 0 40px;
      margin: 20px 0;
      &:hover {
        color: $mainBlue;
      }
      &.is-active {
        background-color: rgba(51, 63, 76, .7);
        color: $mainBlue;
      }
    }
    .el-tabs__active-bar {
      background-color: $mainBlue;
      width: 3px;
      display: none;
    }
    .el-tabs__nav-wrap:after {
      transform: scaleX(0.2);
      background-color: #aaa;
    }
    .el-tabs__content {
      color: #fff;
      padding-left: 40px;
      margin-right: 0;
      @extend %posvm;
      left: 145px;
      h2 {
        font-size: 18px;
      }
      p {
        margin-top: 30px;
        line-height: 150%;
        font-size: 14px;
      }
    }
  }
  .manage-list {
    .el-collapse-item__header {
      height: pxTorem(140px);
      line-height: pxTorem(120px);
      font-size: pxTorem(48px);
      color: #666;
      position: relative;
      font-weight: normal;
    }
    .el-collapse-item.is-active .el-collapse-item__header {
      border-bottom-color: #cccccc;
    }
    .el-collapse-item {
      margin-bottom: pxTorem(30px);
    }
    .el-collapse {
      border: none;
    }
    .el-collapse-item__arrow {
      display: none;
    }
    .el-icon-arrow-down, .el-icon-arrow-up {
      @extend %posvm;
      right: pxTorem(20px);
    }
    .header-icon {
      @extend %posvm;
      left: pxTorem(40px);
      background-size: cover;
      background-repeat: no-repeat;
    }
    .icon-0 {
      background-image: url('~/assets/img/mobile/manage-1.png');
      width: pxTorem(47px);
      height: pxTorem(54px);
    }
    .icon-1 {
      width: pxTorem(64px);
      height: pxTorem(64px);
      background-image: url('~/assets/img/mobile/manage-2.png');
    }
    .icon-2 {
      width: pxTorem(58px);
      height: pxTorem(48px);
      background-image: url('~/assets/img/mobile/manage-3.png');
    }
    .icon-3 {
      width: pxTorem(47px);
      height: pxTorem(52px);
      background-image: url('~/assets/img/mobile/manage-4.png');
    }
    .icon-4 {
      width: pxTorem(64px);
      height: pxTorem(48px);
      background-image: url('~/assets/img/mobile/manage-5.png');
    }
    span {
      @extend %posvm;
      left: pxTorem(160px);
    }
    .el-collapse-item__content {
      font-size: pxTorem(46px);
      color: #999;
      line-height: 1.5;
      @include px2rem(padding, 50px, 40px, 100px);
    }
  }
</style>
