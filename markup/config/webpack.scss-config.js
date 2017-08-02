const ExtractTextPlugin = require('extract-text-webpack-plugin');
const p_path = require('../tasks/lib/p_path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const webpackConf = {
  context: `${p_path._assets}/scss`,
  entry: {
    style: './style.scss'
  },
  output: {
    path: p_path.output.css,
    filename: '[name].css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false
              }
            },
            { loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: `${p_path.root}/config/postcss.config.js`
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: (process.env.NODE_ENV === 'production') ? 'compressed' : 'compact',
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};

module.exports = webpackConf;