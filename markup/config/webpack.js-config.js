const pPath = require('p-path');
const webpackJsEntries = require('../tasks/lib/webpack-js-entries');
const webpackCopyDirectories = require('../tasks/lib/webpack-copy-directories');

const webpackConf = {
  context: `${pPath.root}/view`,
  entry: webpackJsEntries(`${pPath.root}/view`),
  output: {
    path: pPath.output.js,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@view': `${pPath.root}/view`,
    }
  },
  plugins: [
    webpackCopyDirectories(`${pPath.root}/view`, 'img', pPath.output.img),
    webpackCopyDirectories(`${pPath.root}/view`, 'font', pPath.output.font)
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          { loader: 'babel-loader', options: { presets: ['es2015'] } }
        ]
      }
    ]
  }
};

module.exports = webpackConf;
