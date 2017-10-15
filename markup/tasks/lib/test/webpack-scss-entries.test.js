import test from 'ava';
import webpackScssEntries from '../webpack-scss-entries';


test('webpackJsEntries', t => {
  const context = `${__dirname}/view`;
  const result = webpackScssEntries(context);
  const expected = {
    'common/index': './common/scss/index.scss',
    'common/vendor': './common/scss/vendor.scss'
  };
  t.deepEqual(result, expected);
});
