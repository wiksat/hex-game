console.log("Main.js")
$(document).ready(function () {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x484848);
    renderer.setSize(window.innerWidth, window.innerHeight);
    $("#root").append(renderer.domElement);

    var player = new Player()
    scene.add(player.getPlayerCont())


    render()
    var raycaster = new THREE.Raycaster(); // obiekt symulujący "rzucanie" promieni
    var mouseVector = new THREE.Vector2()
    var clickedVect
    var directionVect


    $(window).resize(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    function render() {
        requestAnimationFrame(render.bind(this)); // funkcja bind(this) przekazuje obiekt this do metody render
        renderer.render(scene, camera);
        console.log("render leci")
        $(document).off("mousedown")
        $(document).on("mousedown", (event) => {
            mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
            mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
            raycaster.setFromCamera(mouseVector, camera);
            var intersects = raycaster.intersectObjects(scene.children);
            console.log(intersects.length)

            if (intersects.length > 0) {
                // var clickedVect = new THREE.Vector3(0, 0, 0);
                // var directionVect = new THREE.Vector3(0, 0, 0);
                clickedVect = intersects[0].point
                console.log(clickedVect)

                directionVect = clickedVect.clone().sub(player.getPlayerCont().position).normalize() // sub - > odejmij pozycję playera od pozycji kliknięcia
                console.log(directionVect)

                //użyta wyżej funkcja normalize() przelicza proporcjonalnie współrzędne x,y,z wektora na zakres 0-1
                //jest to wymagane przez kolejne funkcje	
                console.log(player.getPlayerCont().position.clone().distanceTo(clickedVect))
            }
        })
        // console.log(direlctionVect)
        // console.log(clickedVect)

    }
    var axes = new THREE.AxesHelper(1000)
    scene.add(axes)


    var geometry = new THREE.PlaneGeometry(100, 100, 32, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true, wireframeLinejoin: "miter", side: THREE.DoubleSide });
    var plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = Math.PI / 2
    scene.add(plane)



    camera.position.set(0, 100, 100)
    camera.lookAt(scene.position)
})