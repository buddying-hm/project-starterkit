/**
 * return Project Path
 */
const path = require('path');
const root = process.cwd();
const pkg = require(`${root}/package.json`);

const TARGET = process.env.TARGET ? process.env.TARGET : 'markup';
const context = path.join(root, pkg.output[TARGET].context) || root;

module.exports = {
  root,
  config: path.join(root, 'config'),
  tasks: path.join(root, 'tasks'),
  view: path.join(root, 'view'),
  output: {
    root: context,
    css: path.join(context, pkg.output[TARGET].css),
    js: path.join(context, pkg.output[TARGET].js),
    img: path.join(context, pkg.output[TARGET].img),
    font: path.join(context, pkg.output[TARGET].font)
  }
};
