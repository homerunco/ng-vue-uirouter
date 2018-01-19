const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'ng-vue-uirouter.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': './src'
    }
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: true
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8
    }),

    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
