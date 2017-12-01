const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pPath = require('p-path');

const webpackConf = {
  context: `${pPath.assets}/scss`,
  entry: {
    style: './style.scss'
  },
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
                  path: `${pPath.config}/postcss.config.js`
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: (process.env.NODE_ENV === 'production') ? 'compressed' : 'compact',
                sourceMap: true,
                data: (process.env.NODE_ENV === 'production') ? '@import "_base/_00.pro";' : '@import "_base/_00.dev";',
                includePaths: [
                  `${pPath.assets}/scss`
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
