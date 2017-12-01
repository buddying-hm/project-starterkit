const pPath = require('p-path');
const middleware = require('./bs.middleware');

const baseDir = pPath.output.root;

const config = {
  server: { baseDir },
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false,
  },
  middleware,
};

const watchFiles = [`${baseDir}/**/*`];

module.exports = {
  config,
  watchFiles,
};
