let plugins = []

if (process.browser) {
  plugins = [
    require('./fastclick'),
    require('lib-flexible')
  ]
}

export default plugins