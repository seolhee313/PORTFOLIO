// timeline
const section15TL = gsap.timeline();

section15TL
  .fromTo(
    '#section15 .text ul li',
    { autoAlpha: 0, y: 20 },
    { duration: 0.2, autoAlpha: 1, y: 0, stagger: 0.2 },
  )
  // .fromTo(
  //   '#section15 .contact1 .line',
  //   { scaleX: 0, transformOrigin: 'left' },
  //   { duration: 1, scaleX: 1, ease: 'power3.out', delay: 0.2 },
  // )
  .fromTo(
    '#section15 .contact2 .line',
    { scaleX: 0, transformOrigin: 'left' },
    { duration: 1, scaleX: 1, ease: 'power3.out', delay: 0.2 },
  );

ScrollTrigger.create({
  trigger: '#section15',
  start: 'top 80%',
  animation: section15TL,
  markers: false,
});
