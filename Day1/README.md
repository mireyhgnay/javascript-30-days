# Day1 - JavaScript Drum Kit🥁
```
화면에 매칭 된 키보드 버튼을 누르면 연결된 audio 파일을 재생하는 프로젝트이다.
```

<br>

1. 키보드 버튼을 누르면 `audio` 가 재생되어야한다.    
    - 키보드를 여러번 누를 경우 이전의 `audio`파일이 끝나지 않았다면 새로운 소리가 나오지 않는 이슈 생김
2. 키보드가 눌려 버튼이 동작시 `.playing` 클래스를 추가하여 스타일 효과를 준다.
3. 스타일 효과가 적용됐던 버튼을 원래대로 돌려 놓기 위해 `.playing` 클래스를 제거한다.

<br>

## JavaScript
```javascript
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    // KeyboardEvent.keyCode를 사용해 누른 키보드의 값을 반환받는다.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0; // audio 파일의 처음(0초)으로 초기화
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
```

<br>

### 📖 KeyboardEvent.keyCode
키보드 버튼을 누르면 `audio` 가 재생되어야 한다.    
`KeyboardEvent.keyCode`를 사용해 누른 키보드의 값을 반환받고,    
반환 받아 얻은 값을 audio의 data-key라는 프로퍼티의 값과 비교하고 동일한 경우 해당 `audio` 파일을 재생한다.
```javascript
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
```

**추가 공부 내용**
- [🔗 MDN 문서](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)를 확인해보니 `KeyboardEvent.keyCode` Deprecated로 더이상 사용하지 않는다고 합니다.
- 대신 `KeyboardEvent.key` 를 사용해줘야 합니다. ([MDN - KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key))
- 다만, 아직은 key property를 지원하지 않는 브라우저가 있어 undefined를 반환할 수도 있습니다.
- 그래서 키보드 이벤트를 사용할 시 아래와 같이 쓰는 것이 안전합니다.
```javascript
let key = event.key || event.keyCode;

if (key === 'Enter' || key === 13) {
    alert('전송');
}
```

<br>

### 📖 HTMLMediaElement.currentTime
[🔗 MDN 문서 참고](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime)    
키보드를 눌렀을 때, 소리는 나오지만 똑같은 버튼을 여러번 누를 경우 이전의 audio 파일이 끝나지 않았다면 새로운 소리가 나오지 않는 것을 확인할 수 있습니다.    
이를 해결하기 위해서, audio의 HTMLMediaElement.currentTime을 0으로 설정해줍니다.       
audio 파일의 처음(0초)으로 돌아가 재생하는 것을 의미합니다.    


```javascript
audio.currentTime = 0;
```

<br>

### 📖 Array.prototype.forEach()
[🔗 MDN 문서 참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)     
`forEach`는 주어진 함수를 배열 요소 각각에 대해 실행합니다.    
모든 div.key 태그를 배열로 변환해서 forEach문을 사용하여 배열 요소 각각에 대해 이벤트리스너를 실행합니다.

```javascript
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
```