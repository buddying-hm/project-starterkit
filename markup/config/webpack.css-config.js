const ExtractTextPlugin = require('extract-text-webpack-plugin');
const p_path = require('../tasks/lib/p_path');

const webpackConf = {
  context: `${p_path._assets}/css`,
  entry: {
    style: './style.css'
  },
  output: {
    path: p_path.output.css,
    filename: '[name].css'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false,
              }
            },
            { loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: `${p_path.root}/config/postcss.config.js`
                }
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
