$(document).ready(function () {
    console.log("ready")
    lvl = []
    var kolej = 0
    $(".wybor").on("click", function () {
        $(".wybrany").attr("class", "wybor")
        $(this).attr("class", "wybrany")
        console.log("kilk")
    })
    $("#walls").attr("class", "wybrany")
    $("#amount").on("change", function () {
        $("#game").empty()
        $("#status").empty()
        lvl = []
        kolej = 0
        var amount = $("#amount").val()
        console.log(amount)
        var s = 0
        var tab = {
            "size": amount,
            "level": {}
        }

        console.log(tab)
        for (let i = 0; i < amount; i++) {
            for (let y = 0; y < amount; y++) {
                console.log(i, y)
                var div = $("<div>")
                $("#game").append(div)
                div.attr('class', 'hex')
                div.data("il", "-")
                div.attr('id', s + "-" + i + "-" + y)
                if (y == 0) {
                    div.css('top', 94 * i + "px")
                    div.css('left', 100 * y + "px")
                }
                else if (y % 2 == 0) {
                    div.css('top', 94 * i + "px")
                    div.css('left', 100 * y - 20 * y + "px")
                } else {
                    div.css('top', 94 * i + 50 + "px")
                    div.css('left', 100 * y - 20 * y + "px")
                }
                div.on("click", function () {
                    var d = 0
                    var div = $("<div>")
                    $(this).append(div)
                    div.text(d)
                    $(this).data("il", d)
                    div.attr('class', 'arrow')

                    $(this).data("kolej", kolej)
                    ///pierwsze

                    var d = $(this).attr('id').split("-")
                    var il = $(this).data().il

                    var obj = {
                        id: d[0],
                        x: d[2],
                        y: d[1],
                        dirOut: il,
                        dirIn: il == 2 ? 5 : il == 1 ? 4 : Math.abs(il - 3),
                        type: $(".wybrany").text().toLowerCase()
                    }
                    lvl.push(obj)
                    var tab = {
                        "size": amount,
                        "level": lvl
                    }
                    $("#status").empty()
                    $("#status").append("<pre><code>" + JSON.stringify(tab, null, 2) + "</code></pre>")
                    kolej++
                    $(this).off("click")
                    $(this).on("click", function () {

                        var f = $(this).data().il + 1
                        console.log(f)
                        if (f == 6) {
                            f = 0
                        }
                        $(this).children().empty()
                        $(this).children().text(f)
                        $(this).children().css('transform', 'rotate(+' + 60 * f + 'deg)')
                        $(this).data("il", f)
                        // console.log($(this))
                        // console.log($(this).data())
                        ///kolejne
                        console.log($(".wybrany").text().toLowerCase())
                        var d = $(this).attr('id').split("-")
                        var il = $(this).data().il
                        var obj = {
                            id: d[0],
                            x: d[2],
                            y: d[1],
                            dirOut: il,
                            dirIn: il == 2 ? 5 : il == 1 ? 4 : Math.abs(il - 3),
                            type: $(".wybrany").text().toLowerCase()
                        }
                        lvl[$(this).data().kolej] = obj
                        var tab = {
                            "size": amount,
                            "level": lvl
                        }
                        $("#status").empty()
                        $("#status").append("<pre><code>" + JSON.stringify(tab, null, 2) + "</code></pre>")
                    })
                })
                s++
            }
        }
    })
    $("#zapisz").on("click", function () {
        var tab = {
            "size": $("#amount").val(),
            "level": lvl
        }
        var send = JSON.stringify(tab)
        alert("Zapisano na serwerze")
        $.ajax({
            url: "/handlePost", // url post-a na serwerze
            data: { send },
            // przykładowe dane
            type: "POST",
            success: function (data) {
                console.log(data);
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    })


})