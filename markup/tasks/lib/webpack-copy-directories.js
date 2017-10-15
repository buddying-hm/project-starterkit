const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const glob = require('glob');

function webpackCopyDirectories(context, dirName, output) {
  const option = getOption(context, dirName, output);

  return new CopyWebpackPlugin(option);
}

function getOption(context, dirName, output) {
  const pattern = Array.isArray(dirName) ? `${context}/**/+(${dirName.join('|')})` : `${context}/**/${dirName}`;
  const option = [];
  glob.sync(pattern).forEach(dir => {
    const rel = path.relative(context, dir);
    const config = {
      from: dir,
      to: path.join(output, rel.replace(new RegExp(`/${dirName}`), ''))
    };
    option.push(config);
  });

  return option;
}

module.exports = webpackCopyDirectories;
module.exports.getOption = getOption;
