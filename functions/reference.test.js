const { createUser, copyArr, includesValue } = require('./reference');

test('should return new user bob', () => {
  // reference tipo reiskmem matcheris yra toEqual
  expect(createUser()).toEqual({ name: 'Bob', email: 'bob@email.com'});
});

test('should return arr copy', () => {
  expect(copyArr([1,2,4])).toEqual([1,2,4])
});

test('should constain value', () => {
  const arr = [1, 2, 4]
  const val = 2
  expect(arr).toContain(val)
  expect(includesValue(arr, val)).toBeTruthy();
});