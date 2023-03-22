class Item {

    constructor() {

        this.container = new THREE.Object3D();

        this.geometry = new THREE.BoxGeometry(40, 40, 40);
        this.material = new THREE.MeshBasicMaterial({
            color: 0xfffff0,
            side: THREE.DoubleSide,
            wireframe: true,
            transparent: true,
            opacity: 0.5
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(0, 5, 0);
        this.container.add(this.mesh);
        return this.container
    }
}
