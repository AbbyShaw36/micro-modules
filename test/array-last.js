var assert = require("assert");

import last from "../src/array/last";

describe("arrayLast", function() {
	it("should throw an error if invalid arguments are passed", function() {
		assert.throws(function() {
			last();
		}, Error);

		assert.throws(function() {
			last({test: 'test'});
		}, Error);

		assert.throws(function() {
			last('test');
		}, Error);
	});

	it("should return the last element in the array", function() {
		assert.deepEqual(last([1,2,3,4,5]), [5]);
		assert.deepEqual(last(['a', 'b', 'c', 'd']), ['d']);
	});

	it("should return the last n element in the array", function() {
		assert.deepEqual(last([1,2,3,4,5], 3), [3,4,5]);
		assert.deepEqual(last(['a', 'b', 'c', 'd'], 2), ['c', 'd']);
	});

	it("should return the last element in the array event if the number is NaN or <= 0", function() {
		assert.deepEqual(last([1,2,3,4,5], 'test'), [5]);
		assert.deepEqual(last(['a', 'b', 'c', 'd'], -10), ['d']);
	});

	it("should return null if the array hs no elements", function() {
		assert.strictEqual(last([]), null);
		assert.strictEqual(last([], 2), null);
	});
});