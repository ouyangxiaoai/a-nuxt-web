<template>
  <div class="examples">
    <div class="banner">
      <div class="text">
        <h1>应用案例</h1>
        <p>国家物联网标识的实际应用案例，基于标识的扩展功能，解决行业的需求痛点</p>
        <p>目前国家平台应用领域包括跨境电商、母婴、生鲜、食品、医疗等行业</p>
      </div>
    </div>
    <div class="content">
      <h1>案例展示<span> / Case Display</span></h1>
      <ul>
        <li v-for="item in exampleList[0]" class="example">
          <nuxt-link :to="{name: 'detail-id', params: {detail: 'example', id: item.cms_id, gmtype: 112}}">
         <div>
          <img :src="item.img" :alt="item.title">
          <h2>{{item.title}}</h2>
          <p>{{item.detail}}</p>
         </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <pagenation  :current-page="examplesParams.page" :page-size="examplesParams.size" :total="examplesParams.newsTotal" v-if="examplesParams.newsTotal > 6"></pagenation>
  </div>
</template>
<script>
  import { mapGetters, mapState } from 'vuex'
  import pagenation from '~/components/common/pagenation'
  export default {
    computed: {
      ...mapGetters({
        'exampleList': 'example/exampleList'
      }),
      ...mapState({
        examplesParams: (state) => state.example.examples.examplesParams
      })
    },
    components: {
      pagenation
    },
    data () {
      return {
        pageSize: 6,
        currentPage: 1,
        total: 60
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
  @import "assets/scss/common.scss";
  .banner {
    background-image: url("~/assets/img/example-banner.png");
  }
  .content {
    width: 1200px;
    margin: 70px auto;
    h1 {
      font-size: 24px;
      color: #333;
      margin-bottom: 50px;
      span {
        color: #d6d5d5;
      }
    }
    ul {
      @include clearfix;
    }
    .example {
      float: left;
      width: 380px;
      height: 350px;
      padding-bottom: 30px;
      cursor: pointer;
      div {
        width:100%;
        text-align: center;
        perspective: 1000px;
        // perspective-origin: top center;
      }
      img {
        width: 100%;
        height: 230px;
        transition: all 1s;
        transform-origin: top center;
      }
      h2 {
        font-size: 16px;
        margin-top: 30px;
        color: #333;
      }
      p {
        padding: 16px 20px;
        color: #999;
      }
      &:hover h2 {
        color: #009bee;
      }
      &:hover img {
        // transform: translateZ(-150px);
        transform: scale(0.9);
        //transform: rotateX(-15deg)
      }
    }
    .example:nth-child(2), .example:nth-child(5) {
      width: 440px;
      padding: 0 30px;
    }
  }
</style>
