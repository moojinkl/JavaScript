// array *****
const arr = [10, 20, 30];
arr[0] = 100; // const는 값의 변화가 안된다고 하지 않았나? // 변경 가능 mutable
console.log(arr); // [100, 20, 30]

arr = [10, 20, 30]; // 재선언은 불가합니다.
console.log(arr); // 여전히 [100, 20, 30]

console.dir(arr); // 프로퍼티와 메서드를 볼 수 있습니다.

// 문자열 (string)
const s = "hello world";
console.log(s[0]); // h
s[0] = "i"; // 안됩니다. 불변 immutable

// 숫자로 들어간 값은 대괄호로 호출할 수 있고
// length는 문자입니다! 문자로 입력된 값은 .을 찍어 호출할 수 있습니다.
// arr.1 // error
arr[1]; // 작동합니다.
arr.length; // 작동합니다. 배열의 길이를 나타냅니다.
arr["length"]; // 작동합니다.

arr.length = 10; // arr ▶ (10) [10, 20, 30, empty x 7]

//
arr["lion"] = 100; // 프로퍼티를 추가하는 것도 가능합니다.
arr.lion = 1000; // 프로퍼티를 추가하는 것도 가능합니다.

// 배열의 특징
// 배열 생성 방법
let arr = [];
let arr = [1, 2, 3];
let arr2 = new Array(4, 5, 6); // 권장하지 않습니다.
let arr2 = new Array(3);
Array(100).fill(0); // 배열 100개를 0으로 채워서 생성합니다.

// 1. 배열은 순서가 있습니다. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing이라고 합니다. (0부터 시작) 배열 안에 값을 원소(elements)라고 합니다.
const arr = [10, 20, 30];
arr[0] = 100;

// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있습니다.
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 호출
arr[0];
// [1, 2, 3]
arr[1];
// [4, 5, 6]
arr[2];
// [7, 8, 9]
arr[1][2];
// 6

// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10; // 스칼라
const b = [10, 20, 30]; // 벡터 (1차원)
const c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 메트릭스 (2차원)
const d = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
]; // 텐서 (3차원 이상의 다차원)

// 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산입니다.

// push
const arr = [1, 2, 3];
arr.push(4);

// push 실무 예제
// let tableBodyData = []
// for (const iterator of data) {
//     tableBodyData.push(`
//         <tr>
//             <td>${iterator['a']}</td>
//             <td>${iterator['b']}</td>
//             <td>${iterator['c']}</td>
//             <td>${iterator['d']}</td>
//             <td>${iterator['e']}</td>
//             <td>${iterator['f']}</td>
//         </tr>
//     `)
// }
// document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')

const arr = [1, 2, 3, 4, 5];
arr.pop();
// 1. 마지막에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return) 합니다.
// 5
arr;
// (4) [1, 2, 3, 4]

// pop
const arr = [1, 2, 3, 4, 5];
let lastValue = arr.pop();
arr;

// unshift
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1);

// shift
// 1. 앞에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return) 합니다.
const myArray2 = ["사과", "바나나", "수박"];
// myArray2.shift();
// console.log(myArray2);

let firstValue = myArray2.shift();
firstValue;
// 사과

// 문제 (*****)
// push : 배열 마지막에 해당 값을 추가합니다.
// pop : 마지막 값을 꺼내고 그 값을 반환합니다.
// unshift : 배열 처음에 해당 값을 추가합니다.
// shift : 처음 값을 꺼내고 그 값을 반환합니다.

// arr.splice(start, deleteCount, items) 원본에 영향을 줍니다.
const arr = [1, 2, 3];
arr.splice(1, 0, 4); // arr의 1번째에 아무것도 삭제하지 않고 4를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, [10, 20, 30]); // arr의 1번째에 아무것도 삭제하지 않고 [10, 20, 30]를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, ...[10, 20, 30]); // arr의 1번째에 아무것도 삭제하지 않고 10, 20, 30을 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, 10, 20, 30); // arr의 1번째에 아무것도 삭제하지 않고 10, 20, 30을 넣겠다.

// 문제
// ||를 사용해서 답변해주세요.
const arr = [10, 20, 30, 40, 50];
const x = [1, 2, 3];
// 만들고 싶은 값 == [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]
// splice만 사용하여 위처럼 만들어주세요.
arr.splice(1, 0, ...x);
arr.splice(7, 0, ...x);

const arr = [10, 20, 30, 40, 50];
arr.splice(2, 1, 5); // arr에 2번째에, 1개를 삭제하고, 5를 넣는다.
console.log(arr); // [10, 20, 5, 40, 50]
// arr.splice().splice() // 메서드 체이닝이 안되는 이유는 splice는 삭제된 값을 반환합니다.

const arr = [10, 20, 30, 40, 50];
arr.splice(2, 2); // 2번째 인덱스에서 값 2개를 삭제합니다. 삽입되는 값은 없습니다.

const arr = [10, 20, 30, 40, 50];
arr.splice(2);
arr;

// arr.slice (start, end) end값의 바로 직전까지 추출합니다. 원본에 영향을 주지 않습니다.
const myArray = ["apple", "banana", "cherry", "durian", "elderberry"];
console.log(myArray.slice(1, 4)); // ['banana', 'cherry', 'durian']
console.log(myArray.slice(1));
console.log(myArray.slice(0, 100)); // 끝까지 다 추출합니다.

const arr = [10, 20, 30, 40, 50];
// arr.forEach(함수) : 요소 하나씩 순회하면서 실행합니다.
// 함수(callbackfn): (value: number, index: number, array: number[]
arr.forEach(function (item, index) {
  console.log(index, item);
});

arr.forEach(function (item, index) {
  console.log(index, item);
  console.log("hello");
  console.log("world");
});

arr.forEach(function (item, index, arr) {
  console.log(index, item, arr);
  console.log("hello");
  console.log("world");
});

// 실무에서 사용하는 코드는 아닙니다.
const arr = Array(100).fill(0);
const arr2 = [];

arr.forEach(function (item, index) {
  arr2.push(index);
}); // 100개의 0에 0부터 99까지의 숫자가 부여됩니다.

// 같은 코드1 (이름이 없는 함수 사용)
arr.forEach(function (item, index) {
  arr2.push(index + 1);
}); // 100개의 0에 1부터 100까지의 숫자가 부여됩니다.

// 같은 코드2 (화살표 함수 사용)
arr.forEach((item, index) => {
  arr2.push(index + 1);
});

// 같은 코드3 (중괄호를 생략한 화살표 함수 사용, 주로 실무에서 이렇게 사용합니다.)
arr.forEach((item, index) => arr2.push(index + 1));

// 같은 코드4 (이렇게는 사용하지 않습니다.)
const arr = Array(100).fill(0);
const arr2 = [];

function lion(item, index) {
  arr2.push(index + 1);
}

arr.forEach(lion);

// 어제 진행했었던 코드
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(item.thumbnailImg);
      console.log(item.productName);
      console.log(item.price);
    });
  });

// https://caniuse.com/?search=forEach
// nodeList에서 forEach와 Array에서 forEach는 다릅니다.
// nodeList에서 forEach는 익스플로러를 지원하지 않습니다.

const avengers = ["spiderman", "ironman", "hulk", "thor"];

const newAvengers = [];
avengers.forEach(function (item) {
  newAvengers.push("💖" + item + "💖");
});
console.log(newAvengers);

// map (면접 질문에서도 많이 나옵니다. 데이터를 뽑으려고 많이 사용합니다)
// map은 forEach와 다르게 새로운 배열을 생성합니다.

const arr = [1, 2, 3];
arr.map(function (item, index) {
  return item ** 2;
});

arr.map(function (x) {
  return x ** 2;
});

arr.map((x) => x ** 2);

const arr = Array(100).fill(0);
// 같은 코드 1
const arr = Array(100).fill(0);
arr.map((v, i) => i);

// 같은 코드 2
const arr = Array(100).fill(0);
arr.map(function (v, i) {
  return i;
}); // 반환값(return)을 적시해줘야 합니다.

// 같은 코드 3
const arr = Array(100).fill(0);
function lion(v, i) {
  return i;
}
arr.map(lion);

// 같은 코드 4
const arr = Array(100).fill(0);
arr.map((v, i) => {
  return i;
});

///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
///////////////////////////////
// 실무 팁(***)
let tip1 = [1, 2, 3, 4, 5];
// console.log(tip1[tip1.length-1])
// 원본 수정 없이 [1, 2, 3, 4] 값과 [5]라는 값을 얻어내고 싶을 때
console.log([...tip1].pop());
let tip2 = [...tip1];
console.log(tip2.pop());
console.log(tip2);

let tip3 = [1, 2, 3, 4, 5];
let tip4 = [10, 20, 30, 40, 50];

console.log([...tip3, 1000, ...tip4]);

const tip5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 다차원 배열에서 최솟값, 최댓값 찾기
Math.max(...tip5.flat());

const tip6 = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
];

tip6.flat();
tip6.flat(1);
tip6.flat(2);
tip6.flat(Infinity); // 다 펼쳐지면 스톱

const tip7 = new Array(10).fill(0); // Array(10).fill(0)도 됩니다.
const tip8 = Array.from("hello world");

// '.'.repeat(100).split('.') // 권하진 않습니다.

let tip9 = [1, 2, 3, 4, 5];
// 주의 : 마지막에 slice 한 값이 반영
console.log([tip9.slice(0, 2), 1000, tip9.slice(2, 5)]);
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)]);

let tip10 = [1, 2, 3, 4, 5];
tip10.splice(2, 0, 1000);
tip10;

// map하고 다시 오겠습니다.
const tip11 = Array(100)
  .fill(0)
  .map((v, i) => i + 1);

const tip12 = [
  {
    _id: "642ba3980785cecff3f39a8d",
    index: 0,
    age: 28,
    eyeColor: "green",
    name: "Annette Middleton",
    gender: "female",
    company: "KINETICA",
  },
  {
    _id: "642ba398d0fed6e17f2f50c9",
    index: 1,
    age: 37,
    eyeColor: "green",
    name: "Kidd Roman",
    gender: "male",
    company: "AUSTECH",
  },
  {
    _id: "642ba39827d809511d00dd8d",
    index: 2,
    age: 39,
    eyeColor: "brown",
    name: "Best Ratliff",
    gender: "male",
    company: "PRISMATIC",
  },
];

// askup chatGPT

const ages1 = tip12.map((item) => item.age);
const ages2 = tip12.map((item) => {
  return item.age;
});
console.log(ages1, ages2);
