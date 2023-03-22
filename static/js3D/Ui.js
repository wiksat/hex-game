console.log("Ui.js")

class Ui {
    constructor(scene, lights) {
        console.log("konstruktor klasy Ui")
        this.scene = scene
        this.lights = lights
        $("#y").on("input", () => {
            var y = $("#y").val() * 2
            for (let i = 0; i < this.lights.length; i++) {
                this.lights[i].position.y = y
            }
        })
        $("#intensity").on("input", () => {
            var pw = $("#intensity").val() / 80
            // console.log(pw)
            // console.log(this.lights[1].children[0])
            for (let i = 0; i < this.lights.length; i++) {
                this.lights[i].children[0].intensity = pw
            }
        })
    }
}