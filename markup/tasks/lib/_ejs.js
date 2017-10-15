const gulp = require('gulp');
const del = require('del');
const beautify = require('gulp-html-beautify');
const ejs = require('./custom-gulp-ejs');
const pPath = require('p-path');

class _ejs {
  constructor() {
    this.view = `${pPath.root}/view`;
    this.watchfile = [`${this.view}/**/*.ejs`, `!${this.view}/**/_*.ejs`];
    this.cleanFile = [`${pPath.output.root}/**/*.html`, `!${pPath.output.root}/**/.*`, `!${pPath.output.css}`, `!${pPath.output.js}`, `!${pPath.output.img}`];
  }

  clean() {
    console.log('---clean up directory---');
    console.log(this.cleanFile.join('\n'), '\n');
    return new Promise(resolve => {
      del(this.cleanFile, {force: true}).then(() => {
        resolve();
      });
    });
  }

  compile() {
    return this.clean().then(() => {
      console.log('---ejs compile start---');
      gulp.src(this.watchfile)
        .pipe(ejs({}, {}, { ext: '.html' }, this.view))
        .pipe(beautify())
        .pipe(gulp.dest(pPath.output.root));
    });
  }

  watch() {
    const chokidar = require('chokidar');
    const watcher = chokidar.watch(this.view);

    return this.compile().then(() => {
      console.log('---ejs watch start...');
      watcher.on('change', () => {
        this.compile();
      });
    });
  }
}

module.exports = new _ejs();
