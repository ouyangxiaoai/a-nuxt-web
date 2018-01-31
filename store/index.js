import { getUserAgent } from '../api/index'
import cloneDeep from 'lodash/cloneDeep'
import getUrl from '~/config/url'
import {agent} from '../api/util'

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
  policyContent: [],
  gmtype: 26,
  ieLow: false,
  isMobile: false // 是否移动端
})
export const getters = {
  bannersImg: state => {
    let list = []
    state.banners && state.banners.forEach((item) => {
      list.push(item.image || item.img)
    })
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
    state.newsContent = [...state.newsContent, ...newsContent]
  },
  'GET_POLICY_CONTENT' (state, policyContent) { // 首页点击政策
    state.policyContent = [...state.policyContent, ...policyContent]
  },
  'CHANGE_GMTYPE' (state, gmtype) { // 新闻类型
    state.gmtype = gmtype
  },
  'GET_IE' (state, bool) { // 检测到IE9以及以下
    state.ieLow = bool
  },
  'IS_MOBILE' (state, isMobile) { // 是否移动端
    state.isMobile = isMobile
  }
}
/* eslint-disable */
export const actions = {
  /*   一个统一的action方法：url是iost-site/refs/ */
getContent ({commit}, {gmtype = '', page = 1, size = 6}) {
    let url = getUrl('/api/v1/iot-site/refs/')
    return this.$axios.get(url, {
      params: {
        gmtype,
        page,
        size
      }
    }).then(res => {
      let tempArr = []
      let list = res.data.results
      list.forEach((item) => { // 如果没有图片使用默认
        if (item.img === '') {
          item.img = require('~/assets/img/initial-bac.jpg')
        }
      })
      // console.log(list)
      list.forEach((item, index) => {
        let {img, title, ctime, cms_id, labels, prev_id, next_id} = item
        tempArr[index] = {
          img,
          title,
          ctime,
          cms_id,
          labels,
          prev_id,
          next_id
        }
      })
      let news = {
        list: tempArr,
        params: {
          page,
          size,
          newsTotal: res.data.count
        }
      }
      let type = gmtype === 112 ? 'example/GET_EXAMPLE_LIST' : (gmtype === 26) ? 'GET_NEWS' : 'GET_POLICY'
      // console.log(news)
      // console.log(type)
      commit(type, news)
      if(gmtype === 112) {
        commit('SCROLL_DISABLE') // 在滚动加载的时候每次请求完打开可以下次请求
      }
    }).catch(err => console.log(`获取${gmtype}发生错误：`, err))
  },
  getNewsContent ({commit}, {list, type}) {
    let contents = cloneDeep(list)
    let len = list.length
   /* for (let i = 0; i < len; i++) { // 首页的新闻详情
      let id = contents[i].cms_id
      let cmsUrl = getUrl(`/message/${id}`, 'CMS')
      let {data: {subtitle}} = await this.$axios({url: cmsUrl, method: 'get', type: 'jsonp'})
      contents[i].content = subtitle
    }*/
   let arr = []
   for(let i = 0; i < len; i++) {
     arr.push(this.$axios.get(getUrl(`/message/${contents[i].cms_id}`, 'CMS')))
   }
    return Promise.all(arr).then(res => {
      for(let i = 0; i < len; i++) {
        contents[i].content = res[i].data.subtitle
      }
      let types = type === 'news' ? 'GET_NEWS_CONTENT' : 'GET_POLICY_CONTENT'
      commit(types, contents)
      commit('SCROLL_DISABLE') // 在滚动加载的时候每次请求完打开可以下次请求
    }).catch(err => console.log('获取详情出错：', err))
  },
  nuxtServerInit ({commit, state, dispatch}, {app, req, isServer}) { // 所有初始化的数据在这里请求
    /*  浏览器判断 */
    let userAgent = isServer ? req.headers['user-agent'] : navigator.userAgent
    let bool = getUserAgent(userAgent) // 判断IE9及以下
    commit('GET_IE', bool)
    /* 移动端判断  */
    const {isMobile} = agent(userAgent)
    commit('IS_MOBILE', isMobile)
    return Promise.all([dispatch('getContent', {gmtype: 26, size: state.isMobile ? 2 : 6}), dispatch('getContent', {gmtype: 113, size: state.isMobile ? 2 : 6})]).then(() => {
     return Promise.all([dispatch('getNewsContent', {list: state.news.newsList, type: 'news'}), dispatch('getNewsContent', {list: state.policy.policyList, type: 'policy'})]).then(() => {
       if (state.scrollDisable) { // 如果之前的请求影响了滚动的请求关闭
         commit('SCROLL_DISABLE')
       }
     })
    }).catch(err => console.log('获取新闻详情出错：', err))
  }
}
