const returnJson = require('./bs.api');

module.exports = [
  {
    route: '/api',
    handle: (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({}));
    }
  }
];
