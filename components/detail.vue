<template>
  <div class="m-pro-bg">
    <div class="m-pro-detail">
      <div class="m-pro f-cb">
        <div class="m-pro-left">
          <h1 class="u-t">{{ title }}</h1>
          <div class="u-t-bar">
            <div class="u-t2">
              <span class="tt2">来源:</span>
              <span class="tt2">{{ ctn.tt[0] }}</span>
            </div>
            <div class="u-t2">
              <span class="tt2">发布时间:</span>
              <span class="tt2">{{ ctn.tt[1] }}</span>
            </div>
          </div>
          <div class="u-t-label">
            <span class="label" v-for="l in labels">{{ l }}</span>
          </div>
          <div class="u-ctn" v-html="ctn.cc">
          </div>
        </div>
        <div class="m-pro-right">
          <div class="u-title">延伸阅读</div>
          <ul>
            <li class="u-m f-cb" v-for="m in more">
              <nuxt-link class="u-btn u-btn-more" :to="{ name: 'detail-id', params: {detail: gmtype === 112 ? 'example' : 'news', id: m.id}}">
                <img :src="m.img" alt="">
                <div class="u-m-right">
                  <p class="u-m-right-tt">{{ m.tt }}</p>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-pro-code f-cb">
      </div>
      <div class="prev-next" id="prev-next">
        <nuxt-link :to="{ name: 'detail-id', params: {detail: gmtype === 112 ? 'example' : 'news', id: next.cms_id}}">
        <div class="next item" v-if="next" :style="{backgroundImage: `url(${next.img})`}">
          <div class="item-content">
          <h3>{{next.title}}</h3>
          <p>
            <span>{{next.ctime}}</span>
            <span>下一篇</span>
          </p>
          </div>
        </div>
        </nuxt-link>
        <nuxt-link :to="{ name: 'detail-id', params: {detail: gmtype === 112 ? 'example' : 'news', id: prev.cms_id}}">
        <div class="prev item" v-if="prev" :style="{backgroundImage: `url(${prev.img})`}">
          <div class="item-content">
          <h3>{{prev.title}}</h3>
          <p>
            <span>{{prev.ctime}}</span>
            <span>上一篇</span>
          </p>
          </div>
        </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import NuxtLink from '../.nuxt/components/nuxt-link'
  export default {
    components: {NuxtLink},
    props: ['title', 'ctn', 'labels', 'more', 'gmtype'],
    computed: {
      ...mapState({
        newsList: state => state.news.newsList,
        policyList: state => state.policy.policyList,
        examplesList: state => state.example.examples.examplesList
      })
    },
    methods: {
      showBox () {
        let scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight
        let scrollTop = document.documentElement.scrollTop || document.documentElement.scrollTop
        let clientHeight = document.body.clientHeight
        let item = document.getElementById('prev-next')
        if (scrollTop < clientHeight / 2) {
          item.style.position = 'fixed'
          item.style.bottom = -240 + 'px'
        } else if (scrollTop >= clientHeight / 2 && scrollTop + clientHeight <= scrollHeight - 242) {
          item.style.position = 'fixed'
          item.style.bottom = 30 + 'px'
        } else {
          item.style.position = 'absolute'
          item.style.bottom = 30 + 'px'
        }
      }
    },
    data () {
      return {
        prev: '',
        next: ''
      }
    },
    /* eslint-disable*/
    mounted () { // 获取上下一篇
      let id = this.$route.params.id
      let list = this.gmtype === 26 ? this.newsList : (this.gmtype === 113 ? this.policyList : this.examplesList)
      let now = list.filter((item) => {
        return item.cms_id === id
      })
      let {prev_id, next_id} = now[0]
      if (prev_id) {
        let prev = list.filter((item) => {
          return item.cms_id === prev_id
        })
        this.prev = prev[0]
      }
      if (next_id) {
        let next = list.filter((item) => {
          return item.cms_id === next_id
        })
        this.next = next[0]
      }
      window.addEventListener('scroll', this.showBox, false)
    },
    destroyed () {
      window.removeEventListener('scroll', this.showBox)
    }
  }
</script>
<style lang="scss">
  .u-ctn {
    width: 700px;
    margin: 48px auto 0;
    font-size: 18px;
    p {
      margin-top: 24px;
    }
    strong {
      font-size: 21px;
    }
    img {
      max-width: 65%;
      margin-top: 25px;
      margin-bottom: 25px;
    }
    a {
      color: rgb(0, 0, 204);
      font-weight: 600;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
<style lang="scss" scoped>
  @import "assets/scss/mixins";
  .m-pro-bg {
    background: #faf9f9;
    overflow: hidden;
    .m-pro {
      @include clearfix;
    }
  }

  .m-pro-detail {
    position: relative;
    width: 1200px;
    margin: 20px auto 0;
    .u-t {
      width: 700px;
      margin: 0 auto;
      text-align: left;
      font-size: 26px;
      color: #333;
    }
    .m-pro-left {
      background: #fff;
      float: left;
      width: 800px;
      border: 1px solid #ededed;
      padding: 50px;
    }
    .m-pro-right {
      background: #fff;
      float: left;
      width: 340px;
      border: 1px solid #ededed;
      margin-left: 30px;
      padding-left: 20px;
      padding-right: 20px;
      .u-title {
        font-size: 18px;
        margin-top: 30px;
      }
      .u-m {
        margin-top: 24px;
        height: 75px;
        padding: 5px 0;
        overflow: hidden;
        @include clearfix;
        img {
          width: 120px;
          height: 75px;
          float: left;
        }
        .u-m-right {
          width: 160px;
          font-size: 16px;
          float: left;
          margin-left: 10px;
          margin-top: 5px;
        }
        &:last-child {
          margin-bottom: 30px;
        }
      }
    }
    .m-pro-code {
      width: 800px;
      background: #fff;
      //border: 1px solid #ededed;
      padding-left: 50px;
      padding-right: 50px;
      margin-top: 30px;
      margin-bottom: 30px;
      @include clearfix;
      .u-left {
        float: left;
        width: 420px;
        padding-top: 50px;
        padding-bottom: 50px;
        margin-right: 5px;
        p {
          font-size: 14px;
          color: #a1a1a1;
          line-height: 2;
        }
      }
      .u-right {
        float: left;
        .u-item {
          display: inline-block;
          margin-left: 30px;
          width: 100px;
          margin-top: 20px;
          text-align: center;
          font-size: 0;
          span {
            font-size: 14px;
            color: #a1a1a1;
            line-height: 2;
            &:before {
              display: none;
            }
          }
          img {
            width: 90px;
            height: 90px;
          }
        }
      }
    }
    .u-t-bar {
      text-align: left;
      margin-top: 18px;
    }
    .u-t2 {
      text-align: center;
      display: inline-block;
      margin-right: 20px;
      .tt2 {
        font-size: 17px;
        color: #a1a1a1;
      }
    }
    .u-t-label {
      width: 800px;
      margin-top: 20px;
      .label {
        font-size: 16px;
        background: #f0f0f0;
        padding: 5px 8px;
        margin-right: 10px;
        color: #999;
        border-radius: 4px;
      }
    }
    .u-model-box {
      margin-top: 30px;
      padding-top: 20px;
      margin-bottom: 30px;
      border-top: 1px solid #ccc;
      font-size: 21px;
      display: none;
      &.f-no-line {
        border-top: 0;
      }
      .u-next {
        color: #42b8f1;
        cursor: pointer;
      }
      .u-next-t {
        font-size: 21px;
        color: #666;
        &:hover {
          color: #333;
        }
      }
    }
    .u-model-box-pc {
      position: fixed;
      left: 50%;
      margin-left: 230px;
      width: 300px;
      bottom: 0;
      transition: bottom .8s;
      cursor: pointer;
      z-index: 9999999999;
      &.f-isShow0 {
        bottom: -210px;
      }
      &.f-isShow1 {
        bottom: 0;
      }
      &.f-isShow2 {
        position: absolute;
        bottom: 0;
      }
      .u-np {
        width: 300px;
        height: 100px;
        padding-left: 20px;
        position: relative;
        background: rgba(55, 55, 55, .7);
        margin-top: 10px;
        .u-next-t {
          color: #fff;
          font-size: 16px;
        }
        .u-next {
          color: #fff;
          font-size: 14px;
          position: absolute;
          bottom: 10px;
          right: 30px;
        }
        .u-n:after {
          content: ' ';
          display: block;
          width: 0;
          height: 0;
          position: absolute;
          bottom: 2px;
          right: -20px;
          border-style: solid;
          border-width: 7px;
          border-top-color: transparent;
          border-left-color: rgba(255, 255, 255, 1);
          border-bottom-color: transparent;
          border-right-color: transparent;
        }
        .u-p:after {
          content: ' ';
          display: block;
          position: absolute;
          bottom: 2px;
          right: -13px;
          width: 0;
          height: 0;
          margin-left: -7px;
          border-style: solid;
          border-width: 7px;
          border-top-color: transparent;
          border-left-color: transparent;
          border-bottom-color: transparent;
          border-right-color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  .prev-next {
    width: 310px;
    transition: all 1s;
    position: absolute;
    left: 50%;
    margin-left: 230px;
    bottom: -240px;
  }
  .item {
    width: 100%;
    height: 100px;
    padding: 12px 10px;
    margin-bottom: 10px;
    color: #fff;
    background-color: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    position: relative;
    transition: background-size .2s ease;
    cursor: pointer;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
    }
    &:hover {
      background-size: 110%;
    }
    .item-content {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 10;
      overflow: hidden;
      p {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        span {
          float: left;
        }
        span:last-child {
          float: right;
          &:after {
            display: inline-block;
            vertical-align: middle;
            margin-left: 10px;
            width: 0;
            height: 0;
            border: 8px solid transparent;
            border-left-color: #fff;
          }
        }
      }
    }
    &.prev .item-content p span:last-child{
      &:after {
        border-left-color: transparent;
        border-right-color: #fff;
        margin-right: 8px;
        margin-left: 2px;
      }
    }
  }
</style>
