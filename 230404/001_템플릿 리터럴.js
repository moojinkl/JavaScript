// 고급 템플릿 러터럴(React) 문법을 한 번 더 합니다.

const x = 10;
const y = 20;
console.log("x값은 10이고 y값은 20이고 두개를 곱한 값은 200입니다.");
console.log(
  "x값은",
  x,
  "이고 y값은",
  y,
  "이고 두개를 곱한 값은",
  x * y,
  "입니다."
); // 이제 이렇게 사용하지 않습니다.

console.log(`x값은 ${x}이고 y값은 ${y}이고 두개를 곱한 값은 ${x * y}입니다.`); // 템플릿 리터럴 중괄호 안에 연산을 넣는 것을 권하지 않습니다. 아래 방법을 권장합니다.
const x2 = 10;
const y2 = 20;
const result = x2 * y2;
console.log(
  `x값은 ${x2}이고 y값은 ${y2}이고 두개를 곱한 값은 ${result}}입니다.`
);

// console.log('h
// e
// l
// l
// 0')

console.log(`h
e
l
l
o`);

const s = "hello";
const ss = "world";
const result2 = s + "\n" + ss; // '\n'은 Enter 효과
console.log(result2);

// 문법적으론 좋으나 코드의 가독성을 해칠 수 있습니다.
// 단점을 '굳이' 뽑자면..
if (true) {
  if (true) {
    if (true) {
      console.log(`h
            e
            l
            l
            o
            `);
    }
  }
}

// 가독성이 떨어집니다.
if (true) {
  if (true) {
    if (true) {
      console.log(`h
e
l
l
o
`);
    }
  }
}
