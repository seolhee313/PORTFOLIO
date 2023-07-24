// 배경 화면 색
window.addEventListener('resize', handleResize);

function handleResize() {
  gsap.to(['#section3', '#section3 .top li'], {
    backgroundColor: '#E0E3E7',
    color: '#000',
  });
}

gsap.to(['#section3', '#section3 .top li'], {
  backgroundColor: '#E0E3E7',
  color: '#000',
  scrollTrigger: {
    trigger: '#section3',
    start: 'top 60%',
    toggleClass: { targets: '#section3', className: 'scroll-active' },
    onEnter: function () {
      gsap.to(['#section3'], {
        backgroundColor: '#E0E3E7',
        color: '#000',
      });
      gsap.to(['#section3 .top li'], {
        backgroundColor: '#E0E3E7',
        color: '#000',
      });
      gsap.to(['#nav'], {
        backgroundColor: '#000',
      });
      gsap.to(['#nav span'], {
        backgroundColor: '#fff',
      });
      gsap.set('#section3 .arrow', { display: 'block' });
      gsap.set('#section3 .arrowWhite', { display: 'none' });
    },
    onLeaveBack: function () {
      gsap.to(['#section3', '#section3 .top li'], {
        backgroundColor: '#000',
        color: '#fff',
      });
      gsap.to(['#nav'], {
        backgroundColor: '#fff',
      });
      gsap.to(['#nav span'], {
        backgroundColor: '#000',
      });
      gsap.set('#section3 .arrow', { display: 'none' });
      gsap.set('#section3 .arrowWhite', { display: 'block' });
    },
  },
});

// timeline
const section3TL = gsap.timeline();

section3TL
  .fromTo(
    '#section3 .text .text__inner .line',
    {
      scaleX: 0,
      transformOrigin: 'right',
    },
    {
      duration: 1,
      scaleX: 1,
      ease: 'power3.out',
      delay: 0.1,
    },
  )
  .fromTo(
    '#section3 .text .text__inner .bottom .split',
    { autoAlpha: 0, y: 20 },
    { duration: 0.5, autoAlpha: 1, y: 0, stagger: 0.2 },
  );

ScrollTrigger.create({
  trigger: '#section3',
  start: 'top top',
  animation: section3TL,
  markers: false,
});

// card
gsap.utils.toArray('#section3 .card1').forEach(item => {
  gsap.to(item, {
    duration: 0.5,
    yPercent: -50,
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
      end: 'bottom top',
      scrub: true,
      markers: false,
    },
  });
});

gsap.utils.toArray('#section3 .card2').forEach(item => {
  gsap.to(item, {
    duration: 0.5,
    yPercent: -50,
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
      end: 'bottom top',
      scrub: true,
      markers: false,
    },
  });
});

gsap.utils.toArray('#section3 .card3').forEach(item => {
  gsap.to(item, {
    duration: 0.5,
    yPercent: -50,
    scrollTrigger: {
      trigger: item,
      start: 'top 85%',
      end: 'bottom top',
      scrub: true,
      markers: false,
    },
  });
});

ScrollTrigger.matchMedia({
  // desktop
  '(min-width: 800px)': function () {},
  // mobile
  '(max-width: 799px)': function () {},
});
