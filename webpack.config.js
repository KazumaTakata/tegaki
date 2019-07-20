var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
  plugins: [],
  module: {},
  devtool: 'eval-source-map'
}
