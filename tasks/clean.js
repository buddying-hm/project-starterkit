const getEnv = require('./lib/get-env');

process.env.NODE_ENV = getEnv(process.argv[2]);
process.env.TASK = 'clean';

const del = require('del');
const pPath = require('p-path');

const cleanFiles = (process.env.NODE_ENV === 'development') ?
                   [`${pPath.output.root}/**/*`, `!${pPath.output.root}/**/.*`] :
                   [pPath.output.css, pPath.output.js, pPath.output.img, pPath.output.font];

console.log('---clean up directory---');
console.log(cleanFiles.join('\n'), '\n');
del(cleanFiles, { force: true }).then(() => {
  console.log('---cleaning finished---');
});
