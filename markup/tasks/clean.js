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
const p_path = require('./lib/p_path');

function clean() {
  let cleanFiles;
  if (process.env.TARGET === 'markup') {
    cleanFiles = [`${p_path.output.root}/**/*`, `!${p_path.output.root}/**/.*`];
  } else {
    cleanFiles = [`${p_path.output.css}`, `${p_path.output.js}`, `${p_path.output.img}`];
  }

  console.log('---clean up directory---');
  console.log(cleanFiles.join('\n'), '\n');
  del(cleanFiles, { force: true }).then(() => {
    console.log('---cleaning finished---');
  });
}

clean();
