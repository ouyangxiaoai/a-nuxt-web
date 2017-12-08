<template>
  <div class="news-page">
    <div class="banner">
      <!--<div class="text">
        <h1>科技·创造美好生活</h1>
        <p>物联网国家政策、物联网标识应用新动向</p>
        <p>以及国家物联网标识平台发展资讯、行业新闻</p>
      </div>-->
    </div>
    <div class="content" v-scroll-show-callback="handleTrendScroll" scroll-placeholder="30">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!--<el-tab-pane label="全部" name="all">
          <div class="item-content" v-for="item in list">
            <nuxt-link :to="{name: 'detail-id', params: {detail: 'news', id: item.cms_id, gmtype: 26}}">
            <img :src="item.img" alt="CNICG">
            <news-item :item="item" class="newsItem"></news-item>
            </nuxt-link>
          </div>
        </el-tab-pane>-->
        <el-tab-pane label="平台动向" name="news">
          <div class="item-content" v-for="item in newsContent">
           <nuxt-link :to="{name: 'detail-id', params: {detail: 'news', id: item.cms_id}}">
            <i class="img" :style="{backgroundImage: `url(${item.img})`}"></i>
            <div class="content-text">
              <p>{{getDateMonth(item.ctime)}}</p>
              <h3>{{item.title}}</h3>
              <div>{{item.content}}</div>
            </div>
            </nuxt-link>
          </div>
        </el-tab-pane>
        <el-tab-pane label="国家政策" name="policy">
          <div class="item-content" v-for="item in policyContent">
            <nuxt-link :to="{name: 'detail-id', params: {detail: 'news', id: item.cms_id}}">
              <i class="img" :style="{backgroundImage: `url(${item.img})`}"></i>
              <div class="content-text">
                <p>{{getDateMonth(item.ctime)}}</p>
                <h3>{{item.title}}</h3>
                <div>{{item.content}}</div>
              </div>
            </nuxt-link>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!--<pagenation @handleCurrentChange="handleCurrentChange" :current-page="currentPage" :page-size="size" :total="count" v-if="count > 3"></pagenation>-->
  </div>
</template>
<script>
  import newsItem from '~/components/new-item'
  import pagenation from '~/components/common/pagenation'
  import ScrollShowCallBack from '~/directives/scrollShowCallBack'
  import { mapState } from 'vuex'
  export default {
    components: {'news-item': newsItem, pagenation},
    directives: {'scroll-show-callback': ScrollShowCallBack},
    computed: {
      ...mapState(['newsContent', 'policyContent', 'scrollDisable', 'news', 'policy'])
    },
    data () {
      return {
        activeName: 'news',
        currentPage: 1,
        size: 6,
        list: [],
        count: this.$store.state.news.newsParams.newsTotal,
        cPage: 1
      }
    },
    methods: {
      handleClick (tab, event) {
      /*        let name = tab.name
        if (name === this.active) {
          return false
        }
        this.active = name
        switch (name) {
          case 'all':
            this.getContent(26)
            break
          case 'new':
            this.getContent(26)
            break
          case 'policy':
            this.getContent(113)
            break
          default:
            this.getContent(26)
        } */
      },
      async getContent (gmtype, page = 1) {
        let { data: { results, count } } = await this.$axios.get('/v1/iot-site/refs/', {params: {gmtype, page, size: 6}})
        let tempArr = []
        /* let list = results.filter((item) => { // 过滤掉没有图片的新闻
          return item.img !== ''
        }) */
        results.forEach((item) => { // 如果没有图片使用默认
          if (item.img === '') {
            item.img = require('~/assets/img/initial-bac.jpg')
          }
        })
        for (let i = 0; i < results.length; i++) {
          let {img, title, ctime, cms_id, labels, prev_id, next_id} = results[i]
          /* eslint-disable */
          let { data: {content}} = await this.$axios({url: `/cms/message/${cms_id}`, type: 'jsonp', method: 'get'})
          tempArr.push({
            img,
            title,
            time: ctime,
            cms_id,
            content,
            labels,
            prev_id,
            next_id
          })
        }
        this.list = tempArr
        this.count = count
      },
      handleCurrentChange (val) {
        this.currentPage = val
        let gmtype = this.activeName === 'all' ? 26 : (this.activeName === 'new' ? 26 : 113)
        this.getContent(gmtype, val)
      },
      getDateMonth (time) { // 只获取月日
        let list = time.split(' ')[0].split('-').slice(1)
        return list.join('-')
      },
      async handleTrendScroll () { // 滚动加载
       let gmtype, params
        if (this.activeName === 'news') {
          gmtype = 26
          params = this.news.newsParams
        } else {
         gmtype = 112
         params = this.policy.policyParams
        }
          let {page, newsTotal, size } = params
          let nowPage
          if (page >= Math.ceil(newsTotal / size)) {
            return false // 判断是否已经请求全部
          } else {
            nowPage = ++page
          }
          if (this.scrollDisable) {
            return false // 上次请求是否完成
          }
          this.$store.commit('SCROLL_DISABLE') // 上个请求未完成禁止进入
          await this.$store.dispatch('getContent', {gmtype, page: nowPage})
          await this.$store.dispatch('getNewsContent', {list: this.news.newsList.slice(6 * (nowPage-1)), type: this.activeName})
        }
      }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/common";
  @import "assets/scss/mixins";
  .banner {
    background-image: url('~/assets/img/news-bac.png');
  }
  .content {
    width: 1200px;
    margin: 70px auto;
    .item-content {
      float: left;
      width: 380px;
      height: 322px;
      margin-top: 33px;
      position: relative;
      .img {
        display: block;
        width: 380px;
        height: 180px;
        background-size: cover;
        background-position: center;
      }
      .content-text {
        width: 380px;
        height: 142px;
        padding: 25px;
        border: 1px solid #eee;
        border-top: 0;
        color: #999;
      }
      .content-text p {
        font-size: 20px;
      }
      .content-text h3 {
        font-size: 16px;
        color: #666;
        margin: 15px 0 10px 0;
        width: 100%;
        height: 20px;
        line-height: 20px;
        @extend %text-overflow;
      }
      .content-text>div {
        font-size: 14px;
        height: 20px;
        line-height: 20px;
        @extend %text-overflow;
      }
      &:nth-child(3n+2) {
        margin-left: 30px;
        margin-right: 30px;
      }
      &:hover {
          box-shadow: 0 0 10px rgba(0, 0, 0, .1);
      }
    }
  }
</style>
<style lang="scss">
  @import "assets/scss/mixins.scss";
  @import "assets/scss/common";
  /* el-tab的自定义样式 */
  .news-page .content {
    @include clearfix;
    .el-tabs__content {
      overflow: visible;
    }
    section {
      padding: 0!important;
    }
    .content-text>div p, .content-text>div span {
      text-align: left!important;
      text-indent: 0!important;
      line-height: 20px!important;
      height: 20px!important;
      color: #999!important;
    }
    .content-text>div p span {
      display: inline-block;
      width: 100%!important;
      @extend %text-overflow;
    }
    .el-tabs__item {
      width: 86px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      padding: 0;
      margin-right: 24px;
    }
    .el-tabs__item.is-active {
      color: #fff;
      background-color: #009BEE;
    }
    .el-tabs__nav-wrap:after {
      height: 0;
    }
    .el-tabs__active-bar {
      transition: none;
      display: none;
    }
  }
</style>
