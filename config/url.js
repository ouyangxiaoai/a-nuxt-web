const getUrlByAlias = (url, platform = 'default') => {
  /**
   * @url: 不含域名的 API URL
   * @platform: 不同业务服务平台的代号
   *
   * 前后端分离模式下，前端可能需要跟多个业务服务的不同环境交互API。
   * 1、开发模式下为了解决跨域问题，需要使用本地路径，并通过代理访问 API；
   * 2、生产环境下通过完整的包含域名的 URL 来访问 API（生产环境自行配置跨域）。
   *
   * 为了简化生产环境的配置，默认使用 host 模式，开发模式下手动设置 URL_MODE 为 "dev"。
   **/
  const targetHost = require('~/config')
  platform || (platform = 'default')
  let ret
  if (process.env.URL_MODE === 'dev') {
    ret = platform === 'default'
      ? `${url}`
      : `/${platform}${url}`
  } else {
    ret = `${targetHost[platform]}${url}`
  }
  /* process.env.URL_MODE === 'dev' && console.log(ret) */
  return ret
}
export default getUrlByAlias
