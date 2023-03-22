console.log("Doors3D.js")

class Doors {

    constructor(number) {
        console.log("konstruktor klasy Doors")
        console.log("DRZWIIII")
        this.container = new THREE.Object3D();
        this.settings = Settings
        this.r = this.settings.r
        this.h = this.settings.h
        this.color = this.settings.color
        this.geometry = new THREE.BoxGeometry(this.r / 3, this.h, this.r / 10);
        this.material = new THREE.MeshPhongMaterial({
            color: 0x0000ff,
            specular: 0xffffff,
            shininess: 50,
            side: THREE.DoubleSide,
        })

        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.container.add(this.mesh);
        this.mesh.position.set(-this.r / 3, 0, 0)
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(this.r / 3, 0, 0)
        this.container.add(this.mesh);

        return this.container;
    }

}