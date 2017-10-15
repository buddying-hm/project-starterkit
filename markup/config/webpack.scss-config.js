const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pPath = require('p-path');
const webpackScssEntries = require('../tasks/lib/webpack-scss-entries');

const webpackConf = {
  context: `${pPath.root}/view`,
  entry: webpackScssEntries(`${pPath.root}/view`),
  output: {
    path: `${pPath.output.css}`,
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
                  path: `${pPath.root}/config/postcss.config.js`
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: (process.env.NODE_ENV === 'production') ? 'compressed' : 'compact',
                sourceMap: true,
                data: '@import "_base/scss/_index.scss";',
                includePaths: [
                  `${pPath.root}/view/`
                ]
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
