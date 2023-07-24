gsap.set('#section13', {
  backgroundColor: '#E0E3E7',
  color: '#000',
});

gsap.set('#section13 .text li', {
  backgroundColor: '#E0E3E7',
  color: '#000',
});

gsap.to('#section13', {
  scrollTrigger: {
    trigger: '#section13',
    start: 'top 60%',
    toggleClass: { targets: '#section13', className: 'scroll-active' },
    onEnter: function () {
      gsap.to('#section13', {
        backgroundColor: '#fff',
        color: '#000',
      });
      gsap.to('#section13 .text li', {
        backgroundColor: '#fff',
        color: '#000',
      });
    },
    onLeaveBack: function () {
      gsap.to('#section13', {
        backgroundColor: '#E0E3E7',
        color: '#000',
      });
      gsap.to('#section13 .text li', {
        backgroundColor: '#E0E3E7',
        color: '#000',
      });
    },
  },
});

// timeline
const section13TL = gsap.timeline();

section13TL.fromTo(
  '#section13 .text ul li',
  { autoAlpha: 0, y: 20 },
  { duration: 0.2, autoAlpha: 1, y: 0, stagger: 0.2 },
);

ScrollTrigger.create({
  trigger: '#section13',
  start: 'top 10%',
  animation: section13TL,
  markers: false,
});
