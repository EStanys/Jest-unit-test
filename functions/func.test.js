const { add, devide, showValue, notMoreThan } = require('./func');

test('add function should add 5 and 10 to get 15', () => {
  
  expect(add(5, 10)).toBe(15)
  expect(add(1,5)).toBe(6)
})

test('20 devided by 10 should be 2', () => {
  expect(devide(20,10)).toBe(2)
  expect(devide(20,2)).toBe(10)
});

test('devided by 0 should be null', () => {
  expect(devide(20,0)).toBe(null)
  expect(devide(20,0)).toBeNull()  
});

it('should be falsy', () => {
  expect(showValue(0)).toBeFalsy()
  expect(showValue('')).toBeFalsy()
  expect(showValue(undefined)).toBeFalsy()
  expect(showValue(null)).toBeFalsy()
  expect(showValue([].length)).toBeFalsy()
  expect(showValue(Object.keys({}).length)).toBeFalsy()
});

it('shoud be less than 400', () => {
  expect(notMoreThan(400)).toBe(true)
  expect(350).toBeLessThan(400)

});

// string regex
it('team should not contain I', () => {
  expect('team').not.toMatch(/I/i)
  expect('+370843956').toMatch(/\+370/)
});
