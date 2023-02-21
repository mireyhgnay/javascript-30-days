# Day9 - Hold Shift to Check Multiple Checkboxes ✅

```
Day 10 프로젝트는 여러 개의 체크박스 중에서 shift키를 누른 상태로 체크한 박스와 기존의 체크 되어있던 박스 사이의 체크박스들이 모두 체크되어지는 기능을 구현하는 프로젝트이다.
```

<br>

### forEach()

[🔗 MDN 문서 - forEach()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

`forEach()` 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.

```javascript
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
```

- forEach문을 통해 각 checkbox에서 addEventListener의 click 이벤트를 받아준다.

---

"간단하다고 생각했는데 생각보다 어려웠다..."
