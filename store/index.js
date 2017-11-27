import { getBanner, getBusinessChild } from '../api/index'

export const state = () => ({
  activeIndex: '/',
  apiUrl: {},
  news: {
    newsList: [],
    newsParams: {
      page: 1,
      size: 6,
      total: 0
    }
  },
  policy: {
    policyList: [],
    policyParams: {
      page: 1,
      size: 6,
      total: 0
    }
  },
  scrollDisable: false,
  banners: [],
  dataSuccess: false,
  newsContent: [],
  policyContent: []
})
export const getters = {
  bannersImg: state => {
    let list = []
    state.banners.forEach((item) => {
      list.push(item.image)
    })
    return list
  },
  newsRight: state => {
    let list = state.newsContent.slice(1)
    return list
  },
  policyRight: state => {
    let list = state.policyContent.slice(1)
    return list
  }
}
export const mutations = {
  'CHANGE_ACTIVE_INDEX' (state, index) {
    state.activeIndex = index
    window.sessionStorage.setItem('activeIndex', index)
  },
  'INIT_ACTIVE_INDEX' (state, index) {
    state.activeIndex = index
  },
  'GET_ALL_API' (state, api) { // 获取所有api地址
    state.apiUrl = {...state.apiUrl, ...api}
  },
  'GET_NEWS' (state, data) { // 获取新闻
    state.news.newsList = [...state.news.newsList, ...data.list]
    state.news.newsParams = data.params
    // state.scrollDisable = !state.scrollDisable // 每次请求完之后放开禁止请求
  },
  'SCROLL_DISABLE' (state) { // 控制每次滚动到底部的时候只发一次请求  可以删除不影响数据
    state.scrollDisable = !state.scrollDisable
  },
  'GET_POLICY' (state, data) { // 国家政策
    state.policy.policyList = [...state.policy.policyList, ...data.list]
    state.policy.policyParams = data.params
    // state.scrollDisable = !state.scrollDisable // 每次请求完之后放开禁止请求
  },
  'GET_BANNERS' (state, banners) { // 首页banner
    state.banners = banners
  },
  'DATA_SUCCESS' (state) { // 确定请求成功
    state.dataSuccess = true
  },
  'GET_NEWS_CONTENT' (state, newsContent) { // 首页新闻详情
    state.newsContent = newsContent
  },
  'GET_POLICY_CONTENT' (state, policyContent) { // 首页点击政策
    state.policyContent = policyContent
  }
}
export const actions = {
  /*   一个统一的action方法：url是iost-site/refs/ */
  async getContent ({commit}, {gmtype = '', page = 1, size = 6}) {
    await this.$axios.get('/v1/iot-site/refs/', {
      params: {
        gmtype,
        page,
        size
      }
    }).then(res => {
      let tempArr = []
      let list = res.data.results.filter((item) => {
        return item.img !== ''
      })
      list.forEach((item, index) => {
        let {img, title, ctime, cms_id} = item
        tempArr[index] = {
          img,
          title,
          ctime,
          cms_id
        }
      })
      let news = {
        list: tempArr,
        params: {
          page: 1,
          size: 6,
          newsTotal: res.data.count
        }
      }
      let type = gmtype === 112 ? 'example/GET_EXAMPLE_LIST' : (gmtype === 26) ? 'GET_NEWS' : 'GET_POLICY'
      commit(type, news)
    }).catch(err => console.log(`获取${gmtype}发生错误：`, err))
  },
  async getNewsContent ({commit}, {list, type}) {
    const newsContent = []
    for (let i = 0; i < 4; i++) { // 首页的新闻详情
      let id = list[i].cms_id
      await this.$axios({
        url: `/cms/message/${id}`,
        method: 'get',
        type: 'jsonp'
      }).then((res) => {
        let title = res.data.title
        let content = res.data.content
        let time = res.data.ctime
        let news = {title, content, time, cms_id: id}
        newsContent.push(news)
      }).catch((err) => {
        console.log('获取详情出错：', err)
      })
    }
    let types = type === 'news' ? 'GET_NEWS_CONTENT' : 'GET_POLICY_CONTENT'
    commit(types, newsContent)
  },
  async nuxtServerInit ({commit, state, dispatch}, {app}) { // 所有初始化的数据在这里请求
    let {data} = await app.$axios.get('http://v2.cniotroot.cn/api/sitemap.json') // 获取所有API
    commit('GET_ALL_API', data)
    await dispatch('getContent', {gmtype: 26})
    await dispatch('getContent', {gmtype: 113})
    let banners = await getBanner(state.apiUrl.iot_site.banners) // 首页banner
    commit('GET_BANNERS', banners)
    /* 首页新闻详情 */
    await dispatch('getNewsContent', {list: state.news.newsList, type: 'news'})
    await dispatch('getNewsContent', {list: state.policy.policyList, type: 'policy'})
    /* 业务介绍的子平台以及合作机构 */
    let platform = await getBusinessChild(state.apiUrl.cms.platforms)
    let company = await getBusinessChild(state.apiUrl.cms.businesses)
    commit('business/B_INTRO_CHILD', {platform, company})
    /*  首次案例展示  */
    await dispatch('getContent', {gmtype: 112})
  }
}
/* import Vue from 'vue'
import Vuex from 'vuex'
import { getNewsRequest } from '../api/info'
import { getBanner, getNewsContent } from '../api/index'
import example from './example'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: { example },
  state: {
    activeIndex: '/',
    apiUrl: {},
    news: {
      newsList: [],
      newsParams: {
        page: 1,
        size: 6,
        total: 0
      }
    },
    policy: {
      policyList: [],
      policyParams: {
        page: 1,
        size: 6,
        total: 0
      }
    },
    scrollDisable: false,
    banners: [],
    dataSuccess: false,
    newsContent: [],
    policyContent: []
  },
  getters: {
    bannersImg: state => {
      let list = []
      state.banners.forEach((item) => {
        list.push(item.image)
      })
      return list
    },
    newsRight: state => {
      let list = state.newsContent.slice(1)
      return list
    },
    policyRight: state => {
      let list = state.policyContent.slice(1)
      return list
    }
  },
  mutations: {
    'CHANGE_ACTIVE_INDEX' (state, index) {
      state.activeIndex = index
    },
    'GET_ALL_API' (state, api) { // 获取所有api地址
      state.apiUrl = {...state.apiUrl, ...api}
    },
    'GET_NEWS' (state, data) { // 获取新闻
      state.news.newsList = [...state.news.newsList, ...data.list]
      state.news.newsParams = data.params
      state.scrollDisable = !state.scrollDisable // 每次请求完之后放开禁止请求
    },
    'SCROLL_DISABLE' (state) { // 控制每次滚动到底部的时候只发一次请求  可以删除不影响数据
      state.scrollDisable = !state.scrollDisable
    },
    'GET_POLICY' (state, data) { // 国家政策
      state.policy.policyList = [...state.policy.policyList, ...data.list]
      state.policy.policyParams = data.params
      state.scrollDisable = !state.scrollDisable // 每次请求完之后放开禁止请求
    },
    'GET_BANNERS' (state, banners) { // 首页banner
      state.banners = banners
    },
    'DATA_SUCCESS' (state) { // 确定请求成功
      state.dataSuccess = true
    },
    'GET_NEWS_CONTENT' (state, newsContent) { // 首页新闻详情
      state.newsContent = newsContent
    },
    'GET_POLICY_CONTENT' (state, policyContent) { // 首页点击政策
      state.policyContent = policyContent
    }
  },
  actions: {
    async getNews ({commit, state}, params) { // 每次滚到底部发送请求的方法
      commit('SCROLL_DISABLE') // 首先在此次请求没有结束前禁止再进入此方法
      let { gmtype, page, size } = params
      let newsData = await getNewsRequest(state.apiUrl.iot_site.news, gmtype, page, size)
      commit('GET_NEWS', newsData)
    },
    async nuxtServerInit ({commit, state}, {app}) { // 所有初始化的数据在这里请求
      let {data} = await app.axios.get('http://ng.cniotroot.cn/api/sitemap.json') // 获取所有API
      commit('GET_ALL_API', data)
      let newsData = await getNewsRequest(state.apiUrl.iot_site.news, 26) // 获取请求返回的数据 新闻
      commit('GET_NEWS', newsData)
      /!* commit('SCROLL_DISABLE') // 由于上个commit会禁止掉滚动请求在这里重新打开 *!/
      let policyData = await getNewsRequest(state.apiUrl.iot_site.news, 113) // 国家政策
      commit('GET_POLICY', policyData)
      let banners = await getBanner(state.apiUrl.iot_site.banners) // 首页banner
      commit('GET_BANNERS', banners)
      const url = state.apiUrl.iot_site.cms_message.replace('$id$', '')
      const newsContent = []
      const policyContent = []
      for (let i = 0; i < 4; i++) { // 首页的新闻详情
        let id = state.news.newsList[i].cms_id
        let news = await getNewsContent(url, id)
        newsContent.push(news)
      }
      commit('GET_NEWS_CONTENT', newsContent)
      for (let i = 0; i < 4; i++) { // 首页的国家政策
        let id = state.policy.policyList[i].cms_id
        let policy = await getNewsContent(url, id)
        policyContent.push(policy)
      }
      commit('GET_POLICY_CONTENT', policyContent)
    }
  }
})
export default store */
