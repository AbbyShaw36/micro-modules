let assert = require("assert");

import flatten from "../src/array/flatten";

describe("flatten", function() {
	it("should throw an error if invalid arguments are passed", function() {
		assert.throws(function() {
			flatten();
		}, Error);

		assert.throws(function() {
			flatten({test: 'test'});
		}, Error);

		assert.throws(function() {
			flatten('test');
		}, Error);

		assert.throws(function() {
			flatten(null);
		}, Error);
	});

	it("should return the array flatten only one level", function() {
		assert.deepEqual(flatten(['a', ['b', ['c']], 'd', ['e']]), ['a', 'b', ['c'], 'd', 'e']);
		assert.deepEqual(flatten(['a', ['b', ['c']], 'd', ['e']], 0), ['a', 'b', ['c'], 'd', 'e']);
		assert.deepEqual(flatten(['a', ['b', ['c']], 'd', ['e']], false), ['a', 'b', ['c'], 'd', 'e']);
		assert.deepEqual(flatten(['a', ['b', ['c']], 'd', ['e']], null), ['a', 'b', ['c'], 'd', 'e']);
		assert.deepEqual(flatten(['a', ['b', ['c']], 'd', ['e']], NaN), ['a', 'b', ['c'], 'd', 'e']);
		assert.deepEqual(flatten(['a', ['b', ['c']], 'd', ['e']], ''), ['a', 'b', ['c'], 'd', 'e']);
	});

	it("should return the array flatten n level", function() {
		assert.deepEqual(flatten(['a', ['b', ['c', 'd', ['e']]]], 10), ['a', 'b', 'c', 'd', 'e']);
		assert.deepEqual(flatten(['a', ['b', ['c']], 'd', ['e']], true), ['a', 'b', 'c', 'd', 'e']);
	});
});