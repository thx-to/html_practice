const btnNavToggle = document.querySelector(".btn-nav-toggle");
const nav = document.querySelector("#nav");

btnNavToggle.addEventListener("click", function () {
  // btn-nav-toggle에 'open' 클래스를 토글하고, nav의 'open' 클래스도 토글
  btnNavToggle.classList.toggle("open");
  nav.classList.toggle("open");
});



      const text = "CONTACT@BATCREW.CO.KR";
      const container = document.getElementById("rollingText");
      const numRepeats = 6; // 문구 반복 횟수 설정

      // 문구를 반복해서 추가하는 함수
      function createRollingText() {
        for (let i = 0; i < numRepeats; i++) {
          const span = document.createElement("span");
          span.textContent = text;
          container.appendChild(span);
        }

        // 문구가 반복 끝날 때 간격이 생기지 않도록 첫 번째 문구 다시 추가
        for (let i = 0; i < numRepeats; i++) {
          const span = document.createElement("span");
          span.textContent = text;
          container.appendChild(span);
        }
      }

      // 페이지 로드 후 문구 생성
      createRollingText();