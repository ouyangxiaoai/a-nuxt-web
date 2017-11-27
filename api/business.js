import axios from 'axios'

export const getBusinessChild = (url) => {
  return axios.get(url).then(res => {
    let data = res.data.results
    let results = []
    if (data.length > 0) {
      data.forEach((item) => {
        results.push(item.image)
      })
    }
    return results
  }).catch(err => {
    console.log('获取业务子平台以及合作机构发生错误：', err)
  })
}
