const gulp = require('gulp');
const ejs = require('../lib/custom-gulp-ejs');
const del = require('del');
const beautify = require('gulp-html-beautify');
const pPath = require('p-path');

const view = `${pPath.root}/view`;
const watchFiles = [`${view}/**/*.ejs`, `!${view}/**/_*.ejs`];
const cleanFiles = [`${pPath.output.root}/**/*.html`];

const EJS = {
  clean() {
    console.log('---clean up directory---');
    console.log(cleanFiles.join('\n'), '\n');

    return new Promise((resolve) => {
      del(cleanFiles, { force: true }).then(() => {
        resolve();
      });
    });
  },

  compile() {
    return this.clean().then(() => {
      console.log('---ejs compile start---');
      gulp.src(watchFiles)
        .pipe(ejs({}, {}, { ext: '.html' }, view))
        .pipe(beautify())
        .pipe(gulp.dest(pPath.output.root));
    });
  },

  watch() {
    const chokidar = require('chokidar');
    const watcher = chokidar.watch(view);

    return this.compile().then(() => {
      console.log('---ejs watch start...');
      watcher.on('change', () => {
        this.compile();
      });
    });
  }
};

module.exports = EJS;
