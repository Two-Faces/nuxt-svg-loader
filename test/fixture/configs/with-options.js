const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../../../'),
  srcDir: resolve(__dirname, '../'),
  render: {
    resourceHints: false
  },
  modules: ['@@'],
  svgLoader: {
    svgo: {
      plugins: [
        { prefixIds: false }
      ]
    }
  },
  build: {
    filenames: {
      app: '[name].js',
      chunk: '[name].js'
    }
  }
}
