import demo from '../app';

test('app demo function', () => {
  expect(demo('value')).toBe('value');
});
