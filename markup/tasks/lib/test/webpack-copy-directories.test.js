import test from 'ava';
import { getOption } from '../webpack-copy-directories';

test('getOption', t => {
  const context = `${__dirname}/view`;
  const result = getOption(context, 'font', '../../font');
  const expected = [
    { from: `${__dirname}/view/common/font`, to: '../../font/common' }
  ];
  t.deepEqual(result, expected);
});

test('img getOption', t => {
  const context = `${__dirname}/view`;
  const result = getOption(context, 'img', '../../img');
  const expected = [
    { from: `${__dirname}/view/common/img`, to: '../../img/common' }
  ];
  t.deepEqual(result, expected);
});
