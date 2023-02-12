# Day3 - Playing with CSS Variables and JS 🖼️

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

### 📖 forEach()

forEach문을 이용해 input에서 change와 mousemove 이벤트가 발생하면 handleUpdate함수를 실행하도록 한다.  
[🔗 MDN - Array.prototype.forEach()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```javascript
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
```

forEach문을 이용해 input에서 change와 mousemove 이벤트가 발생하면 handleUpdate함수를 실행하도록 한다.

<br>

### 📖 html element에 data-\* & dataset

```javascript
const suffix = this.dataset.sizing || "";
```

데이터 속성(Data attributes)란 html element에 data-\* 형식으로 추가적인 정보를 저장할 수 있도록 해준다.  
JavaScript에서는 dataset 객체를 통해 데이터 속성을 가져온다.

<br>

### 📖 CSS 사용자 속성

```javascript
document.documentElement.style.setProperty(
  `--${this.name}`,
  this.value + suffix
);
```

- html태그(document.documentElement)에 setProperty() 함수를 이용해서 CSS 객체의 속성에 새로운 값을 부여한다.
- CSS 파일에서 :root안에 base, spacing, blur라는 CSS 변수를 설정해놨기 때문에 위에서 말한 작업으로 변수의 값들이 바뀌고 적용되어진다.
- CSS의 변수를 설정하는 방법은 일반적으로 --{변수이름}을 :root안에 넣어주는 것이다.
