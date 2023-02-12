# Day5 - Flex Panel Gallery 🎆

```
Flexbox를 이용해 Image Gallery를 만드는 프로젝트이다.
```

<br>

## JavaScript

```javascript
const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
```

<br>

`toggleOpen() 함수`

- 이벤트리스너를 이용해 모든 panel들 중 클릭된 panel에 toggleOpen이라는 리스너를 실행시켜 open이라는 클래스를 추가해준다.
- 해당 panel에 open 클래스가 추가되면 flex: 5를 해준다.

`toggleActive() 함수`

- 기존에 모든 panel이 flex: 1로 같은 너비를 가지고 있었던 반면 클릭된 panel이 flex: 5로 바뀌면서 여백을 나눠갖는 비율이 달라진다.
- 모든 transition이 종료되면 toggleActive라는 함수가 실행되고 마찬가지로 open-active라는 클래스를 추가해준다.
