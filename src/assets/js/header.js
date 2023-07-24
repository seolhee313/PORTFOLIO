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
