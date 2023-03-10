# Day1 - JavaScript Drum Kit๐ฅ
```
ํ๋ฉด์ ๋งค์นญ ๋ ํค๋ณด๋ ๋ฒํผ์ ๋๋ฅด๋ฉด ์ฐ๊ฒฐ๋ audio ํ์ผ์ ์ฌ์ํ๋ ํ๋ก์ ํธ์ด๋ค.
```

<br>

1. ํค๋ณด๋ ๋ฒํผ์ ๋๋ฅด๋ฉด `audio` ๊ฐ ์ฌ์๋์ด์ผํ๋ค.    
    - ํค๋ณด๋๋ฅผ ์ฌ๋ฌ๋ฒ ๋๋ฅผ ๊ฒฝ์ฐ ์ด์ ์ `audio`ํ์ผ์ด ๋๋์ง ์์๋ค๋ฉด ์๋ก์ด ์๋ฆฌ๊ฐ ๋์ค์ง ์๋ ์ด์ ์๊น
2. ํค๋ณด๋๊ฐ ๋๋ ค ๋ฒํผ์ด ๋์์ `.playing` ํด๋์ค๋ฅผ ์ถ๊ฐํ์ฌ ์คํ์ผ ํจ๊ณผ๋ฅผ ์ค๋ค.
3. ์คํ์ผ ํจ๊ณผ๊ฐ ์ ์ฉ๋๋ ๋ฒํผ์ ์๋๋๋ก ๋๋ ค ๋๊ธฐ ์ํด `.playing` ํด๋์ค๋ฅผ ์ ๊ฑฐํ๋ค.

<br>

## JavaScript
```javascript
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    // KeyboardEvent.keyCode๋ฅผ ์ฌ์ฉํด ๋๋ฅธ ํค๋ณด๋์ ๊ฐ์ ๋ฐํ๋ฐ๋๋ค.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0; // audio ํ์ผ์ ์ฒ์(0์ด)์ผ๋ก ์ด๊ธฐํ
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
```

<br>

### ๐ KeyboardEvent.keyCode
ํค๋ณด๋ ๋ฒํผ์ ๋๋ฅด๋ฉด `audio` ๊ฐ ์ฌ์๋์ด์ผ ํ๋ค.    
`KeyboardEvent.keyCode`๋ฅผ ์ฌ์ฉํด ๋๋ฅธ ํค๋ณด๋์ ๊ฐ์ ๋ฐํ๋ฐ๊ณ ,    
๋ฐํ ๋ฐ์ ์ป์ ๊ฐ์ audio์ data-key๋ผ๋ ํ๋กํผํฐ์ ๊ฐ๊ณผ ๋น๊ตํ๊ณ  ๋์ผํ ๊ฒฝ์ฐ ํด๋น `audio` ํ์ผ์ ์ฌ์ํ๋ค.
```javascript
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
```

**์ถ๊ฐ ๊ณต๋ถ ๋ด์ฉ**
- [๐ MDN ๋ฌธ์](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)๋ฅผ ํ์ธํด๋ณด๋ `KeyboardEvent.keyCode` Deprecated๋ก ๋์ด์ ์ฌ์ฉํ์ง ์๋๋ค๊ณ  ํฉ๋๋ค.
- ๋์  `KeyboardEvent.key` ๋ฅผ ์ฌ์ฉํด์ค์ผ ํฉ๋๋ค. ([MDN - KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key))
- ๋ค๋ง, ์์ง์ key property๋ฅผ ์ง์ํ์ง ์๋ ๋ธ๋ผ์ฐ์ ๊ฐ ์์ด undefined๋ฅผ ๋ฐํํ  ์๋ ์์ต๋๋ค.
- ๊ทธ๋์ ํค๋ณด๋ ์ด๋ฒคํธ๋ฅผ ์ฌ์ฉํ  ์ ์๋์ ๊ฐ์ด ์ฐ๋ ๊ฒ์ด ์์ ํฉ๋๋ค.
```javascript
let key = event.key || event.keyCode;

if (key === 'Enter' || key === 13) {
    alert('์ ์ก');
}
```

<br>

### ๐ HTMLMediaElement.currentTime
[๐ MDN ๋ฌธ์ ์ฐธ๊ณ ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime)    
ํค๋ณด๋๋ฅผ ๋๋ ์ ๋, ์๋ฆฌ๋ ๋์ค์ง๋ง ๋๊ฐ์ ๋ฒํผ์ ์ฌ๋ฌ๋ฒ ๋๋ฅผ ๊ฒฝ์ฐ ์ด์ ์ audio ํ์ผ์ด ๋๋์ง ์์๋ค๋ฉด ์๋ก์ด ์๋ฆฌ๊ฐ ๋์ค์ง ์๋ ๊ฒ์ ํ์ธํ  ์ ์์ต๋๋ค.    
์ด๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด์, audio์ HTMLMediaElement.currentTime์ 0์ผ๋ก ์ค์ ํด์ค๋๋ค.       
audio ํ์ผ์ ์ฒ์(0์ด)์ผ๋ก ๋์๊ฐ ์ฌ์ํ๋ ๊ฒ์ ์๋ฏธํฉ๋๋ค.    


```javascript
audio.currentTime = 0;
```

<br>

### ๐ Array.prototype.forEach()
[๐ MDN ๋ฌธ์ ์ฐธ๊ณ ](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)     
`forEach`๋ ์ฃผ์ด์ง ํจ์๋ฅผ ๋ฐฐ์ด ์์ ๊ฐ๊ฐ์ ๋ํด ์คํํฉ๋๋ค.    
๋ชจ๋  div.key ํ๊ทธ๋ฅผ ๋ฐฐ์ด๋ก ๋ณํํด์ forEach๋ฌธ์ ์ฌ์ฉํ์ฌ ๋ฐฐ์ด ์์ ๊ฐ๊ฐ์ ๋ํด ์ด๋ฒคํธ๋ฆฌ์ค๋๋ฅผ ์คํํฉ๋๋ค.

```javascript
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
```