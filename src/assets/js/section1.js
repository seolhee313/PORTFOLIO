// import Lenis from '@studio-freight/lenis';

// export function smooth() {
//   const lenis = new Lenis({
//     duration: 3,
//     easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//   });

//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }

//   requestAnimationFrame(raf);

//   lenis.on('scroll', e => {
//     console.log(e);
//   });
// }

window.onload = function () {
  measurePageLoadTime();
};

function measurePageLoadTime() {
  var loadTime =
    window.performance.timing.domContentLoadedEventEnd -
    window.performance.timing.navigationStart;

  // 로딩 화면 요소
  var loadingElement = document.getElementById('loading');
  var loadingTextElement = document.getElementById('loading-text');

  // 로딩 수치 업데이트
  var progress = 0;
  var increment = 100 / loadTime; // 로딩 시간에 따라 증가하는 진행률 계산
  var intervalId = setInterval(function () {
    progress += increment;
    loadingTextElement.textContent = Math.round(progress) + '%';
    if (progress >= 100) {
      clearInterval(intervalId);
      main.style.height = '100%';
      progress = 100; // 진행률(progress)을 100으로 제한
      loadingTextElement.textContent = Math.round(progress) + '%'; // 수치를 100%로 표시
      loadingElement.classList.add('hidden'); // 로딩 화면에 hidden 클래스 추가
      document.body.style.visibility = 'visible'; // 페이지 내용 보이기
      setTimeout(function () {
        loadingElement.style.display = 'none'; // 로딩 화면 요소 제거
        startPage(); // 페이지 실행 코드
      }, 500);
    }
  });
}

function startPage() {
  var canvas = document.querySelector('#canvas');
  var renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // document.body.appendChild(renderer.domElement);
  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  var camera = new THREE.PerspectiveCamera(
    25,
    window.innerWidth / window.innerHeight,
    1,
    500,
  );
  var scene = new THREE.Scene();
  // scene.fog = new THREE.FogExp2(0x000000, 0.08);
  camera.position.set(0, 0, 15);

  var group3d = new THREE.Object3D();
  var geometry = new THREE.IcosahedronGeometry(1, 1);
  var gparticular = new THREE.CircleGeometry(1, 3);
  var bparticular = new THREE.CircleGeometry(1, 3);

  var material = new THREE.MeshPhysicalMaterial({
    color: 0xfffffff,
    shading: THREE.FlatShading,
    side: THREE.DoubleSide,
  });
  var wmaterial = new THREE.MeshNormalMaterial({
    color: 0xffffff,
    wireframe: true,
  });
  var gmaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  });

  function mathRandom(num = 10) {
    var mathnum = -Math.random() * num + Math.random() * num;
    return mathnum;
  }

  for (var i = 1; i < 300; i++) {
    var pscale = 0.05 + Math.abs(mathRandom(0.03));
    var particular = new THREE.Mesh(gparticular, gmaterial);
    particular.position.set(mathRandom(), mathRandom(), mathRandom());
    particular.rotation.set(mathRandom(), mathRandom(), mathRandom());
    particular.scale.set(pscale, pscale, pscale);

    group3d.add(particular);
  }

  var cube = new THREE.Mesh(geometry, material);
  var wcube = new THREE.Mesh(geometry, wmaterial);
  var bcube = new THREE.Mesh(bparticular, wmaterial);

  bcube.scale.set(1.5, 1.5, 1.5);
  bcube.position.z = -1;

  var scaleSet = 0.7;
  cube.scale.set(scaleSet, scaleSet, scaleSet);

  function cameraSet(num) {
    gsap.to(camera.position, 2, {
      z: num,
      ease: Power3.easeInOut,
      yoyo: false,
      repeat: 0,
    });
  }

  var ambientLight = new THREE.AmbientLight(0x777777, 0.2);
  var lightFront = new THREE.PointLight(0xff00ff, 1);
  var lightBack = new THREE.PointLight(0x8800ff, 0.5);

  lightFront.castShadow = true;

  lightFront.position.set(10, 10, 5);
  lightBack.position.set(-5, -10, -15);

  scene.add(lightBack);
  scene.add(lightFront);
  scene.add(ambientLight);

  cube.add(wcube);
  scene.add(bcube);
  group3d.add(cube);
  scene.add(group3d);

  function onchangeCamera() {
    scene.rotation.y = 0;
    gsap.to(scene.rotation, 3, {
      y: (360 * Math.PI) / 180,
      ease: Power3.easeInOut,
    });
  }

  var numRot = 0.001;

  function animate() {
    requestAnimationFrame(animate);
    group3d.rotation.x += numRot;
    group3d.rotation.y += numRot;
    group3d.rotation.z += numRot;

    bcube.rotation.z += numRot;

    renderer.render(scene, camera);
  }
  gsap.set(canvas, { opacity: 0 }); // canvas 요소를 처음에 숨김

  // Create a timeline animation for section 1
  var section1TL = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Animation for section 1
  section1TL
    .to('#section1 .img', { scale: 0, duration: 0 })
    .to('#section1 .img', { scale: 1, duration: 4 })
    .to(canvas, { opacity: 1 })
    .fromTo(
      '#section1 .line',
      { scaleX: 0, transformOrigin: 'right' },
      { duration: 1, scaleX: 1 },
    )
    .fromTo(
      '#section1 .text .split',
      { autoAlpha: 0, y: 20 },
      { duration: 1, autoAlpha: 1, y: 0, stagger: 0.2 },
    );

  // ScrollTrigger for section 1
  ScrollTrigger.create({
    animation: section1TL,
    trigger: '#section1',
    start: 'top center',
    markers: false,
  });

  animate();

  // 화살표 움직임
  gsap.fromTo(
    ['#section1 .arrow1', '#section1 .arrow2'],
    { rotation: 0 },
    {
      rotation: 25,
      scrollTrigger: {
        trigger: '#section1',
        start: 'top top',
        // end: 'bottom center',
        scrub: true,
      },
    },
  );
}
