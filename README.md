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
2. [String](#string)
    - [decamelize](#decamelize)
    - [padLeft](#padleft)
    - [toCamelCase](#tocamelcase)
3. [Object](#object)
    - [filter](#filter)
    - [zipmap](#zipmap)

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

**[⬆ 回到顶部](#table-of-content)**

#### <a name="last"></a> last(arr, num)

> 获取数组的最后几个元素
> num 默认为 1

```js
last([1,2,3,4,5])
// => [5]

last([1,2,3,4,5], 3)
// => [3,4,5]
```

**[⬆ 回到顶部](#table-of-content)**

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

**[⬆ 回到顶部](#table-of-content)**

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

**[⬆ 回到顶部](#table-of-content)**

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

**[⬆ 回到顶部](#table-of-content)**

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

**[⬆ 回到顶部](#table-of-content)**

#### <a name="flatten"></a> flatten(arr, deep)

> 减少嵌套数组的维度
> deep 为减少的维度数，默认为 1

```js
flatten(['a', ['b', ['c']], 'd', ['e']]);
// => ['a', 'b', ['c'], 'd', 'e']

flatten(['a', ['b', ['c', 'd', ['e']]]], 2);
// => ['a', 'b', 'c', 'd', ['e']]
```

**[⬆ 回到顶部](#table-of-content)**

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

## String

#### <a name="decamelize"></a> decamelize(str, separator)

> 用于将驼峰格式的字符串用自定义分隔符分隔，并转为小写
> 默认使用 “ - ” 进行替换

```js
decamelize("thisIsATest", "_")
// => this_is_a_test

decamelize("myURLString", " ")
// => my url string
```

**[⬆ 回到顶部](#table-of-content)**

#### <a name="padleft"></a> padLeft(str, len, filler)

> 用自定义字符从左填充字符串至指定长度
> len 为指定长度
> filler 为填充字符，默认字符为 “ - ”

```js
padLeft("abc", 10);
// => -------abc

padLeft("123", 10, "0");
// => 0000000123
```

**[⬆ 回到顶部](#table-of-content)**

#### <a name="tocamelcase"></a> toCamelCase(str)

> 将字符串转成驼峰式

```js
toCamelCase("THIS_IS_A_STRING");
// => thisIsAString

toCamelCase("this.is.a.string");
// => thisIsAString

toCamelCase("-this__is$%a-string...");
// => thisIsAString
```

**[⬆ 回到顶部](#table-of-content)**

## Object

#### <a name="filter"></a> filter(obj, filter)

> 对对象进行筛选
> filter 值可为 function 或 array

```js
const arr = {
    a: 111,
    b: 222,
    c: 333
};

function filter(key, value) {
    if (['a', 'b'].includes(key)) {
        return true;
    }

    return false;
}

filter(arr, ['a', 'b']);
filter(arr, filter);
// => { a: 111, b: 222 }
```

**[⬆ 回到顶部](#table-of-content)**

#### <a name="zipmap"></a> zipmap(keys, values)

> 将数组转换成映射

1. 使用 keys 和 values
```js
zipmap(['a', 'b', 'c'], [1, 2, 3]);
// => { a: 1, b: 2, c: 3 }
```

2. 使用数组对象
```js
const objs = [
    { key: 'foo', value: 'bar' },
    { key: 'hi', value: 'bye' },
];

zipmap(objs);
// => { foo: 'bar', hi: 'bye' }
```

3. 使用配对数组
```js
const pairs = [
    ['foo', 'bar'],
    ['hi', 'bye']
];

zipmap(objs);
// => { foo: 'bar', hi: 'bye' }
```

**[⬆ 回到顶部](#table-of-content)**