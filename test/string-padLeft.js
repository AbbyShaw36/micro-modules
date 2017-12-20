const assert = require("assert");

import padLeft from "../src/string/padLeft";

describe("StringPadLeft", function() {
	it("should throw error if the first argument is not a string", function() {
		assert.throws(function() {
			padLeft();
		}, Error);

		assert.throws(function() {
			padLeft(123);
		}, Error);


		assert.throws(function() {
			padLeft(null);
		}, Error);


		assert.throws(function() {
			padLeft(function() {
				console.log(123);
			});
		}, Error);
	});

	it("should return the string when the length parameter is not passed", function() {
		assert.strictEqual(padLeft("abc"), "abc");
		assert.strictEqual(padLeft("abc", 0), "abc");
	});

	it("should use the given character for padding", function() {
		assert.strictEqual(padLeft("abc", 10), "-------abc");
		assert.strictEqual(padLeft("123", 10, "0"), "0000000123");
	});
})