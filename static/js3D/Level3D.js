console.log("Level3D.js")
class Level3D {

    constructor(scene) {
        console.log("konstruktor klasy Level3D")
        this.getData();
        this.scene = scene
        this.r = Settings.r
        this.lights = []
    }

    getData() {
        // pobranie danych levelu ajaxem z serwera
        // i uruchomienie generowania levelu (makeLevel)
        $.ajax({
            url: "/give",
            data: {},
            type: "POST",
            success: (data) => {
                console.log(data);
                this.makeLevel(data)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },

        });

    }

    makeLevel(data) {
        // console.log(data)
        var hexy = data.level
        console.log(hexy)
        for (let i = 0; i < hexy.length; i++) {
            if (i == 0) {
                var hex = new Hex(hexy[i].dirOut)
            } else {
                var hex = new Hex(hexy[i - 1].dirIn, hexy[i].dirOut)
            }

            if (hexy[i].x % 2 == 0) {
                hex.position.set(hexy[i].x * this.r * Math.sqrt(3) - this.r * hexy[i].x / 4, 0, hexy[i].y * this.r * Math.sqrt(3))
            } else {
                hex.position.set(hexy[i].x * this.r * Math.sqrt(3) - this.r * hexy[i].x / 4, 0, hexy[i].y * this.r * Math.sqrt(3) + this.r * Math.sqrt(3) / 2)
            }
            this.scene.add(hex)
            if (hexy[i].type == "light") {
                var sw = new Light()
                this.lights.push(sw)
                this.scene.add(sw)
                if (hexy[i].x % 2 == 0) {
                    sw.position.set(hexy[i].x * this.r * Math.sqrt(3) - this.r * hexy[i].x / 4, 60, hexy[i].y * this.r * Math.sqrt(3))
                } else {
                    sw.position.set(hexy[i].x * this.r * Math.sqrt(3) - this.r * hexy[i].x / 4, 60, hexy[i].y * this.r * Math.sqrt(3) + this.r * Math.sqrt(3) / 2)
                }
                sw.target = hex
                console.log(sw)
            } else if (hexy[i].type == "treasure") {
                var it = new Item()
                this.scene.add(it)
                if (hexy[i].x % 2 == 0) {
                    it.position.set(hexy[i].x * this.r * Math.sqrt(3) - this.r * hexy[i].x / 4, 60, hexy[i].y * this.r * Math.sqrt(3))
                } else {
                    it.position.set(hexy[i].x * this.r * Math.sqrt(3) - this.r * hexy[i].x / 4, 60, hexy[i].y * this.r * Math.sqrt(3) + this.r * Math.sqrt(3) / 2)
                }
            }
        }
        // console.log(this.scene)
        var ui = new Ui(this.scene, this.lights)

    }
}