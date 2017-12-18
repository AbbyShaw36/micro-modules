# micro-modules
用 JS 实现的一些小模块练习

## <a name="table-of-content"></a>目录
1. [Array](#array)
    - [first](#first)
    - [last](#last)
    - [isSorted](#isSorted)
    - [filled](#filled)
    - [diff](#diff)
    - [dedupe](#dedupe)
    - [flatten](#flatten)
    - [group](#group)

## Array

#### <a name="first"></a> first(arr, num)

> 获取数组的前几个元素
> num 默认为 1

```js
first(['a', 'b', 'c', 'd', 'e', 'f'], 1);
// => ['a']

first(['a', 'b', 'c', 'd', 'e', 'f'], 3);
// => ['a', 'b', 'c']

first([], 2);
// => null
```

#### <a name="last"></a> last(arr, num)

> 获取数组的最后几个元素
> num 默认为 1

```js
last([1,2,3,4,5])
// => [5]

last([1,2,3,4,5], 3)
// => [3,4,5]
```

#### <a name="isSorted"></a> isSorted(arr, comparator)

> 判断数组是否已排序
> 可通过 comparator 传入排序方法

```js
isSorted(['a', 'b', 'c', 'd']);
// => true

isSorted([5,4,3,2,1], function(a, b) {
    return b < a;
});
// => true
```

#### <a name="filled"></a> filled(filler, count)

> 数组填充

```js
filled('a', 0);
// => []

filled('a', 5);
// => ['a', 'a', 'a', 'a', 'a']

filled(0, 2);
// =>[0, 0]

filled(function(index) {
    return (++index % 3 ? '' : 'Fizz') + (index % 5 ? '' : 'Buzz') || index;
}, 15);
// => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
```

#### <a name="diff"></a> diff(arr1, arr2)

> 获取两个数组不同的元素

```js
diff([1,2,3,4,5], [2,3]);
// => [1,4,5]

diff([2,3], [1,2,3,4,5]);
// => [1,4,5]

diff([1,4], [2,3,4]);
// => [1,2,3]

diff([1,2,3], []);
// => [1,2,3]
```

#### <a name="dedupe"></a> dedupe(arr)

> 删除数组中的重复项

```js
dedupe([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6]);
// => [1, 2, 3, 4, 5, 6]

dedupe([{a: 1}, {a: 2}, {a: 3}, {a: 3}]);
// => [{a: 1}, {a: 2}, {a: 3}]

dedupe([myDate, myDate, myDate]);
// => [myDate]

dedupe([{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}, {a: 3, b: 4}], value => value.a)
// => [{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}]
```

#### <a name="flatten"></a> flatten(arr, deep)

> 减少嵌套数组的维度
> deep 为减少的维度数，默认为 1

```js
flatten(['a', ['b', ['c']], 'd', ['e']]);
// => ['a', 'b', ['c'], 'd', 'e']

flatten(['a', ['b', ['c', 'd', ['e']]]], 2);
// => ['a', 'b', 'c', 'd', ['e']]
```

#### <a name="group"></a> group(arr, ...props)

> 对数组进行分组
> 可传入多个值作为分组依据
> 值可以为 string， 返回属性值的 function，属性值也可为数组

```js
const arr1 = [
    {tag: 'one', content: 'A'},
    {tag: 'one', content: 'B'},
    {tag: 'two', content: 'C'},
    {tag: 'two', content: 'D'},
    {tag: 'three', content: 'E'},
    {tag: 'three', content: 'F'}
];

group(arr1, 'tag');
/*
    {
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
    }
    这里 tag 值也可以为 Boolean 或 Number
*/

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

group(arr, 'data.year', 'data.tag', 'data.month', 'data.day');
/*
    {
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
    }
 */

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

group(arr, 'data.tag', function(obj) {
    var date = obj.data.date.split('-');

    obj.data.month = date[0];
    obj.data.day = date[1];

    delete obj.data.date;

    return obj.data.month;
}, function(obj) {
    return obj.data.day;
});
/*
    {
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
                    { data: { tag: 'three', month: 'feb', day: '02' }, content: '...' } ]
            }
        }
    };
 */
```

**[⬆ 回到顶部](#table-of-content)**
