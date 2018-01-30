import axios from 'axios'

export const getBanner = (url) => {
  return axios.get(url).then((res) => {
    return res.data.results
  }).catch((err) => {
    console.log('获取banner发生错误：', err)
  })
}
/* export const getBusinessChild = (url) => {
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
} */
/*  浏览器版本 */
export const getUserAgent = (ua) => {
  let rv = -1 // Return value assumes failure.
  if (ua.indexOf('MSIE')) {
    let re = new RegExp(/MSIE ([0-9]+[0-9]*)/)
    if (re.exec(ua) !== null) {
      rv = parseFloat(RegExp.$1)
    }
  }
  return rv !== -1 && rv <= 9
}
