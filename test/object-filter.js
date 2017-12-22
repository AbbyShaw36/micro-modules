const assert = require("assert");

import filter from "../src/object/filter";

describe("objectFilter", function() {
	const testObj = {
		a: 111,
		b: 222,
		c: 333
	}

	it("should throw error if the filter is not array or function", function() {
		assert.throws(function() {
			filter(testObj);
		}, Error);

		assert.throws(function() {
			filter(testObj, "test");
		}, Error);

		assert.throws(function() {
			filter(testObj, 123);
		}, Error);
	});

	it("filter the object by the array", function() {
		assert.deepEqual(filter(testObj, ['a', 'b']), {a: 111, b: 222});
	});

	it("filter the object by the function", function() {
		const res = filter(testObj, function(key, value) {
			if (['a', 'b'].includes(key)) {
				return true;
			}

			return false;
		});

		assert.deepEqual(res, { a: 111, b: 222 });
	});
})