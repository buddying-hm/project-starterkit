const pPath = require('p-path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackConf = {
  context: `${pPath.assets}/js`,
  entry: {
    vendor: './vendor.js',
    index: './index.js',
  },
  output: {
    path: pPath.output.js,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: `${pPath.assets}/img`, to: pPath.output.img }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          { loader: 'babel-loader', options: { presets: ['es2015', 'flow'] } }
        ]
      }
    ]
  }
};

module.exports = webpackConf;
