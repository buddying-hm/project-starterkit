module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-easy-import': {},
    'postcss-custom-media': {},
    'precss': {},
    'autoprefixer': { browsers: ['last 2 versions'] }
  }
};
