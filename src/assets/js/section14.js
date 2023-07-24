gsap.set('#section14', {
  backgroundColor: '#fff',
  color: '#000',
});

gsap.set('#section14 .header span', {
  color: '#000',
});

gsap.set('#section14 .right', {
  backgroundColor: '#fff',
  color: '#000',
});

gsap.set('#section14 .right h3', {
  color: '#000',
});

gsap.set('#section14 .right p', {
  color: '#000',
});

gsap.to('#section14', {
  scrollTrigger: {
    trigger: '#section14',
    start: 'top 60%',
    toggleClass: { targets: '#section14', className: 'scroll-active' },
    onEnter: function () {
      gsap.to('#section14', {
        backgroundColor: '#E0E3E7',
        color: '#000',
      });
      gsap.to('#section14 .header span', {
        color: '#000',
      });
      gsap.to('#section14 .right', {
        backgroundColor: '#E0E3E7',
        color: '#000',
      });
      gsap.to('#section14 .right h3', {
        color: '#000',
      });
      gsap.to('#section14 .right p', {
        color: '#000',
      });
    },
    onLeaveBack: function () {
      gsap.to('#section14', {
        backgroundColor: '#fff',
        color: '#000',
      });
      gsap.to('#section14 .header span', {
        color: '#000',
      });
      gsap.to('#section14 .right', {
        backgroundColor: '#fff',
        color: '#000',
      });
      gsap.to('#section14 .right h3', {
        color: '#000',
      });
      gsap.to('#section14 .right p', {
        color: '#000',
      });
    },
  },
});

const imgElements = document.querySelectorAll('#section14 .left > div');

imgElements.forEach(element => {
  element.addEventListener('click', function () {
    // Remove active class from all elements
    imgElements.forEach(el => el.classList.remove('active'));

    // Add active class to the clicked element
    this.classList.add('active');
  });
});

// JavaScript 코드
// 이미지를 클릭했을 때 해당 내용을 보여주는 함수
function showContent(className) {
  // 모든 내용 숨기기
  const contentDivs = document.querySelectorAll('.section__inner .right > div');
  contentDivs.forEach(div => {
    div.style.display = 'none';
  });

  // 선택한 내용 보여주기
  const selectedDiv = document.querySelector(
    `.section__inner .right .${className}`,
  );
  selectedDiv.style.display = 'block';
}

// 이미지 클릭 이벤트 추가
const images = document.querySelectorAll('.section__inner .left div');
images.forEach(image => {
  const className = image.querySelector('span').innerText;
  image.addEventListener('click', function () {
    showContent(className);
  });
});
