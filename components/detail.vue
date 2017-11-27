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
              <nuxt-link class="u-btn u-btn-more" :to="{ name: 'detail-id', params: {detail: gmtype === 112 ? 'example' : 'news', id: m.id, gmtype}}">
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
        <div class="u-left">
          <p>原创文章，如若转载，请注明出处：国物标识</p>
          <p>还想了解更多关于标识的价值应用？请关注右侧微信公众号</p>
        </div>
        <div class="u-right">
          <ul>
            <li class="u-item">
              <img src="~/assets/img/gwbscode.png" alt="">
              <span>国物标识公众号</span>
            </li>
            <li class="u-item">
              <img src="~/assets/img/niotcode.png" alt="">
              <span>NIOT 公众号</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'ctn', 'labels', 'more', 'gmtype']
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
      border: 1px solid #ededed;
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
</style>
