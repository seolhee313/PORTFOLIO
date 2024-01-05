// const nav = document.getElementById('nav');
// const menu = document.getElementById('menu');

// function toggleMenu(event) {
//   event.stopPropagation();
//   menu.classList.toggle('show');
// }

// nav.addEventListener('click', toggleMenu);

// menu.addEventListener('click', function (event) {
//   event.stopPropagation();
//   if (event.target.tagName === 'A') {
//     menu.classList.remove('show');
//     const targetSectionId = event.target.getAttribute('href');
//     const targetSection = document.querySelector(targetSectionId);
//     if (targetSection) {
//       event.preventDefault();
//       const targetOffsetTop =
//         targetSection.getBoundingClientRect().top + window.pageYOffset;
//       window.scrollTo({
//         top: targetOffsetTop,
//         behavior: 'smooth',
//       });
//     }
//   }
// });

// document.addEventListener('click', function () {
//   menu.classList.remove('show');
// });

// 네비게이션 메뉴를 보이거나 숨기는 함수
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show'); // 'show' 클래스를 토글하여 메뉴 보이기/숨기기
}

// 네비게이션 메뉴 아이콘을 클릭할 때 toggleMenu 함수 실행
const navIcon = document.getElementById('nav');
navIcon.addEventListener('click', toggleMenu);
