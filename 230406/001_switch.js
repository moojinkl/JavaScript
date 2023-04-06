// switch문은 잘 쓰이지 않습니다. 다른 언어에는 switch문이 없기 때문
// 가독성이 좋아서 케이스 별로 보기 편합니다. (속도 X)
// 견고한 코드를 위해서 default를 넣는 것이 좋습니다.
// default 값이 마지막에 오면 break를 빼도 됩니다.

// 여러줄 복사하고 싶을 때에
// window : Alt + Shift + 위아래
// mac : option키와 shift키 누르고 방향키

// 같은 단어 찾고 싶을 때
// window : Ctrl + D
// mac : cmd + D

// 같은 모든 단어
// window : Ctrl + Shift + l 입니다.
// mac : cmd + Shift + l 입니다.

// 자동정렬
// window : Ctrl + a, Ctrl k + Ctrl + f(Ctrl누른 상태여야 합니다.)
// mac : cmd + a, cmd k + f

// 전체 줄 선택
// window : 컨트롤 L 커서 있는 줄 전체선택
// mac : shift + cmd + left, cmd + opt + l // 안되는 분도 있으십니다.

// 되돌리는 단축키 (되돌리기, 되돌리기에 되돌리기)
// window : Ctrl + z, Ctrl + y (cmd + Shift + z)
// mac : cmd + z, cmd + Shift + z

// 잘라내기
// Ctrl + X
// 한 줄 삭제
// Ctrl + shift + K

const value = "two";

switch (value) {
  case "one":
    console.log("hello one");
    break;
  case "two":
    console.log("hello two");
    break;
  case "three":
    console.log("hello three");
    break;
  default:
    console.log("hello defult");
    break;
}
// hello two
///

const value2 = "four";

switch (value) {
  case "one":
    console.log("hello one");
    break;
  case "two":
    console.log("hello two");
    break;
  case "three":
    console.log("hello three");
    break;
  default:
    console.log("hello defult");
    break;
}
// hello default
///

const value3 = "one";

// break가 없을 경우 뒤에 요소까지 다 불러옵니다.
switch (value3) {
  case "one":
    console.log("hello one");
  case "two":
    console.log("hello two");
  case "three":
    console.log("hello three");
  default:
    console.log("hello defult");
}
// hello one
// hello two
// hello three
// hello default

///

// 요일은 일요일이 0부터 시작합니다.
switch (new Date().getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
}

// 다른 언어에서 switch문 어떻게 사용할까요? python은 switch문 없는데?
const 요일 = new Date().getDay();
const 요일객체 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};

console.log(요일객체[요일]);
// default는 어떻게 처리할까?
const 요일2 = 10;
const 요일객체2 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};

console.log(요일객체2[요일2]);

// 널리쉬 연산자 사용
console.log(요일객체2[요일2] ?? "hello");
console.log(undefined ?? "hello");
// 단락평가 사용
console.log(요일객체2[요일2] || "hello");
console.log(undefined || "hello");
