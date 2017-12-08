<template>
  <div class="link-us">
  <div class="map-wrap">
  <div class="m-box-map">
    <div class="u-model">
      <div class="u-tab f-cb">
        <div class="ele" v-for="(way, index) in someWay" :class="{ 'z-act': way.act }" @click="changWay(index)">
          <span >{{ way.icon }}</span>
          <span >{{ way.txt }}</span>
        </div>
        <div class="u-btn-sch">搜索</div>
      </div>
      <ul class="u-sch">
        <li class="u-input-box" v-for="add in adds">
          <span class="u-icon-g" :class="{ 'u-icon-r' : add.lt }"></span>
          <input class="u-input-sch" type="text" v-model="add.txt" :readonly="add.del" :class="{ 'z-act': add.del }" placeholder="我的位置" />
          <span class="u-icon-del" v-show="add.del"></span>
        </li>
      </ul>
      <div class="u-res-list">
        <baidu-map>
          <bm-view class="bm-view">
          </bm-view>
          <bm-transit v-if="someWay[0].act" :start="adds[0].txt" :end="{lng: 113.618, lat: 22.756}" :auto-viewport="true" location="广州"></bm-transit>
          <bm-driving v-if="someWay[1].act" :start="adds[0].txt" :end="{lng: 113.618, lat: 22.756}" :auto-viewport="true" location="广州"></bm-driving>
        </baidu-map>
      </div>
    </div>
    <div class="m-map">
      <baidu-map
        class="u-map"
        :center="{lng: 113.618, lat: 22.756}"
        :zoom="11"
        :scroll-wheel-zoom="true"
      >
        <bm-scale anchor="BMAP_ANCHOR_BOTTOM_RIGHT" />
        <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT" />
        <bm-copyright
          anchor="BMAP_ANCHOR_TOP_RIGHT"
          :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>bothqia@126.com</a>'}]"/>
        <bm-city-list anchor="BMAP_ANCHOR_BOTTOM_RIGHT" />
        <bm-marker :position="{lng: 113.618, lat: 22.756}" :dragging="false">
          <bm-label content="国家物联网标识管理公共服务平台" :labelStyle="pstyle" :offset="{width: -35, height: 30}"/>
        </bm-marker>
        <bm-transit v-if="someWay[0].act" :panel="false" :start="adds[0].txt" :end="{lng: 113.618, lat: 22.756}" :auto-viewport="true" location="广州" ></bm-transit>
        <bm-driving v-if="someWay[1].act" :panel="false" :start="adds[0].txt" :end="{lng: 113.618, lat: 22.756}" :auto-viewport="true" location="广州" ></bm-driving>
      </baidu-map>
    </div>
  </div>
  </div>
    <div class="link">
      <h1>联系我们</h1>
      <div class="content">
        <div class="c-left">
          <h2>我们在这里</h2>
          <p>广州中国科学院计算机网络信息中心</p>
          <p>联系地址：广州市  南沙区  南沙资讯科技园香港科技大学 霍英东研究院三楼</p>
          <p>邮编：511458</p>
        </div>
        <div class="c-right">
          <h2>商务合作/业务咨询</h2>
          <p>联系人： 李小姐</p>
          <p>联系邮箱： lipeiqi@cnicg.cn</p>
          <p>联系电话： 020-39398179  13580372651</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '百度地图',
        adds: [
          {
            lt: true,
            del: false,
            txt: ''
          },
          {
            lt: false,
            del: true,
            txt: '国家物联网标识管理公共服务平台'
          }
        ],
        someWay: [
          {
            icon: '',
            txt: '公交',
            act: true
          },
          {
            icon: '',
            txt: '驾车',
            act: false
          }
        ],
        info: {
          lang: '1.5公里',
          time: '42分钟'
        },
        longitude: {},
        latitude: {},
        pstyle: {
          color: '#333',
          fontSize: '1.2rem',
          border: 0,
          background: 'none'
        }
      }
    },
    methods: {
      changWay: function (i) {
        for (let j in this.someWay) {
          this.someWay[j].act = false
        }
        this.someWay[i].act = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
  .map-wrap {
    width: 100%;
    background-color: #f5f5f5;
  }
  .m-box-map{
    position: relative;
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0 50px 380px;
    background-color: #f8f8f8;
    .u-model{
      position: absolute;
      top: 50px;
      left: 0;
      width: 350px;
      height: 450px;
      .u-tab{
        width: 100%;
        margin-bottom: 5px;
        @include clearfix;
        .ele{
          float: left;
          color: #666;
          font-size: 16px;
          line-height: 150%;
          text-align: center;
          display: block;
          width: 54px;
          cursor: pointer;
          &.z-act{
            color: #4086ff;
          }
        }
        .u-btn-sch{
          float: right;
          font-size: 14px;
          line-height: 20px;
          cursor: pointer;
          background: #4086ff;
          border-radius: 4px;
          color: #efefef;
          text-align: center;
          display: block;
          width: 50px;
        }
      }
      .u-sch{
        .u-input-box{
          border-bottom: 1px solid #ddd;
        }
        .u-input-sch{
          border: 0;
          background: transparent;
          font-size: 16px;
          padding-left: 20px;
          width: 300px;
          height: 40px;
        }
      }
      .u-res-list{
        margin-top: 5px;
        background: #efefef;
        height: 336px;
        overflow-y: auto;
        .u-s{
          font-size: 16px;
          display: inline-block;
          width: 47%;
          text-align: center;
          border-right: 1px solid #ddd;
        }
        .u-t{
          font-size: 16px;
          display: inline-block;
          width: 48%;
          text-align: center;
        }
      }
    }
    .m-map{
      height: 450px;
      overflow: hidden;
    }
    .u-map{
      width: 100%;
      height: 450px;
    }
  }
  .link {
    width: 1200px;
    margin: 0 auto;
    padding: 70px 0;
    h1 {
      @extend %title-center;
      &:after {
        content: 'Concat Us';
      }
    }
    .content {
      margin-top: 50px;
      @include clearfix;
    }
    .content .c-left, .content .c-right {
      float: left;
      width: 50%;
      h2 {
        font-size: 18px;
        color: #333;
        height: 20px;
        line-height: 20px;
        margin-bottom: 26px;
        &:before {
          @extend %line-title;
        }
      }
      p {
        font-size: 16px;
        color: #666;
        padding: 8px 0;
      }
    }
    .content .c-right {
      float: right;
      padding-left: 160px;
      position: relative;
      /*&:after {
        content: '微信公众号';
        position: absolute;
        width: 91px;
        height: 120px;
        padding-top: 100px;
        text-align: center;
        right: 0;
        bottom: 10px;
        background: url("~/assets/img/link-us-code.png") no-repeat center top;
      }*/
    }
  }
</style>
