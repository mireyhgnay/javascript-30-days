# Day6 - Ajax Type Ahead ๐

```
Fetch API์ ์ ๊ทํํ์์ ์ด์ฉํด ๊ฒ์์ฐฝ์ ๋ฌธ์๋ฅผ ์๋ ฅํ๋ฉด ํด๋น ๋ฌธ์๊ฐ ํฌํจ๋ ๋์๋ฅผ ๋์ดํ๋ ํ๋ก์ ํธ์ด๋ค.
```

<br>

### fetch()

[๐ MDN ๋ฌธ์ - Fetch](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)

```javascript
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
```

- ๊ฐ์ฅ ๋จผ์  fetch()๋ฅผ ํตํด endpoint๋ก๋ถํฐ ์๋ต์ JSON ํํ๋ก ํ์ฑํ๊ณ 
- ๊ทธ๋ ๊ฒ ์ป์ ๋ฐ์ดํฐ๋ฅผ cities์ Spread Operator๋ฅผ ์ฌ์ฉํด push ํด์ค๋ค
- ์ฌ์ฉ์๊ฐ ์๋ ฅํ ๋จ์ด์ธ wordToMatch์ ๋น๊ตํด์ ๊ทธ ๋จ์ด๊ฐ city๋ state์ ํฌํจ๋ ๊ฒฝ์ฐ๋ง ํํฐ๋งํด์ค๋ค
