var assert = require("assert");

import diff from "../src/array/diff";

describe("arrayDiff", function() {
	it("should throw an error if invalid arguments are passed", function() {
		assert.throws(function() {
			diff();
		}, Error);

		assert.throws(function() {
			diff({test: 'test'});
		}, Error);

		assert.throws(function() {
			diff('test');
		}, Error);

		assert.throws(function() {
			diff(null);
		}, Error);

		assert.throws(function() {
			diff([]);
		}, Error);
	});

	it("should diff element from the input array", function() {
		assert.deepEqual(diff([1,2,3,4,5], [2,3]), [1,4,5]);
		assert.deepEqual(diff([2,3], [1,2,3,4,5]), [1,4,5]);
		assert.deepEqual(diff([1,4], [2,3,4]), [1,2,3]);
		assert.deepEqual(diff([1,2,3], []), [1,2,3]);
	});
});