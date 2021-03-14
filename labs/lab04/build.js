/* global THREE, scene, renderer, camera */

const group = new THREE.Group();
var n = 16;
var cubes = [];

//Create a cube using variable w, h, d
function createCube(w, h, d, color) {
    var material = new THREE.MeshBasicMaterial();
    material.color = new THREE.Color(color);
    material.wireframe = true;
    var geometry_cube = new THREE.BoxGeometry(w, h, d);
    var square = new THREE.Mesh(geometry_cube, material);
    return square;
}

//Create a sphere using variable radius, vertical lines, horizontal lines
//Use MeshPhongMaterial
function createSphere(radius, hlines, vlines, color) {
    var material = new THREE.MeshPhongMaterial();
    material.color = new THREE.Color(color);
    material.wireframe = false;
    material.shininess = 100;
    var geometry_sphere = new THREE.SphereGeometry(radius, hlines, vlines);
    var ball = new THREE.Mesh(geometry_sphere, material);
    return ball;
}

//Create the shapes and add them to a group
function createShapes() {
    for (let i = 0; i < n; i++) {
        var rot2 = new THREE.Matrix4();
        var sca = new THREE.Matrix4();
        var rot = new THREE.Matrix4();
        var tra = new THREE.Matrix4();
        var combined = new THREE.Matrix4();

        sca.makeScale(1.5, 1.5, 1.5);
        rot2.makeRotationZ(i * (Math.PI / n));
        tra.makeTranslation(10, 5, 0);
        rot.makeRotationY(i * (2 * Math.PI / n));
        combined.multiply(rot);
        combined.multiply(tra);
        combined.multiply(rot2);
        combined.multiply(sca);
        var color = new THREE.Color(0xffffff);
        color.setHex(Math.random() * 0xffffff);
        cubes[i] = createCube(1, 1, 1, color);
        cubes[i].applyMatrix(combined);
        cubes[i].geometry.computeBoundingBox();
        group.add(cubes[i]);
    }
    //Create a sphere and add it to the group
}

//Add all shapes to the scene
function addShapes() {
    scene.add(group);
    //add the camera to the scene 
    //add the ambient light to the scene
}