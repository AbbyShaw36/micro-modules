var assert = require("assert");

import isSorted from "../src/array/isSorted";

describe("isSorted", function() {
	it("should return true if the array had sorted", function() {
		assert.ok(isSorted([1,2,3,4,5]));
		assert.ok(isSorted(['a', 'b', 'c', 'd']));
		assert.ok(isSorted([5,4,3,2,1], function(a, b) {
			return b < a;
		}));
	});

	it("should return false if the array had not sorted", function() {
		assert.ok(!isSorted([2,3,1,5,0]));
		assert.ok(!isSorted(['b','a', 'f', 'c', 'd']));
	});
});