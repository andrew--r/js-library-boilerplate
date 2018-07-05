import test from 'ava';
import repeatString from '../';

test('should work', (t) => {
  t.is(repeatString('a', 3), 'aaa');
});
