const path = require('path');
const glob = require('glob');

function webpackJsEntries(context) {
  const files = glob.sync(`${context}/**/*.js`);

  return arrayToEntryObject(context, files);
}

function arrayToEntryObject(context, files) {
  const entries = {};

  files.forEach(filePath => {
    const rel = new Rel(path.relative(context, filePath));
    if (rel.isExcludeFile) return;

    // 拡張子削除、 ディレクトリ名変更
    const key = rel.removeExt().removeJsDir().val();
    entries[key] = `./${rel.val(true)}`;
  });

  return entries;
}

class Rel {
  constructor(rel) {
    this._original = rel;
    this._rel = rel;
    this.isExcludeFile = /\/__test(s?)__\/|\/__mock(s?)__\/|\/lib(s?)\/|\/util(s?)\/|\/component(s?)\//.test(rel);
  }

  val(original = false) {
    if (original) {
      return this._original;
    }

    return this._rel;
  }

  removeExt() {
    this._rel = this._rel.replace(/\.js/, '');
    return this;
  }

  removeJsDir() {
    this._rel = this._rel.replace(/js\//, '');
    return this;
  }
}

module.exports = webpackJsEntries;
