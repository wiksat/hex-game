console.log("Main.js")
$(document).ready(function () {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x484848);
    renderer.setSize(window.innerWidth, window.innerHeight);
    $("#root").append(renderer.domElement);
    var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControl.addEventListener('change', function () {
        renderer.render(scene, camera)
    });
    render()

    var level = new Level3D(scene);
    $(window).resize(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    function render() {
        requestAnimationFrame(render.bind(this)); // funkcja bind(this) przekazuje obiekt this do metody render
        renderer.render(scene, camera);
        console.log("render leci")
    }
    var axes = new THREE.AxesHelper(1000)
    scene.add(axes)

    camera.position.set(0, 1000, 0)
    camera.lookAt(scene.position)
})