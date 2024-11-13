const btnNavToggle = document.querySelector(".btn-nav-toggle");
const nav = document.querySelector("#nav");

btnNavToggle.addEventListener("click", function () {
  // btn-nav-toggle에 'open' 클래스를 토글하고, nav의 'open' 클래스도 토글
  btnNavToggle.classList.toggle("open");
  nav.classList.toggle("open");
});



