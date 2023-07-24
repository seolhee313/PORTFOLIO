document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  function animate(item) {
    let x = 0;
    let y = 0;
    let delay = item.dataset.delay;

    gsap.fromTo(
      item,
      { autoAlpha: 0, x: x, y: y },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        delay: delay,
        duration: 1.25,
        overwrite: 'auto',
        ease: 'expo',
      },
    );
  }

  function reset(item) {
    gsap.to(item, {
      autoAlpha: 0,
      x: 0,
      y: 0,
      duration: 1,
      overwrite: 'auto',
      ease: 'expo',
    });
  }

  function createScrollTrigger(trigger, start, callback) {
    gsap.utils.toArray(trigger).forEach(item => {
      ScrollTrigger.create({
        trigger: item,
        start: start,
        markers: false,
        onEnter: () => {
          callback(item);
        },
        onLeaveBack: () => {
          reset(item);
        },
      });
      item.style.opacity = '0';
    });
  }

  createScrollTrigger('.name li', 'top 60%', animate);
  createScrollTrigger('.iam li', 'top 60%', animate);
  createScrollTrigger('.introduce ul li', 'top 70%', animate);
  createScrollTrigger('.imgText', 'top 30%', animate);
  createScrollTrigger('.imgText .text ul li', 'top 90%', animate);

  const section2TL = gsap.timeline();

  section2TL.fromTo(
    '#section2 .scroll .line',
    {
      scaleX: 0,
      transformOrigin: 'left',
    },
    {
      duration: 2,
      scaleX: 1,
      ease: 'power3.out',
      delay: 0.5,
    },
  );

  ScrollTrigger.create({
    trigger: '#section2',
    start: 'center center',
    animation: section2TL,
    markers: false,
  });
});

ScrollTrigger.matchMedia({
  // desktop
  '(min-width: 800px)': function () {},
  // mobile
  '(max-width: 799px)': function () {
    document.addEventListener('DOMContentLoaded', () => {
      gsap.registerPlugin(ScrollTrigger);

      function animate(item) {
        let x = 0;
        let y = 0;
        let delay = item.dataset.delay;

        gsap.fromTo(
          item,
          { autoAlpha: 0, x: x, y: y },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            delay: delay,
            duration: 1.25,
            overwrite: 'auto',
            ease: 'expo',
          },
        );
      }

      function reset(item) {
        gsap.to(item, {
          autoAlpha: 0,
          x: 0,
          y: 0,
          duration: 1,
          overwrite: 'auto',
          ease: 'expo',
        });
      }

      function createScrollTrigger(trigger, start, callback) {
        gsap.utils.toArray(trigger).forEach(item => {
          ScrollTrigger.create({
            trigger: item,
            start: start,
            markers: false,
            onEnter: () => {
              callback(item);
            },
            onLeaveBack: () => {
              reset(item);
            },
          });
          item.style.opacity = '0';
        });
      }

      createScrollTrigger('.name li', 'top 60%', animate);
      createScrollTrigger('.iam li', 'top 60%', animate);
      createScrollTrigger('.introduce ul li', 'top 70%', animate);
      createScrollTrigger('.imgText', 'top 80%', animate);
      createScrollTrigger('.imgText .text ul li', 'top 90%', animate);

      const section2TL = gsap.timeline();

      section2TL.fromTo(
        '#section2 .scroll .line',
        {
          scaleX: 0,
          transformOrigin: 'left',
        },
        {
          duration: 2,
          scaleX: 1,
          ease: 'power3.out',
          delay: 0.5,
        },
      );

      ScrollTrigger.create({
        trigger: '#section2',
        start: 'center center',
        animation: section2TL,
        markers: false,
      });
    });
  },
});
