console.log("Hex3D.js")

class Hex {

    constructor(doors1, doors2) {
        console.log("konstruktor klasy Hex")
        this.container = new THREE.Object3D();
        this.settings = Settings
        this.r = this.settings.r
        this.h = Settings.h
        this.color = this.settings.color

        ///0
        this.geometry = new THREE.BoxGeometry(this.r, this.h, this.r / 10);
        this.material = new THREE.MeshPhongMaterial({
            color: 0x00ffff,
            specular: 0xffffff,
            shininess: 50,
            side: THREE.DoubleSide,
        })
        if (doors1 == 0 || doors2 == 0) {
            var door = new Doors(0)
            door.position.set(0, 0, -this.r * Math.sqrt(3) / 2)
            door.lookAt(this.container.position)
            this.container.add(door)
        } else {
            this.mesh = new THREE.Mesh(this.geometry, this.material)
            this.mesh.position.set(0, 0, -this.r * Math.sqrt(3) / 2)
            this.mesh.lookAt(this.container.position)
            this.container.add(this.mesh);
        }
        ///1
        if (doors1 == 1 || doors2 == 1) {
            var door = new Doors(1)
            door.position.set(this.r * Math.sqrt(3) / 2 * Math.sqrt(3) / 2, 0, -this.r * Math.sqrt(3) / 4)
            door.lookAt(this.container.position)
            this.container.add(door)
        } else {
            this.mesh = new THREE.Mesh(this.geometry, this.material)
            this.mesh.position.set(this.r * Math.sqrt(3) / 2 * Math.sqrt(3) / 2, 0, -this.r * Math.sqrt(3) / 4)
            this.mesh.lookAt(this.container.position)
            this.container.add(this.mesh);
        }
        ///2
        if (doors1 == 2 || doors2 == 2) {
            var door = new Doors(2)
            door.position.set(this.r * Math.sqrt(3) / 2 * Math.sqrt(3) / 2, 0, this.r * Math.sqrt(3) / 4)
            door.lookAt(this.container.position)
            this.container.add(door)
        } else {
            this.mesh = new THREE.Mesh(this.geometry, this.material)
            this.mesh.position.set(this.r * Math.sqrt(3) / 2 * Math.sqrt(3) / 2, 0, this.r * Math.sqrt(3) / 4)
            this.mesh.lookAt(this.container.position)
            this.container.add(this.mesh);
        }
        ///3
        if (doors1 == 3 || doors2 == 3) {
            var door = new Doors(3)
            door.position.set(0, 0, this.r * Math.sqrt(3) / 2)
            door.lookAt(this.container.position)
            this.container.add(door)
        } else {
            this.mesh = new THREE.Mesh(this.geometry, this.material)
            this.mesh.position.set(0, 0, this.r * Math.sqrt(3) / 2)
            this.mesh.lookAt(this.container.position)
            this.container.add(this.mesh);
        }
        ///4
        if (doors1 == 4 || doors2 == 4) {
            var door = new Doors(4)
            door.position.set(-this.r * Math.sqrt(3) / 2 * Math.sqrt(3) / 2, 0, this.r * Math.sqrt(3) / 4)
            door.lookAt(this.container.position)
            this.container.add(door)
        } else {
            this.mesh = new THREE.Mesh(this.geometry, this.material)
            this.mesh.position.set(-this.r * Math.sqrt(3) / 2 * Math.sqrt(3) / 2, 0, this.r * Math.sqrt(3) / 4)
            this.mesh.lookAt(this.container.position)
            this.container.add(this.mesh);
        }
        ///5
        if (doors1 == 5 || doors2 == 5) {
            var door = new Doors(5)
            door.position.set(-this.r * Math.sqrt(3) / 2 * Math.sqrt(3) / 2, 0, -this.r * Math.sqrt(3) / 4)
            door.lookAt(this.container.position)
            this.container.add(door)
        } else {
            this.mesh = new THREE.Mesh(this.geometry, this.material)
            this.mesh.position.set(-this.r * Math.sqrt(3) / 2 * Math.sqrt(3) / 2, 0, -this.r * Math.sqrt(3) / 4)
            this.mesh.lookAt(this.container.position)
            this.container.add(this.mesh);
        }
        var geometry = new THREE.CylinderGeometry(this.r, this.r, 10, 6);
        var material = new THREE.MeshPhongMaterial({
            color: 0x00ffff,
            specular: 0xffffff,
            shininess: 50,
            side: THREE.DoubleSide,
        })
        var cylinder = new THREE.Mesh(geometry, material);
        cylinder.rotation.y = Math.PI / 6
        this.container.add(cylinder);

        return this.container;
    }
}