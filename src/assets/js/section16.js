gsap.set('#section16', {
  backgroundColor: '#E0E3E7',
  color: '#000',
});

gsap.set('#section16 .mail li', {
  color: '#000',
});

gsap.to('#section16', {
  scrollTrigger: {
    trigger: '#section16',
    start: 'top 60%',
    toggleClass: { targets: '#section16', className: 'scroll-active' },
    onEnter: function () {
      gsap.to('#section16', {
        backgroundColor: '#000',
        color: '#fff',
      });
      gsap.to('#section16 .mail li', {
        color: '#fff',
      });
      gsap.to(['#nav'], {
        backgroundColor: '#fff',
      });
      gsap.to(['#nav span'], {
        backgroundColor: '#000',
      });
      gsap.to(['#menu ul li a'], {
        color: '#fff',
      });
    },
    onLeaveBack: function () {
      gsap.to('#section16', {
        backgroundColor: '#E0E3E7',
        color: '#000',
      });
      gsap.to('#section16 .mail li', {
        color: '#000',
      });
      gsap.to(['#nav'], {
        backgroundColor: '#000',
      });
      gsap.to(['#nav span'], {
        backgroundColor: '#fff',
      });
      gsap.to(['#menu ul li a'], {
        color: '#000',
      });
    },
  },
});

// timeline
const section16TL = gsap.timeline();

section16TL
  .fromTo(
    '#section16 .thx ul li',
    { autoAlpha: 0, y: 20 },
    { duration: 0.3, autoAlpha: 1, y: 0, stagger: 0.2 },
  )
  .fromTo(
    '#section16 .mail ul li',
    { autoAlpha: 0, y: 20 },
    { duration: 0.3, autoAlpha: 1, y: 0, stagger: 0.2 },
  )
  .fromTo(
    '#section16 .menu ul',
    { autoAlpha: 0, y: 20 },
    { duration: 0.3, autoAlpha: 1, y: 0, stagger: 0.2 },
  );

ScrollTrigger.create({
  trigger: '#section16',
  start: 'top 20%',
  animation: section16TL,
  markers: false,
});
