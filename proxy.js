const proxy = {
  '/api/v1':
      {
        target: 'http://v2.cniotroot.cn/api/v1/',
        changeOrigin: true,
        pathRewrite: {'^/api/v1': '/'}
      },
  '/api/cms':
      {
        target: 'http://cms.cniotroot.cn',
        changeOrigin: true,
        pathRewrite: {'^/api/cms': '/'}
      }
}
const modulesDev = ['@nuxtjs/axios', '@nuxtjs/proxy']
const modulesPro = ['@nuxtjs/axios']
module.exports = {
  proxy,
  modulesPro,
  modulesDev
}
