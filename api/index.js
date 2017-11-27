import axios from 'axios'

export const getBanner = (url) => {
  return axios.get(url).then((res) => {
    return res.data.results
  }).catch((err) => {
    console.log('获取banner发生错误：', err)
  })
}
export const getNewsContent = (url, id) => {
  return axios({
    url: url + id,
    method: 'get',
    type: 'jsonp'
  }).then((res) => {
    // console.log(res.data)
    let title = res.data.title
    let content = res.data.content
    let time = res.data.ctime
    /* let ctn = {
      tt: ['国物标识', res.data.ctime, res.data.subtitle],
      cc: res.data.content
    }
    let labels = res.data.labels
    let arr = labels.split(' ')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '') {
        arr.splice(i, 1)
        i = i - 1
      }
    }
    labels = arr */
    // store.commit('DATA_SUCCESS')
    return {title, content, time}
  }).catch((err) => {
    console.log('获取详情出错：', err)
  })
}
