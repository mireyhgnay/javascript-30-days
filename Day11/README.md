# Day11 - Custom HTML5 Video Player ๐๏ธ

```
Day 11 ํ๋ก์ ํธ๋ HTML, CSS, JavaScript๋ง์ ์ด์ฉํด์ ๋๋ง์ ๋น๋์ค ํ๋ ์ด์ด๋ฅผ ๋ง๋ค์ด๋ณด๋ ํ๋ก์ ํธ์ด๋ค.
```

<br>

### textContent

๋ธ๋๊ฐ ๊ฐ์ง๊ณ  ์๋ ์ฝํ์ธ ๋ฅผ ํ์คํธ๋ก ์กฐํํ๊ฑฐ๋ ์ค์ ํ๋ค.

<br>

innerText์ ์ฐจ์ด์ ์

- innerText ๋ ๋ถํ์ํ ๊ณต๋ฐฑ์ ์ ๊ฑฐํ๊ณ  ํ์คํธ๋ฅผ ๋ฐํํ๋ค.
- textContent ๋ ๋ชจ๋  ํ์คํธ๋ฅผ ๊ทธ๋๋ก ๊ฐ์ ธ์จ๋ค.

```javascript
function updateButton() {
  const icon = this.paused ? "โบ" : "โ โ";
  toggle.textContent = icon;
}
```
