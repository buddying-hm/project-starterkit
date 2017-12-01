const getEnv = require('./lib/get-env');

process.env.NODE_ENV = getEnv(process.argv[2]);
process.env.TASK = 'watch';

const Log = require('./lib/Log');
const EJS = require('./modules/EJS');
const WEBPACK = require('./modules/WEBPACK');
const BROWSER = require('./modules/BROWSER');

Log.taskstart();
if (process.env.NODE_ENV === 'development') {
  EJS.watch()
    .then(() => WEBPACK.watch())
    .then(BROWSER.start);
} else {
  WEBPACK.watch();
}
