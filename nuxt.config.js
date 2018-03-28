module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'feiben-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'If you\'re going to try, go all the way!' },
      { hid: 'keyword', name: 'keyword', content: 'feiben' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.9/css/all.css', integrity: 'sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1', crossorigin: 'anonymous' }
    ]
  },
  css: ['~/assets/styles/reset.less'],
  plugins: ['~plugins'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
