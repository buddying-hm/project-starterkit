const browserSync = require('browser-sync').create();
const pPath = require('p-path');

const { config, watchFiles } = require(`${pPath.config}/bs.config.js`);

const DelayTimer = {
  isStart: false,

  start() {
    if (DelayTimer.isStart) return;

    DelayTimer.isStart = true;
    setTimeout(() => {
      browserSync.reload();
      DelayTimer.isStart = false;
    }, 500);
  }
}

const BROWSER = {
  start() {
    browserSync.init(config);

    const chokidar = require('chokidar');
    const watcher = chokidar.watch(watchFiles);
    watcher.on('change', () => {
      DelayTimer.start();
    });
  }
}

module.exports = BROWSER;
