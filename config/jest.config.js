const path = require('path');

module.exports = {
  verbose: true,
  roots: [path.resolve(__dirname, '../assets/js')],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
};
