const path = require('path')
const config = require('./proxy')
const isDev = Object.is(process.env.NODE_ENV, 'development')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    'title': '国家物联网标识管理公共服务平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '国家物联网标识管理公共服务平台，是由中国科学院计算机网络信息中心牵头，联合工业和信息化部电子科学技术情报研究所、工业和信息化部电信研究院、中国物品编码中心三家参与单位建立的物联网标识统一管理和公共服务平台。' },
      {hid: 'keywords', name: 'keywords', content: '国物标识 国家平台  国物防伪  溯源中国 溯源  防伪 一物一码'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // 全局css设置
  css: [
    {src: '~/assets/scss/base.scss', lang: 'scss'},
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: ['~/plugins/elementUI', {src: '~/plugins/baiduMap', ssr: false}, {src: '~/plugins/vue-awesome-swiper', ssr: false}],
  build: {
    // 第三方模块或者自己编写的模块统一打包
    vendor: ['element-ui', 'axios', 'vue-awesome-swiper'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      const alias = config.resolve.alias || {}
      alias['assets'] = path.join(__dirname, '/assets')
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: true
  },
  router: {
    middleware: 'auth'
  },
  modules: isDev ? config.modulesDev : config.modulesPro,
  proxy: isDev ? config.proxy : ''
}
