require('./lib/check_nodemodule');

process.env.TASK = 'clean';
switch (process.argv[2]) {
  case 's':
  case 'server':
  case '-s':
  case '--server':
    process.env.TARGET = 'server';
    break;
  case 'm':
  case 'markup':
  case '-m':
  case '--markup':
  default:
    process.env.TARGET = 'markup';
    break;
}

const del = require('del');
const pPath = require('p-path');

function clean() {
  let cleanFiles;
  if (process.env.TARGET === 'markup') {
    cleanFiles = [`${pPath.output.root}/**/*`, `!${pPath.output.root}/**/.*`];
  } else {
    cleanFiles = [pPath.output.css, pPath.output.js, pPath.output.img, pPath.output.font];
  }

  console.log('---clean up directory---');
  console.log(cleanFiles.join('\n'), '\n');
  del(cleanFiles, { force: true }).then(() => {
    console.log('---cleaning finished---');
  });
}

clean();
