# Day2 - CSS + JS Clock🕝
```
시계 만들기    
화면에 CSS와 JavaScript를 통해 각자의 시계를 만들어보는 프로젝트이다.
```

<br>

1. 

<br>

## JavaScript
```javascript
const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

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

  // setInterval 함수를 이용해 1초(1000)에 한번씩 setDate함수가 실행
  setInterval(setDate, 1000);
```

<br>

### 📖 
[🔗 MDN 문서 : ]()    


```javascript

```