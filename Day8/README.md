# Day8 - Fun with HTML5 Canvas ✏️

```
HTML의 canvas element와 다양한 메서드를 사용하여 낙서해보는 프로젝트이다.
```

<br>

### HTMLCanvasElement.getContext()

[🔗 MDN 문서 - HTMLCanvasElement.getContext()](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext)

`2d` : 2차원 렌더링 컨텍스트를 나타내는 CanvasRenderingContext2D 객체를 반환한다.

```javascript
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
```
