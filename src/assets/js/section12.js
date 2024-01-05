gsap.set('#section12', {
  backgroundColor: '#000',
  color: '#fff',
});

gsap.set('#section12 h3', {
  backgroundColor: '#000',
  color: '#fff',
});

gsap.to('#section12', {
  scrollTrigger: {
    trigger: '#section12',
    start: 'top 60%',
    toggleClass: { targets: '#section12', className: 'scroll-active' },
    onEnter: function () {
      gsap.to('#section12', {
        backgroundColor: '#E0E3E7',
        color: '#000',
      });
      gsap.to('#section12 h3', {
        backgroundColor: '#E0E3E7',
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
    onLeaveBack: function () {
      gsap.to('#section12', {
        backgroundColor: '#000',
        color: '#fff',
      });
      gsap.to('#section12 h3', {
        backgroundColor: '#000',
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
  },
});

const circle = document.querySelectorAll('#section12 .circle a span');

const ani2 = gsap.timeline();
ani2.fromTo(circle, { x: 2290, autoAlpha: 1 }, { x: 0, autoAlpha: 1 });

ScrollTrigger.create({
  animation: ani2,
  trigger: '#section12',
  start: 'top top',
  end: '+=3500',
  scrub: true,
  pin: true,
  anticipatePin: 1,
  markers: false,
});

const span = document.querySelector('#section12 .circle a:nth-child(1) span');
const em = document.querySelector('#section12 .circle a:nth-child(1) span em');

span.addEventListener('mouseenter', () => {
  em.style.opacity = '1';
});

span.addEventListener('mouseleave', () => {
  em.style.opacity = '0';
});

var snippet = [].slice.call(document.querySelectorAll('.hover'));
if (snippet.length) {
  snippet.forEach(function (snippet) {
    snippet.addEventListener('mouseout', function (event) {
      if (event.target.parentNode.tagName === 'a') {
        event.target.parentNode.classList.remove('hover');
      } else {
        event.target.parentNode.classList.remove('hover');
      }
    });
  });
}
