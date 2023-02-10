# Day2 - Playing with CSS Variables and JS🖼️

```
JavaScript를 이용해 CSS를 조작해 이미지를 업데이트하는 프로젝트이다.
```

<br>

## JavaScript

```javascript
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
```

<br>

### 📖

[🔗 MDN 문서 참고]()

```javascript

```
