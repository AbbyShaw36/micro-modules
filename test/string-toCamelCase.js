const assert = require("assert");

import camel from "../src/string/toCamelCase";

describe("stringToCamelCase", function() {
	it("should throw error when the first argument is not string", function() {
		assert.throws(function() {
			camel();
		}, Error);

		assert.throws(function() {
			camel(123);
		}, Error);

		assert.throws(function() {
			camel(function() {
				console.log(123);
			});
		}, Error);
	});

	const strings = {
		camel: 'thisIsAString',
		constant: 'THIS_IS_A_STRING',
		dot: 'this.is.a.string',
		pascal: 'ThisIsAString',
		sentence: 'This is a string.',
		snake: 'this_is_a_string',
		space: 'this is a string',
		title: 'This Is a String',
		junk: '-this__is$%a-string...'
	};

	for (var key in strings) test(key);

	function test(key) {
		it('should convert ' + key + ' case', function () {
			const res = camel(strings[key]);
			assert.strictEqual(res, 'thisIsAString');
		});
	}
});