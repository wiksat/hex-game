console.log("Player.js")
class Player {

    constructor() {
        this.container = new THREE.Object3D()
        this.geometry = new THREE.BoxGeometry(20, 20, 20);
        this.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

        this.player = new THREE.Mesh(this.geometry, this.material)
        this.container.add(this.player) // kontener w którym jest player
        this.axes = new THREE.AxesHelper(200) // osie konieczne do kontroli kierunku ruchu
        this.container.add(this.axes)
    }

    //funkcja zwracająca cały kontener

    getPlayerCont() {
        console.log("tworzenie")
        return this.container

    }

    //funkcja zwracająca playera czyli sam sześcian

    getPlayerMesh() {
        return this.player
    }

}