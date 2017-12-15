const assert = require("assert");

import filled from "../src/array/filled";

function indexPlus(index) {
	return index + 1;
}

function fizzBuzz(index) {
	return (++index % 3 ? '' : 'Fizz') + (index % 5 ? '' : 'Buzz') || index;
}

function comprehensive(index, length, partial) {
	return partial.indexOf(index) === -1 ? index + 1 : length;
}

describe("arrayFilled", function() {
	it("should return an array filled by the filler and the count of the element is n", function() {
		assert.deepEqual(filled('a', 0), []);
		assert.deepEqual(filled('a', 1), ['a']);
		assert.deepEqual(filled('a', 2), ['a', 'a']);
		assert.deepEqual(filled('a', 5), ['a', 'a', 'a', 'a', 'a']);
		assert.deepEqual(filled('foo', 2), ['foo', 'foo']);
		assert.deepEqual(filled(0, 2), [0, 0]);
		assert.deepEqual(filled(indexPlus, 5), [1, 2, 3, 4, 5]);
		assert.deepEqual(
			filled(fizzBuzz, 15),
			[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
		);
		assert.deepEqual(filled(comprehensive, 5), [1, 5, 3, 5, 5]);
	})
});