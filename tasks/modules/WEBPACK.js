/**
 * Reference Code
 * https://github.com/kriasoft/react-starter-kit/blob/master/tools/bundle.js
 */
const webpack = require('webpack');
const webpackConfig = require(`${process.cwd()}/config/webpack.config`);

const WEBPACK = {
  build() {
    console.log('---webpack compile start---\n');

    return new Promise((resolve, reject) => {
      webpack(webpackConfig)
        .run((err, stats) => {
          if (err) {
            return reject(err);
          }

          callback(stats);
          return resolve(stats);
        });
    });
  },

  compile() {
    return this.build();
  },

  watch() {
    return new Promise((resolve, reject) => {
      webpack(webpackConfig)
        .watch({
          aggregateTimeout: 300,
          poll: undefined,
        }, (err, stats) => {
          if (err) {
            return reject(err);
          }

          console.log('---webpack watch start---\n');
          callback(stats);
          return resolve(stats);
        });
    });
  }
};

function callback(stats) {
  console.log(stats.toString({
    colors: true,
    modules: false,
    chunks: false,
    chunkModules: false,
  }), '\n\n');
}

module.exports = WEBPACK;
