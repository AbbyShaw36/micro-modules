const assert = require("assert");

import decamelize from "../src/string/decamelize";

describe("strDecamelize", function() {
	it("should throw error if the first argument is not a string", function() {
		assert.throws(function() {
			decamelize();
		}, Error);

		assert.throws(function() {
			decamelize(null);
		}, Error);

		assert.throws(function() {
			decamelize(123);
		}, Error);

		assert.throws(function() {
			decamelize(function() { console.log(123); });
		}, Error);
	});

	it("should convert a camelized string into a lowercased one with a custom separator", function() {
		assert.strictEqual(decamelize("thisIsATest", "-"), "this-is-a-test");
		assert.strictEqual(decamelize("ThisIsATest", "_"), "this_is_a_test");
		assert.strictEqual(decamelize("ThisIsATest", " "), "this is a test");
		assert.strictEqual(decamelize("myURLString"), "my-url-string");
		assert.strictEqual(decamelize("THIS IS A TEST"), "this is a test");
	})
})