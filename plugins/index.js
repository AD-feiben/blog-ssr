let plugins = []

if (process.browser) {
  plugins = [
    // require('lib-flexible'),
    require('./fastclick')
  ]
}

export default plugins