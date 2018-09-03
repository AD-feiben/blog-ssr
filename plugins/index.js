let plugins = []

if (process.browser) {
  plugins = [
    // require('lib-flexible'),
    require('./fastclick'),
    require('./uweb')
  ]
}

export default plugins