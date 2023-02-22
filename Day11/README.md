# Day11 - Custom HTML5 Video Player 🎞️

```
Day 11 프로젝트는 HTML, CSS, JavaScript만을 이용해서 나만의 비디오 플레이어를 만들어보는 프로젝트이다.
```

<br>

### textContent

노드가 가지고 있는 콘텐츠를 텍스트로 조회하거나 설정한다.

<br>

innerText와 차이점은

- innerText 는 불필요한 공백을 제거하고 텍스트를 반환한다.
- textContent 는 모든 텍스트를 그대로 가져온다.

```javascript
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}
```
