var assert = require("assert");

import dedupe from "./";

describe("dedupe", function() {
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

	it("should no change when the number of the element in the array less than one", function() {
		assert.deepEqual(dedupe([]), []);
		assert.deepEqual(dedupe([1]), [1]);
		assert.deepEqual(dedupe([{a: 1}]), [{a: 1}]);
	});

	it("should remove duplicates", function() {
		const test1 = dedupe([1, 1, 2, 3, 4, 5, 6]);
		const test2 = dedupe([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6]);
		const test3 = dedupe([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 1, 1, 1, 1]);

		const expected = [1, 2, 3, 4, 5, 6];

		assert.deepEqual(test1, expected);
		assert.deepEqual(test2, expected);
		assert.deepEqual(test3, expected);
	});

	it("should remove duplicates of complex values", function() {
		const myDate = new Date(2017, 0, 1);

		assert.deepEqual(dedupe([{a: 1}, {a: 2}, {a: 3}, {a: 3}]), [{a: 1}, {a: 2}, {a: 3}]);
		assert.deepEqual(dedupe([myDate, myDate, myDate]), [myDate]);
		assert.deepEqual(dedupe([{date: myDate}, {date: myDate}, {date: myDate}]), [{date: myDate}]);
	});

	it("should remove duplicates when using a custom hasher", function() {
		const test = dedupe([{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}, {a: 3, b: 4}], value => value.a);

		assert.deepEqual(test, [{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}]);
	});
});