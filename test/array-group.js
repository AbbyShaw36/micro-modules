var assert = require("assert");

import group from "../src/array/group";

describe("arrayGroup", function() {
	it("should throw error if the first argument is not an array", function() {
		assert.throws(function() {
			group();
		});

		assert.throws(function() {
			group(123);
		});

		assert.throws(function() {
			group(null, "test");
		});
	});

	it("should throw error when no grouping properties are passed", function() {
		assert.throws(function() {
			group([{test: 123}, {test: 234}]);
		});
	});

	it("should create groups based on the value of the specified property", function() {
		const arr1 = [
			{tag: 'one', content: 'A'},
			{tag: 'one', content: 'B'},
			{tag: 'two', content: 'C'},
			{tag: 'two', content: 'D'},
			{tag: 'three', content: 'E'},
			{tag: 'three', content: 'F'}
		];

		assert.deepEqual(group(arr1, 'tag'), {
			 one: [
				{tag: 'one', content: 'A'},
				{tag: 'one', content: 'B'}
			],
			two: [
				{tag: 'two', content: 'C'},
				{tag: 'two', content: 'D'}
			],
			three: [
				{tag: 'three', content: 'E'},
				{tag: 'three', content: 'F'}
			]
		});

		const arr2 = [
			{tag: 1, content: 'A'},
			{tag: 1, content: 'B'},
			{tag: 2, content: 'C'},
			{tag: 2, content: 'D'},
			{tag: 3, content: 'E'},
			{tag: 3, content: 'F'}
		];

		assert.deepEqual(group(arr2, 'tag'), {
			'1': [
				{tag: 1, content: 'A'},
				{tag: 1, content: 'B'}
			],
			'2': [
				{tag: 2, content: 'C'},
				{tag: 2, content: 'D'}
			],
			'3': [
				{tag: 3, content: 'E'},
				{tag: 3, content: 'F'}
			]
		});

		const arr3 = [
			{tag: true, content: 'A'},
			{tag: false, content: 'B'},
			{tag: true, content: 'C'},
			{tag: false, content: 'D'},
			{tag: true, content: 'E'},
			{tag: false, content: 'F'}
		];

		assert.deepEqual(group(arr3, 'tag'), {
			'true': [
				{tag: true, content: 'A'},
				{tag: true, content: 'C'},
				{tag: true, content: 'E'},
			],
			'false': [
				{tag: false, content: 'B'},
				{tag: false, content: 'D'},
				{tag: false, content: 'F'}
			]
		});
	});

	it("should create groups based on the value of nested properties", function() {
		const arr1 = [
			{ data: { tag: 'one' }, content: 'A'},
			{ data: { tag: 'one' }, content: 'B'},
			{ data: { tag: 'two' }, content: 'C'},
			{ data: { tag: 'two' }, content: 'D'},
			{ data: { tag: 'three' }, content: 'E'},
			{ data: { tag: 'three' }, content: 'F'}
		];

		assert.deepEqual(group(arr1, 'data.tag'), {
			 one: [
				{data: {tag: 'one'}, content: 'A'},
				{data: {tag: 'one'}, content: 'B'}
			],
			two: [
				{data: {tag: 'two'}, content: 'C'},
				{data: {tag: 'two'}, content: 'D'}
			],
			three: [
				{data: {tag: 'three'}, content: 'E'},
				{data: {tag: 'three'}, content: 'F'}
			]
		});
	});
	
	it("should create groups based on the value of deep nested properties", function() {
		const arr = [
			{ data: { year: '2016', tag: 'one', month: 'jan', day: '01'}, content: '...'},
			{ data: { year: '2016', tag: 'one', month: 'jan', day: '01'}, content: '...'},
			{ data: { year: '2016', tag: 'one', month: 'jan', day: '02'}, content: '...'},
			{ data: { year: '2016', tag: 'one', month: 'jan', day: '02'}, content: '...'},
			{ data: { year: '2016', tag: 'one', month: 'feb', day: '10'}, content: '...'},
			{ data: { year: '2016', tag: 'one', month: 'feb', day: '10'}, content: '...'},
			{ data: { year: '2016', tag: 'one', month: 'feb', day: '12'}, content: '...'},
			{ data: { year: '2016', tag: 'one', month: 'feb', day: '12'}, content: '...'},
			{ data: { year: '2016', tag: 'two', month: 'jan', day: '14'}, content: '...'},
			{ data: { year: '2016', tag: 'two', month: 'jan', day: '14'}, content: '...'},
			{ data: { year: '2016', tag: 'two', month: 'jan', day: '16'}, content: '...'},
			{ data: { year: '2016', tag: 'two', month: 'jan', day: '16'}, content: '...'},
			{ data: { year: '2016', tag: 'two', month: 'feb', day: '18'}, content: '...'},
			{ data: { year: '2017', tag: 'two', month: 'feb', day: '18'}, content: '...'},
			{ data: { year: '2017', tag: 'two', month: 'feb', day: '10'}, content: '...'},
			{ data: { year: '2017', tag: 'two', month: 'feb', day: '10'}, content: '...'},
			{ data: { year: '2017', tag: 'three', month: 'jan', day: '01'}, content: '...'},
			{ data: { year: '2017', tag: 'three', month: 'jan', day: '01'}, content: '...'},
			{ data: { year: '2017', tag: 'three', month: 'jan', day: '02'}, content: '...'},
			{ data: { year: '2017', tag: 'three', month: 'jan', day: '02'}, content: '...'},
			{ data: { year: '2017', tag: 'three', month: 'feb', day: '01'}, content: '...'},
			{ data: { year: '2017', tag: 'three', month: 'feb', day: '01'}, content: '...'},
			{ data: { year: '2017', tag: 'three', month: 'feb', day: '02'}, content: '...'},
			{ data: { year: '2017', tag: 'three', month: 'feb', day: '02'}, content: '...'}
		];

		const expected = {
			2016: {
				one: {
					jan: {
						'01': [
							{ data: { year: '2016', tag: 'one', month: 'jan', day: '01'}, content: '...'},
							{ data: { year: '2016', tag: 'one', month: 'jan', day: '01'}, content: '...'}
						],
						'02': [
							{ data: { year: '2016', tag: 'one', month: 'jan', day: '02'}, content: '...'},
							{ data: { year: '2016', tag: 'one', month: 'jan', day: '02'}, content: '...'}
						]
					},
					feb: {
						'10': [
							{ data: { year: '2016', tag: 'one', month: 'feb', day: '10'}, content: '...'},
							{ data: { year: '2016', tag: 'one', month: 'feb', day: '10'}, content: '...'}
						],
						'12': [
							{ data: { year: '2016', tag: 'one', month: 'feb', day: '12'}, content: '...'},
							{ data: { year: '2016', tag: 'one', month: 'feb', day: '12'}, content: '...'}
						]
					}
				},
				two: {
					jan: {
						'14': [
							{ data: { year: '2016', tag: 'two', month: 'jan', day: '14'}, content: '...'},
							{ data: { year: '2016', tag: 'two', month: 'jan', day: '14'}, content: '...'}
						],
						'16': [
							{ data: { year: '2016', tag: 'two', month: 'jan', day: '16'}, content: '...'},
							{ data: { year: '2016', tag: 'two', month: 'jan', day: '16'}, content: '...'}
						]
					},
					feb: {
						'18': [{ data: { year: '2016', tag: 'two', month: 'feb', day: '18'}, content: '...'}]
					}
				}
			},
			2017: {
				two: {
					feb: {
						'18': [{ data: { year: '2017', tag: 'two', month: 'feb', day: '18'}, content: '...'}],
						'10': [
							{ data: { year: '2017', tag: 'two', month: 'feb', day: '10'}, content: '...'},
							{ data: { year: '2017', tag: 'two', month: 'feb', day: '10'}, content: '...'}
						]
					}
				},
				three: {
					jan: {
						'01': [
							{ data: { year: '2017', tag: 'three', month: 'jan', day: '01'}, content: '...'},
							{ data: { year: '2017', tag: 'three', month: 'jan', day: '01'}, content: '...'}
						],
						'02': [
							{ data: { year: '2017', tag: 'three', month: 'jan', day: '02'}, content: '...'},
							{ data: { year: '2017', tag: 'three', month: 'jan', day: '02'}, content: '...'}
						]
					},
					feb: {
						'01': [
							{ data: { year: '2017', tag: 'three', month: 'feb', day: '01'}, content: '...'},
							{ data: { year: '2017', tag: 'three', month: 'feb', day: '01'}, content: '...'}
						],
						'02': [
							{ data: { year: '2017', tag: 'three', month: 'feb', day: '02'}, content: '...'},
							{ data: { year: '2017', tag: 'three', month: 'feb', day: '02'}, content: '...'}
						]
					}
				}
			}
		};

		assert.deepEqual(group(arr, 'data.year', 'data.tag', 'data.month', 'data.day'), expected);
	});

	it("should support properties with array values", function() {
		const arr = [
			{ categories: { one: ['A'] }, name: 'Post 1', content: 'Post 1', key: 'post-1.md', tags: ['A'] },
			{ categories: { one: ['A'], two: ['B', 'C'] }, name: 'Post 2', content: 'Post 2', key: 'post-2.md', tags: ['A', 'B', 'C'] },
			{ categories: { one: ['B'], two: ['C', 'D'] }, name: 'Post 3', content: 'Post 3', key: 'post-3.md', tags: ['B', 'C', 'D'] },
			{ categories: { one: ['A'], two: ['B', 'C'] }, name: 'Post 2', content: 'Post 2', key: 'post-2.md', tags: ['A', 'B', 'C'] },
			{ categories: { one: ['B'], two: ['C', 'D'] }, name: 'Post 3', content: 'Post 3', key: 'post-3.md', tags: ['B', 'C', 'D'] },
			{ categories: { three: ['B'], four: ['E', 'F', 'G'] }, name: 'Post 4', content: 'Post 4', key: 'post-4.md', tags: ['B', 'E', 'F', 'G'] },
			{ categories: { three: ['B'], four: ['E', 'F', 'G'] }, name: 'Post 4', content: 'Post 4', key: 'post-4.md', tags: ['B', 'E', 'F', 'G'] },
			{ categories: { four: ['C', 'F'] }, name: 'Post 5', content: 'Post 5', key: 'post-5.md', tags: ['C', 'F'] },
			{ categories: { four: ['F', 'G'] }, name: 'Post 6', content: 'Post 6', key: 'post-6.md', tags: ['F', 'G'] }
		];

		const expected = {
			A: [
				{ categories: { one: [ 'A' ] }, name: 'Post 1', content: 'Post 1', key: 'post-1.md', tags: [ 'A' ] },
				{ categories: { one: [ 'A' ], two: [ 'B', 'C' ] }, name: 'Post 2', content: 'Post 2', key: 'post-2.md', tags: [ 'A', 'B', 'C' ] },
				{ categories: { one: [ 'A' ], two: [ 'B', 'C' ] }, name: 'Post 2', content: 'Post 2', key: 'post-2.md', tags: [ 'A', 'B', 'C' ] }
			],
			B: [
				{ categories: { one: [ 'A' ], two: [ 'B', 'C' ] }, name: 'Post 2', content: 'Post 2', key: 'post-2.md', tags: [ 'A', 'B', 'C' ] },
				{ categories: { one: [ 'B' ], two: [ 'C', 'D' ] }, name: 'Post 3', content: 'Post 3', key: 'post-3.md', tags: [ 'B', 'C', 'D' ] },
				{ categories: { one: [ 'A' ], two: [ 'B', 'C' ] }, name: 'Post 2', content: 'Post 2', key: 'post-2.md', tags: [ 'A', 'B', 'C' ] },
				{ categories: { one: [ 'B' ], two: [ 'C', 'D' ] }, name: 'Post 3', content: 'Post 3', key: 'post-3.md', tags: [ 'B', 'C', 'D' ] },
				{ categories: { three: [ 'B' ], four: [ 'E', 'F', 'G' ] }, name: 'Post 4', content: 'Post 4', key: 'post-4.md', tags: [ 'B', 'E', 'F', 'G' ] },
				{ categories: { three: [ 'B' ], four: [ 'E', 'F', 'G' ] }, name: 'Post 4', content: 'Post 4', key: 'post-4.md', tags: [ 'B', 'E', 'F', 'G' ] }
			],
			C: [
				{ categories: { one: [ 'A' ], two: [ 'B', 'C' ] }, name: 'Post 2', content: 'Post 2', key: 'post-2.md', tags: [ 'A', 'B', 'C' ] },
				{ categories: { one: [ 'B' ], two: [ 'C', 'D' ] }, name: 'Post 3', content: 'Post 3', key: 'post-3.md', tags: [ 'B', 'C', 'D' ] },
				{ categories: { one: [ 'A' ], two: [ 'B', 'C' ] }, name: 'Post 2', content: 'Post 2', key: 'post-2.md', tags: [ 'A', 'B', 'C' ] },
				{ categories: { one: [ 'B' ], two: [ 'C', 'D' ] }, name: 'Post 3', content: 'Post 3', key: 'post-3.md', tags: [ 'B', 'C', 'D' ] },
				{ categories: { four: [ 'C', 'F' ] }, name: 'Post 5', content: 'Post 5', key: 'post-5.md', tags: [ 'C', 'F' ] }
			],
			D: [
				{ categories: { one: [ 'B' ], two: [ 'C', 'D' ] }, name: 'Post 3', content: 'Post 3', key: 'post-3.md', tags: [ 'B', 'C', 'D' ] },
				{ categories: { one: [ 'B' ], two: [ 'C', 'D' ] }, name: 'Post 3', content: 'Post 3', key: 'post-3.md', tags: [ 'B', 'C', 'D' ] }
			],
			E: [
				{ categories: { three: [ 'B' ], four: [ 'E', 'F', 'G' ] }, name: 'Post 4', content: 'Post 4', key: 'post-4.md', tags: [ 'B', 'E', 'F', 'G' ] },
				{ categories: { three: [ 'B' ], four: [ 'E', 'F', 'G' ] }, name: 'Post 4', content: 'Post 4', key: 'post-4.md', tags: [ 'B', 'E', 'F', 'G' ] }
			],
			F: [
				{ categories: { three: [ 'B' ], four: [ 'E', 'F', 'G' ] }, name: 'Post 4', content: 'Post 4', key: 'post-4.md', tags: [ 'B', 'E', 'F', 'G' ] },
				{ categories: { three: [ 'B' ], four: [ 'E', 'F', 'G' ] }, name: 'Post 4', content: 'Post 4', key: 'post-4.md', tags: [ 'B', 'E', 'F', 'G' ] },
				{ categories: { four: [ 'C', 'F' ] }, name: 'Post 5', content: 'Post 5', key: 'post-5.md', tags: [ 'C', 'F' ] },
				{ categories: { four: [ 'F', 'G' ] }, name: 'Post 6', content: 'Post 6', key: 'post-6.md', tags: [ 'F', 'G' ] }
			],
			G: [
				{ categories: { three: [ 'B' ], four: [ 'E', 'F', 'G' ] }, name: 'Post 4', content: 'Post 4', key: 'post-4.md', tags: [ 'B', 'E', 'F', 'G' ] },
				{ categories: { three: [ 'B' ], four: [ 'E', 'F', 'G' ] }, name: 'Post 4', content: 'Post 4', key: 'post-4.md', tags: [ 'B', 'E', 'F', 'G' ] },
				{ categories: { four: [ 'F', 'G' ] }, name: 'Post 6', content: 'Post 6', key: 'post-6.md', tags: [ 'F', 'G' ] }
			]
		};

		assert.deepEqual(group(arr, 'tags'), expected);
	});

	it("should use a function create nested groups for multiple properties", function() {
		const arr = [
			{ data: { tag: 'one', date: 'jan-01'}, content: '...'},
			{ data: { tag: 'one', date: 'jan-01'}, content: '...'},
			{ data: { tag: 'one', date: 'jan-02'}, content: '...'},
			{ data: { tag: 'one', date: 'jan-02'}, content: '...'},
			{ data: { tag: 'one', date: 'feb-10'}, content: '...'},
			{ data: { tag: 'one', date: 'feb-10'}, content: '...'},
			{ data: { tag: 'one', date: 'feb-12'}, content: '...'},
			{ data: { tag: 'one', date: 'feb-12'}, content: '...'},
			{ data: { tag: 'two', date: 'jan-14'}, content: '...'},
			{ data: { tag: 'two', date: 'jan-14'}, content: '...'},
			{ data: { tag: 'two', date: 'jan-16'}, content: '...'},
			{ data: { tag: 'two', date: 'jan-16'}, content: '...'},
			{ data: { tag: 'two', date: 'feb-18'}, content: '...'},
			{ data: { tag: 'two', date: 'feb-18'}, content: '...'},
			{ data: { tag: 'two', date: 'feb-10'}, content: '...'},
			{ data: { tag: 'two', date: 'feb-10'}, content: '...'},
			{ data: { tag: 'three', date: 'jan-01'}, content: '...'},
			{ data: { tag: 'three', date: 'jan-01'}, content: '...'},
			{ data: { tag: 'three', date: 'jan-02'}, content: '...'},
			{ data: { tag: 'three', date: 'jan-02'}, content: '...'},
			{ data: { tag: 'three', date: 'feb-01'}, content: '...'},
			{ data: { tag: 'three', date: 'feb-01'}, content: '...'},
			{ data: { tag: 'three', date: 'feb-02'}, content: '...'},
			{ data: { tag: 'three', date: 'feb-02'}, content: '...'}
		];

		const expected = {
			one:
				{ jan:
					{ '01':
						[ { data: { tag: 'one', month: 'jan', day: '01' }, content: '...' },
						{ data: { tag: 'one', month: 'jan', day: '01' }, content: '...' } ],
					'02':
						[ { data: { tag: 'one', month: 'jan', day: '02' }, content: '...' },
						{ data: { tag: 'one', month: 'jan', day: '02' }, content: '...' } ] },
				feb:
					{ '10':
						[ { data: { tag: 'one', month: 'feb', day: '10' }, content: '...' },
						{ data: { tag: 'one', month: 'feb', day: '10' }, content: '...' } ],
					'12':
						[ { data: { tag: 'one', month: 'feb', day: '12' }, content: '...' },
						{ data: { tag: 'one', month: 'feb', day: '12' }, content: '...' } ] } },
			two:
				{ jan:
					{ '14':
						[ { data: { tag: 'two', month: 'jan', day: '14' }, content: '...' },
						{ data: { tag: 'two', month: 'jan', day: '14' }, content: '...' } ],
					'16':
						[ { data: { tag: 'two', month: 'jan', day: '16' }, content: '...' },
						{ data: { tag: 'two', month: 'jan', day: '16' }, content: '...' } ] },
				feb:
					{ '10':
						[ { data: { tag: 'two', month: 'feb', day: '10' }, content: '...' },
						{ data: { tag: 'two', month: 'feb', day: '10' }, content: '...' } ],
					'18':
						[ { data: { tag: 'two', month: 'feb', day: '18' }, content: '...' },
						{ data: { tag: 'two', month: 'feb', day: '18' }, content: '...' } ] } },
			three:
				{ jan:
					{ '01':
						[ { data: { tag: 'three', month: 'jan', day: '01' }, content: '...' },
						{ data: { tag: 'three', month: 'jan', day: '01' }, content: '...' } ],
					'02':
						[ { data: { tag: 'three', month: 'jan', day: '02' }, content: '...' },
						{ data: { tag: 'three', month: 'jan', day: '02' }, content: '...' } ] },
				feb:
					{ '01':
						[ { data: { tag: 'three', month: 'feb', day: '01' }, content: '...' },
						{ data: { tag: 'three', month: 'feb', day: '01' }, content: '...' } ],
					'02':
						[ { data: { tag: 'three', month: 'feb', day: '02' }, content: '...' },
						{ data: { tag: 'three', month: 'feb', day: '02' }, content: '...' } ] } }
		};

		function fn1(obj) {
			var date = obj.data.date.split('-');

			obj.data.month = date[0];
			obj.data.day = date[1];

			delete obj.data.date;

			return obj.data.month;
		}

		function fn2(obj) {
			return obj.data.day;
		}

		assert.deepEqual(group(arr, 'data.tag', fn1, fn2), expected);
	});
});