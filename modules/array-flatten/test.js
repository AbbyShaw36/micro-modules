let assert = require("assert");

import flatten from "./";

describe("flatten", function() {
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