import test from 'ava';
import webpackJsEntries from '../webpack-js-entries';


test('webpackJsEntries', t => {
  const context = `${__dirname}/view`;
  const result = webpackJsEntries(context);
  const expected = {
    'common/index': './common/js/index.js',
    'common/vendor': './common/js/vendor.js'
  };
  t.deepEqual(result, expected);
});
