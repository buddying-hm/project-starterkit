function getEnv(arg) {
  switch (arg) {
    case '-p':
      return 'production';
    case '-d':
    default:
      return 'development';
  }
}

module.exports = getEnv;
