# Day4 - Array Cardio Day 1 📚

```
산출물 없는 프로젝트,
자바스크립트의 Array에 대해 알아보고 Array의 다양한 method들을 공부한다.
```

<br>

### 📖 Array.prototype.filter()

filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.  
[🔗 MDN - Array.prototype.filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```javascript
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
```

<br>

### 📖 Array.prototype.map()

map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.  
callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만든다.
[🔗 MDN - Array.prototype.map()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```javascript
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
```

<br>

### 📖 Array.prototype.sort()

sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.  
(오름차순, 내림차순, 알파벳순, ..)
[🔗 MDN - Array.prototype.sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```javascript
const numbers = [4, 2, 5, 1, 3];

numbers.sort(function (a, b) {
  return a - b; // 오름차순
});

console.log(numbers);
// expected output: Array [1, 2, 3, 4, 5]
```

<br>

### 📖 Array.prototype.reduce()

reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
[🔗 MDN - Array.prototype.reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

```javascript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sumWithInitial);
// Expected output: 10
```
