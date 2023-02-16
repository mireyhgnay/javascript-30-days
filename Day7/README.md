# Day6 - Array Cardio Day 2 ⭐️

```
Day7 프로젝트는 Console에서 확인할 수 있습니다.
JavaScript Array에 대해서 더 공부할 수 있는 프로젝트입니다.
```

<br>

### Array.some()

[🔗 MDN 문서 - Array.prototype.some()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

`some()` 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 **하나라도 통과**하는지 테스트합니다.  
즉, 함수가 참(boolean으로 변환했을 때 true가 되는 값)을 반환하는 요소를 찾을 때까지 배열에 있는 각 요소에 대해 한 번씩 callback 함수를 실행합니다.  
계속 실행해서 하나라도 true이면 true!

```javascript
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // 12가 있기 때문에 true
```

<br>

### Array.every()

[🔗 MDN 문서 - Array.prototype.every()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

`every()` 메서드는 배열 안의 **모든 요소**가 주어진 판별 함수를 통과하는지 테스트합니다.  
Boolean 값을 반환합니다.

```javascript
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

<br>

### 결론, Array.some()은 하나라도 맞으면 true, Array.every()는 모든 요소가 참이여야 true!

<br>
<br>

### Array.find()

[🔗 MDN 문서 - Array.prototype.find()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

`find()` 메서드는 주어진 **판별 함수를 만족하는 첫 번째 요소의 값을 반환**합니다.  
그런 요소가 없다면 undefined를 반환합니다.  
특정 요소 찾기!

```javascript
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
// 10 넘는 수 중 첫번째 요소 반환

console.log(found); // 12
```

<br>

### Array.findIndex()

[🔗 MDN 문서 - Array.prototype.findIndex()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

`findIndex()` 메서드는 주어진 **판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스**를 반환합니다.  
만족하는 요소가 없으면 -1을 반환합니다.

```javascript
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
// 13이 넘는 수 중 첫번째 요소의 인덱스 => 130의 인덱스 [3]

console.log(array1.findIndex(isLargeNumber)); // 3
```
