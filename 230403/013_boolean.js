let x = 5;
let y = 10;

console.log(x > y); // false

let a = true;
let b = false;

console.log(a && b); // false

// true, false가 아닌 값을 and, or연산 했을 경우 단락회로평가를 하게 됩니다.
let a2 = "hello";
let b2 = "";

console.log(a2 && b2); // "", 첫번째 falsy한 값을 찾습니다. 둘 다 truthy한 값이면 두번째 피연산자에서 평가 결과가 결정됩니다.

// 암기 : 0, undefined, null, NaN만 false
console.log(Boolean("hello")); // t
console.log(Boolean("")); // f
console.log(Boolean([1, 2, 3])); // t
console.log(Boolean([])); // 말도 안되게 t
console.log(Boolean({ one: 10, two: 20 })); // t
console.log(Boolean({})); // t
console.log(Boolean(0)); //f
console.log(Boolean(-1)); // t
console.log(Boolean(undefined)); // f
console.log(Boolean(null)); // f
console.log(Boolean(NaN)); // f

if (undefined) {
  console.log("hello");
}

let aa;
if (aa) {
  console.log("hello");
}

// 답할 수 있어야 견고한 코드를 짤 수 있습니다.
// 견고한 코드 : 어떤 상황에서도 기능이 무너지지 않는 코드
let aaa;
if (aaa > 100) {
  console.log("hello");
}
