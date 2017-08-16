const webpack = require('webpack');
const webpackJsConfig = require('./webpack.js-config');
const webpackScssConfig = require('./webpack.scss-config');

process.noDeprecation = true;

if (process.env.NODE_ENV === 'production') {
  webpackJsConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
  webpackJsConfig.plugins.push(new webpack.DefinePlugin({ 'process.env': { NODE_ENV: 'production' } }));
  webpackScssConfig.plugins.push(new webpack.DefinePlugin({ 'process.env': { NODE_ENV: 'production' } }));
} else {
  webpackJsConfig.devtool = 'inline-source-map';
  webpackScssConfig.devtool = 'inline-source-map';
}

const webpackConf = [webpackJsConfig, webpackScssConfig];

module.exports = webpackConf;
