const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, '_build'),
    filename: 'bundle.js'
  },
  module: {
    // webpack 4
    rules: [
      { // updated with webpack 4
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  stats: {
    colors: true
  }
};