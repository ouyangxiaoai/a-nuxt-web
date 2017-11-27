import cloneDeep from 'lodash/cloneDeep'
const summary = [
  {
    number: '即食食品产品',
    content: '即食产品，重在保鲜。由国家平台提供溯源标识，溯源时间精确到每秒。'
  },
  {
    number: '生鲜行业',
    content: '通过标识溯源和防伪应用，既帮企业净化市场，还可让消费者了解产品来源。'
  },
  {
    number: '果蔬行业',
    content: '消费升级下，消费者更重视水果的来源。一物一码，产地溯源细致到单个果子。'
  },
  {
    number: '酒水行业',
    content: '传统防伪标签，收效甚微，基于标识大数据的应用，防伪效果更好。'
  },
  {
    number: '茶行业',
    content: '窜货、防伪是传统茶行业痛点，基于标识应用，实时监控渠道，让防伪更简单。'
  },
  {
    number: '母婴行业',
    content: '物联网标识在跨境母婴领域应用，通过标识让产品来源更透明，杜绝伪劣产品。'
  }
]

export const state = () => ({
  examples: {
    examplesList: [],
    examplesParams: {}
  }
})
export const getters = {
  exampleList (state) { // 对于获取到的案例添加一个detail描述
    let lists = cloneDeep(state.examples.examplesList) // 进行了一次深拷贝这样state不会改变，如果要自己写方法则需要递归判断
    lists.forEach((list) => {
      list.forEach((item) => {
        summary.forEach((sum) => {
          if (item.title.indexOf(sum.number) !== -1) {
            item.detail = sum.content
          }
        })
      })
    })
    return lists
  }
}
export const mutations = {
  'GET_EXAMPLE_LIST' (state, data) {
    state.examples.examplesList.push(data.list)
    state.examples.examplesParams = data.params
  }
}
