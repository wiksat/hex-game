var express = require("express")
var app = express()
const PORT = 3000;
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
var path = require("path")
app.use(express.static('static'))

var tab = []

// obsługa posta

app.post("/handlePost", function (req, res) {
    tab = JSON.parse(req.body.send)
    console.log(JSON.parse(req.body.send))
    res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' });
    res.end("ZAPISANO");
})
app.post("/give", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log(JSON.stringify(tab))
    res.end(JSON.stringify(tab));
})
app.get('/hex', function (req, res) {
    res.sendFile(path.join(__dirname + "/static/hex.html"))
});
app.get('/game', function (req, res) {
    res.sendFile(path.join(__dirname + "/static/game.html"))
});
app.get('/movement', function (req, res) {
    res.sendFile(path.join(__dirname + "/static/movement.html"))
});

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
