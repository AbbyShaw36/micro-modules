const assert = require("assert");

import zipmap from "../src/object/zipmap";

describe("object zipmap", function() {
	it("use keys and values", function() {
		const keys = ['a', 'b', 'c'];
		const values = [1, 2, 3];

		assert.deepEqual(zipmap(keys, values), { a: 1, b: 2, c: 3 });
	});

	it("use an array of objects", function() {
		const objs = [
			{ key: 'foo', value: 'bar' },
			{ key: 'hi', value: 'bye' },
		];

		assert.deepEqual(zipmap(objs), { foo: 'bar', hi: 'bye' });
	});

	it("use an array of pairs", function() {
		const pairs = [
			['foo', 'bar'],
			['hi', 'bye']
		];

		assert.deepEqual(zipmap(pairs), { foo: 'bar', hi: 'bye' });
	});
});