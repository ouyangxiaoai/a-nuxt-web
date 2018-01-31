const host = require('./config')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    'title': '物联网云平台_标识基点 万物互联',
    meta: [
      { charset: 'utf-8' },
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      { hid: 'description', name: 'description', content: '物联网云平台，以标识为基，构建万物互联体系；以标识为炉，熔炼数据商业价值；以标识为器，锻造惠民物联生态！' },
      {hid: 'keywords', name: 'keywords', content: 'IoT,NIOT,RFID,LoRa,物联网,标识,标识追溯,标识营销,标识监管,物联网络,物联网云平台'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: '/flexble.js'},
      { src: '/modernizr.custom.js' }
    ]
  },
  // 全局css设置
  css: [
    {src: '~/assets/scss/base.scss', lang: 'scss'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: ['~/plugins/elementUI', {src: '~/plugins/baiduMap', ssr: false}],
  build: {
    analyze: false,
    babel: {
      'plugins': [['component', [
        {
          'libraryName': 'element-ui',
          'styleLibraryName': 'theme-chalk'
        }
      ]]]
    },
    postcss: {
      plugins: {
        'postcss-cssnext': {
          'browsers': [
            '> 1%',
            'last 2 versions',
            'not ie <= 10' // to disable rem unit (px fallback) feature in postcss-cssnext
          ]
        }
      }
    },
    plugins: [new webpack.DefinePlugin({
      'process.env.URL_MODE': JSON.stringify(process.env.URL_MODE)
    })],
    // 第三方模块或者自己编写的模块统一打包
    vendor: ['~/plugins/elementUI', 'vue-baidu-map', 'babel-polyfill', 'eventsource-polyfill'],
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
    middleware: 'auth',
    fallback: false
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  axios: {
    baseURL: ''
  },
  proxy: {
    '/api':
      {
        target: host.default
      },
    '/CMS':
      {
        target: host.CMS,
        pathRewrite: {'^/CMS': ''}
      }
  }
}
