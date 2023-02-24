# Day12 - Key Sequence Detection 🦄

```
Day12 프로젝트는 지정해놓은 코나미 커맨드를 입력하면 화면에 랜덤한 유니콘 이미지를 보여주는 프로젝트이다.
```

<br>

### Array.splice()

[🔗 MDN 문서 - Array.splice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.  
첫번째 인자로 배열의 변경을 시작할 인덱스를 받는다.  
두번째 인자는 배열에서 제거할 element의 수로, 생략할 경우 첫번째 인자부터 모든 요소를 제거하고,  
0 이하라면 어떤 요소도 제거하지 않는다.  
세번째 인자는 배열에 추가할 요소로서 아무 요소도 지정하지 않으면 `splice` 메서드는 요소를 제거하기만 한다.

```javascript
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// index 1(March)부터 0개를 'Feb' 로 변경
console.log(months); // Array ["Jan", "Feb", "March", "April", "June"]
```
