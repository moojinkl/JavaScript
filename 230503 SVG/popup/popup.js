const article = document.querySelector(".popup");
const openBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".btn-close");

const dim = document.querySelector(".dim");

// 첫번째 포커스 요소
const firstEl = article.querySelector("a");

function openPopup() {
  article.classList.add("active");
  firstEl.focus();
}

function closePopup() {
  article.classList.remove("active");
}
openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
closeBtn.addEventListener("keydown", function (e) {
  // tab만 눌렀을 때 (Shift+tab일 땐 실행되지 않음)
  if (!e.shiftKey && e.key === "Tab") {
    e.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener("keydown", function (e) {
  // Shift+tab 같이 눌렀을 때 실행
  if (e.shiftKey && e.key === "Tab") {
    e.preventDefault();
    closeBtn.focus();
  }
});

dim.addEventListener("click", closePopup);
