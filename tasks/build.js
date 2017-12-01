process.env.NODE_ENV = 'production';
process.env.TASK = 'build';

const Log = require('./lib/Log');
const WEBPACK = require('./modules/WEBPACK');

Log.taskstart();
WEBPACK.build();
