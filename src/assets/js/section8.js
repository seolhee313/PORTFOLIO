// 섹션1
if (!window.matchMedia('(max-width: 900px)').matches) {
  gsap.to('#section8 .title .t1', {
    duration: 1,
    x: 30,
    scrollTrigger: {
      trigger: '#section8',
      containerAnimation: scrollTween,
      start: 'left right',
      end: 'right left',
      scrub: 2.5,
      markers: false,
    },
  });
  gsap.to('#section8 .title .t2', {
    duration: 1,
    x: 40,
    scrollTrigger: {
      trigger: '#section8',
      containerAnimation: scrollTween,
      start: 'left right',
      end: 'right left',
      scrub: 1,
      markers: false,
    },
  });

  // 섹션2
  gsap.to('#section8 .explain .aa', {
    duration: 1,
    x: -30,
    scrollTrigger: {
      trigger: '#section8 .img',
      containerAnimation: scrollTween,
      start: 'left right',
      end: 'right left',
      scrub: 2.5,
      markers: false,
    },
  });
  gsap.to('#section8 .explain .ab', {
    duration: 1,
    x: -50,
    scrollTrigger: {
      trigger: '#section8 .img',
      containerAnimation: scrollTween,
      start: 'left right',
      end: 'right left',
      scrub: 3,
      markers: false,
    },
  });

  gsap.to('#section8 .explain .text', {
    duration: 1,
    x: -50,
    scrollTrigger: {
      trigger: '#section8 .img',
      containerAnimation: scrollTween,
      start: 'left right',
      end: 'right left',
      scrub: 1,
      markers: false,
    },
  });

  gsap.to('#section8 .img', {
    duration: 1,
    y: -20,
    scrollTrigger: {
      trigger: '#section8',
      containerAnimation: scrollTween,
      start: 'left right',
      end: 'right left',
      scrub: 1,
      markers: false,
    },
  });
}
