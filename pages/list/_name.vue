<template>
  <div class="new-list" v-scroll-show-callback="handleTrendScroll">
    <mobile-new-item :list="name === 'platform' ? newsContent : policyContent"></mobile-new-item>
  </div>
</template>
<script>
  import MobileNewItem from '~/components/mobile-new-item'
  import ScrollShowCallBack from '~/directives/scrollShowCallBack'
  import { mapState } from 'vuex'
  export default {
    directives: {'scroll-show-callback': ScrollShowCallBack},
    components: {'mobile-new-item': MobileNewItem},
    computed: {
      ...mapState(['newsContent', 'policyContent', 'scrollDisable', 'news', 'policy'])
    },
    methods: {
      async handleTrendScroll () {
        let gmtype, params, type
        if (this.$route.params.name === 'platform') {
          type = 'news'
          gmtype = 26
          params = this.news.newsParams
        } else {
          type = 'policy'
          gmtype = 113
          params = this.policy.policyParams
        }
        let { page, newsTotal, size } = params
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
        await this.$store.dispatch('getContent', {gmtype, page: nowPage, size})
        let list = gmtype === 26 ? this.news.newsList : this.policy.policyList
        await this.$store.dispatch('getNewsContent', {list: list.slice(size * (nowPage - 1)), type})
      }
    },
    mounted () {
      this.name = this.$route.params.name
    },
    data () {
      return {
        name: ''
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
  .new-list {
    background-color: #f5f5f5;
  }
</style>
