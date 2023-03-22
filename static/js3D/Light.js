console.log("Light.js")
class Light {

    constructor() {
        console.log("konstruktor klasy Light")
        this.container = new THREE.Object3D();
        this.light = new THREE.PointLight(0xffffff, 0.4);
        this.light.position.set(0, 100, 0);

        this.container.add(this.light);

        this.geometry = new THREE.SphereGeometry(25, 12, 12);
        this.material = new THREE.MeshBasicMaterial({
            color: 0xfff000,
            side: THREE.DoubleSide,
            wireframe: true,
            transparent: true,
            opacity: 0.5
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.container.add(this.mesh);
        console.log("SWIATLOOOOOOOO")
        return this.container;
    }

    intensity(power) {
        this.light.intensity = power
    }


}
