if (!window.matchMedia('(max-width: 900px)').matches) {
  // GSAP 애니메이션 코드
  gsap.set('#section5', {
    backgroundColor: '#000',
    color: '#fff',
  });
  gsap.set('#section5 .title span', {
    color: '#fff',
  });

  gsap.to('#section5, #section5 .title span', {
    scrollTrigger: {
      trigger: '#section5',
      start: '60% top',
      end: 'bottom bottom',
      scrub: true,
      onEnter: function () {
        gsap.to('#section5', {
          backgroundColor: '#E0E3E7',
          color: '#000',
        });
        gsap.to('#section5 .title span', {
          color: '#000',
        });
        gsap.to(['#nav'], {
          backgroundColor: '#000',
        });
        gsap.to(['#nav span'], {
          backgroundColor: '#fff',
        });
      },
      onLeaveBack: function () {
        gsap.to('#section5', {
          backgroundColor: '#000',
          color: '#fff',
        });
        gsap.to('#section5 .title span', {
          color: '#fff',
        });
        gsap.to(['#nav'], {
          backgroundColor: '#fff',
        });
        gsap.to(['#nav span'], {
          backgroundColor: '#000',
        });
      },
    },
  });

  // 섹션1
  if (!window.matchMedia('(max-width: 900px)').matches) {
    gsap.to('#section5 .title .t1', {
      duration: 1,
      x: 30,
      scrollTrigger: {
        trigger: '#section5',
        containerAnimation: scrollTween,
        start: 'left right',
        end: 'right left',
        scrub: 2.5,
        markers: false,
      },
    });
    gsap.to('#section5 .title .t2', {
      duration: 1,
      x: 40,
      scrollTrigger: {
        trigger: '#section5',
        containerAnimation: scrollTween,
        start: 'left right',
        end: 'right left',
        scrub: 1,
        markers: false,
      },
    });

    // 섹션2
    gsap.to('#section5 .explain .aa', {
      duration: 1,
      x: -30,
      scrollTrigger: {
        trigger: '#section5 .img',
        containerAnimation: scrollTween,
        start: 'left right',
        end: 'right left',
        scrub: 2.5,
        markers: false,
      },
    });
    gsap.to('#section5 .explain .ab', {
      duration: 1,
      x: -50,
      scrollTrigger: {
        trigger: '#section5 .img',
        containerAnimation: scrollTween,
        start: 'left right',
        end: 'right left',
        scrub: 3,
        markers: false,
      },
    });

    gsap.to('#section5 .explain .text', {
      duration: 1,
      x: -50,
      scrollTrigger: {
        trigger: '#section5 .img',
        containerAnimation: scrollTween,
        start: 'left right',
        end: 'right left',
        scrub: 1,
        markers: false,
      },
    });

    gsap.to('#section5 .img', {
      duration: 1,
      y: -20,
      scrollTrigger: {
        trigger: '#section5',
        containerAnimation: scrollTween,
        start: 'left right',
        end: 'right left',
        scrub: 1,
        markers: false,
      },
    });
  }
}
