module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '飞奔 | 飞奔的博客 ， 前端develop，技术分享，不止前端，Not only front-end!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '飞奔的博客是用来发表前端以及其他技术的文章，微信公众号 前端develop，技术分享，Not only front-end!' },
      { hid: 'keywords', name: 'keywords', content: '飞奔,飞奔的博客,前端develop,技术分享,不止前端,feiben,blog,feiben\’s blog,Not only front-end!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.9/css/all.css', integrity: 'sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1', crossorigin: 'anonymous' }
    ]
  },
  css: ['~/assets/styles/reset.less', '~/assets/styles/hljs.css'],
  plugins: ['~plugins'],
  router: {
    linkActiveClass: 'active'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1f97f9' },
  /*
  ** Build configuration
  */
  build: {
    postcss: [
      require('autoprefixer')({
        browsers: ['iOS >= 7', 'Android >= 4.1']
      }),
      require('postcss-px2rem')({
        remUnit: 37.5,
        selectorBlackList: ['html'],
        mediaQuery: true,
        propBlackList: ['border'] // 如果要保持font-size不转换，替换为 ['font-size']
      })
    ],
    vendor: ['lib-flexible', 'fastclick'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
