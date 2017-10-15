const browserSync = require('browser-sync').create();
const pPath = require('p-path');

const { config, watchFiles } = require(`${pPath.config}/bs.config.js`);

class DelayTimer {
  constructor() {
    this.isStart = false
  }

  start() {
    if (this.isStart) return;

    this.isStart = true;
    setTimeout(() => {
      browserSync.reload();
      this.isStart = false;
    }, 500);
  }
}
const delayTimer = new DelayTimer();

class _browser {
  start() {
    browserSync.init(config);

    const chokidar = require('chokidar');
    const watcher = chokidar.watch(watchFiles);
    watcher.on('change', () => {
     delayTimer.start()
    });
  }
}

module.exports = new _browser();
