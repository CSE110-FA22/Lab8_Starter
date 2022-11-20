// sum.test.js
const sum = require('../code-to-unit-test/sum')

test('adds 1 + 2 to equal 3', () => {
  expect(1+2).toBe(3);
});

test('Checks the sum function', () => {
	expect(sum(1,2)).toBe(3);
});

