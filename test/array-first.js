var assert = require("assert");

import first from "../src/array/first";

describe("arrayFirst", function() {
	it("should throw an error if invalid arguments are passed", function() {
		assert.throws(function() {
			first();
		}, Error);

		assert.throws(function() {
			first({test: 'test'});
		}, Error);

		assert.throws(function() {
			first('test');
		}, Error);

		assert.throws(function() {
			first(null);
		}, Error);
	});

	it("should return the first element in the array", function() {
		assert.deepEqual(first([1,2,3,4,5]), [1]);
		assert.deepEqual(first(['a', 'b', 'c', 'd', 'e', 'f'], 1), ['a']);
	});

	it("should the first n elements of the array", function() {
		assert.deepEqual(first([1,2,3,4,5], 3), [1,2,3]);
		assert.deepEqual(first(['a', 'b', 'c', 'd', 'e', 'f'], 3), ['a', 'b', 'c']);
	});

	it("should return null if the array has no elements", function() {
		assert.strictEqual(first([]), null);
		assert.strictEqual(first([], 2), null);
	});
});