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
  var pscale = 0.04 + Math.abs(mathRandom(0.03));
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
animate();
