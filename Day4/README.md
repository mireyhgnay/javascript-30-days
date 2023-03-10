# Day4 - Array Cardio Day 1 π

```
μ°μΆλ¬Ό μλ νλ‘μ νΈ,
μλ°μ€ν¬λ¦½νΈμ Arrayμ λν΄ μμλ³΄κ³  Arrayμ λ€μν methodλ€μ κ³΅λΆνλ€.
```

<br>

### π Array.prototype.filter()

filter() λ©μλλ μ£Όμ΄μ§ ν¨μμ νμ€νΈλ₯Ό ν΅κ³Όνλ λͺ¨λ  μμλ₯Ό λͺ¨μ μλ‘μ΄ λ°°μ΄λ‘ λ°νν©λλ€.  
[π MDN - Array.prototype.filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```javascript
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
```

<br>

### π Array.prototype.map()

map() λ©μλλ λ°°μ΄ λ΄μ λͺ¨λ  μμ κ°κ°μ λνμ¬ μ£Όμ΄μ§ ν¨μλ₯Ό νΈμΆν κ²°κ³Όλ₯Ό λͺ¨μ μλ‘μ΄ λ°°μ΄μ λ°νν©λλ€.  
callback ν¨μλ₯Ό κ°κ°μ μμμ λν΄ νλ²μ© μμλλ‘ λΆλ¬ κ·Έ ν¨μμ λ°νκ°μΌλ‘ μλ‘μ΄ λ°°μ΄μ λ§λ λ€.
[π MDN - Array.prototype.map()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```javascript
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
```

<br>

### π Array.prototype.sort()

sort() λ©μλλ λ°°μ΄μ μμλ₯Ό μ μ ν μμΉμ μ λ ¬ν ν κ·Έ λ°°μ΄μ λ°νν©λλ€.  
(μ€λ¦μ°¨μ, λ΄λ¦Όμ°¨μ, μνλ²³μ, ..)
[π MDN - Array.prototype.sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```javascript
const numbers = [4, 2, 5, 1, 3];

numbers.sort(function (a, b) {
  return a - b; // μ€λ¦μ°¨μ
});

console.log(numbers);
// expected output: Array [1, 2, 3, 4, 5]
```

<br>

### π Array.prototype.reduce()

reduce() λ©μλλ λ°°μ΄μ κ° μμμ λν΄ μ£Όμ΄μ§ λ¦¬λμ (reducer) ν¨μλ₯Ό μ€ννκ³ , νλμ κ²°κ³Όκ°μ λ°νν©λλ€.
[π MDN - Array.prototype.reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

```javascript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sumWithInitial);
// Expected output: 10
```
