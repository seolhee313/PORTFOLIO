gsap.set('#section4', {
  backgroundColor: '#E0E3E7',
  color: '#000',
});

gsap.to('#section4', {
  scrollTrigger: {
    trigger: '#section4',
    start: 'top 60%',
    toggleClass: { targets: '#section4', className: 'scroll-active' },
    onEnter: function () {
      gsap.to('#section4', {
        backgroundColor: '#000',
        color: '#fff',
      });
      gsap.to('#section4 .header span', {
        color: '#fff',
      });
      gsap.to('#section4 .text', {
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
      gsap.to('#section4', {
        backgroundColor: '#E0E3E7',
        color: '#000',
      });
      gsap.to('#section4 .header span', {
        color: '#000',
      });
      gsap.to('#section4 .text', {
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
const section4TL = gsap.timeline();

section4TL.fromTo(
  '#section4 .text ul li.split',
  { autoAlpha: 0, y: 20 },
  { duration: 0.2, autoAlpha: 1, y: 0, stagger: 0.2 },
);

ScrollTrigger.create({
  trigger: '#section4',
  start: 'top 10%',
  animation: section4TL,
  markers: false,
});
