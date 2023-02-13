# Day6 - Ajax Type Ahead 🔍

```
Fetch API와 정규표현식을 이용해 검색창에 문자를 입력하면 해당 문자가 포함된 도시를 나열하는 프로젝트이다.
```

<br>

### fetch()

[🔗 MDN 문서 - Fetch](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)

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

- 가장 먼저 fetch()를 통해 endpoint로부터 응답을 JSON 형태로 파싱하고
- 그렇게 얻은 데이터를 cities에 Spread Operator를 사용해 push 해준다
- 사용자가 입력한 단어인 wordToMatch와 비교해서 그 단어가 city나 state에 포함된 경우만 필터링해준다
