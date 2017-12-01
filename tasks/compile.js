const getEnv = require('./lib/get-env');

process.env.NODE_ENV = getEnv(process.argv[2]);
process.env.TASK = 'compile';

const Log = require('./lib/Log');
const EJS = require('./modules/EJS');
const WEBPACK = require('./modules/WEBPACK');

Log.taskstart();
if (process.env.NODE_ENV === 'development') {
  EJS.compile()
    .then(() => {
      WEBPACK.compile();
    });
} else {
  WEBPACK.compile();
}
