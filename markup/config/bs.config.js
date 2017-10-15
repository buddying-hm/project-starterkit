const pPath = require('p-path');
const baseDir = pPath.output.root;
const middleware = require('./bs.middleware');

const config = {
  server: { baseDir },
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false
  },
  middleware
};

const watchFiles = [`${baseDir}/**/*`];

module.exports = {
  config,
  watchFiles
};
