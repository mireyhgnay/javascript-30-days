# Day3 - Playing with CSS Variables and JS ๐ผ๏ธ

```
JavaScript๋ฅผ ์ด์ฉํด CSS๋ฅผ ์กฐ์ํด ์ด๋ฏธ์ง๋ฅผ ์๋ฐ์ดํธํ๋ ํ๋ก์ ํธ์ด๋ค.
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

### ๐ forEach()

forEach๋ฌธ์ ์ด์ฉํด input์์ change์ mousemove ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด handleUpdateํจ์๋ฅผ ์คํํ๋๋ก ํ๋ค.  
[๐ MDN - Array.prototype.forEach()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```javascript
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
```

forEach๋ฌธ์ ์ด์ฉํด input์์ change์ mousemove ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด handleUpdateํจ์๋ฅผ ์คํํ๋๋ก ํ๋ค.

<br>

### ๐ html element์ data-\* & dataset

```javascript
const suffix = this.dataset.sizing || "";
```

๋ฐ์ดํฐ ์์ฑ(Data attributes)๋ html element์ data-\* ํ์์ผ๋ก ์ถ๊ฐ์ ์ธ ์ ๋ณด๋ฅผ ์ ์ฅํ  ์ ์๋๋ก ํด์ค๋ค.  
JavaScript์์๋ dataset ๊ฐ์ฒด๋ฅผ ํตํด ๋ฐ์ดํฐ ์์ฑ์ ๊ฐ์ ธ์จ๋ค.

<br>

### ๐ CSS ์ฌ์ฉ์ ์์ฑ

```javascript
document.documentElement.style.setProperty(
  `--${this.name}`,
  this.value + suffix
);
```

- htmlํ๊ทธ(document.documentElement)์ setProperty() ํจ์๋ฅผ ์ด์ฉํด์ CSS ๊ฐ์ฒด์ ์์ฑ์ ์๋ก์ด ๊ฐ์ ๋ถ์ฌํ๋ค.
- CSS ํ์ผ์์ :root์์ base, spacing, blur๋ผ๋ CSS ๋ณ์๋ฅผ ์ค์ ํด๋จ๊ธฐ ๋๋ฌธ์ ์์์ ๋งํ ์์์ผ๋ก ๋ณ์์ ๊ฐ๋ค์ด ๋ฐ๋๊ณ  ์ ์ฉ๋์ด์ง๋ค.
- CSS์ ๋ณ์๋ฅผ ์ค์ ํ๋ ๋ฐฉ๋ฒ์ ์ผ๋ฐ์ ์ผ๋ก --{๋ณ์์ด๋ฆ}์ :root์์ ๋ฃ์ด์ฃผ๋ ๊ฒ์ด๋ค.
