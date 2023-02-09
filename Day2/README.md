# Day2 - CSS + JS Clock🕝
```
시계 만들기    
화면에 CSS와 JavaScript를 통해 각자의 시계를 만들어보는 프로젝트이다.
```

<br>

## JavaScript
```javascript
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    // setDate()함수를 사용해 새로운 Date객체를 할당
    const now = new Date();

    // second, min, hour에 각각 now(현재 시간)의 초, 분, 시를 할당
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

### 📖 setInterval() 함수
[🔗 MDN 문서 참고](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)    

웹페이지의 특정 부분을 주기적으로 업데이트해줘야 하거나(일정 시간 간격을 두고 반복해서 실행하고 싶을 때),     
어떤 API로 부터 변경된 데이터를 주기적으로 받아와야 하는 경우가 있습니다.      
이럴 때 자바스크립트의 `setInterval()` 함수를 사용할 수 있습니다.

<br>

EX) `setInterval()` 함수를 사용하여 콘솔에 현재 시간을 2초마다 출력해보기

```javascript
setInterval(() => console.log(new Date()), 2000);
```

<br>

setDate() 함수를 1초에 한번씩 실행되도록 설정
```javascript
setInterval(setDate, 1000);
```