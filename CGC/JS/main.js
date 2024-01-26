

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const cgeometry = new THREE.BoxGeometry( 3, 3, 3 );
const cmaterial = new THREE.MeshBasicMaterial( { color: "#A9AF9F" } );
const cube = new THREE.Mesh( cgeometry, cmaterial );
scene.add( cube );

const tgeometry = new THREE.TorusGeometry( 10, 3, 17, 100 ); 
const tmaterial = new THREE.MeshBasicMaterial( { color: "#66F519" } ); 
const torus = new THREE.Mesh( tgeometry, tmaterial );
scene.add( torus );

const sgeometry = new THREE.SphereGeometry( 3, 32, 16 ); 
const smaterial = new THREE.MeshNormalMaterial( { color: 0xffff00 } ); 
const sphere = new THREE.Mesh( sgeometry, smaterial ); 
scene.add( sphere );

const pgeometry = new THREE.CylinderGeometry( 5, 5, 20, 32 ); 
const pmaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} ); 
const cylinder = new THREE.Mesh( pgeometry, pmaterial ); scene.add( cylinder );

const ageometry = new THREE.ConeGeometry( 5, 20, 32 ); 
const amaterial = new THREE.MeshBasicMaterial( {color: "#2860EE"} );
const cone = new THREE.Mesh(ageometry, amaterial );
scene.add( cone );

camera.position.z = 50;

function animate() {
	requestAnimationFrame( animate );


	//rotations
	cube.rotation.x += 0.001;
	cube.rotation.y += 0.005;

	torus.rotation.x += 0.101;
	torus.rotation.y += 0.005;

	sphere.rotation.x += 0.001;
	sphere.rotation.y += 1.005;

	cylinder.rotation.x += 0.041;
	cylinder.rotation.y += 0.065;

	cone.rotation.x += 0.011;
	cone.rotation.y += 0.015;

	//positions
	cube.position.x =20.114;
	cube.position.y =10.014;

	cylinder.position.x =-45.114;
	cylinder.position.y =-20.014;

	cone.position.x =-45.114;
	cone.position.y =20.014;

	torus.position.x =1.114;
	torus.position.y =1.014;


	renderer.render( scene, camera );
}

animate();