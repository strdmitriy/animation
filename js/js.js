window.onload = function () {
  var width = window.innerWidth;
  var height = window.innerHeight;

  var canvas = document.querySelector('#canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);

  var renderer = new THREE.WebGLRenderer({canvas: canvas});
  renderer.setClearColor(0x000000);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 5000);
  camera.position.set(30, 20, 1000);
  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);


  var geometry2 = new THREE.BoxGeometry(300, 900, 300, 12);
  var material2 = new THREE.MeshBasicMaterial({color: 0x808080, wireframe: true});
  var mesh2 = new THREE.Mesh(geometry2, material2);

  mesh2.rotation.y = 18;

  scene.add(mesh2);
  renderer.render(scene, camera);
};
