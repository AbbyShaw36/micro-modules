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

**[⬆ 回到顶部](#table-of-content)**
