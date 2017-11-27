<template>
  <div class="news">
    <div class="banner">
      <div class="text">
        <h1>科技·创造美好生活</h1>
        <p>物联网国家政策、物联网标识应用新动向</p>
        <p>以及国家物联网标识平台发展资讯、行业新闻</p>
      </div>
    </div>
    <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!--<el-tab-pane label="全部" name="all">
          <div class="item-content" v-for="item in list">
            <nuxt-link :to="{name: 'detail-id', params: {detail: 'news', id: item.cms_id, gmtype: 26}}">
            <img :src="item.img" alt="CNICG">
            <news-item :item="item" class="newsItem"></news-item>
            </nuxt-link>
          </div>
        </el-tab-pane>-->
        <el-tab-pane label="平台动向" name="new">
          <div class="item-content" v-for="item in list">
            <nuxt-link :to="{name: 'detail-id', params: {detail: 'news', id: item.cms_id, gmtype: 26}}">
            <img :src="item.img" alt="CNICG">
            <news-item :item="item" class="newsItem"></news-item>
            </nuxt-link>
          </div>
        </el-tab-pane>
        <el-tab-pane label="国家政策" name="policy">
          <div class="item-content" v-for="item in list">
            <nuxt-link :to="{name: 'detail-id', params: {detail: 'news', id: item.cms_id, gmtype: 113}}">
            <img :src="item.img" alt="CNICG">
            <news-item :item="item" class="newsItem"></news-item>
            </nuxt-link>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <pagenation @handleCurrentChange="handleCurrentChange" :current-page="currentPage" :page-size="size" :total="count" v-if="count > 3"></pagenation>
  </div>
</template>
<script>
  import newsItem from '~/components/new-item'
  import pagenation from '~/components/common/pagenation'
  export default {
    components: {'news-item': newsItem, pagenation},
    async asyncData ({app}) {
      let { data: { results, count } } = await app.$axios.get('/v1/iot-site/refs/', {params: {gmtype: 26, page: 1, size: 3}})
      let tempArr = []
      let list = results.filter((item) => {
        return item.img !== ''
      })
      for (let i = 0; i < list.length; i++) {
        let {img, title, ctime, cms_id} = list[i]
        /* eslint-disable */
        let { data: {content}} = await app.$axios({url: `/cms/message/${cms_id}`, type: 'jsonp', method: 'get'})
        tempArr.push({
          img,
          title,
          time: ctime,
          cms_id,
          content
        })
      }
      return {list: tempArr, count}
    },
    data () {
      return {
        activeName: 'new',
        active: 'new',
        currentPage: 1,
        size: 3,
        list: [],
        count: 3
      }
    },
    methods: {
      handleClick (tab, event) {
        let name = tab.name
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
        }
      },
      async getContent (gmtype, page = 1) {
        let { data: { results, count } } = await this.$axios.get('/v1/iot-site/refs/', {params: {gmtype, page, size: 3}})
        let tempArr = []
        /* let list = results.filter((item) => { // 过滤掉没有图片的新闻
          return item.img !== ''
        }) */
        results.forEach((item) => { // 如果没有图片使用默认
          if (item.img === '') {
            item.img = require('~/assets/img/initial-bac.png')
          }
        })
        for (let i = 0; i < results.length; i++) {
          let {img, title, ctime, cms_id} = results[i]
          /* eslint-disable */
          let { data: {content}} = await this.$axios({url: `/cms/message/${cms_id}`, type: 'jsonp', method: 'get'})
          tempArr.push({
            img,
            title,
            time: ctime,
            cms_id,
            content
          })
        }
        this.list = tempArr
        this.count = count
      },
      handleCurrentChange (val) {
        this.currentPage = val
        let gmtype = this.activeName === 'all' ? 26 : (this.activeName === 'new' ? 26 : 113)
        this.getContent(gmtype, val)
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
      width: 100%;
      height: 200px;
      margin: 50px 0;
      @include clearfix;
      img {
        float: left;
        width: 400px;
        height: 200px;
      }
      .newsItem {
        float: right;
        width: 700px;
        height: 200px;
        position: relative;
        cursor: pointer;
      }
    }
  }
</style>
<style lang="scss">
  @import "assets/scss/mixins.scss";
  /* el-tab的自定义样式 */
  .content {
    @include clearfix;
    .newsItem {
      .newsItemLeft h1 {
        padding-left: 0;
        color: #009BEE;
        &:before {
          width: 0;
          height: 0;
        }
      }
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
