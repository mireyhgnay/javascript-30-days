# Day2 - CSS + JS Clock๐
```
์๊ณ ๋ง๋ค๊ธฐ    
ํ๋ฉด์ CSS์ JavaScript๋ฅผ ํตํด ๊ฐ์์ ์๊ณ๋ฅผ ๋ง๋ค์ด๋ณด๋ ํ๋ก์ ํธ์ด๋ค.
```

<br>

## JavaScript
```javascript
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    // setDate()ํจ์๋ฅผ ์ฌ์ฉํด ์๋ก์ด Date๊ฐ์ฒด๋ฅผ ํ ๋น
    const now = new Date();

    // second, min, hour์ ๊ฐ๊ฐ now(ํ์ฌ ์๊ฐ)์ ์ด, ๋ถ, ์๋ฅผ ํ ๋น
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// setInterval ํจ์๋ฅผ ์ด์ฉํด 1์ด(1000)์ ํ๋ฒ์ฉ setDateํจ์๊ฐ ์คํ
setInterval(setDate, 1000);
```

<br>

### ๐ setInterval() ํจ์
[๐ MDN ๋ฌธ์ ์ฐธ๊ณ ](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)    

์นํ์ด์ง์ ํน์  ๋ถ๋ถ์ ์ฃผ๊ธฐ์ ์ผ๋ก ์๋ฐ์ดํธํด์ค์ผ ํ๊ฑฐ๋(์ผ์  ์๊ฐ ๊ฐ๊ฒฉ์ ๋๊ณ  ๋ฐ๋ณตํด์ ์คํํ๊ณ  ์ถ์ ๋),     
์ด๋ค API๋ก ๋ถํฐ ๋ณ๊ฒฝ๋ ๋ฐ์ดํฐ๋ฅผ ์ฃผ๊ธฐ์ ์ผ๋ก ๋ฐ์์์ผ ํ๋ ๊ฒฝ์ฐ๊ฐ ์์ต๋๋ค.      
์ด๋ด ๋ ์๋ฐ์คํฌ๋ฆฝํธ์ `setInterval()` ํจ์๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค.

<br>

EX) `setInterval()` ํจ์๋ฅผ ์ฌ์ฉํ์ฌ ์ฝ์์ ํ์ฌ ์๊ฐ์ 2์ด๋ง๋ค ์ถ๋ ฅํด๋ณด๊ธฐ

```javascript
setInterval(() => console.log(new Date()), 2000);
```

<br>

setDate() ํจ์๋ฅผ 1์ด์ ํ๋ฒ์ฉ ์คํ๋๋๋ก ์ค์ 
```javascript
setInterval(setDate, 1000);
```