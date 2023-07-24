gsap.set('#section11', {
  backgroundColor: '#E0E3E7',
  color: '#000',
});

gsap.set('#section11 .text .split', {
  color: '#000',
});

gsap.to('#section11', {
  scrollTrigger: {
    trigger: '#section11',
    start: 'top 60%',
    toggleClass: { targets: '#section11', className: 'scroll-active' },
    onEnter: function () {
      gsap.to('#section11', {
        backgroundColor: '#000',
        color: '#fff',
      });
      gsap.to('#section11 .text .split', {
        color: '#fff',
      });
      gsap.to(['#nav'], {
        backgroundColor: '#fff',
      });
      gsap.to(['#nav span'], {
        backgroundColor: '#000',
      });
    },
    onLeaveBack: function () {
      gsap.to('#section11', {
        backgroundColor: '#E0E3E7',
        color: '#000',
      });
      gsap.to('#section11 .text .split', {
        color: '#000',
      });
      gsap.to(['#nav'], {
        backgroundColor: '#000',
      });
      gsap.to(['#nav span'], {
        backgroundColor: '#fff',
      });
    },
  },
});

// timeline
const section11TL = gsap.timeline();

section11TL
  .fromTo(
    '#section11 .text ul li',
    { autoAlpha: 0, y: 20 },
    { duration: 0.2, autoAlpha: 1, y: 0, stagger: 0.2 },
  )
  .fromTo(
    '#section11 .scroll .line',
    { scaleX: 0, transformOrigin: 'left' },
    { duration: 1, scaleX: 1, ease: 'power3.out', delay: 0.2 },
  );

ScrollTrigger.create({
  trigger: '#section11',
  start: 'top 10%',
  animation: section11TL,
  markers: false,
});
