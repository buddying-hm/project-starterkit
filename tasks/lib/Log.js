const Log = {
  taskstart() {
    let log = '/**\n' +
              ` * NODE_ENV: ${process.env.NODE_ENV}\n` +
              ` * TASK    : ${process.env.TASK}\n` +
              ' **/\n';
    console.log(log);
  },
};

module.exports = Log;
