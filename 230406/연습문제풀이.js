// 1.1 다음 값의 평균을 구하세요.

let arr1 = [10, 20, 30, 10, 20, 30, 40, 10];
let s = 0;
for (let i = 0; i < arr1.length; i++) {
  s += arr1[i];
}
console.log(s / arr1.length);

// 1.2 다음 값의 분산를 구하세요. 표준편차..
let a = s / arr1.length;
let total = 0;
for (let i = 0; i < arr1.length; i++) {
  let k = arr1[i] - a;
  total += k ** 2;
}
console.log((total ** 0.5).toFixed(2));

// 다음 string의 평균 값을 구하세요
let arr2 = "5, 4, 10, 2, 5".split(",");
let s2 = 0;
for (let i of arr2) {
  s2 += parseInt(i);
}
console.log(s2 / arr2.length);

// 문자열 뒤집기
let s = "hello world";
let result = "";
for (let i = 0; i < s.length; i++) {
  result = s[i] + result; // result =+ s[i]
}
console.log(result);
